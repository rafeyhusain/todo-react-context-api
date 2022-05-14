import React, { useState, useContext } from 'react'
import { TodoContext } from '../../providers/TodoContext'
import TodoService from '../../services/TodoService'
import './TodoEditor.css'

function TodoEditor() {
    const [todos, setTodos] = useContext(TodoContext)
    const [title, setTitle] = useState('')

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleAddTodo = () => {
        const todoService = new TodoService(todos)
        todoService.addTodo(title)
        setTitle('')
        setTodos(todos => [...todos])
    }

    return (
        <>
            <input className="wp100" value={title} onChange={handleChange} />
            <button onClick={() => handleAddTodo()}>Add</button>
        </>
    )
}

export default TodoEditor