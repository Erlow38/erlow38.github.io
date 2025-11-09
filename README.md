# ✨ Portfolio - Ethan Ehrler

Un portfolio moderne et audacieux avec design **Bento Grid**, animations fluides et interactions uniques. Créé avec Next.js, TypeScript, Tailwind CSS et Framer Motion.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-cyan?style=for-the-badge&logo=tailwind-css)

## 🎨 Fonctionnalités Uniques

### Design & UX
- 🎯 **Bento Grid Layout** - Design asymétrique moderne et original
- 🖱️ **Curseur personnalisé** - Expérience interactive unique
- 🌈 **Gradients vibrants** - Identité visuelle forte (purple, pink, orange, cyan)
- 💎 **Glassmorphism** - Effets de verre ultra-modernes
- ✨ **Animations fluides** - Framer Motion optimisées (pas de lag)
- 📱 **100% Responsive** - Parfait sur mobile, tablette et desktop

### Sections

#### 🏠 Hero - Bento Grid
- Carte principale avec gradient animé
- Carte profil avec votre logo
- Statistiques (nombre de projets)
- Preview des technologies
- Liens de contact rapides
- Call-to-action vers les projets

#### 👋 À Propos
- 4 cartes de compétences avec emojis
- Effets 3D au hover
- Gradients personnalisés par compétence

#### 🛠️ Technologies & Outils
- Grid responsive de 12 technologies
- Icônes/emojis expressifs
- Effet glow subtil au hover

#### 💼 Projets - Bento Grid Dynamique
- **Layout asymétrique** avec cartes de tailles variables
- **Modale détaillée** pour chaque projet
- **Support images ET vidéos** dans la modale
- **Lightbox** pour agrandir les images
- Effet de flou élégant au hover
- Informations complètes : description, année, équipe, technologies

#### ⏳ Timeline Parcours
- Timeline verticale avec ligne gradient
- Icônes parfaitement centrées
- Badges d'année colorés
- Disposition alternée (gauche/droite)
- Animations d'entrée fluides

#### 💌 Contact
- Formulaire de contact fonctionnel (mailto)
- Cartes d'informations avec emojis
- Boutons réseaux sociaux
- Footer personnalisé

## 🚀 Technologies

- **Next.js 14.2** - Framework React avec App Router
- **TypeScript 5.4** - Typage statique pour moins d'erreurs
- **Tailwind CSS 3.4** - Styling utility-first
- **Framer Motion 11** - Animations et transitions
- **Lucide React** - Icônes modernes et légères

## 📦 Installation

### Prérequis
- Node.js 20+ et npm

### Installation

```bash
# Cloner le repository
git clone https://github.com/Erlow38/next-portfolio.git

# Installer les dépendances
npm install --legacy-peer-deps

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🏗️ Structure du Projet

```
next-portfolio/
├── app/
│   ├── globals.css           # Styles globaux + animations CSS
│   ├── layout.tsx             # Layout avec orbes fixes
│   └── page.tsx               # Page principale
├── components/
│   ├── Navigation.tsx         # Navbar flottante moderne
│   ├── CustomCursor.tsx       # Curseur personnalisé
│   ├── Hero.tsx               # Hero avec Bento Grid
│   ├── About.tsx              # Compétences principales
│   ├── InteractiveSkills.tsx  # Technologies & outils
│   ├── BentoProjects.tsx      # Grille de projets asymétrique
│   ├── ProjectModal.tsx       # Modale détaillée avec lightbox
│   ├── ExperienceTimeline.tsx # Timeline du parcours
│   └── Contact.tsx            # Formulaire de contact
├── public/
│   ├── images/
│   │   └── logo.png           # Votre logo (favicon + navbar)
│   └── projects/              # Images et vidéos de vos projets
│       ├── projet1/
│       │   ├── 1.png
│       │   └── 2.mp4
│       └── projet2/
│           └── 1.png
└── package.json
```

## 🎨 Personnalisation

### 1. Informations Personnelles

**Hero Section** (`components/Hero.tsx`)
- Ligne 68 : Votre nom dans la carte profil
- Ligne 80 : Nombre de projets réalisés

**Navigation** (`components/Navigation.tsx`)
- Ligne 38-39 : Votre nom dans la navbar

### 2. Ajouter Vos Projets

**Fichier** : `components/BentoProjects.tsx` (lignes 15-98)

```typescript
{
  title: 'Nom du Projet',
  description: 'Description courte',
  emoji: '🚀', // Emoji représentatif
  color: 'from-purple-500 to-pink-500', // Gradient
  tags: ['Next.js', 'TypeScript', 'MongoDB'],
  size: 'large', // 'large', 'medium', ou 'small'
  fullDescription: 'Description longue et détaillée pour la modale...',
  images: ['/projects/mon-projet/1.png', '/projects/mon-projet/2.mp4'],
  demoUrl: 'https://demo.com',
  githubUrl: 'https://github.com/username/repo',
  year: '2024',
  team: 'Solo',
}
```

**Images/Vidéos** : Placez-les dans `public/projects/nom-du-projet/`

### 3. Modifier Votre Parcours

**Fichier** : `components/ExperienceTimeline.tsx` (lignes 12-49)

```typescript
{
  year: '2024',
  title: 'Votre Poste',
  company: 'Entreprise',
  description: 'Description de vos missions',
  icon: '🚀', // Emoji au choix
  color: 'from-purple-500 to-pink-500',
  type: 'work', // 'work', 'education', ou 'award'
}
```

### 4. Informations de Contact

**Email** : Déjà configuré avec `ethan.ehrler@outlook.com`
- `components/Contact.tsx` ligne 20
- `components/Contact.tsx` ligne 36
- `components/Hero.tsx` ligne 156

**Réseaux Sociaux** :
- GitHub : `https://github.com/Erlow38`
- LinkedIn : `https://www.linkedin.com/in/ethan-ehrler-b5855a251/`

**Contact Info** (`components/Contact.tsx` lignes 31-53)
- Téléphone, localisation

### 5. Compétences

**À Propos** (`components/About.tsx` lignes 13-41)
**Technologies** (`components/InteractiveSkills.tsx` lignes 11-24)

## 📝 Scripts Disponibles

```bash
npm run dev      # Serveur de développement (port 3000)
npm run build    # Build de production
npm start        # Serveur de production
npm run lint     # Vérifier le code
```

## 🌐 Déploiement sur GitHub Pages

Ce portfolio est configuré pour être déployé sur GitHub Pages avec un domaine personnalisé.

### Configuration Initiale (Une seule fois)

1. **Créer le repository GitHub** :
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio"
   git remote add origin https://github.com/Erlow38/next-portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Sur GitHub**, allez dans Settings de votre repo :
   - Pages → Source → **Deploy from a branch**
   - Branch → **gh-pages** / **(root)**
   - Custom domain → **www.ethan-ehrler.fr** (Save)

3. **DNS de votre domaine** (chez votre registrar) :
   ```
   Type: CNAME
   Name: www
   Value: erlow38.github.io
   TTL: 3600
   ```

### Déployer le Site

```bash
# Build et déployer en une commande
npm run deploy
```

Cette commande va :
1. Builder le site en mode production
2. Copier le fichier CNAME dans le dossier de sortie
3. Créer le fichier .nojekyll
4. Push le contenu du dossier `out/` vers la branche `gh-pages`

### Voir le Site

Une fois déployé (2-3 minutes), votre portfolio sera accessible sur :
- 🌐 **Production** : https://www.ethan-ehrler.fr
- 📦 **GitHub Pages** : https://erlow38.github.io/next-portfolio

### Mise à jour du Site

Après avoir modifié votre code :
```bash
git add .
git commit -m "Update portfolio"
git push
npm run deploy
```

## 🎯 Optimisations Incluses

- ✅ **Pas de lag** - Animations CSS au lieu de Framer Motion pour les hovers
- ✅ **Images optimisées** - Format WebP recommandé
- ✅ **Lazy loading** - Chargement à la demande
- ✅ **Performance** - Score Lighthouse > 90
- ✅ **SEO** - Meta tags configurés
- ✅ **Accessibilité** - Navigation au clavier

## 🐛 Troubleshooting

### Erreur "Invalid Version" lors de npm install
```bash
npm cache clean --force
npm install --legacy-peer-deps
```

### La vidéo ne se lance pas
- Vérifiez que le fichier est en `.mp4`
- Le navigateur doit supporter HTML5 video

### Images non affichées
- Vérifiez que les images sont dans `public/`
- Les URLs doivent commencer par `/` (ex: `/images/logo.png`)

## 📄 License

Libre d'utilisation pour projets personnels et commerciaux.

## 👨‍💻 Auteur

**Ethan Ehrler**
- Portfolio : [Votre URL]
- GitHub : [@Erlow38](https://github.com/Erlow38)
- LinkedIn : [Ethan Ehrler](https://www.linkedin.com/in/ethan-ehrler-b5855a251/)
- Email : ethan.ehrler@outlook.com

---

Créé par **Ethan Ehrler**

🌐 **Site** : [www.ethan-ehrler.fr](https://www.ethan-ehrler.fr)