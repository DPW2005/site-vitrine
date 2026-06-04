# Étape 1 : Construction (Build)
FROM node:22-alpine AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json package-lock.json* ./

# Installer les dépendances
RUN npm install

# Copier tout le reste du code source
COPY . .

# Compiler l'application pour la production (Vite génère le dossier 'dist')
RUN npm run build

# Étape 2 : Serveur Web (Production)
FROM nginx:alpine

# Supprimer la configuration Nginx par défaut
RUN rm -rf /usr/share/nginx/html/*

# Copier les fichiers compilés depuis l'étape de construction vers le dossier Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Optionnel : Ajouter une configuration Nginx personnalisée pour les Single Page Applications
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
