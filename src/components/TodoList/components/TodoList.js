import React from "react";

export default function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
}
