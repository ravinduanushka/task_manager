// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item (li)
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete'; 
    deleteBtn.className = 'delete-btn';
    
    // Delete button functionality
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    // Append button to list item, and item to the list
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
}

// Event listeners
addBtn.addEventListener('click', addTask);

// Allow pressing "Enter" to add task
taskInput.addEventListener('keypress', function(e) { 
    if (e.key === 'Enter') {
        addTask();
    }
});