# ADR 001 — Hébergement production CryptoVelt MVP

**Date :** 2026-07-01 (mise à jour 2026-07-06)  
**Statut :** Déployé en production sur Vercel (https://cryptovelt.vercel.app). Domaine `cryptovelt.co.il` + `www` ajoutés au projet Vercel, en attente du point DNS chez le registrar (Cloudflare) — action Israël, voir CRY-224.  
**Auteur :** devgur

---

## Contexte

Le site CryptoVelt est un export statique Next.js (`next export`) générant un répertoire `out/` avec 5 pages éducatives en hébreu/RTL. Il faut le déployer rapidement sur un hôte fiable avec HTTPS automatique, domaine personnalisé, et de bonnes performances mobiles.

## Décision

**Hébergement : Vercel (Free tier → Pro si besoin) — confirmé par Israël le 2026-07-03 (CRY-31 → CRY-34)**

Le site tournait provisoirement sur GitHub Pages (`israelchain.github.io/cryptovelt`) le temps que le choix d'hébergeur soit tranché. Vercel est maintenant la cible officielle :
- Déploiements automatiques sur chaque `git push` à `main`
- HTTPS automatique via Let's Encrypt
- CDN mondial (Edge Network) — latence faible pour Israël
- Free tier suffisant pour MVP
- Preview deployments pour chaque PR

**Domaine — confirmé par Israël le 2026-07-03 (CRY-31 → CRY-39)**

Israël a tranché : **apex canonique (`cryptovelt.co.il`) + redirection `www` → apex.** C'est exactement le défaut anticipé ci-dessous et déjà préparé dans la config Vercel — aucun changement de config nécessaire.

> **Apex canonique (`cryptovelt.co.il`) + redirection `www` → apex.** C'est le standard du marché, et trivial à configurer sur Vercel (case à cocher dans Domains, pas de DNS custom à gérer côté redirection).

Ce point est définitivement tranché. **Le DNS de prod ne sera branché qu'après un dernier go explicite d'Israël**, une fois le projet importé dans Vercel (cf. CRY-34/CRY-40 — migration actuellement bloquée sur les credentials d'exécution).

## Alternatives considérées

| Option | Pour | Contre |
|--------|------|--------|
| **Vercel** | Native Next.js, HTTPS auto, CDN, free | Vendor lock-in léger |
| Netlify | Similaire à Vercel | Moins optimisé pour Next.js |
| Render | Flexible | Setup plus manuel |
| VPS (Hetzner/DigitalOcean) | Contrôle total, coût fixe | Nginx + Let's Encrypt + CI/CD à gérer |
| Cloudflare Pages | Performance excellente, free | Moins de support Next.js avancé |

## Architecture de déploiement

```
GitHub (main branch)
    └── push → Vercel CI
                ├── npm run build  (next build → out/)
                ├── Deploy to Edge Network
                └── Alias: cryptovelt.com (→ CNAME: cname.vercel-dns.com)
```

## Configuration DNS (à faire par yankale — PAS avant confirmation du domaine)

Une fois le projet créé dans Vercel, avec le défaut apex canonique + `www` en redirection :

```
Type  : A
Nom   : @  (apex, cryptovelt.co.il)
Valeur: 76.76.21.21  (Vercel IP pour domaine apex)

Type  : CNAME
Nom   : www
Valeur: cname.vercel-dns.com
```

Ou si le registrar supporte ALIAS/ANAME pour l'apex :
```
Type  : ALIAS (ou ANAME)
Nom   : @
Valeur: cname.vercel-dns.com
```

Dans Vercel → Project → Settings → Domains : ajouter les deux domaines (`cryptovelt.co.il` et `www.cryptovelt.co.il`), puis marquer `www` en « Redirect to cryptovelt.co.il » — Vercel gère la redirection 308 automatiquement, aucune règle `vercel.json` supplémentaire n'est nécessaire.

**Si Israël choisit `www` comme canonique à la place**, il suffit d'inverser : `www` devient le domaine principal et l'apex redirige vers lui. Le reste de la config (build, headers, cache) est identique dans les deux cas.

## Conséquences

- **Avantages** : Déploiement en <5 min après connexion GitHub, HTTPS auto, CDN global, preview per-PR
- **Risques** : Si trafic dépasse Free tier (100GB/mois), upgrade vers Pro ($20/mois) requis → à valider avec yankale
- **Surveillance** : Vercel Analytics (free) + UptimeRobot (free) pour monitoring uptime

## Étapes d'implémentation

1. [x] Préparer `vercel.json` dans le repo
2. [x] Initialiser le repo git + `.gitignore`
3. [x] Repo GitHub public créé et déployé — `israelchain/cryptovelt` (provisoire, sur GitHub Pages)
4. [x] Build validé sans `NEXT_PUBLIC_BASE_PATH` (mode Vercel / domaine racine) — `npm run build` OK, `out/` généré, 1.3 Mo, 9 pages statiques
5. [x] Hébergeur final confirmé par Israël : **Vercel** (2026-07-03)
6. [x] Domaine final confirmé par Israël : **apex** `cryptovelt.co.il` + `www` en redirection (2026-07-03, CRY-39)
7. [x] devgur : Projet `israelchain/cryptovelt` importé dans Vercel via API/CLI (`vercel link` + `vercel deploy --prod`), team `socher` — 2026-07-06. Repo GitHub connecté automatiquement pour auto-deploy sur chaque push à `main`.
8. [x] devgur : Domaines `cryptovelt.co.il` (apex) et `www.cryptovelt.co.il` (redirection 308 → apex) ajoutés dans Vercel Settings → Domains — 2026-07-06.
9. [ ] **Israël** : Pointer le DNS chez le registrar (nameservers actuels : Cloudflare — pas Hostinger) vers Vercel. Enregistrements requis (donnés par Vercel) :
   - `A` `@` → `216.150.1.1` et `216.150.16.1` (ou repli `76.76.21.21`)
   - `CNAME` `www` → `2c56f73e21fa9642.vercel-dns-016.com.` (ou repli `cname.vercel-dns.com.`)
   Suivi sur CRY-224 (bloque HTTPS sur le domaine final ; le site est déjà live en HTTPS sur l'URL Vercel en attendant).
10. [x] devgur : Retiré le workflow `deploy.yml` GitHub Pages — Vercel est désormais la seule cible de déploiement (auto-deploy sur push `main`) — 2026-07-06.
11. [x] devgur : Audit performance mobile sur l'URL Vercel — 2026-07-06.

## Résultats de performance (2026-07-06)

Pas de Chrome/Chromium disponible dans cet environnement d'exécution pour lancer un audit Lighthouse local, et l'API PageSpeed Insights publique est à quota épuisé (429) au moment du test — mesures de substitution par `curl` depuis `https://cryptovelt.vercel.app` :

| Page | Taille HTML | Temps de réponse |
|------|------------:|------------------:|
| `/` (accueil) | 90.9 KB | 130 ms |
| `/bitcoin/` | 40.8 KB | 125 ms |
| `/blockchain/` | 43.4 KB | 129 ms |
| `/wallet/` | 43.5 KB | 126 ms |
| `/investment/` | 45.1 KB | 140 ms |
| `/buy-crypto/` | 46.8 KB | 124 ms |

JS partagé (First Load JS, mesuré au build) : 87.3 KB gzippés pour toutes les pages. Toutes les pages sont pré-rendues statiquement (`○ Static`) et servies depuis le edge network Vercel — largement sous la barre des 3 s sur mobile même avec un débit dégradé. Recommandation : refaire un vrai audit Lighthouse (`npx lighthouse --form-factor=mobile`) une fois un environnement avec Chrome disponible, ou via le dashboard Vercel Analytics/Speed Insights une fois du trafic réel accumulé.
