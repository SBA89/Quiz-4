
let tasks = [];


const taskNameInput = document.getElementById('taskName');
const taskDateInput = document.getElementById('taskDate');
const taskDescriptionInput = document.getElementById('taskDescription');
const taskTableBody = document.getElementById('taskTableBody');
const addTaskButton = document.getElementById('addTaskButton');


function addTask() {
const name = taskNameInput.value.trim();
const date = taskDateInput.value.trim();
const description = taskDescriptionInput.value.trim();

if (!name || !date || !description) {
    alert('Por favor, completa todos los campos.');
    return;
}


tasks.push({ name, date, description });

updateTaskTable();


taskNameInput.value = '';
taskDateInput.value = '';
taskDescriptionInput.value = '';
}


function deleteTask(index) {
    tasks.splice(index, 1);
    updateTaskTable(); 
}

function updateTaskTable() {
    taskTableBody.innerHTML = ''; 

    tasks.forEach((task, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${task.name}</td>
        <td>${task.date}</td>
        <td>${task.description}</td>
        <td><button class="btn-delete" onclick="deleteTask(${index})">Eliminar</button></td>
    `;

    taskTableBody.appendChild(row);
});
}


addTaskButton.addEventListener('click', addTask);




    