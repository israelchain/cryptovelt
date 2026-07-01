# ADR 001 — Hébergement production CryptoVelt MVP

**Date :** 2026-07-01  
**Statut :** Proposé (en attente d'approbation et de mise en œuvre)  
**Auteur :** devgur

---

## Contexte

Le site CryptoVelt est un export statique Next.js (`next export`) générant un répertoire `out/` avec 5 pages éducatives en hébreu/RTL. Il faut le déployer rapidement sur un hôte fiable avec HTTPS automatique, domaine personnalisé, et de bonnes performances mobiles.

## Décision

**Hébergement : Vercel (Free tier → Pro si besoin)**

Vercel est l'option recommandée pour les projets Next.js static export :
- Déploiements automatiques sur chaque `git push` à `main`
- HTTPS automatique via Let's Encrypt
- CDN mondial (Edge Network) — latence faible pour Israël
- Free tier suffisant pour MVP
- Preview deployments pour chaque PR

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

## Configuration DNS (à faire par yankale)

Une fois le projet créé dans Vercel :

```
Type  : CNAME
Nom   : www
Valeur: cname.vercel-dns.com

Type  : A
Nom   : @
Valeur: 76.76.21.21  (Vercel IP pour domaine apex)
```

Ou si le registrar supporte ALIAS/ANAME pour l'apex :
```
Type  : ALIAS (ou ANAME)
Nom   : @
Valeur: cname.vercel-dns.com
```

## Conséquences

- **Avantages** : Déploiement en <5 min après connexion GitHub, HTTPS auto, CDN global, preview per-PR
- **Risques** : Si trafic dépasse Free tier (100GB/mois), upgrade vers Pro ($20/mois) requis → à valider avec yankale
- **Surveillance** : Vercel Analytics (free) + UptimeRobot (free) pour monitoring uptime

## Étapes d'implémentation

1. [x] Préparer `vercel.json` dans le repo
2. [x] Initialiser le repo git + `.gitignore`
3. [ ] **yankale** : Créer repo GitHub `cryptovelt/website` (ou `cryptovelt/cryptovelt`)
4. [ ] **yankale** : Créer compte Vercel et importer le repo GitHub
5. [ ] **yankale** : Connecter le domaine dans Vercel Settings → Domains
6. [ ] **yankale** : Configurer les DNS chez le registrar
7. [ ] devgur : Audit Lighthouse mobile pour valider < 3s
