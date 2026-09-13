import { type MessageDescriptor } from '@lingui/core';

// The partner testimonials carry an author portrait, unlike the home set.
export type PartnerTestimonialRecord = {
  author: {
    designation: MessageDescriptor;
    name: MessageDescriptor;
    portraitSrc: string;
  };
  quote: MessageDescriptor;
};

// Intentionally empty. Only publish testimonials with the written consent of
// the named person — no placeholder or invented quotes. Add real entries here
// as partners agree to be quoted.
export const PARTNER_TESTIMONIALS: readonly PartnerTestimonialRecord[] = [];
