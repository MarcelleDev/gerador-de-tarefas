document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const generateTaskButton = document.getElementById("generateTask");
    const taskList = document.getElementById("taskList");

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    renderTasks();

    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            tasks.push(taskText);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            renderTasks();
            taskInput.value = "";
        }
    });

    generateTaskButton.addEventListener("click", () => {
        const randomTasks = ["Ler um artigo", "Praticar código", "Fazer exercício", "Estudar uma nova tecnologia"];
        const randomTask = randomTasks[Math.floor(Math.random() * randomTasks.length)];
        tasks.push(randomTask);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
    });

    function renderTasks() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.textContent = task;
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "X";
            deleteButton.classList.add("delete");
            deleteButton.addEventListener("click", () => {
                tasks.splice(index, 1);
                localStorage.setItem("tasks", JSON.stringify(tasks));
                renderTasks();
            });
            li.appendChild(deleteButton);
            taskList.appendChild(li);
        });
    }
});
