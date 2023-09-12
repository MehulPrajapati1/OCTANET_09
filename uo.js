// Function to add a new task
function addTask() {
    const taskText = document.getElementById('task').value;
    if (taskText.trim() !== '') {
        const taskList = document.getElementById('task-list');
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-button" onclick="removeTask(this)">Delete</button>
        `;
        taskList.appendChild(li);
        document.getElementById('task').value = '';
    }
}

// Function to remove a task
function removeTask(button) {
    const taskList = document.getElementById('task-list');
    taskList.removeChild(button.parentNode);
}
