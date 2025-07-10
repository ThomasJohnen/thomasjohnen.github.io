# Déploiement GitHub Pages - Thomas Johnen CV

## Étapes pour déployer sur GitHub Pages

### 1. Créer un repository GitHub
- Créez un nouveau repository sur GitHub
- Nommez-le par exemple `thomas-johnen-cv`
- Rendez-le public

### 2. Préparer le projet pour GitHub Pages

Le projet doit être adapté car GitHub Pages ne supporte que les sites statiques (pas de backend Express).

#### Modifications nécessaires :
1. **Supprimer le formulaire de contact** ou le remplacer par un mailto
2. **Build statique** avec Vite
3. **Configuration base URL** pour GitHub Pages

### 3. Version simplifiée pour GitHub Pages

Deux options :

#### Option A : Formulaire mailto (recommandé)
- Remplacer le formulaire par un simple lien mailto
- Garder toute la structure du site
- Deploy immédiat possible

#### Option B : Service externe (Formspree, Netlify Forms)
- Utiliser un service tiers pour le formulaire
- Plus complexe à configurer

### 4. Commands pour build

```bash
npm run build        # Build le frontend
```

### 5. Configuration GitHub Pages

Dans votre repository GitHub :
1. Settings → Pages
2. Source : Deploy from a branch
3. Branch : gh-pages ou main
4. Folder : / (root) ou /docs

### 6. GitHub Actions (automatique)

Créer `.github/workflows/deploy.yml` pour automatiser le déploiement.

## Prochaines étapes

Voulez-vous que je prépare :
1. **Version mailto** (simple, rapide)
2. **Version avec Formspree** (formulaire fonctionnel)
3. **Les deux versions** pour que vous puissiez choisir

Le choix dépend de si vous voulez garder un formulaire fonctionnel ou accepter un simple lien email.