import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export default function ToDoList() {
  const [todos, setTodos] = useState([]);

  const onAddNewTodo = (title) => {
    setTodos((preTodos) => [
      ...preTodos,
      {
        id: preTodos.length + 1,
        title,
      },
    ]);
  };

  const onDeleteTodo = (id) => {
    setTodos((preTodos) => preTodos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <b>React Version: {React.version}</b>
      <AddTodo onAddNewTodo={onAddNewTodo}></AddTodo>
      <TodoList todos={todos} onDeleteTodo={onDeleteTodo}></TodoList>
    </>
  );
}
