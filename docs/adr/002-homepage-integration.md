# ADR 002 — Intégration de la homepage "nouvelle-base-israel" (CRY-237)

**Date :** 2026-07-07
**Statut :** Déployé
**Auteur :** devgur

## Contexte

Israël a reconstruit lui-même la homepage (HTML/CSS/JS statique, pixel-perfect contre son propre Figma) et l'a mise en ligne sur `new.cryptovelt.cloud` (nginx séparé). Les fichiers ont été miroir-és sur la branche `nouvelle-base-israel` du repo `israelchain/cryptovelt` (CRY-231/236). Cette branche ne contient que la homepage : `index.html`, `css/style.css`, `js/main.js`, `assets/**` (dont les vraies polices Discovery_Fs/Talent_FS) — pas les 5 pages de contenu éducatif (`/bitcoin`, `/blockchain`, `/buy-crypto`, `/investment`, `/wallet`), qui n'existent que côté Next.js (`app/*/page.tsx`).

## Décision

**Garder Next.js comme framework du site, remplacer uniquement la route `/` par le build statique d'Israël, servi tel quel (fichiers intacts) plutôt que ré-écrit en JSX/Tailwind.**

Concrètement :
- `app/page.tsx` (ancienne homepage Next, approximation CSS/emoji) supprimé.
- `index.html`, `css/style.css`, `js/main.js`, `assets/**` copiés tels quels dans `public/` → servis par l'export statique Next (`output: 'export'`) à la racine, sans passer par le rendu React/Tailwind.
- `vercel.json` : rewrite explicite `/` → `/index.html`.
- Polices réelles (Discovery Fs / Talent FS) déclarées aussi en `@font-face` dans `app/globals.css` + `tailwind.config.js`, pour que les 5 pages de contenu (qui restent en Next/Tailwind, avec Navbar/Footer partagés) bénéficient aussi des vraies polices au lieu de l'approximation Rubik (CRY-235).
- `app/robots.ts` / `app/sitemap.ts` (CRY-65, déjà en place côté Next) inchangés — ils continuent de fonctionner normalement, aucune régression.

## Alternatives rejetées

| Option | Rejetée parce que |
|---|---|
| Remplacement 100% statique (tout le site, pas seulement `/`) | Aurait supprimé les 5 pages éducatives déjà construites et `robots.ts`/`sitemap.ts` — régression du MVP prioritaire n°1. |
| Ré-écrire `index.html` en JSX/Tailwind dans `app/page.tsx` | Risque de collision CSS avec le reset Tailwind (`@tailwind base`) déjà chargé globalement par `app/layout.tsx`, et risque de perte de fidélité pixel en réapprochant le HTML/CSS validé par Israël au lieu de le servir tel quel (cf. incident CRY-218 "très loin de ressembler"). |

## Conséquence ouverte

La nav de la homepage statique (`index.html`) pointe uniquement vers des ancres internes (`#hero`, `#wallet`, etc.), pas vers les vraies pages `/bitcoin`, `/wallet`, etc. Câbler ces liens est un point de suivi séparé (hors scope CRY-237), pas traité ici pour rester dans le périmètre du ticket.
