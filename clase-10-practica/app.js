const addButton = document.querySelector('#addButton')
const taskList = document.querySelector('#taskList')
const taskInput = document.querySelector('#taskInput')

const tasks = []

function addTask() {
  const newTask = taskInput.value
  if (newTask !== '' && newTask !== ' ') {
    // definimos el nuevo objeto con dos propiedades: text (para el texto) y 'done' (para saber si esta finalizada la tarea)
    const objTask = {
      text: newTask,
      done: false
    }
    // agregamos la nueva tarea a la lista de tareas (array 'tasks')
    tasks.push(objTask)
    console.log(tasks)
    updateTaskList()
  }
  taskInput.value = ''
}

function deleteTask(actualTask) {
  const taskIndex = tasks.indexOf(actualTask)
  tasks.splice(taskIndex, 1)
  updateTaskList()
  // const allTasks = document.querySelectorAll('li')
  // for (const item of allTasks) {
  //   item.onclick = function () {
  //     deleteTask(item)
  //   }
  // }
}

function updateTask(actualTask) {
  const taskIndex = tasks.indexOf(actualTask)
  // usamos el operador NOT ! para indicar que queremos guardar lo contrario: si es true, se guarda false
  // le cambiamos el valor a la propiedad 'done', para indicar como finalizada la tarea
  tasks[taskIndex].done = !tasks[taskIndex].done
  updateTaskList()
}


function updateTaskList() {
  taskList.innerHTML = ''
  for (const task of tasks) {
    const taskItem = document.createElement('li')
    taskItem.innerText = task.text
    // const span = document.createElement('span')
    // if (task.done) {
    //   span.innerText = 'Tarea terminada'
    // } else {
    //   span.innerText = 'Tarea NO terminada'
    // }
    // taskItem.appendChild(span)
    if (task.done) {
      taskItem.classList.add('done')
    } else {
      taskItem.classList.remove('done')
    }
    taskItem.onclick = function () {
      // deleteTask(task)
      updateTask(task)
    }
    taskList.appendChild(taskItem)
  }
}

addButton.onclick = addTask