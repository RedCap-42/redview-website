import { msg } from '@lingui/core/macro';
import { styled } from '@linaria/react';
import { Fragment } from 'react';

import { getServerI18n } from '@/platform/i18n/get-server-i18n';
import {
  color,
  fontFamily,
  fontSize,
  mediaUp,
  semanticColor,
  spacing,
} from '@/tokens';

import { ExternalLink, VerticalDivider } from '@/ui';

import { FOOTER } from './footer.data';
import { LocaleSwitcher } from './LocaleSwitcher';

const BottomGrid = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: ${fontSize(3)};
  gap: ${spacing(4)};
  min-width: 0;
  width: 100%;

  ${mediaUp('md')} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const CopyrightRow = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing(4)};
  justify-content: space-between;
  min-width: 0;
  width: 100%;
`;

const Copyright = styled.div`
  color: ${semanticColor.ink};
  font-family: ${fontFamily('mono')};
  text-transform: uppercase;
`;

const SocialNav = styled.nav`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing(6)};
  justify-content: start;
  min-width: 0;

  ${mediaUp('md')} {
    flex-wrap: nowrap;
    justify-content: flex-end;
  }
`;

const SocialAnchor = styled(ExternalLink)`
  align-items: center;
  color: ${semanticColor.ink};
  display: flex;
  flex-shrink: 0;

  &:hover {
    color: ${color('blue')};
  }

  &:focus-visible {
    outline: 1px solid ${color('blue')};
    outline-offset: 1px;
  }
`;

export function FooterBottom() {
  const i18n = getServerI18n();
  const year = new Date().getFullYear();
  const hasSocials = FOOTER.socialLinks.length > 0;

  return (
    <BottomGrid>
      <CopyrightRow>
        <Copyright>{i18n._(msg`© ${year} – RedView`)}</Copyright>
        <LocaleSwitcher />
      </CopyrightRow>
      {hasSocials && (
        <SocialNav aria-label={i18n._(msg`Social media`)}>
          {FOOTER.socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <Fragment key={link.href}>
                {index > 0 && <VerticalDivider aria-hidden />}
                <SocialAnchor
                  aria-label={i18n._(link.ariaLabel)}
                  href={link.href}
                >
                  <IconComponent aria-hidden size={16} />
                </SocialAnchor>
              </Fragment>
            );
          })}
        </SocialNav>
      )}
    </BottomGrid>
  );
}
