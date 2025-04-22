let tasks = [];

// Load from localStorage when page loads
window.onload = () => {
  const savedTasks = localStorage.getItem('tasks');
  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
    updateTasksList();
  }
};

const saveTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const addTask = () => {
  const taskInput = document.getElementById("taskInput");
  const text = taskInput.value.trim();

  if (text) {
    tasks.push({ text: text, completed: false });
    taskInput.value = "";
    updateTasksList();
    saveTasks();
  }
};

const updateTasksList = () => {
  const taskList = document.querySelector(".task-list");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");

    listItem.innerHTML = `
      <div class='taskItem'>
        <div class="task ${task.completed ? "completed" : ""}">
          <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""} />
          <p>${task.text}</p>
        </div>
        <div class="buttons">
          <button class="editBtn" onclick="editTask(${index})">Edit</button>
          <button class="deleteBtn" onclick="deleteTask(${index})">Delete</button>
        </div>
      </div>
    `;

    const checkbox = listItem.querySelector(".checkbox");
    checkbox.addEventListener("change", () => {
      toggleTaskComplete(index);
    });

    taskList.appendChild(listItem);
  });

  updateStats();
};

const toggleTaskComplete = (index) => {
  tasks[index].completed = !tasks[index].completed;
  updateTasksList();
  saveTasks();
};

const deleteTask = (index) => {
  tasks.splice(index, 1);
  updateTasksList();
  saveTasks();
};

const editTask = (index) => {
  const newText = prompt("Edit your task:", tasks[index].text);
  if (newText !== null && newText.trim() !== "") {
    tasks[index].text = newText.trim();
    updateTasksList();
    saveTasks();
  }
};

const updateStats = () => {
  const completed = tasks.filter((task) => task.completed).length;
  const total = tasks.length;

  const progress = document.getElementById("progress");
  const numbers = document.getElementById("numbers");

  if (total === 0) {
    progress.style.width = "0%";
    numbers.textContent = `0/0`;
  } else {
    const percentage = (completed / total) * 100;
    progress.style.width = `${percentage}%`;
    numbers.textContent = `${completed}/${total}`;
  }
};

document.getElementById("newTask").addEventListener("click", function (e) {
  e.preventDefault();
  addTask();
});
