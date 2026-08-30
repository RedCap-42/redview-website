import { styled } from '@linaria/react';

import { getServerI18n } from '@/platform/i18n/get-server-i18n';
import { mediaUp, spacing } from '@/tokens';
import { Body, Eyebrow, Heading, SectionShell } from '@/ui';

import { WHY_REDVIEW_EDITORIALS, type WhyRedViewEditorial } from './editorials.data';

const EditorialsStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(16)};
  width: 100%;

  ${mediaUp('md')} {
    gap: ${spacing(24)};
  }
`;

const Row = styled.div<{ $align: 'left' | 'right' }>`
  display: grid;
  gap: ${spacing(8)};
  grid-template-columns: 1fr;
  width: 100%;

  ${mediaUp('md')} {
    align-items: start;
    grid-template-columns: ${(props) =>
      props.$align === 'left' ? '1fr 1fr' : '1fr 1fr'};
  }
`;

const HeadingSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;

const ParagraphsSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(5)};
`;

function EditorialRowItem({ editorial }: { editorial: WhyRedViewEditorial }) {
  const i18n = getServerI18n();

  return (
    <Row $align={editorial.align}>
      <HeadingSide>
        <Eyebrow>{i18n._(editorial.eyebrow)}</Eyebrow>
        <Heading as="h2" size="sm" weight="light">
          {i18n._(editorial.heading)}
        </Heading>
      </HeadingSide>
      <ParagraphsSide>
        {editorial.paragraphs.map((p, idx) => (
          <Body key={idx} muted size="sm">
            {i18n._(p)}
          </Body>
        ))}
      </ParagraphsSide>
    </Row>
  );
}

export function WhyRedViewEditorials() {
  return (
    <SectionShell rhythm="spacious" scheme="dark">
      <EditorialsStack>
        {WHY_REDVIEW_EDITORIALS.map((editorial) => (
          <EditorialRowItem editorial={editorial} key={editorial.id} />
        ))}
      </EditorialsStack>
    </SectionShell>
  );
}
