if(localStorage.getItem("adminAuth") !== "true"){
  throw new Error("Not authorized");
}



import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* 🔴 SAME FIREBASE CONFIG AS script.js */
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

const tableBody = document.querySelector("#messageTable tbody");
const emptyMsg = document.getElementById("emptyMsg");

async function loadMessages(){
  const q = query(
    collection(db, "contacts"),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  tableBody.innerHTML = "";

  if(snapshot.empty){
    emptyMsg.style.display = "block";
    return;
  }

  emptyMsg.style.display = "none";

  snapshot.forEach(doc => {
    const d = doc.data();
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${d.name}</td>
      <td>${d.email}</td>
      <td>${d.message}</td>
      <td>${new Date(d.createdAt.seconds * 1000).toLocaleString()}</td>
    `;

    tableBody.appendChild(row);
  });
}

// Load messages on page open
loadMessages();

