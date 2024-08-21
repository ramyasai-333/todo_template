document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(text) {
    const taskList = document.getElementById('task-list');
    
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${text}</span>
        <div>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    `;
    
    taskList.appendChild(li);
    
    li.querySelector('.delete').addEventListener('click', function() {
        taskList.removeChild(li);
    });
    
    li.querySelector('.edit').addEventListener('click', function() {
        const newText = prompt('Edit task:', text);
        if (newText) {
            li.querySelector('span').textContent = newText;
        }
    });
    
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
}
