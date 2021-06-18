import TodoForm from "./component/TodoForm";
import Todos from "./component/Todos";
import TodosContextProvider from "./context/todosContext";

function App() {
  return (
    <TodosContextProvider>
      <div className="App">
        <h1>React Hooks</h1>
        <TodoForm/>
        <Todos/>
      </div>
    </TodosContextProvider>
  );
}

export default App;
