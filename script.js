function toggleTable() {
  const table = document.getElementById("tableSection");
  const btn = document.querySelector(".compare-btn");

  table.classList.toggle("hidden");

  if (!table.classList.contains("hidden")) {
    table.scrollIntoView({ behavior: "smooth" });
    btn.innerText = "Hide Comparison";
  } else {
    btn.innerText = "View Full Comparison";
  }
}
