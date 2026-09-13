import { NextResponse } from 'next/server';

import { getEnterprisePriceId, getStripeClient } from '@/platform/enterprise';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  if (!process.env.STRIPE_SECRET_KEY) {
    console.error(
      '[enterprise-checkout] 503 — STRIPE_SECRET_KEY is not configured',
    );
    return NextResponse.json(
      { error: 'Enterprise checkout is not configured.' },
      { status: 503 },
    );
  }

  try {
    const stripe = getStripeClient();
    const body = (await request.json()) as {
      billingInterval?: unknown;
      seatCount?: unknown;
      successUrl?: unknown;
    };

    const billingInterval =
      body.billingInterval === 'yearly' ? 'yearly' : 'monthly';
    const priceId = getEnterprisePriceId(billingInterval);
    const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL || 'https://redview.tech';
    let successUrl = `${websiteUrl}/enterprise/activate?session_id={CHECKOUT_SESSION_ID}`;

    if (typeof body.successUrl === 'string' && body.successUrl.trim()) {
      const candidate = body.successUrl.trim();
      // Allow only local relative paths (no protocol-relative // or backslashes) or matching website domain
      if (candidate.startsWith('/') && !candidate.startsWith('//') && !candidate.includes('\\')) {
        successUrl = `${websiteUrl}${candidate}`;
      } else if (candidate.startsWith(websiteUrl)) {
        successUrl = candidate;
      } else {
        return NextResponse.json(
          { error: 'Invalid successUrl: external redirection is prohibited.' },
          { status: 400 },
        );
      }
    }

    const seatCount =
      typeof body.seatCount === 'number' && body.seatCount >= 1
        ? body.seatCount
        : 1;

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [
        {
          price: priceId,
          quantity: seatCount,
        },
      ],
      success_url: successUrl,
      subscription_data: {
        trial_period_days: 30,
        metadata: {
          source: 'enterprise-self-hosted',
        },
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: unknown) {
    console.error(error);
    const message = error instanceof Error ? error.message : 'Unknown error';

    return NextResponse.json(
      { error: `Checkout error: ${message}` },
      { status: 500 },
    );
  }
}
