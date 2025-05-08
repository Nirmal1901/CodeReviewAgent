
// taskManager.js - A simple Task Manager class

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(title) {
    const task = {
      id: this.tasks.length + 1,
      title,
      completed: false,
      createdAt: new Date(),
    };
    this.tasks.push(task);
    console.log(`Added task: "${title}"`);
  }

  completeTask(id) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = true;
      console.log(`Task "${task.title}" marked as completed.`);
    } else {
      console.log(`Task with ID ${id} not found.`);
    }
  }

  listTasks(showCompleted = true) {
    const filtered = this.tasks.filter(t => showCompleted || !t.completed);
    if (filtered.length === 0) {
      console.log("No tasks to show.");
      return;
    }
    filtered.forEach(t => {
      console.log(`[${t.completed ? "✓" : " "}] ${t.id}. ${t.title} (Created: ${t.createdAt.toLocaleString()})`);
    });
  }

  deleteTask(id) {
    const index = this.tasks.findIndex(t => t.id === id);
    if (index !== -1) {
      const [removed] = this.tasks.splice(index, 1);
      console.log(`Deleted task: "${removed.title}"`);
    } else {
      console.log(`No task found with ID ${id}`);
    }
  }
}

// Example usage
const tm = new TaskManager();
tm.addTask("Write report");
tm.addTask("Email client");
tm.listTasks();
tm.completeTask(1);
tm.listTasks(false);
tm.deleteTask(2);
tm.listTasks();
