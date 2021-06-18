import Todos from "./component/Todos";
import todosContextProvider from "./context/todosContext";

function App() {
  return (
    <todosContextProvider>
      <div className="App">
        <h1>React Redux Version 1</h1>
        <Todos/>
      </div>
    </todosContextProvider>
  );
}

export default App;
