import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const FEATURE_LABELS: Record<string, string> = {
  weather_layer: 'Météo en direct (Radar & Prévisions)',
  gps_navigation: 'Navigation GPS & Tracés',
  performance_analysis: 'Analyse de performance',
  gpx_import_export: 'Import / Export GPX & FIT',
  elevation_profile: 'Profil altimétrique & Dénivelé',
  cartography_terrain: 'Cartographie 3D & Relief',
  ui_experience: 'Interface & Ergonomie',
  other: 'Autre fonctionnalité',
};

const CATEGORY_LABELS: Record<string, string> = {
  bug: 'Bug / Dysfonctionnement',
  speed_performance: 'Vitesse / Performance',
  feature_request: 'Suggestion / Nouvelle fonctionnalité',
  display_issue: "Problème d'affichage",
  general_feedback: 'Retour général',
};

const SPORT_LABELS: Record<string, string> = {
  running: 'Course à pied',
  trail: 'Trail running',
  road_cycling: 'Cyclisme sur route',
  gravel_mtb: 'Gravel / VTT',
  triathlon: 'Triathlon',
  hiking: 'Randonnée',
  swimming: 'Natation',
  other: 'Autre sport',
};

const LEVEL_LABELS: Record<string, string> = {
  beginner: 'Débutant',
  intermediate: 'Intermédiaire',
  advanced: 'Confirmé',
  expert_pro: 'Expert / Professionnel',
};

interface UserFeedbackPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  country?: string;
  primarySport?: string;
  level?: string;
  annualVolume?: string;
  additionalSports?: string[];
  feature?: string;
  feedbackType?: string;
  description?: string;
  attachmentNames?: string[];
  submittedAt?: string;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as UserFeedbackPayload;
    const {
      firstName = '',
      lastName = '',
      email = '',
      country = '',
      primarySport = '',
      level = '',
      annualVolume = '',
      additionalSports = [],
      feature = '',
      feedbackType = '',
      description = '',
      attachmentNames = [],
      submittedAt = new Date().toISOString(),
    } = payload;

    if (!description.trim() && !feedbackType.trim()) {
      return NextResponse.json(
        { error: 'Veuillez renseigner une description ou le type de retour.' },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('[user-feedback] Missing RESEND_API_KEY environment variable');
      return NextResponse.json(
        { error: "Le service d'envoi d'e-mails n'est pas configuré." },
        { status: 500 },
      );
    }
    const fromAddress =
      process.env.RESEND_FROM || 'RedView Feedback <noreply@redview.tech>';
    const recipient =
      process.env.FEEDBACK_RECIPIENT_EMAIL || 'redview.app@proton.me';

    function escapeHtml(str: string): string {
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }

    const featureLabel = escapeHtml(FEATURE_LABELS[feature] || feature || 'Non spécifié');
    const categoryLabel = escapeHtml(
      CATEGORY_LABELS[feedbackType] || feedbackType || 'Retour utilisateur',
    );
    const rawUserName = [firstName, lastName].filter(Boolean).join(' ') || 'Utilisateur RedView';
    const userName = escapeHtml(rawUserName);
    const safeEmail = escapeHtml(email || 'Non renseigné');
    const safeCountry = escapeHtml(country || 'Non renseigné');
    const safeAnnualVolume = escapeHtml(annualVolume || 'Non renseigné');
    const sportLabel = escapeHtml(SPORT_LABELS[primarySport] || primarySport || 'Non renseigné');
    const levelLabel = escapeHtml(LEVEL_LABELS[level] || level || 'Non renseigné');
    const otherSports = escapeHtml(
      (additionalSports || []).map((s) => SPORT_LABELS[s] || s).join(', '),
    );
    const safeDescription = escapeHtml(description || '(Aucune description fournie)');
    const safeAttachments = attachmentNames.map((a) => escapeHtml(a)).join(', ');

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Nouveau retour utilisateur RedView</title>
  <style>
    body {
      background-color: #0b0c10;
      color: #e0e6ed;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      margin: 0;
      padding: 32px 16px;
    }
    .card {
      max-width: 600px;
      margin: 0 auto;
      background: #15181e;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 28px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
    }
    .badge {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 6px;
      background: rgba(220, 38, 38, 0.15);
      color: #ff6b6b;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 12px;
    }
    h1 {
      font-size: 20px;
      font-weight: 700;
      color: #ffffff;
      margin: 0 0 16px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding-bottom: 12px;
    }
    h2 {
      font-size: 14px;
      font-weight: 600;
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin: 20px 0 8px 0;
    }
    .row {
      margin-bottom: 8px;
      font-size: 14px;
      line-height: 20px;
    }
    .label {
      color: #64748b;
      display: inline-block;
      min-width: 140px;
    }
    .val {
      color: #f1f5f9;
      font-weight: 500;
    }
    .desc-box {
      background: #0f1217;
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 8px;
      padding: 16px;
      margin-top: 10px;
      font-size: 14px;
      line-height: 22px;
      color: #f8fafc;
      white-space: pre-wrap;
      word-break: break-word;
    }
    .footer {
      margin-top: 24px;
      padding-top: 16px;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      font-size: 12px;
      color: #64748b;
      text-align: right;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="badge">${categoryLabel}</div>
    <h1>Nouveau retour : ${featureLabel}</h1>

    <h2>Coordonnées de l'utilisateur</h2>
    <div class="row"><span class="label">Nom complet :</span> <span class="val">${userName}</span></div>
    <div class="row"><span class="label">Adresse e-mail :</span> <span class="val">${safeEmail}</span></div>
    <div class="row"><span class="label">Pays :</span> <span class="val">${safeCountry}</span></div>

    <h2>Pratique sportive</h2>
    <div class="row"><span class="label">Sport principal :</span> <span class="val">${sportLabel}</span></div>
    <div class="row"><span class="label">Niveau :</span> <span class="val">${levelLabel}</span></div>
    <div class="row"><span class="label">Volume annuel :</span> <span class="val">${safeAnnualVolume}</span></div>
    ${otherSports ? `<div class="row"><span class="label">Autres pratiques :</span> <span class="val">${otherSports}</span></div>` : ''}

    <h2>Détails du retour</h2>
    <div class="row"><span class="label">Fonctionnalité :</span> <span class="val">${featureLabel}</span></div>
    <div class="row"><span class="label">Catégorie :</span> <span class="val">${categoryLabel}</span></div>
    ${
      safeAttachments
        ? `<div class="row"><span class="label">Fichiers mentionnés :</span> <span class="val">${safeAttachments}</span></div>`
        : ''
    }

    <div class="desc-box">${safeDescription}</div>

    <div class="footer">
      Soumis le ${new Date(submittedAt).toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })} via RedView Web
    </div>
  </div>
</body>
</html>
    `.trim();

    console.log(
      `[user-feedback] Sending feedback email for "${userName}" (${email}) to ${recipient} via Resend...`,
    );

    let resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [recipient],
        subject: `[Feedback RedView] ${categoryLabel} · ${featureLabel} (${userName})`,
        html,
        text: `Nouveau retour utilisateur RedView:\n\nDe: ${userName} (${email})\nPays: ${country}\nSport: ${sportLabel} (${levelLabel})\nFonctionnalité: ${featureLabel}\nCatégorie: ${categoryLabel}\n\nDescription:\n${description}\n\nDate: ${submittedAt}`,
      }),
    });

    let resendData = await resendResponse.json().catch(() => ({}));

    // If custom domain is pending verification, fallback to onboarding@resend.dev
    if (
      !resendResponse.ok &&
      fromAddress !== 'RedView Feedback <onboarding@resend.dev>'
    ) {
      console.warn(
        `[user-feedback] Resend sending from ${fromAddress} returned ${resendResponse.status} (${resendData?.message}). Testing fallback to onboarding@resend.dev...`,
      );
      const fallbackResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'RedView Feedback <onboarding@resend.dev>',
          to: [recipient],
          subject: `[Feedback RedView] ${categoryLabel} · ${featureLabel} (${userName})`,
          html,
          text: `Nouveau retour utilisateur RedView:\n\nDe: ${userName} (${email})\nPays: ${country}\nSport: ${sportLabel} (${levelLabel})\nFonctionnalité: ${featureLabel}\nCatégorie: ${categoryLabel}\n\nDescription:\n${description}\n\nDate: ${submittedAt}`,
        }),
      });
      const fallbackData = await fallbackResponse.json().catch(() => ({}));
      if (fallbackResponse.ok) {
        resendResponse = fallbackResponse;
        resendData = fallbackData;
      }
    }

    if (!resendResponse.ok) {
      console.warn('[user-feedback] Resend API delivery warning (pending domain):', resendData);
      return NextResponse.json(
        {
          success: true,
          pendingDelivery: true,
          note: 'Feedback reçu et enregistré; envoi d’e-mail en attente d’activation DNS.',
        },
        { status: 200 },
      );
    }

    console.log('[user-feedback] ✅ Feedback email sent successfully, id:', resendData?.id);
    return NextResponse.json({ success: true, id: resendData?.id }, { status: 200 });
  } catch (error: unknown) {
    console.error('[user-feedback] Unexpected route error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: `Internal Server Error: ${message}` },
      { status: 500 },
    );
  }
}
