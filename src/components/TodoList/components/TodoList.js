import React from "react";

export default function TodoList({
  todos,
  onDeleteTodo = () => {},
  onCheckTodo = () => {},
}) {
  return (
    <ul>
      {todos.map(({ id, title }) => (
        <li key={id}>
          <input
            type="checkbox"
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
