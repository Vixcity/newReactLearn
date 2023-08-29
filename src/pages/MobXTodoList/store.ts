import { nanoid } from "nanoid";
import { makeObservable, observable, action, computed } from "mobx";

// Todo Class
export class ObserverTodoStore {
  id = "";
  task = "";
  completed = false;
  constructor(task: string) {
    makeObservable(this, {
      id: observable,
      task: observable,
      completed: observable,
      rename: action,
      toggleComplete: action,
    });

    this.id = nanoid(5);
    this.task = task;
  }

  rename(newName: string) {
    this.task = newName;
  }
  toggleComplete() {
    this.completed = !this.completed;
  }
}

export class ObserverTodoListStore {
  todos: ObserverTodoStore[] = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      completeTodosCount: computed,
      addTodo: action,
      removeTodo: action,
    });
  }

  // get （用于计算，不用于修改） 获取已经完成的 todos 的数量
  get completeTodosCount() {
    return this.todos.filter((todo) => todo.completed).length;
  }

  addTodo(task: string) {
    const newTodo = new ObserverTodoStore(task);
    this.todos.push(newTodo); // 声明式，像 Vue
  }

  removeTodo(id: string) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    this.todos.splice(index, 1);
  }
}

const store = new ObserverTodoListStore();
export default store;
