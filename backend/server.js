const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 5000;

// Middleware pour lire le JSON envoyé par le front-end
app.use(express.json());

/* ============================
   PAGE D'ACCUEIL BACKEND
   ============================ */
app.get("/", (req, res) => {
  res.send("Bienvenue sur le backend SHEMA 🚀");
});

/* ============================
   CHARGEMENT DU FICHIER JSON
   ============================ */
function loadData() {
  try {
    const raw = fs.readFileSync('./data.json');
    return JSON.parse(raw);
  } catch (error) {
    console.error("Erreur JSON :", error);
    return { products: [], videos: [], users: [] };
  }
}

function saveData(data) {
  fs.writeFileSync("./data.json", JSON.stringify(data, null, 2));
}

/* ============================
   ROUTE : PRODUITS
   ============================ */
app.get("/api/products", (req, res) => {
  const data = loadData();
  res.json(data.products);
});

/* ============================
   ROUTE : VIDEOS
   ============================ */
app.get("/api/videos", (req, res) => {
  const data = loadData();
  res.json(data.videos);
});

/* ============================
   ROUTE : SIGN UP
   ============================ */
app.post("/api/signup", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email et mot de passe requis" });
  }

  const data = loadData();

  const exists = data.users.find(u => u.email === email);
  if (exists) {
    return res.status(400).json({ message: "Utilisateur déjà existant" });
  }

  const newUser = {
    id: Date.now(),
    email,
    password
  };

  data.users.push(newUser);
  saveData(data);

  res.json({ message: "Inscription réussie", user: newUser });
});

/* ============================
   ROUTE : LOGIN
   ============================ */
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const data = loadData();

  const user = data.users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(400).json({ message: "Email ou mot de passe incorrect" });
  }

  res.json({ message: "Connexion réussie", user });
});

/* ============================
   ROUTE : STATUS
   ============================ */
app.get("/api/status", (req, res) => {
  res.json({ message: "Backend SHEMA opérationnel avec JSON local" });
});

/* ============================
   LANCEMENT DU SERVEUR
   ============================ */
app.listen(PORT, () => {
  console.log(`Serveur SHEMA lancé sur http://localhost:${PORT}`);
});
