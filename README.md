# Portfolio — Ethan Ehrler

Site personnel de designer et développeur web. Une page unique, en français et en anglais, exportée en statique et publiée sur [www.ethan-ehrler.fr](https://www.ethan-ehrler.fr).

## Stack

- Next.js 14 (App Router, export statique)
- TypeScript
- Tailwind CSS
- next-intl (français et anglais)
- Framer Motion (modale projet)
- Lucide React

## Contenu

- Hero, avec liens, CV et accès aux projets
- Présentation et compétences
- Grille de projets, avec modale, images et vidéo
- Parcours
- Contact par mailto
- Navigation fixe et menu mobile

## Installation

Node.js 20 ou plus récent.

```bash
git clone https://github.com/Erlow38/erlow38.github.io.git
cd erlow38.github.io
npm install
npm run dev
```

Le site est disponible sur [http://localhost:3000](http://localhost:3000). La racine redirige vers `/fr` ou `/en` selon la langue du navigateur.

## Scripts

```bash
npm run dev      # développement
npm run build    # export statique dans out/
npm run lint     # ESLint
npm run deploy   # build, puis publication sur la branche gh-pages
```

`npm run deploy` utilise des commandes Windows (`copy`, `echo`).

## Structure

```
app/
  layout.tsx                 # polices et métadonnées
  page.tsx                   # redirection vers la langue
  [locale]/page.tsx          # page d'accueil
  globals.css
components/                  # sections de la page
i18n/                        # configuration next-intl
messages/
  fr.json
  en.json
middleware.ts
public/
  CNAME
  cv/
  images/
  projects/
```

## Modifier le contenu

Les textes visibles sont dans `messages/fr.json` et `messages/en.json`. Les deux fichiers doivent rester alignés.

| Contenu | Fichier |
| --- | --- |
| Textes des sections | `messages/fr.json`, `messages/en.json` |
| Projets (tags, médias, liens, année) | `components/BentoProjects.tsx` |
| Compétences | `components/InteractiveSkills.tsx` |
| Entrées du parcours | `components/ExperienceTimeline.tsx` |

Médias des projets : `public/projects/<slug>/`. Les images servent de couverture ; un `.mp4` peut être ajouté dans la modale.

Exemple d'entrée dans `projectsData` :

```typescript
{
  tags: ['HTML', 'CSS', 'TypeScript', 'React'],
  size: 'medium', // 'large' | 'medium' | 'small'
  images: ['/projects/mon-projet/1.png'],
  demoUrl: 'https://exemple.com',
  githubUrl: 'https://github.com/Erlow38/mon-projet',
  year: '2025',
  teamKey: 'solo', // clé traduite dans messages/*.json
}
```

Ajouter la clé correspondante dans `projectKeys`, le titre dans `projectTitles`, puis les textes dans les deux fichiers de traduction.

## Déploiement

Le domaine est défini dans `CNAME` et `public/CNAME` (`www.ethan-ehrler.fr`).

1. Dans les réglages GitHub du dépôt : Pages, source **Deploy from a branch**, branche `gh-pages`, dossier racine.
2. DNS : un enregistrement `CNAME` de `www` vers `erlow38.github.io`.
3. Publier :

```bash
npm run deploy
```

La commande construit le site, copie `CNAME` et `.nojekyll` dans `out/`, puis pousse ce dossier sur `gh-pages`.

## Contact

Ethan Ehrler  
[www.ethan-ehrler.fr](https://www.ethan-ehrler.fr)  
[GitHub](https://github.com/Erlow38)  
[LinkedIn](https://www.linkedin.com/in/ethan-ehrler-b5855a251/)  
ethan.ehrler@outlook.com
