// Skills scroll animation (from left)
const skillCards = document.querySelectorAll(".skill-card");

window.addEventListener("scroll", () => {
  skillCards.forEach(card => {
    if (card.getBoundingClientRect().top < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
});


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

      // If horizontal scroll is possible → scroll horizontally
      if (
        (e.deltaY > 0 && !atEnd) ||
        (e.deltaY < 0 && !atStart)
      ) {
        e.preventDefault();
        projectScroll.scrollLeft += e.deltaY;
      }
      // else → allow normal vertical page scroll
    },
    { passive: false }
  );
});









// CONTACT FORM STORAGE (JS ONLY)
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Create object
  const contactData = {
    name,
    email,
    message,
    date: new Date().toLocaleString()
  };

  // Get existing data
  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

  // Add new contact
  contacts.push(contactData);

  // Save back to localStorage
  localStorage.setItem("contacts", JSON.stringify(contacts));

  alert("Message sent successfully!");

  contactForm.reset();
});
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔴 Firebase configuration (YOURS)
const firebaseConfig = {
  apiKey: "AIzaSyBoo_tI8I7bOtEZLwGo1IFpgl5n9i_Qhs",
  authDomain: "ismanuhk-9407d.firebaseapp.com",
  projectId: "ismanuhk-9407d",
  storageBucket: "ismanuhk-9407d.firebasestorage.app",
  messagingSenderId: "753802713936",
  appId: "1:753802713936:web:13ee7c0b1c4da9ed90ea55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get form
const form = document.getElementById("contactForm");

// When form is submitted
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    await addDoc(collection(db, "contacts"), {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
      createdAt: new Date()
    });

    alert("Message sent successfully!");
    form.reset();

  } catch (error) {
    alert("Error sending message");
    console.error(error);
  }
});


