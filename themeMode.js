//cree la fonction toggleTheme pour recuperer l'element body de la page et basculer la classe "dark-mode" sur le body pour activer ou desactiver le mode sombre et recuperer le bouton avec l'id "theme-toggle" et verifier si la classe "dark-mode" est presente sur le body au chargement de la page pour appliquer le theme correspondant et sauvegarder le theme dans le local storage pour le conserver entre les visites avec le nom theme
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
window.addEventListener("load", () => {
    const theme = localStorage.getItem("theme");
    const body = document.body;
    if (theme === "dark") {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }
});
window.addEventListener("beforeunload", () => {
    const body = document.body;
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }      
});
window.addEventListener("load", () => {
    const theme = localStorage.getItem("theme");
    const body = document.body;
    if (theme === "dark") {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }
});
