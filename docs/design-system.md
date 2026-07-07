# Design System — état actuel

**Statut :** maquettes Figma reçues et appliquées (CRY-218, 8 captures haute résolution, homepage complète) ; tokens couleur/typo/radius/spacing recalés sur extraction live MCP Figma (CRY-235).
**But de ce doc :** donner une carte 1:1 de ce qui existe (tokens, composants, grille).

## -1. Recalage tokens sur extraction live MCP Figma (CRY-235)

Les tokens de CRY-218 étaient déduits de captures d'écran (approximation visuelle). Ce ticket remplace les valeurs approximatives par les vraies valeurs, extraites en direct via `mcp__figma__get_figma_data` (fileKey `QmrAocByUD7qxzxq9Rc7uu`, frame "דיזיין סיסטם" node `2001:56` + frame "דף בית" node `2081:107`) — source de vérité désormais.

| Rôle Figma | Hex exact | Nom Tailwind (avant → après) |
|---|---|---|
| כהה (dark, texte) | `#1C1C1C` | `ink-900` (`#0b1426` → `#1C1C1C`) |
| צהוב (jaune) | `#FFC712` | `gold-400` (`#f0b429` → `#FFC712`) |
| כחול (bleu, accent principal) | `#4A4FD9` | `brand-500` + override de l'`indigo` Tailwind natif (`#0ea5e9`/`#4f46e5` → `#4A4FD9`) |
| בהיר (fond clair) | `#F6F7FA` | nouveau token `mist` |
| לבן (blanc chaud, texte sur fonds colorés) | `#FFF6E6` | nouveau token `warm` |
| GRADIENT (cartes/boutons accent) | `radial-gradient(circle at 28% 2%, #6D4FBE 0%, #3A40B7 65%, #262A78 100%)` | `deep-500/700/900`, `.bg-deep-gradient` (linéaire 135deg → radial exact) |

Formes/espacements (confirmés sur les deux frames) :
- Boutons pilule : `padding: 16px 32px`, `gap: 24px`, `border-radius: 100px` → `.pill-btn` dans `globals.css` porte maintenant ces valeurs exactes (remplace les `py-3.5 px-7` ad-hoc dispersés dans `page.tsx`/`Navbar.tsx`).
- Cartes/blocs couleur : `border-radius: 30px` → override Tailwind `borderRadius['3xl']` (`24px` → `30px`), donc tout usage de `rounded-3xl` est maintenant exact.

**Typographie — écart résolu (CRY-237, 2026-07-07) :** les vraies polices "Discovery Fs" (titres) et "Talent FS" (corps) ont été récupérées via le mirror `nouvelle-base-israel` (fichiers woff/woff2 réels, extraits du site statique reconstruit par Israël sur new.cryptovelt.cloud) et sont maintenant chargées en `@font-face` dans `app/globals.css` (fichiers dans `public/assets/fonts/`). L'approximation Rubik/Heebo décrite ci-dessous est obsolète, conservée seulement comme historique.

## 0. Mise à jour post-Figma (CRY-218)

La homepage (`app/page.tsx`) a été reconstruite section par section contre les 8 captures reçues d'Israël. Nouveaux tokens confirmés visuellement :

| Rôle | Nom Tailwind | Hex |
|---|---|---|
| Violet profond (fonds sombres : bannière communauté, footer, grandes cartes bento) | `deep-950…500` | `#1e1650` → `#5b3fb0` |
| Or/jaune (CTA secondaire, chips en vedette) | `gold-400…600` | `#f0b429` → `#c98a0f` |
| Crème (fond hero, cartes claires) | `cream-50,100` | `#fdf6e3`, `#fbf0d3` |

Nouvelles classes utilitaires (`app/globals.css`) : `.bg-deep-gradient`, `.bg-cream-violet-gradient`, `.dot-grid` / `.dot-grid-dark` (watermark pointillé), `.glass-icon` (icône 3D glassmorphism), `.pill-btn` + variantes (`--violet`, `--gold`, `--white`, `--outline`) pour les boutons pilule avec glyphe `↖`, `.nav-pill` (header sticky), `.tag-chip` / `.tag-chip--solid` (nuage de tags).

Police : les captures Figma utilisent une géométrique sans-serif grasse proche de ce que `font-display` (Frank Ruhl Libre → Heebo) rend déjà à fort poids — conservé tel quel, pas de changement de stack.

Centralisation : `FORUM_URL`, `LEARN_URL`, `CONTACT_EMAIL` vivent désormais dans `lib/site-config.ts` (avant dupliqués dans `page.tsx`, `Navbar.tsx`, `Footer.tsx`).

Questions encore ouvertes : backend du formulaire de contact (Formspree/Resend/API custom — en attente de réponse d'Israël/yankale), contenu réel des cartes "מדריכות אחרונות"/"חדשות אחרונות" (en attente de Shifra), pas de maquette mobile fournie (adaptation responsive best-effort à partir des patterns existants).

---

---

## 1. Stack

- **Framework :** Next.js 14 (App Router), export statique (`output: 'export'`) → `out/`
- **Style :** Tailwind CSS 3, tokens dupliqués en CSS custom properties (`app/globals.css`) pour les valeurs utilisées hors classes utilitaires (gradients, glass, animations 3D)
- **Langue/direction :** `<html lang="he" dir="rtl">` fixé dans `app/layout.tsx` — RTL est la direction par défaut de tout le site, pas un mode optionnel
- **Police :** Heebo (texte courant), Frank Ruhl Libre (titres display), Assistant (fallback) — chargées via Google Fonts dans `globals.css`

## 2. Typographie

| Rôle | Famille Tailwind | Police |
|---|---|---|
| Titres (`font-display`) | `font-display` | Discovery Fs → Heebo → Assistant → sans-serif *(vrais fichiers, CRY-237 — remplace l'approximation Rubik)* |
| Corps / UI (`font-hebrew` / `font-sans`) | `font-sans` (défaut) | Talent FS → Heebo → Assistant → sans-serif *(vrais fichiers, CRY-237 — remplace l'approximation Heebo-only)* |

Résolu en CRY-237 (voir §-1) : `--font-display`/`--font-hebrew` (`app/globals.css`) et `tailwind.config.js:fontFamily` pointent maintenant sur les vrais fichiers Discovery Fs / Talent FS.

## 3. Couleurs (`tailwind.config.js` + `globals.css :root`)

Source de vérité : extraction live MCP Figma (§-1, CRY-235). Les tables ci-dessous reflètent l'état courant du code.

| Rôle | Nom Tailwind | Hex |
|---|---|---|
| Encre / texte (= כהה Figma) | `ink-950…400` | `#141414` → `#a3a3a3` (900 = `#1C1C1C` exact) |
| Accent principal (= כחול Figma) | `brand-50…900` + override `indigo-*` natif | `#eef0fc` → `#1b1e63` (500 = `#4A4FD9` exact) |
| Gradient violet/indigo (= GRADIENT Figma) | `deep-500/700/900` | `#6D4FBE` / `#3A40B7` / `#262A78` exacts |
| Jaune (= צהוב Figma) | `gold-400…600` | `#FFC712` exact → `#c79600` |
| Blanc chaud, texte sur fonds colorés (= לבן Figma) | `warm` | `#FFF6E6` exact |
| Fond clair (= בהיר Figma) | `mist` | `#F6F7FA` exact |
| Marque principale (bitcoin orange, illustration pièce uniquement) | `btc-50…900` | `#fff8ef` → `#78410c` (accent `#f7931a`) — pas de token orange côté Figma |
| Succès / croissance | `mint-50,400,500,600` | `#e6faf4` → `#059f75` |

Thème actuel : **canvas blanc, encre foncée** (inspiré bitcoin.com), remplace un thème sombre antérieur (voir historique git `night-theme` → `light theme redesign`). Si Figma revient sur un thème sombre, les deux jeux de tokens existent déjà dans l'historique git et peuvent être réintégrés rapidement plutôt que redessinés de zéro.

## 4. Élévation, glass, effets

- `.card`, `.card-hover` — élévation standard + hover
- `.glass-light` — navbar frosted (blur 14px, saturate 1.4)
- `.border-gradient-light` — bordure dégradée (double-background trick)
- `.text-gradient-orange`, `.text-gradient-sky` — texte en dégradé
- `.coin-3d` / `.coin-stage` — pièce 3D pure CSS (aucune lib 3D/WebGL)
- `.tilt-3d` — tilt hover sur cartes
- `.reveal` — scroll-reveal progressif (dégradé si JS absent, cf. `components/Reveal.tsx`)
- `prefers-reduced-motion` géré globalement

## 5. Grille / layout

- Conteneur standard : `max-w-6xl mx-auto px-4` (Navbar, Footer)
- Conteneur article : `max-w-3xl mx-auto px-4 py-14` (`components/ArticlePage.tsx`)
- Pas de grille custom (12 colonnes etc.) définie — Tailwind par défaut (`grid`, `flex` utilitaires au cas par cas)
- **Question ouverte pour Figma :** si les maquettes utilisent une grille avec des breakpoints/gouttières spécifiques, il faudra les documenter ici et les ajouter à `tailwind.config.js:theme.container` ou `screens`.

## 6. Composants réutilisables existants

| Composant | Rôle |
|---|---|
| `Navbar.tsx` | Header sticky, liens actifs (forum/apprentissage externes) + placeholders "בקרוב" |
| `Footer.tsx` | Footer avec liens, même logique actif/à-venir |
| `ArticlePage.tsx` | Template générique pour une page éducative (icon, titre, sections texte/liste/highlight/warning, liens connexes) — **c'est le composant qui absorbera le plus les futurs designs Figma de pages de contenu** |
| `CryptoPriceWidget.tsx` | Widget de prix temps réel (CoinGecko, 6 coins, refresh 60s, formatage USD/ILS en `he-IL`) |
| `Reveal.tsx` | Wrapper scroll-reveal |

Pages actuelles utilisant `ArticlePage` : `/bitcoin`, `/blockchain`, `/wallet`, `/investment`, `/buy-crypto` — 5 pages éducatives, chacune avec son propre contenu mais la même structure visuelle.

## 7. Assets manquants

`public/` est **vide** — aucun favicon, logo SVG, image OG, ou icône n'est actuellement commité. Le logo est fait en CSS (cercle `₿` en dégradé). **À demander explicitement à Israël avec les maquettes** : logo vectoriel, favicon, image de partage réseaux sociaux (OG image).

## 8. Comment appliquer les visuels Figma quand ils arrivent

1. Extraire les tokens Figma (couleurs, spacing, radius, typo) → comparer section par section avec ce doc
2. Remplacer uniquement les valeurs qui changent dans `tailwind.config.js` et `app/globals.css` — ne pas réécrire les composants si la structure (grille, hiérarchie) est proche
3. Si la structure de page change fortement (nouvelle hiérarchie de sections, nouveaux types de blocs), étendre `ArticlePage.tsx` plutôt que dupliquer un template par page
4. Lancer `npm run build` + audit Lighthouse mobile avant tout déploiement (cf. ADR 001, étape 11 encore ouverte)
