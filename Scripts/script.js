const toggleButton = document.querySelector("#theme-toggle");

const updateButtonText = () => {
    const body = document.body;
    const toggleButton = document.querySelector("#theme-toggle");

    if (body.classList.contains("dark-mode")) {
        toggleButton.innerHTML = "Mode clair"; // Switch to light
    } else {
        toggleButton.innerHTML = "Mode sombre"; // Switch to dark
    }
};

const toggleTheme = () => {
    const body = document.body;
    const isDark = body.classList.toggle("dark-mode"); 

    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateButtonText();
};

const loadTheme = () => {
    const body = document.body;
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }

    updateButtonText(); // Don't toggle, just update UI
};

window.addEventListener("DOMContentLoaded", loadTheme);
toggleButton.addEventListener("click", () => {
    toggleTheme();
})