import Tasks from "./models/Tasks.js";
import Task from "./models/Task.js";
import { getValueById, setLocalStorage } from "./helper/helper.js";

const tasksModel = new Tasks();

const init = () => {
  const tasksLocalStorage = JSON.parse(
    localStorage.getItem("tasksLocalStorage")
  );

  if (tasksLocalStorage) {
    tasksModel.tasks = tasksLocalStorage;
    tasksModel.renderTasks();
  }
};

init();

document.getElementById("addItem").onclick = () => {
  let value = getValueById("newTask");
  if (value) {
    let task = new Task(value);
    tasksModel.addTask(task);
    tasksModel.renderTasks();
    setLocalStorage(tasksModel.tasks);
    document.getElementById("newTask").value = "";
  }
};

window.handleDeleteTask = (text) => {
  tasksModel.removeTask(text);
  tasksModel.renderTasks();
  setLocalStorage(tasksModel.tasks);
};

window.handleToggleComplete = (text) => {
  tasksModel.toggleComplete(text);
  tasksModel.renderTasks();
  setLocalStorage(tasksModel.tasks);
};

window.sortDown = () => {
  tasksModel.sortTasks("sortDown");
  tasksModel.renderTasks();
  setLocalStorage(tasksModel.tasks);
};

window.sortUp = () => {
  tasksModel.sortTasks("sortUp");
  tasksModel.renderTasks();
  setLocalStorage(tasksModel.tasks);
};
