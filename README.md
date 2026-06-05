# I3SN — Institut Supérieur des Sciences de la Santé de Ngong

Un site web vitrine premium et moderne pour une école supérieure formant dans le domaine de la santé (médecine, dentaire, kinésithérapie, etc.). Développé avec React et Vite.

## 🌟 Présentation du Projet

Ce projet est une "Single Page Application" (Application à page unique) avec une navigation fluide, des animations au défilement, et un design 100% responsive. Il s'inspire des meilleurs standards de web design pour offrir une expérience utilisateur haut de gamme.

### Fonctionnalités Clés
- **Splash Screen** : Écran de chargement animé avec barre de progression.
- **Scroll Reveal** : Animations fluides d'apparition des éléments lors du défilement (grâce à `IntersectionObserver`).
- **Smooth Scrolling** : Navigation ancrée fluide d'une section à l'autre.
- **Menu Sticky & Mobile** : En-tête de navigation transparent qui devient opaque au scroll, avec un menu "hamburger" caché pour les appareils mobiles.
- **Design System Custom** : 100% CSS Vanilla structuré avec des variables CSS (sans librairie externe lourde).

## 📂 Architecture des Fichiers

Le projet est organisé de manière modulaire, chaque section du site correspondant à un composant React :

```text
c:\Users\ndocm\Desktop\essai\
├── index.html              # Point d'entrée HTML (contient les balises meta SEO et les Google Fonts)
├── public/                 # Fichiers statiques (favicon, images, etc.)
│   ├── hero-bg.png         # Image de fond générée par IA pour la section Héro
│   └── favicon.svg         # Icône du site (Croix médicale)
├── src/                    # Fichiers sources React
│   ├── components/         # Tous les composants du site
│   │   ├── Loader.jsx      # Écran de chargement (Splash Screen de 5s)
│   │   ├── Header.jsx      # En-tête, logo, navigation Desktop & Mobile
│   │   ├── Hero.jsx        # Section d'accueil plein écran avec image de fond et boutons CTA
│   │   ├── About.jsx       # Présentation de l'école et compteurs statistiques animés
│   │   ├── Formations.jsx  # Grille listant les différentes filières (Médecine, Pharmacie...)
│   │   ├── Campus.jsx      # Aperçu des infrastructures sous forme de grille de cartes
│   │   ├── Administration.jsx # Message du Doyen et valeurs de l'institution
│   │   ├── Personnel.jsx   # Présentation de l'équipe pédagogique (cartes avec avatars)
│   │   ├── VieEtudiante.jsx # Descriptions des installations et témoignages glissants
│   │   ├── Contact.jsx     # Informations de localisation et formulaire de contact
│   │   └── Footer.jsx      # Pied de page (Liens utiles, réseaux sociaux, copyright)
│   ├── App.jsx             # Composant racine : rassemble tous les composants et gère le scroll reveal
│   ├── App.css             # Tous les styles et animations spécifiques aux composants
│   ├── index.css           # Design System (Reset, variables CSS, utilitaires globaux)
│   └── main.jsx            # Point de montage de l'application React
├── package.json            # Dépendances et scripts npm
└── vite.config.js          # Configuration de Vite
```

## 🗺️ Navigation

Le site est conçu sur une seule page. La navigation se fait via des ancres HTML (`#accueil`, `#formations`, etc.).
- Dans le `Header.jsx`, la fonction `handleNavClick` intercepte les clics pour faire défiler la page (`window.scrollTo({ behavior: 'smooth' })`).
- L'API `IntersectionObserver` observe quelle section est actuellement visible à l'écran pour mettre en surbrillance (highlight) le lien correspondant dans le menu.

## 🚀 Comment Lancer le Projet

Vous avez deux options pour exécuter ce projet : en local avec Node.js (idéal pour le développement) ou avec Docker (idéal pour la production ou pour tester rapidement sans installer Node.js).

### Option A : Lancement Local (Développement)

Assurez-vous d'avoir [Node.js](https://nodejs.org/) installé sur votre machine.

1. **Installer les dépendances** :
   Dans le terminal, à la racine du projet, tapez :
   ```bash
   npm install
   ```

2. **Lancer le serveur de développement local** :
   ```bash
   npm run dev
   ```

3. **Visualiser le site** :
   Ouvrez votre navigateur et accédez à l'URL affichée dans le terminal (généralement `http://localhost:5173`).

4. **Générer le projet pour la production (Build)** :
   ```bash
   npm run build
   ```
   *Les fichiers optimisés seront générés dans le dossier `dist/`.*

### Option B : Lancement avec Docker (Production / Isolé)

Assurez-vous d'avoir [Docker](https://docs.docker.com/get-docker/) et Docker Compose installés. Cette méthode compile le projet puis utilise Nginx pour servir le site de manière optimisée.

1. **Construire et lancer le conteneur** :
   Dans le terminal, à la racine du projet, tapez la commande suivante :
   ```bash
   docker-compose up -d --build
   ```

2. **Visualiser le site** :
   Ouvrez votre navigateur à l'adresse 👉 `http://localhost:8090`.

3. **Arrêter le site** (sans le détruire) :
   ```bash
   docker-compose stop
   ```
