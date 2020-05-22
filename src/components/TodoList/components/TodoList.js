import React from "react";

export default function TodoList({
  todos,
  onDeleteTodo = () => {},
  onCheckTodo = () => {},
}) {
  return (
    <ul>
      {todos.map(({ id, title, completed }) => (
        <li key={id}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => {
              onCheckTodo(id);
            }}
          />
          {title}{" "}
          <button
            onClick={() => {
              onDeleteTodo(id);
            }}
          >
            delete {id}
          </button>
        </li>
      ))}
    </ul>
  );
}
