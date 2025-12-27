// SIMPLE ADMIN PASSWORD
const adminPassword = "admin123"; // change this

const entered = prompt("Enter Admin Password:");
if (entered !== adminPassword) {
  alert("Access Denied");
  window.location.href = "index.html";
}


function exportCSV(){
  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  if(contacts.length === 0){
    alert("No data to export");
    return;
  }

  let csv = "Name,Email,Message,Date\n";

  contacts.forEach(c => {
    csv += `"${c.name}","${c.email}","${c.message}","${c.date}"\n`;
  });

  const blob = new Blob([csv], { type:"text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "contact_messages.csv";
  a.click();
}
















const tableBody = document.querySelector("#messageTable tbody");
const emptyMsg = document.getElementById("emptyMsg");

function loadMessages(){
  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

  tableBody.innerHTML = "";

  if(contacts.length === 0){
    emptyMsg.style.display = "block";
    return;
  }

  emptyMsg.style.display = "none";

  contacts.forEach((contact, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${contact.name}</td>
      <td>${contact.email}</td>
      <td>${contact.message}</td>
      <td>${contact.date}</td>
      <td><button onclick="deleteMessage(${index})">Delete</button></td>
    `;

    tableBody.appendChild(row);
  });
}

function deleteMessage(index){
  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  contacts.splice(index, 1);
  localStorage.setItem("contacts", JSON.stringify(contacts));
  loadMessages();
}

// Load on page open
loadMessages();
