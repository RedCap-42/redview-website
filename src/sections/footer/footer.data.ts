import { type MessageDescriptor } from '@lingui/core';
import { msg } from '@lingui/core/macro';

import { type IconComponent } from '@/icons';
import { SITE_URLS } from '@/platform/site-urls';

export type FooterNavLink = {
  label: MessageDescriptor;
  href: string;
  external?: boolean;
};

export type FooterCta =
  | {
    kind: 'contact-modal';
    label: MessageDescriptor;
    variant: 'filled' | 'outlined';
  }
  | {
    kind: 'link';
    label: MessageDescriptor;
    href: string;
    variant: 'filled' | 'outlined';
  };

export type FooterNavGroup = {
  id: string;
  title: MessageDescriptor;
  links: readonly FooterNavLink[];
  ctas?: readonly FooterCta[];
  email?: string;
};

export type FooterSocialLink = {
  ariaLabel: MessageDescriptor;
  href: string;
  icon: IconComponent;
};

export const FOOTER: {
  navGroups: readonly FooterNavGroup[];
  socialLinks: readonly FooterSocialLink[];
} = {
  navGroups: [
    {
      id: 'footer-platform',
      title: msg`Plateforme`,
      links: [
        { label: msg`Accueil`, href: '/' },
        { label: msg`Fonctionnalités`, href: '/customers' },
        { label: msg`Pourquoi RedView`, href: '/why-redview' },
        { label: msg`Blog`, href: '/blog' },
        { label: msg`Tarifs`, href: '/pricing' },
      ],
    },
    {
      id: 'footer-legal',
      title: msg`Légal`,
      links: [
        { label: msg`Politique de confidentialité`, href: '/privacy-policy' },
        { label: msg`Conditions générales`, href: '/terms' },
      ],
    },
    {
      id: 'footer-connect',
      title: msg`Contact`,
      links: [],
      email: 'redview.app@proton.me',
      ctas: [
        {
          kind: 'contact-modal',
          label: msg`Remonter un bug`,
          variant: 'filled',
        },
        {
          kind: 'link',
          label: msg`Commencer`,
          href: SITE_URLS.appWelcome,
          variant: 'outlined',
        },
      ],
    },
  ],
  socialLinks: [],
};
