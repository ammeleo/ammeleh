document.getElementById("btnTesto").addEventListener("click", () => {
  document.getElementById("titolo").textContent = "Antonio Hueber!";
});

document.getElementById("btnSaluta").addEventListener("click", () => {
  const nome = document.getElementById("inputNome").value;
  document.getElementById("output").textContent = "bella, " + nome + "!";
}); 