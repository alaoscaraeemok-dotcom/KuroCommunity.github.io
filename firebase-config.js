// Importa as funções do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

// COLE SEUS DADOS DE CONFIGURAÇÃO AQUI
const firebaseConfig = {
  apiKey: "AIzaSyCFMDmr1lCMRxlAnJOQVBRcgjDOp4bReyg",
  authDomain: "kurocommunity.firebaseapp.com",
  databaseURL: "https://kurocommunity-default-rtdb.firebaseio.com",
  projectId: "kurocommunity",
  storageBucket: "kurocommunity.firebasestorage.app",
  messagingSenderId: "736724124536",
  appId: "1:736724124536:web:2414b8f1793ba705e0fe8d"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
