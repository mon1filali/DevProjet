const tbody = document.querySelector("tbody");
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentEditId = null; // global variable
const form = document.querySelector("form");
const submitBtn = document.querySelector(".submit-btn");
const deleteButton = document.querySelector(".danger");
const EditButton = document.querySelector(".success");

const displayTasks = () => {
    tbody.innerHTML = "";
    /* tasks.forEach(element => {
        tbody.innerHTML += `
            <tr>
                <td>${element.taskName}</td>
                <td>${element.description}</td>
                <td>${element.dueDate}</td>
                <td>${element.statut}</td>
                <td>
                    <button class="danger">Supprimer</button>
                    <button class="success">Editer</button>
                </td>
            </tr>
        `
    }); */

    tasks.forEach((task) => {
        const rowHTML = `
            <tr>
                <td>${task.taskName}</td>
                <td>${task.description}</td>
                <td>${task.dueDate}</td>
                <td>${task.statut}</td>
                <td>
                    <button onclick="editTask(${task.id})">Éditer</button>
                    <button onclick="deleteTask(${task.id})">Supprimer</button>
                </td>
            </tr>
        `;

        tbody.insertAdjacentHTML("beforeend", rowHTML); // Inside the tbody append this row, to existing once
    });
}

/* function createTask(event) {
    event.preventDefault();
    const taskName = document.querySelector("#taskName").value;
    const description = document.querySelector("#description").value;
    const dueDate = document.querySelector("#dueDate").value;
    const remuneration = document.querySelector("#remuneration").value;
    const vehicle = document.querySelector("#vehicle").checked;
    const mode = document.querySelector("#mode").checked;
    const statut = document.querySelector("#statut").checked;

    if(!taskName || !description || !dueDate) alert("fields are missing");

    const randomKey = crypto.randomUUID();
    tasks = JSON.parse(localStorage.getItem("tasks"));
    const taskObject = {
        randomKey,
        taskName,
        description,
        dueDate,
        remuneration,
        vehicle,
        mode,
        statut
    }
    tasks.push(taskObject);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    alert("New task is created");
    form.reset();
    displayTasks();
} */
function createOrUpdateTask(event) {
    event.preventDefault();
    const taskName = document.querySelector("#taskName").value;
    const description = document.querySelector("#description").value;
    const dueDate = document.querySelector("#dueDate").value;
    const remuneration = document.querySelector("#remuneration").value;
    const vehicle = document.querySelector("#vehicle").checked;
    const mode = document.querySelector("#mode").checked;
    const statut = document.querySelector("#statut").checked;

    if (!taskName || !description || !dueDate) {
        alert("fields are missing"); 
        return;};

    if (currentEditId === null) {
        const randomKey = crypto.randomUUID();
        const taskObject = {
            id: randomKey,
            taskName,
            description,
            dueDate,
            remuneration,
            vehicle,
            mode,
            statut
        }
        tasks.push(taskObject);
    } else {

        const index = tasks.findIndex(t => t.id === currentEditId);

        if (index === -1) {
            alert("Tâche introuvable !");
            return;
        }

        tasks[index].taskName = taskName;
        tasks[index].description = description;
        tasks[index].dueDate = dueDate;
        tasks[index].statut = statut;

        currentEditId = null; // Exit edit mode
        submitBtn.textContent = "Créer une tâche";
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
    form.reset();
}

function editTask(taskId) {
    // 1. Find the task by its ID
    const task = tasks.find(t => t.id === taskId);

    // 2. If task not found, alert
    if (!task) {
        alert("Tâche introuvable !");
        return;
    }

    // 3. Fill the form fields
    document.getElementById("taskName").value = task.taskName;
    document.getElementById("description").value = task.description;
    document.getElementById("dueDate").value = task.dueDate;
    document.getElementById("statut").checked = task.statut;

    // 4. Change submit button text
    document.querySelector(".submit-btn").textContent = "Mettre à jour";

    // 5. Store current edit ID
    currentEditId = taskId;

    // 6. Scroll to form smoothly
    document.querySelector("form").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function deleteTask(taskId) {
    // 1. Ask for confirmation
    const confirmed = confirm("Voulez-vous vraiment supprimer cette tâche ?");
    if (!confirmed) return; // exit if user cancels

    // 2. Remove the task from tasks array
    tasks = tasks.filter(t => t.id !== taskId);

    // 3. Save updated tasks to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // 4. Show notification
    alert("Tâche supprimée");

    // 5. Refresh the table
    displayTasks();
}



window.addEventListener("DOMContentLoaded", () => {
    displayTasks();
})

document.querySelector("form").addEventListener("submit", createOrUpdateTask);
