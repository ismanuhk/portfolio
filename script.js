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

