const sidebar = document.querySelector(".sidebar");
const sidebarButton = document.querySelector("#open-sidebar");
const mainContent = document.querySelector(".main-content");

sidebarButton.addEventListener("click", () => {
    sidebar.classList.add("open");
    mainContent.classList.add("open"); 
})

mainContent.addEventListener("click", () => {
    if (sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
        mainContent.classList.remove("open");
    }
})