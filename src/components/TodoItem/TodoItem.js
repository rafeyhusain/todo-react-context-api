import React, { useContext } from 'react'
import { TodoContext } from '../../providers/TodoContext'
import TodoService from '../../services/TodoService'
import './TodoItem.css'

function TodoItem({ todo }) {
    const [todos, setTodos] = useContext(TodoContext)

    const handleTodoDelete = () => {
        console.log(todo)
        const todoService = new TodoService(todos)
        todoService.deleteTodo(todo.id)
        setTodos(todos => [...todos])
    }

    return (
        <div key={todo.id}>
            <div className='card-title'>{todo.title}</div>
            <div className='card-x' onClick={handleTodoDelete}>x</div>
        </div>
    )
}

export default TodoItem