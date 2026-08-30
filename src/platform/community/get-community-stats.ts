import 'server-only';

export type CommunityStats = {
  discordMembers: number | null;
  githubStars: number | null;
};

export async function getCommunityStats(): Promise<CommunityStats> {
  return {
    discordMembers: null,
    githubStars: null,
  };
}
