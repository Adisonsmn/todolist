let isEditing = false;
let currentTask = null;

const addTask = () => {
  const inputValue = document.getElementById("td_input").value;

  // jika input tidak ada, maka add task tidak ada
  if (inputValue === "") {
    return;
  }

  const taskList = document.getElementById("list-task");

  if (isEditing) {
    // Jika sedang dalam mode edit, update task yang ada
    currentTask.firstChild.textContent = inputValue;
    isEditing = false;
    currentTask = null;
    document.getElementById("add-task").textContent = "Add Task";
  } else {
    // Jika tidak dalam mode edit, tambahkan task baru
    const newTask = document.createElement("li");
    newTask.textContent = inputValue;
    newTask.classList.add("listTaskContainer");
    taskList.appendChild(newTask);

    // add edit-bttn
    const editBttn = document.createElement("button");
    editBttn.textContent = "Edit";
    editBttn.classList.add("bttn-edit");
    newTask.appendChild(editBttn);

    // add delete-bttn
    const deleteBttn = document.createElement("button");
    deleteBttn.textContent = "Delete";
    deleteBttn.classList.add("bttn-delete");
    newTask.appendChild(deleteBttn);

    editBttn.onclick = () => {
      editTask(newTask);
    };

    deleteBttn.onclick = () => {
      deleteTask(newTask);
    };
  }

  // Clear the input field after adding or editing a task
  document.getElementById("td_input").value = "";
};

// arrow function deleteTask
const deleteTask = (task) => {
  task.remove();
};

// arrow Function to edit a task
const editTask = (task) => {
  const inputField = document.getElementById("td_input");
  inputField.value = task.firstChild.textContent;

  const bttnField = document.getElementById("add-task");
  bttnField.textContent = "Edit Task";

  isEditing = true;
  currentTask = task;
};

// Event listener for the add/edit button
document.getElementById("add-task").onclick = addTask;
