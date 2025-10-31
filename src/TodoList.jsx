import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample-task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodo) => {
      return [...prevTodo, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };
  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };
  let deleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodos) => prevTodos.id != id)
    );
  };

  let upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let UpperCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };
  let DoneAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: !todo.isDone,
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
            isDone: !todo.isDone,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        placeholder="Add task todo"
        value={newTodo}
        onChange={updateTodoValue}
      />{" "}
      <br />
      <button onClick={addNewTask}>Add</button>
      <hr />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.isDone ? "line-through" : "none",
                color: todo.isDone ? "gray" : "black",
              }}
            >
              {todo.task}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => UpperCaseOne(todo.id)}>
              {" "}
              Upper Case One
            </button>
            <button onClick={() => markAsDone(todo.id)}> Mark As Done</button>
            <br />
          </li>
        ))}
      </ul>
      <button onClick={upperCaseAll}> Upper Case All</button>
      <button onClick={DoneAll}> Done All</button>
    </div>
  );
}
