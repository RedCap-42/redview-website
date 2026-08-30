import { msg } from '@lingui/core/macro';
import { styled } from '@linaria/react';

import { getServerI18n } from '@/platform/i18n/get-server-i18n';
import { mediaUp, spacing } from '@/tokens';
import { Body, Eyebrow, Heading, SectionShell } from '@/ui';

const HeaderStack = styled.div`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: ${spacing(4)};
  }

  ${mediaUp('md')} {
    & > * + * {
      margin-top: ${spacing(6)};
    }
  }
`;

const HeaderBody = styled.div`
  max-width: 640px;
`;

export function AppsMarketplaceHeader() {
  const i18n = getServerI18n();

  return (
    <SectionShell rhythm="hero" scheme="light">
      <HeaderStack>
        <Eyebrow>{i18n._(msg`Modules & Calques`)}</Eyebrow>
        <Heading as="h1" size="lg" weight="light">
          {i18n._(msg`Couches de données pour *RedView*`)}
        </Heading>
        <HeaderBody>
          <Body muted size="md">
            {i18n._(
              msg`Enrichissez vos analyses d'itinéraires avec les couches topographiques RedView : dalles laser LiDAR IGN 20 cm, colorimétrie des pentes, extraction de POI en corridor et comparateur multi-traces.`,
            )}
          </Body>
        </HeaderBody>
      </HeaderStack>
    </SectionShell>
  );
}
