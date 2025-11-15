// Importações essenciais do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Configuração do Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyCaFP_oX5Rj6Jfmssn-5Rh3uPdiY3S9A2g",
  authDomain: "mava-baristro-b458f.firebaseapp.com",
  databaseURL: "https://mava-baristro-b458f-default-rtdb.firebaseio.com",
  projectId: "mava-baristro-b458f",
  storageBucket: "mava-baristro-b458f.appspot.com", 
  messagingSenderId: "879239397064",
  appId: "1:879239397064:web:0108742eb19771f4052ffd"
};

// Inicialização dos serviços
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
