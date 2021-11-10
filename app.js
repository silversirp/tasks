// event elements
const form = document.querySelector('form');
const taskList = document.querySelector('.collection');
const deleteTasksBtn = document.querySelector('#delete-tasks');

// events
form.addEventListener('submit', addTask);
taskList.addEventListener('click', deleteTask);
deleteTasksBtn.addEventListener('click', deleteTasks);

function addTask(event) {
    //get form input data
    const taskInput = document.querySelector('#task');
    let task = taskInput.value;

    //create <li> element
    const li = document.createElement('li');
    li.className = 'collection-item';

    //create text element
    const text = document.createTextNode(task);
    //add text to <li>
    li.appendChild(text);
    //create <a> element
    const link = document.createElement('a');
    // add css class to link
    link.className = 'secondary-content';
    // set href attribute
    link.setAttribute('href', '#');
    // add text content to <a>
    link.appendChild(document.createTextNode('X'));
    // add a to li
    li.appendChild(link);
    //add li to <ul>
    const ul = document.querySelector('.collection');
    ul.appendChild(li);
    //save task
    addTaskToLocalStorage(task);
    taskInput.value = '';
    event.preventDefault();
}

function addTaskToLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTaskFromLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function (tasksElement, index) {
        if(task == tasksElement) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTask(event) {
    //target shows what element was clicked
    //.textContent shows also text and text is X
    //console.log(event.target.textContent);
    if (event.target.textContent === 'X') {
        if (confirm('Do you want to delete this task?')) {
            //parentElement gives parent element which is li and not target which was a
            event.target.parentElement.remove();
            task = event.target.parentElement.firstChild.textContent;
            deleteTaskFromLocalStorage(task);
        }
    }
}

function deleteTasks(event) {
    // console.log(event.target.previousElementSibling.innerHTML = '';
    // taskList.innerHTML = '';
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    deleteAllTasksFromLocalStorage();
}

function deleteAllTasksFromLocalStorage() {
    // deletes all localStorage
    // localStorage.clear();
    if(localStorage.getItem('tasks') === null) {
        let tasks = [];
        // adds empty content
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    localStorage.removeItem('tasks');
}