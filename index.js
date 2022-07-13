const addTask = document.getElementById('add-task')
const taskContainer = document.getElementById('task-container')
const inputTask = document.getElementById('input-task')

addTask.addEventListener('click', function() {
    let task = document.createElement('div')
    task.classList.add('task')

    let li = document.createElement('li')
    li.innerText = `${inputTask.value}`
    task.appendChild(li)

    let checkButton = document.createElement('button')
    checkButton.innerHTML = '<i class="fa-solid fa-square-check"></i>'
    checkButton.classList.add('checkTask')
    task.appendChild(checkButton)

    let deleteButton = document.createElement('button')
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    deleteButton.classList.add('deleteTask')
    task.appendChild(deleteButton)

    if (inputTask.value === "") {
        alert('Please enter a task')
    } else {
        taskContainer.appendChild(task)
    }

    // Removes the previous input that was typed into the input box.
    inputTask.value = ""

    //Adds a line-through the text once the check button is clicked.
    checkButton.addEventListener('click', function() {
        checkButton.parentElement.style.textDecoration = "line-through"
    })

    //Delete Button to remove the task.
    deleteButton.addEventListener('click', function(e) {
        let target = e.target
        target.parentElement.parentElement.remove()
    })

    e.preventDefault()
})