const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");



addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    


    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
        li.classList.toggle("completed");
    });

    const span = document.createElement("span");
    span.textContent = taskText;


    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(li);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);


    taskList.appendChild(li);

    taskInput.value = "";
});
