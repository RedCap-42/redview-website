import { styled } from '@linaria/react';
import NextImage from 'next/image';

import { type CaseStudyStorySection } from '@/case-studies';
import { getMessageDescriptorSource } from '@/platform/i18n/get-message-descriptor-source';
import { getServerI18n } from '@/platform/i18n/get-server-i18n';
import {
  color,
  FONT_WEIGHT,
  fontFamily,
  fontSize,
  mediaUp,
  spacing,
  typeRampDeclarations,
} from '@/tokens';
import { Body, Eyebrow, Heading } from '@/ui';

const Root = styled.div`
  scroll-margin-top: ${spacing(22)};

  & > * + * {
    margin-top: ${spacing(6)};
  }
`;

const Prose = styled.div`
  & > * + * {
    margin-top: ${spacing(2)};
  }
`;

const Callout = styled.figure`
  border-left: 2px solid ${color('blue')};
  margin-bottom: ${spacing(2)};
  margin-top: ${spacing(6)};
  padding-left: ${spacing(6)};

  & > * + * {
    margin-top: ${spacing(4)};
  }

  ${mediaUp('md')} {
    margin-bottom: ${spacing(4)};
    margin-top: ${spacing(8)};
    padding-left: ${spacing(8)};
  }
`;

const CalloutQuote = styled.blockquote`
  ${typeRampDeclarations('headingSm')}
  color: ${color('black')};
  font-family: ${fontFamily('serif')};
  font-style: italic;
  font-weight: ${FONT_WEIGHT.light};
`;

const CalloutAttribution = styled.figcaption`
  color: ${color('black-60')};
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize(3.5)};

  &::before {
    content: '— ';
  }
`;

const CalloutAttributionName = styled.span`
  color: ${color('black')};
  font-weight: ${FONT_WEIGHT.medium};
`;

const IllustrationFigure = styled.figure`
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
  margin-block: ${spacing(6)};
  overflow: hidden;
  position: relative;
  width: 100%;

  ${mediaUp('md')} {
    margin-block: ${spacing(8)};
  }
`;

const IllustrationImageWrap = styled.div`
  aspect-ratio: 16 / 9;
  background-color: #0b0f17;
  overflow: hidden;
  position: relative;
  width: 100%;

  img {
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.02);
  }
`;

const IllustrationCaption = styled.figcaption`
  background-color: ${color('white')};
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  color: ${color('black-60')};
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize(3)};
  line-height: ${spacing(4.5)};
  padding: ${spacing(2.5)} ${spacing(4)};
  text-align: center;
`;

export type CaseStudyTextBlockProps = {
  section: CaseStudyStorySection;
  sectionId: string;
};

export function CaseStudyTextBlock({
  section,
  sectionId,
}: CaseStudyTextBlockProps) {
  const i18n = getServerI18n();

  return (
    <Root id={sectionId}>
      <Eyebrow>{i18n._(section.eyebrow)}</Eyebrow>
      <Heading size="md" weight="light" wrap="normal">
        {i18n._(section.heading)}
      </Heading>
      <Prose>
        {section.paragraphs.map((paragraph) => (
          <Body key={getMessageDescriptorSource(paragraph)} size="md">
            {i18n._(paragraph)}
          </Body>
        ))}

        {section.illustration ? (
          <IllustrationFigure>
            <IllustrationImageWrap>
              <NextImage
                alt={section.illustration.alt ?? i18n._(section.heading)}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                src={section.illustration.imageSrc}
              />
            </IllustrationImageWrap>
            {section.illustration.caption ? (
              <IllustrationCaption>
                {i18n._(section.illustration.caption)}
              </IllustrationCaption>
            ) : null}
          </IllustrationFigure>
        ) : null}

        {section.callout ? (
          <Callout>
            <CalloutQuote>
              &ldquo;{i18n._(section.callout.text)}&rdquo;
            </CalloutQuote>
            <CalloutAttribution>
              <CalloutAttributionName>
                {section.callout.author}
              </CalloutAttributionName>
              {`, ${i18n._(section.callout.role)}`}
            </CalloutAttribution>
          </Callout>
        ) : null}
      </Prose>
    </Root>
  );
}
