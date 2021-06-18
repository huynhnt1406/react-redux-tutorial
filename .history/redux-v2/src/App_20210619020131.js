import React from 'react';
import TodoForm from './component/TodoForm';
import Todos from './component/Todos';

function App() {
  return (
    <div className="App">
      <h1>Redux Ver 2</h1>
      <Todos/>
      <TodoForm/>
    </div>
  );
}

export default App;
