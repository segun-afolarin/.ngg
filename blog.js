// Toggle navigation menu
function toggleNav() {
    const nav = document.getElementById('navbar');
    const btn = document.getElementById('menuBtn');
    nav.classList.toggle('show');
  
    // Toggle between ☰ and ✖
    if (btn.innerHTML === '☰') {
      btn.innerHTML = '✖';
    } else {
      btn.innerHTML = '☰';
    }
  }
  
  // Toggle dark mode
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
  
  // Toggle player bio
  function toggleBio(button) {
    const bio = button.previousElementSibling;
    if (bio.style.display === "block") {
      bio.style.display = "none";
      button.textContent = "Show Bio";
    } else {
      bio.style.display = "block";
      button.textContent = "Hide Bio";
    }
  }
  