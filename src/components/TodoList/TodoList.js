import React, { useContext } from 'react'
import TodoItem from '../TodoItem/TodoItem'
import { TodoContext } from '../../providers/TodoContext';
import './TodoList.css'

function TodoList() {
    const [todos, setTodos] = useContext(TodoContext)

    console.log("TodoList", todos)
    const list = todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo}></TodoItem>
    })

    return (
        <div className='card-container'>
            {list}
        </div>
    )
}

export default TodoList