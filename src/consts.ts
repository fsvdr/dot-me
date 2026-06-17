export const SITE = {
  title: 'FSVDR — Front end developer',
  description:
    "My name is Fernando Saavedra, I'm a front end developer based in Mexico City. I make websites and apps that express uniqueness through design, interactivity and accessibility.",
  author: '@fsvdr',
  url: 'https://fsvdr.me',
};

/**
 * Builds the URL for the dynamically generated Open Graph share thumbnail.
 */
export function shareThumbnail({ title, circle, badge }: { title: string; circle: string; badge?: string }) {
  const params = new URLSearchParams({ title, circle });
  if (badge) params.set('badge', badge);
  return `/share-thumbnail.png?${params.toString()}`;
}
