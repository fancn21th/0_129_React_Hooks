import React, { useState } from "react";

export default function AddTodo({ onAddNewTodo = () => {} }) {
  const [text, setText] = useState("");
  const onAddNewTodoClick = () => {
    onAddNewTodo(text);
    setText("");
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={onAddNewTodoClick}>Add a new Todo</button>
    </div>
  );
}
