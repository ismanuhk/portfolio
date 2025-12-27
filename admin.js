import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔴 SAME CONFIG AS script.js
const firebaseConfig = {
  apiKey: "AIzaSyBoo_tI8I7bOtEZLwGo1IFpgl5n9i_Qhs",
  authDomain: "ismanuhk-9407d.firebaseapp.com",
  projectId: "ismanuhk-9407d",
  storageBucket: "ismanuhk-9407d.firebasestorage.app",
  messagingSenderId: "753802713936",
  appId: "1:753802713936:web:13ee7c0b1c4da9ed90ea55"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const body = document.getElementById("messageBody");

const q = query(collection(db, "contacts"), orderBy("createdAt", "desc"));
const snap = await getDocs(q);

snap.forEach(doc=>{
  const d = doc.data();
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${d.name}</td>
    <td>${d.email}</td>
    <td>${d.message}</td>
    <td>${new Date(d.createdAt.seconds * 1000).toLocaleString()}</td>
  `;

  body.appendChild(tr);
});
