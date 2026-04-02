function toggleTable() {
  const table = document.getElementById("tableSection");
  table.classList.toggle("hidden");

  if (!table.classList.contains("hidden")) {
    table.scrollIntoView({ behavior: "smooth" });
  }
}
