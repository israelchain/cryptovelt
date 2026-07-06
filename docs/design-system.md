# Design System — état actuel (référence pré-Figma)

**Statut :** scaffold existant, prêt à recevoir les maquettes Figma (CRY-218).
**But de ce doc :** donner une carte 1:1 de ce qui existe déjà (tokens, composants, grille) pour que le calage sur Figma, une fois reçu, consiste à **ajuster des valeurs** plutôt qu'à reconstruire une architecture.

---

## 1. Stack

- **Framework :** Next.js 14 (App Router), export statique (`output: 'export'`) → `out/`
- **Style :** Tailwind CSS 3, tokens dupliqués en CSS custom properties (`app/globals.css`) pour les valeurs utilisées hors classes utilitaires (gradients, glass, animations 3D)
- **Langue/direction :** `<html lang="he" dir="rtl">` fixé dans `app/layout.tsx` — RTL est la direction par défaut de tout le site, pas un mode optionnel
- **Police :** Heebo (texte courant), Frank Ruhl Libre (titres display), Assistant (fallback) — chargées via Google Fonts dans `globals.css`

## 2. Typographie

| Rôle | Famille Tailwind | Police |
|---|---|---|
| Titres (`font-display`) | `font-display` | Frank Ruhl Libre → Heebo → serif |
| Corps / UI (`font-hebrew` / `font-sans`) | `font-sans` (défaut) | Heebo → Assistant → sans-serif |

À valider avec Figma : si la maquette utilise une police différente pour les titres hébreux, remplacer uniquement `--font-display` / `tailwind.config.js:fontFamily.display` — aucun composant n'a la police en dur.

## 3. Couleurs (`tailwind.config.js` + `globals.css :root`)

| Rôle | Nom Tailwind | Hex |
|---|---|---|
| Encre / texte | `ink-950…400` | `#060b16` → `#94a3b8` |
| Marque secondaire (ciel) | `brand-50…900` | `#f0f9ff` → `#0c4a6e` |
| Marque principale (bitcoin orange) | `btc-50…900` | `#fff8ef` → `#78410c` (accent `#f7931a`) |
| Succès / croissance | `mint-50,400,500,600` | `#e6faf4` → `#059f75` |
| Violet (accent tertiaire, utilisé en dégradés) | — (valeur brute) | `#8b5cf6` |

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
