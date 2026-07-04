// Canonical origin used for robots.txt/sitemap.xml absolute URLs.
// Update NEXT_PUBLIC_SITE_URL once the custom domain (cryptovelt.co.il, see ADR 001) is live.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://israelchain.github.io/cryptovelt'
