const todoList = document.getElementById("todoList");
const inputField = document.getElementById("inputTask");
const addBtn = document.getElementById("addBtn");


//GET TASKS
const getTasks = async () => {
  const todos = await getData();

  todos.forEach((todo) => {
    const newLi = document.createElement("li");
    const todoText = document.createElement("span");
    const textNode = document.createTextNode(todo.description); 
    const bin = document.createElement("i");
    newLi.setAttribute("id", todo._id);
    bin.setAttribute("class", "deleteBtn far fa-trash-alt");
    bin.addEventListener("click", deleteTask);
    todoText.appendChild(textNode);
    newLi.appendChild(todoText);
    newLi.appendChild(bin);
    todoList.appendChild(newLi);
  });
};

getTasks();

//ADD TASK
const AddTask = async () => {
  const todo = { description: inputField.value, done: false };
  await postTask(todo);
  await getTasks();
  inputField.value = "";
};

addBtn.addEventListener("click", () => {
    AddTask();
    todoList.innerHTML = "";
});

//DELETE TASK
const deleteTask = async (e) => {
  const taskToDelete = e.target.parentNode;
  const id = taskToDelete.getAttribute("id");
  taskToDelete.remove(); 
  deleteTaskAPI(id);
};







 
