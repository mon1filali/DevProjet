//cree la fonction pour changer le theme 
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}
//ajoute un ecouteur d'evenement au bouton
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
//verifie le theme au chargement de la page
window.addEventListener("load", () => {
    const body = document.body;
    if (body.classList.contains("dark-mode")) {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }
});
//sauvgarer le theme dans le local storage
window.addEventListener("beforeunload", () => {
    const body = document.body;
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }      
});
//charger le theme depuis le local storage
window.addEventListener("load", () => {
    const theme = localStorage.getItem("theme");
    const body = document.body;
    if (theme === "dark") {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }
});
//initialiser le theme au chargement de la page
window.addEventListener("load", () => {
    const theme = localStorage.getItem("theme");
    const body = document.body;
    if (theme === "dark") {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }
});
//appliquer le theme au chargement de la page
window.addEventListener("load", () => {
    const theme = localStorage.getItem("theme");
    const body = document.body;
    if (theme === "dark") {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }   
});
//recuperer le bouton theme-toggle et ajouter un evenement click qui appelle la fonction toggleTheme
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);




