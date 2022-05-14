class TodoService {
    constructor(todos) {
        this.todos = todos
    }

    getTodos() {
        return this.todos
    }

    addTodo(title) {
        this.todos.push({ id: this.todos.length + 1, title: title })
        console.log("addTodo", this.todos)
    }

    deleteTodo(id) {
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id === id) {
                this.todos.splice(i, 1)
                break;
            }
        }
    }
}

export default TodoService