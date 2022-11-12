import type { LayoutLoad } from "./$types";

export const prerender = true;

export const load = (({ url }) => {
  return {url};
}) satisfies LayoutLoad