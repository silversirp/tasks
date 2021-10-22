// event elements
const form = document.querySelector('form');

// events
form.addEventListener('submit', addTask);

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
    //add li to <ul>
    const ul = document.querySelector('.collection');
    ul.appendChild(li);
    event.preventDefault();

}