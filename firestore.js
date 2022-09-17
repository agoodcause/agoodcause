import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_UhkAKkZCsuigWBd6R3_XM-nsS-lvUsg",
  authDomain: "agc-inventory-362716.firebaseapp.com",
  projectId: "agc-inventory-362716",
  storageBucket: "agc-inventory-362716.appspot.com",
  messagingSenderId: "336528529013",
  appId: "1:336528529013:web:4c05150c30a5ab07ff4a3c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
window.db = db;
window.getDocs = getDocs;
window.collection = collection;
window.query = query;
window.where = where;
