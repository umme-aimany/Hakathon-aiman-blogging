import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-storage.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxLfphXH363O2mD2Exo6NL9lsJezv1mx0",
  authDomain: "blogging-app-hakathon.firebaseapp.com",
  databaseURL: "https://blogging-app-hakathon-default-rtdb.firebaseio.com",
  projectId: "blogging-app-hakathon",
  storageBucket: "blogging-app-hakathon.appspot.com",
  messagingSenderId: "410730877490",
  appId: "1:410730877490:web:792bc1cfb06dc23d5d222b",
  measurementId: "G-LV5L0H156D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage }