import TodoEditor from "./components/TodoEditor/TodoEditor";
import TodoList from "./components/TodoList/TodoList";
import TodoContextProvider from "./providers/TodoContext";
import './App.css'

function App() {
  return (
    <div className="container">
      <TodoContextProvider>
        <TodoEditor></TodoEditor>
        <br></br>
        <TodoList></TodoList>
      </TodoContextProvider>
    </div>
  );
}

export default App;
