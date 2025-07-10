# Déploiement GitHub Pages - Thomas Johnen CV

## 🎯 Version GitHub Pages créée

J'ai créé une version spécialement adaptée pour GitHub Pages qui remplace le formulaire de contact par une section d'information esthétique avec :

✅ **Informations de contact claires** (email, téléphone, localisation)
✅ **Liens vers réseaux professionnels** (LinkedIn, GitHub)
✅ **Boutons d'action directs** (mailto, liens externes)
✅ **Message de disponibilité professionnel**
✅ **Design cohérent** avec le reste du site

## 🚀 Instructions de déploiement

### 1. Créer le repository GitHub
```bash
# Créer un nouveau repository sur GitHub (interface web)
# Nom suggéré : thomas-johnen-cv
# Visibilité : Public (requis pour GitHub Pages gratuit)
```

### 2. Pousser le code
```bash
git init
git add .
git commit -m "Initial commit: Thomas Johnen CV website"
git branch -M main
git remote add origin https://github.com/VOTRE-USERNAME/thomas-johnen-cv.git
git push -u origin main
```

### 3. Build manuel pour test
```bash
# Pour tester en local avant déploiement
npm run build:github
```

### 4. Configurer GitHub Pages
1. Aller dans **Settings** → **Pages** de votre repository
2. Source : **Deploy from a branch**
3. Branch : **gh-pages** 
4. Folder : **/ (root)**

### 5. Déploiement automatique
Le workflow GitHub Actions (`.github/workflows/deploy.yml`) se déclenche automatiquement à chaque push sur la branche `main`.

## 🔧 Configuration personnalisée

### Modifier l'URL de base
Dans `vite.config.github.ts`, changez :
```typescript
base: "/thomas-johnen-cv/", // Remplacez par le nom de VOTRE repository
```

### Personnaliser les liens
Dans les composants contact, modifiez :
- **LinkedIn** : `https://linkedin.com/in/VOTRE-PROFIL`
- **GitHub** : `https://github.com/VOTRE-USERNAME`
- **Téléphone** : Votre vrai numéro ou supprimez la ligne

## 📱 Ce qui fonctionne sur GitHub Pages

✅ **Site bilingue complet** (FR/EN)
✅ **Navigation fluide** entre les sections
✅ **Thème sombre/clair** 
✅ **Responsive design**
✅ **Téléchargement CV** (PDF inclus)
✅ **Liens mailto** pour contact direct
✅ **SEO optimisé**

## 🎨 Section contact redesignée

Remplace l'ancien formulaire par :
- **Carte d'informations** avec coordonnées
- **Boutons d'action** vers LinkedIn/GitHub
- **Contact email direct** via mailto
- **Design professionnel** avec icônes

## 🌐 URL finale

Votre site sera accessible à :
```
https://VOTRE-USERNAME.github.io/thomas-johnen-cv/
```

## 📋 Checklist de déploiement

- [ ] Repository GitHub créé et public
- [ ] URL de base mise à jour dans `vite.config.github.ts`
- [ ] Liens LinkedIn/GitHub personnalisés
- [ ] Code poussé sur GitHub
- [ ] GitHub Pages activé
- [ ] Build automatique réussi
- [ ] Site accessible via l'URL GitHub Pages

## 🔍 Résolution des problèmes

**Si le site ne s'affiche pas :**
1. Vérifier que le repository est public
2. Attendre 5-10 minutes après le premier déploiement
3. Vérifier les logs dans l'onglet **Actions**

**Si les liens ne fonctionnent pas :**
- Vérifier l'URL de base dans la config Vite
- S'assurer que le nom du repository correspond

Le site est maintenant prêt pour un déploiement professionnel sur GitHub Pages ! 🚀