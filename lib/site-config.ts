// Centralized site constants — external URLs and contact info.
//
// CRY-218 tech-debt note: previously these were hardcoded independently in
// app/page.tsx, components/Navbar.tsx and components/Footer.tsx (a CTO review
// flagged this as drift-risk). Import from here instead of re-declaring.
export const FORUM_URL = 'https://forum.cryptovelt.cloud'
export const LEARN_URL = 'https://learn.cryptovelt.cloud'
export const CONTACT_EMAIL = 'info@cryptovelt.cloud'
