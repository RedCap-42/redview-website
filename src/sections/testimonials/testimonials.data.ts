import { type MessageDescriptor } from '@lingui/core';

export type TestimonialRecord = {
  author: { name: MessageDescriptor; designation: MessageDescriptor };
  quote: MessageDescriptor;
};

// Intentionally empty. Only publish testimonials with the written consent of
// the named person — no placeholder or invented quotes. Add real entries here
// as users agree to be quoted.
export const TESTIMONIALS: readonly TestimonialRecord[] = [];
