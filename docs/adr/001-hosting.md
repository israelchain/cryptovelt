# ADR 001 — Hébergement production CryptoVelt MVP

**Date :** 2026-07-01 (mise à jour 2026-07-03)  
**Statut :** Hébergeur confirmé (Vercel) et domaine confirmé (apex `cryptovelt.co.il` + `www` en redirection) — migration bloquée sur credentials (VERCEL_TOKEN + GitHub PAT, voir CRY-40)  
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
7. [ ] **yankale/devgur** : Importer `israelchain/cryptovelt` dans Vercel (dashboard, ou API avec un `VERCEL_TOKEN` fourni via un secret Paperclip — pas en clair dans un commentaire) — **bloqué : en attente du dépôt des secrets `VERCEL_TOKEN` + GitHub PAT dans le coffre Paperclip (CRY-40)**
8. [ ] **yankale** : Connecter le(s) domaine(s) dans Vercel Settings → Domains (apex canonique + `www` redirect, sauf choix contraire d'Israël)
9. [ ] **yankale** : Configurer les DNS chez le registrar (Hostinger) — **uniquement après confirmation du domaine**
10. [ ] devgur : Basculer `main` du déploiement GitHub Pages vers Vercel une fois le projet importé, retirer le workflow `deploy.yml` GitHub Pages
11. [ ] devgur : Audit Lighthouse mobile pour valider < 3s sur l'URL Vercel
