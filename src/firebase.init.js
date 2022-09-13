import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBMbUr4IcDmbaPPHukPO5SabuoozWsOCZs",
  authDomain: "newspaper-dashboard.firebaseapp.com",
  projectId: "newspaper-dashboard",
  storageBucket: "newspaper-dashboard.appspot.com",
  messagingSenderId: "219756063135",
  appId: "1:219756063135:web:544dd42c883b8bf0b235aa",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
