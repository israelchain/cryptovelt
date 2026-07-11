// Centralized site constants — external URLs and contact info.
//
// CRY-248 portability fix: TLD driven by NEXT_PUBLIC_CRYPTOVELT_TLD env var
// instead of hardcoded ".cloud". Set to "cloud" in Vercel env while the VPS
// still serves .cloud; remove the env var (defaulting to "co.il") at final
// DNS switch. See infra/ARCHITECTURE.md "Portabilité .cloud → .co.il".
//
// CRY-218 tech-debt note: previously these were hardcoded independently in
// app/page.tsx, components/Navbar.tsx and components/Footer.tsx (a CTO review
// flagged this as drift-risk). Import from here instead of re-declaring.
const TLD = (process.env.NEXT_PUBLIC_CRYPTOVELT_TLD || 'co.il').replace(/^\./, '')
export const FORUM_URL = `https://forum.cryptovelt.${TLD}`
export const LEARN_URL = `https://learn.cryptovelt.${TLD}`
export const CONTACT_EMAIL = `info@cryptovelt.${TLD}`
