import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export default function ToDoList() {
  const [todos, setTodos] = useState([]);

  const onAddNewTodo = (title) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title,
      },
    ]);
  };

  return (
    <>
      <AddTodo onAddNewTodo={onAddNewTodo}></AddTodo>
      <TodoList todos={todos}></TodoList>
    </>
  );
}
