FROM node:20.10.0

WORKDIR /app

# Copier uniquement package.json + lock pour installer plus vite
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du projet
COPY . .

# Construire Next.js
RUN npm run build

# Exposer le port interne de Next.js
EXPOSE 3000

# Lancer Next.js en mode production
CMD ["npm", "start"]
