import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample Task", id: uuidv4(), isDone: false }]);
  let [newTodo, setNewTodos] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodos("");
  };

  let updateNewValue = (event) => {
    setNewTodos(event.target.value)
  };

  let deleteFunc = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let markAllDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <input placeholder="add a task"
        value={newTodo}
        onChange={updateNewValue}
      ></input>
      &nbsp;  &nbsp;
      <button onClick={addNewTask}>Add Task</button>
      <br></br>  <br></br>  <br></br>
      <h4>Task Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone ? {color: "blue"} : {}}>{todo.task}</span>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => deleteFunc(todo.id)}>delete</button>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => markAsDone(todo.id)}>markAsDone</button>
          </li>
        ))}
        <br></br>
      </ul>
      <button onClick={markAllDone}>Mark all as Done</button>
    </div>
  );
}