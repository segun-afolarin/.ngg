function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
  }
  
  function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
  }
  
  window.addEventListener("load", () => {
    if (localStorage.getItem("dark-mode") === "true") {
      document.body.classList.add("dark-mode");
    }
  });
  