import Todos from "./component/Todos";
import TodosContextProvider from "./context/todosContext";

function App() {
  return (
    <TodosContextProvider>
      <div className="App">
        <h1>React Redux Version 1</h1>
        <Todos/>
      </div>
    </TodosContextProvider>
  );
}

export default App;
