// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    // Save the dark mode state to local storage to persist on page reload
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
    } else {
        localStorage.removeItem("dark-mode");
    }
}

// Check the local storage for dark mode setting on page load
window.addEventListener("load", () => {
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
    }
});
