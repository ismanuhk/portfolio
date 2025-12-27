/* ===============================
   FIREBASE IMPORTS (MUST BE FIRST)
================================ */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* ===============================
   FIREBASE CONFIG
================================ */
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

/* ===============================
   CONTACT FORM → FIREBASE
================================ */
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    await addDoc(collection(db, "contacts"), {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
      createdAt: new Date()
    });

    alert("Message sent successfully!");
    contactForm.reset();
  } catch (error) {
    alert("Error sending message");
    console.error(error);
  }
});

/* ===============================
   SKILLS SCROLL ANIMATION
================================ */
const skillCards = document.querySelectorAll(".skill-card");

window.addEventListener("scroll", () => {
  skillCards.forEach(card => {
    if (card.getBoundingClientRect().top < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
});

/* ===============================
   PROJECT HORIZONTAL SCROLL
================================ */
document.addEventListener("DOMContentLoaded", () => {
  const projectScroll = document.querySelector(".project-scroll");
  if (!projectScroll) return;

  projectScroll.addEventListener(
    "wheel",
    (e) => {
      const atStart = projectScroll.scrollLeft === 0;
      const atEnd =
        projectScroll.scrollLeft + projectScroll.clientWidth >=
        projectScroll.scrollWidth - 1;

      if (
        (e.deltaY > 0 && !atEnd) ||
        (e.deltaY < 0 && !atStart)
      ) {
        e.preventDefault();
        projectScroll.scrollLeft += e.deltaY;
      }
    },
    { passive: false }
  );
});
