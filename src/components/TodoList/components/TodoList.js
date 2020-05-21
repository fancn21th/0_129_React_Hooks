import React from "react";

export default function TodoList({ todos, onDeleteTodo = () => {} }) {
  return (
    <ul>
      {todos.map(({ id, title }) => (
        <li key={id}>
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
