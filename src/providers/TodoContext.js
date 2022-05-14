import { useState, createContext } from 'react'
import TodoService from '../services/TodoService';

export const TodoContext = createContext()

function TodoContextProvider(props) {
    const [todos, setTodos] = useState([])

    return (
        <TodoContext.Provider value={[todos, setTodos]}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider