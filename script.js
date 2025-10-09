// Cambia testo del titolo
document.getElementById("btnTesto").addEventListener("click", () => {
  document.getElementById("titolo").textContent = "Titolo cambiato!";
});

// Saluta l’utente
document.getElementById("btnSaluta").addEventListener("click", () => {
  const nome = document.getElementById("inputNome").value;
  document.getElementById("output").textContent = "Ciao, " + nome + "!";
});

// Cambia immagine
document.getElementById("btnCambiaImg").addEventListener("click", () => {
  document.getElementById("immagine").src = "https://via.placeholder.com/200";
});

// Cambia colore al passaggio del mouse
document.getElementById("mouseArea").addEventListener("mouseover", () => {
  document.getElementById("mouseArea").style.color = "green";
});
document.getElementById("mouseArea").addEventListener("mouseout", () => {
  document.getElementById("mouseArea").style.color = "black";
});

// Cambia colore del box con doppio click
document.getElementById("box").addEventListener("dblclick", () => {
  document.getElementById("box").style.background = "purple";
});

// Evento tastiera
document.addEventListener("keydown", (e) => {
  console.log("Hai premuto:", e.key);
});

// Gestione submit form
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Hai inviato: " + document.getElementById("campo").value);
});
