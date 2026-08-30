import { styled } from '@linaria/react';
import {
  IconArrowUpRight,
  IconClock,
  IconTag,
} from '@tabler/icons-react';

import { getServerI18n } from '@/platform/i18n/get-server-i18n';
import {
  color,
  FONT_WEIGHT,
  fontFamily,
  fontSize,
  mediaUp,
  radius,
  semanticColor,
  spacing,
} from '@/tokens';
import { SectionShell } from '@/ui';

import { BLOG_POSTS } from './blog.data';

const Container = styled.div`
  margin-inline: auto;
  max-width: 1120px;
  width: 100%;
`;

const FeaturedCard = styled.article`
  background: ${color('white')};
  border: 1px solid ${semanticColor.line};
  border-radius: ${radius(3)};
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: ${spacing(8)};
  overflow: hidden;
  position: relative;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

  ${mediaUp('md')} {
    grid-template-columns: 1.1fr 1fr;
  }

  &:hover {
    border-color: ${color('black-20')};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
    transform: translateY(-2px);
  }
`;

const FeaturedMedia = styled.div`
  background: ${color('black-5')};
  display: flex;
  min-height: 240px;
  overflow: hidden;
  position: relative;

  img {
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
    width: 100%;
  }

  ${FeaturedCard}:hover & img {
    transform: scale(1.03);
  }
`;

const FeaturedContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${spacing(6)};

  ${mediaUp('md')} {
    padding: ${spacing(8)};
  }
`;

const MetaRow = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing(2)};
  margin-bottom: ${spacing(3)};
`;

const CategoryBadge = styled.span`
  background: ${color('blue-10')};
  border-radius: ${radius(1)};
  color: ${color('blue')};
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize(2)};
  font-weight: ${FONT_WEIGHT.medium};
  letter-spacing: 0.04em;
  padding: 4px 10px;
  text-transform: uppercase;
`;

const MetaInfo = styled.span`
  align-items: center;
  color: ${semanticColor.inkMuted};
  display: inline-flex;
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize(2)};
  gap: 4px;
`;

const PostTitle = styled.h2`
  color: ${semanticColor.ink};
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize(6)};
  font-weight: ${FONT_WEIGHT.medium};
  line-height: 1.3;
  margin-bottom: ${spacing(3)};

  ${mediaUp('md')} {
    font-size: ${fontSize(7)};
  }
`;

const PostExcerpt = styled.p`
  color: ${color('black-70')};
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize(3)};
  line-height: 1.6;
  margin-bottom: ${spacing(6)};
`;

const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing(2)};
  margin-bottom: ${spacing(4)};
`;

const TagBadge = styled.span`
  align-items: center;
  background: ${color('black-5')};
  border: 1px solid ${semanticColor.line};
  border-radius: ${radius(1)};
  color: ${color('black-70')};
  display: inline-flex;
  font-family: ${fontFamily('sans')};
  font-size: 11px;
  gap: 4px;
  padding: 2px 8px;
`;

const AuthorRow = styled.div`
  align-items: center;
  border-top: 1px solid ${semanticColor.line};
  display: flex;
  justify-content: space-between;
  padding-top: ${spacing(4)};
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.span`
  color: ${semanticColor.ink};
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize(3)};
  font-weight: ${FONT_WEIGHT.medium};
`;

const AuthorRole = styled.span`
  color: ${semanticColor.inkMuted};
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize(1)};
`;

const Grid = styled.div`
  display: grid;
  gap: ${spacing(6)};
  grid-template-columns: 1fr;

  ${mediaUp('sm')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mediaUp('lg')} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.article`
  background: ${color('white')};
  border: 1px solid ${semanticColor.line};
  border-radius: ${radius(3)};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: ${color('black-20')};
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.05);
    transform: translateY(-2px);
  }
`;

const CardMedia = styled.div`
  background: ${color('black-5')};
  height: 180px;
  overflow: hidden;
  position: relative;
  width: 100%;

  img {
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
    width: 100%;
  }

  ${Card}:hover & img {
    transform: scale(1.03);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  padding: ${spacing(5)};
`;

const CardBody = styled.div``;

const CardTitle = styled.h3`
  color: ${semanticColor.ink};
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize(5)};
  font-weight: ${FONT_WEIGHT.medium};
  line-height: 1.35;
  margin-bottom: ${spacing(2)};
`;

export function BlogFeed() {
  const i18n = getServerI18n();
  const featuredPost = BLOG_POSTS.find((post) => post.featured) ?? BLOG_POSTS[0];
  const regularPosts = BLOG_POSTS.filter((post) => post.id !== featuredPost?.id);

  return (
    <SectionShell scheme="light">
      <Container>
        {featuredPost !== undefined && (
          <FeaturedCard>
            <FeaturedMedia>
              <img
                alt={i18n._(featuredPost.title)}
                decoding="async"
                loading="lazy"
                src={featuredPost.image}
              />
            </FeaturedMedia>
            <FeaturedContent>
              <CardBody>
                <MetaRow>
                  <CategoryBadge>{i18n._(featuredPost.category)}</CategoryBadge>
                  <MetaInfo>
                    <IconClock size={14} />
                    {featuredPost.readingTime}
                  </MetaInfo>
                </MetaRow>
                <PostTitle>{i18n._(featuredPost.title)}</PostTitle>
                <PostExcerpt>{i18n._(featuredPost.excerpt)}</PostExcerpt>
                <TagsRow>
                  {featuredPost.tags.map((tag) => (
                    <TagBadge key={tag}>
                      <IconTag size={10} />
                      {tag}
                    </TagBadge>
                  ))}
                </TagsRow>
              </CardBody>
              <AuthorRow>
                <AuthorInfo>
                  <AuthorName>{featuredPost.author.name}</AuthorName>
                  <AuthorRole>{i18n._(featuredPost.author.role)}</AuthorRole>
                </AuthorInfo>
                <IconArrowUpRight color={semanticColor.inkMuted} size={20} />
              </AuthorRow>
            </FeaturedContent>
          </FeaturedCard>
        )}

        <Grid>
          {regularPosts.map((post) => (
            <Card key={post.id}>
              <CardMedia>
                <img
                  alt={i18n._(post.title)}
                  decoding="async"
                  loading="lazy"
                  src={post.image}
                />
              </CardMedia>
              <CardContent>
                <CardBody>
                  <MetaRow>
                    <CategoryBadge>{i18n._(post.category)}</CategoryBadge>
                    <MetaInfo>
                      <IconClock size={14} />
                      {post.readingTime}
                    </MetaInfo>
                  </MetaRow>
                  <CardTitle>{i18n._(post.title)}</CardTitle>
                  <PostExcerpt>{i18n._(post.excerpt)}</PostExcerpt>
                  <TagsRow>
                    {post.tags.map((tag) => (
                      <TagBadge key={tag}>
                        <IconTag size={10} />
                        {tag}
                      </TagBadge>
                    ))}
                  </TagsRow>
                </CardBody>
                <AuthorRow>
                  <AuthorInfo>
                    <AuthorName>{post.author.name}</AuthorName>
                    <AuthorRole>{i18n._(post.author.role)}</AuthorRole>
                  </AuthorInfo>
                  <IconArrowUpRight color={semanticColor.inkMuted} size={18} />
                </AuthorRow>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Container>
    </SectionShell>
  );
}
