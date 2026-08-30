import { styled } from '@linaria/react';
import { msg } from '@lingui/core/macro';
import { IconClock } from '@tabler/icons-react';

import { getServerI18n } from '@/platform/i18n/get-server-i18n';
import {
  color,
  FONT_WEIGHT,
  fontFamily,
  fontSize,
  GRADIENT,
  radius,
  semanticColor,
  spacing,
} from '@/tokens';
import { Button, Eyebrow, Heading, SectionShell } from '@/ui';

const GradientBackdrop = styled.div`
  background: ${GRADIENT.heroGlow};
  inset: 0 -20%;
  position: absolute;
`;

const ContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  max-width: 600px;
  min-height: 48vh;
  justify-content: center;
  text-align: center;
  width: 100%;

  & > * + * {
    margin-top: ${spacing(5)};
  }
`;

const StatusBadge = styled.div`
  align-items: center;
  background: ${color('blue-10')};
  border: 1px solid ${color('blue-20')};
  border-radius: ${radius(1)};
  color: ${color('blue')};
  display: inline-flex;
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize(2)};
  font-weight: ${FONT_WEIGHT.medium};
  gap: ${spacing(2)};
  padding: 6px 14px;
`;

const Subtitle = styled.p`
  color: ${semanticColor.inkMuted};
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize(4)};
  line-height: 1.6;
  max-width: 460px;
`;

const ButtonWrapper = styled.div`
  margin-top: ${spacing(4)};
`;

export function BlogPlaceholder() {
  const i18n = getServerI18n();

  return (
    <SectionShell
      background={<GradientBackdrop />}
      rhythm="hero"
      scheme="light"
    >
      <ContentWrapper>
        <Eyebrow>{i18n._(msg`Blog RedView`)}</Eyebrow>

        <StatusBadge>
          <IconClock size={16} />
          {i18n._(msg`En cours de rédaction`)}
        </StatusBadge>

        <Heading as="h1" size="lg" weight="light">
          {i18n._(msg`En cours...`)}
        </Heading>

        <Subtitle>
          {i18n._(
            msg`Les articles, analyses de terrain et guides méthodologiques arrivent très prochainement.`,
          )}
        </Subtitle>

        <ButtonWrapper>
          <Button
            href="/"
            label={i18n._(msg`Retour à l'accueil`)}
            variant="filled"
          />
        </ButtonWrapper>
      </ContentWrapper>
    </SectionShell>
  );
}
