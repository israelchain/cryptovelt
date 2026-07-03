// Static reference data for the AI Pro cockpit (CRY-41, Phase 1 of CRY-37).
// Source of truth: plan document on CRY-37 (revision 2), section 1 (verified against
// support.google.com/googleone and the product pages linked below on 2026-07-03).

export interface CockpitTool {
  id: string
  name: string
  href: string
  quota: string
  usage: string
  note?: string
}

export const tools: CockpitTool[] = [
  {
    id: 'gemini-app',
    name: 'Gemini app (Gemini 3 Pro)',
    href: 'https://gemini.google.com/',
    quota: 'Modèle Pro, Deep Research, fenêtre de contexte ~1M tokens.',
    usage: 'Veille crypto approfondie, analyse de whitepapers, recherche sourcée.',
  },
  {
    id: 'notebooklm',
    name: 'NotebookLM (Pro)',
    href: 'https://notebooklm.google.com/',
    quota: '300 sources/notebook, quotas élevés : Audio Overviews, Video Overviews, quiz, flashcards, rapports.',
    usage: 'Transformer nos articles en podcasts audio et supports pédagogiques ; base de connaissance crypto interrogeable.',
  },
  {
    id: 'flow-veo',
    name: 'Flow + Veo 3.1',
    href: 'https://labs.google/flow/about',
    quota: 'Crédits vidéo mensuels (générations Pro), studio créatif texte→vidéo et image→vidéo.',
    usage: 'Shorts vidéo pédagogiques pour le site et Telegram.',
  },
  {
    id: 'flow-music',
    name: 'Flow Music',
    href: 'https://labs.google/flow/about',
    quota: '10 000 crédits/mois (~2 000 morceaux), droits d’usage commercial inclus.',
    usage: 'Jingles podcast, fonds sonores vidéo — publiables légalement.',
    note: 'Accessible depuis l’onglet Music de Flow (même abonnement, pas de lien séparé).',
  },
  {
    id: 'nano-banana-pro',
    name: 'Nano Banana Pro (images)',
    href: 'https://aistudio.google.com/models/gemini-3-pro-image',
    quota: 'Génération d’images Gemini 3 Pro Image, limites élevées via AI Studio et l’app Gemini.',
    usage: 'Visuels d’articles, infographies pédagogiques.',
  },
  {
    id: 'jules',
    name: 'Jules',
    href: 'https://jules.google/',
    quota: 'Agent de codage asynchrone : limites de tâches et de concurrence élevées.',
    usage: 'Avancer le backlog site/forum en parallèle.',
  },
  {
    id: 'antigravity',
    name: 'Google Antigravity',
    href: 'https://antigravity.google/',
    quota: 'IDE agentique : quotas Gemini 3 Pro + Claude 4.5 Sonnet.',
    usage: 'Dev du site/forum.',
    note: 'Depuis le 18/06/2026, Gemini Code Assist (usage individuel) a été fusionné ici — voir ligne ci-dessous.',
  },
  {
    id: 'code-assist',
    name: 'Gemini Code Assist',
    href: 'https://antigravity.google/',
    quota: 'Historique : quotas élevés (Developer Program Premium). Depuis le 18/06/2026, l’extension IDE et le CLI Gemini Code Assist ne servent plus les comptes individuels / AI Pro / AI Ultra.',
    usage: 'Migré vers Antigravity (CLI + IDE) — utiliser cette entrée à la place pour le dev quotidien.',
    note: '⚠️ Outil retiré côté Google pour les comptes AI Pro individuels — conservé ici pour mémoire, voir Antigravity.',
  },
  {
    id: 'ai-studio',
    name: 'Google AI Studio',
    href: 'https://aistudio.google.com/',
    quota: 'Limites élevées (Gemini 3.1 Pro, Nano Banana Pro).',
    usage: 'Prototyper les prompts et mini-apps avant industrialisation.',
  },
  {
    id: 'dev-program-premium',
    name: 'Developer Program Premium',
    href: 'https://developers.google.com/program',
    quota: '10 $/mois de crédits Google Cloud + 30 workspaces Firebase Studio.',
    usage: 'Financer une petite conso API Gemini maîtrisée (l’API Gemini n’est PAS incluse dans l’abonnement AI Pro) + héberger des prototypes.',
  },
]

export interface RoutineStep {
  day: string
  title: string
  detail: string
}

export const weeklyRoutine: RoutineStep[] = [
  {
    day: 'Lundi',
    title: 'Veille — Deep Research',
    detail: 'Gemini app : lancer une Deep Research sur l’actu crypto de la semaine, sourcer 5-10 sujets exploitables.',
  },
  {
    day: 'Mardi',
    title: 'Article',
    detail: 'Rédaction de l’article (hébreu, éditeur humain — shifra) à partir de la synthèse Deep Research du lundi.',
  },
  {
    day: 'Mercredi',
    title: 'Podcast NotebookLM',
    detail: 'Charger l’article dans NotebookLM, générer l’Audio Overview (podcast) + éventuellement quiz/flashcards.',
  },
  {
    day: 'Jeudi',
    title: 'Short Veo',
    detail: 'Flow + Veo 3.1 : produire un short vidéo pédagogique à partir de l’article, habillage sonore via Flow Music.',
  },
  {
    day: 'Vendredi',
    title: 'Publication',
    detail: 'Publication article + podcast + short sur le site/forum et Telegram. Mise à jour du journal d’utilisation du mois.',
  },
]
