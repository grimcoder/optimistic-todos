import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { useState } from 'react';
import { Todo, createTodo } from './api.ts';

import { ToastContainer, toast } from 'react-toastify';
// import { Requirements } from './Requirements';

function App() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState([]);
  const [locked, setLocked] = useState(false);

  async function submit(e) {
    
    e.preventDefault();
    // if (locked) return;
    const tempId = Math.random(Number.MAX_VALUE);

    const rawTodo: Todo = {
      id: tempId,
      title: currentTodo,
      isCompleted: false,
    };
    console.log(rawTodo);
    setLocked(true);
    const newTodo = createTodo(rawTodo)
      .then((data) => {
        setLocked(false)
        console.log(data.todo);
        const lastTodo = todos.filter((t) => t.id === tempId);
        lastTodo.id = data.todo.id;
      })
      .catch((data) => {
        setLocked(false)
        toast('string is not 6 digits long');
        const goodTodos = todos.filter((t) => t.id !== tempId);
        setTodos(goodTodos);
      });

    

    setTodos([rawTodo, ...todos]);

    setCurrentTodo('');
  }

  function updateCurrentTodo(e: any) {
    if (e.target.value) setCurrentTodo(e.target.value);
  }

  return (
    <>
      <h1>Todos</h1>
      <div className="container">
        <form onSubmit={submit}>
          <input
            onChange={updateCurrentTodo}
            placeholder="What needs to be done?"
            value={currentTodo}
          ></input>
          {todos.map((item, i) => (
            <div key={i} className="todos">
              <div>
                <input type="checkbox" />
              </div>
              &nbsp;
              <div>{item.title}</div>
            </div>
          ))}
        </form>
        <div className="actions">
          <div>{`items left`}</div>&nbsp; |&nbsp;
          <div>Clear completed</div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
