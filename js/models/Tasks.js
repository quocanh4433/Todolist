export class Tasks {
  tasks = [];

  addTask = (task) => {
    let index = this.tasks.findIndex((item) => item.text === task.text);
    if (index === -1) this.tasks.push(task);
  };

  removeTask = (text) => {
    this.tasks = this.tasks.filter((item) => item.text !== text);
  };

  toggleComplete = (text) => {
    this.tasks = this.tasks.map((item) => {
      if (item.text === text) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });
  };

  renderTasks = () => {
    this.sortTasks();

    let tasksUncomplete = this.tasks
      .filter((item) => !item.isComplete)
      .reduce((content, item) => {
        if (item.isComplete === false) {
          return (content += `<li>
                  <h4>${item.text}</h4>
                  <div>
                    <i class="fa fa-trash" aria-hidden="true" onclick="handleDeleteTask('${item.text}')"></i>
                    <i class="fa fa-check-circle" aria-hidden="true" onclick="handleToggleComplete('${item.text}')"></i>
                  </div>
              </li>`);
        }
      }, "");

    let tasksComplete = this.tasks
      .filter((item) => item.isComplete)
      .reduce((content, item) => {
        if (item.isComplete === true) {
          return (content += `<li>
            <h4>${item.text}</h4>
            <div>
                <i class="fa fa-trash" aria-hidden="true" onclick="handleDeleteTask('${item.text}')"></i>
                <i class="fa fa-check-circle complete" aria-hidden="true" onclick="handleToggleComplete('${item.text}')"></i>
            </div>
        </li>`);
        }
      }, "");

    document.getElementById("todo").innerHTML = tasksUncomplete
      ? tasksUncomplete
      : null;
    document.getElementById("completed").innerHTML = tasksComplete
      ? tasksComplete
      : null;
  };

  sortTasks = (condition) => {
    return (this.tasks = this.tasks.sort((currentItem, nextItem) => {
      let comparison = 0;
      const currentText = currentItem.text.toLowerCase();
      const nextText = nextItem.text.toLowerCase();

      switch (condition) {
        case "sortUp": {
          if (currentText < nextText) comparison = -1;
          else if (currentText > nextText) comparison = 1;
          break;
        }

        case "sortDown": {
          if (currentText > nextText) comparison = -1;
          else if (currentText < nextText) comparison = 1;
          break;
        }
      }

      return comparison;
    }));
  };
}

export default Tasks;
