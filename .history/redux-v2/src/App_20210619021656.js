import React from 'react';
import TodoForm from './component/TodoForm';
import Todos from './component/Todos';
import {Provider} from 'react-redux'
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux Ver 2</h1>
        <TodoForm/>
        <Todos/>
      </div>
    </Provider>
  );
}

export default App;
