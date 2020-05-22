import React, { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export default function ToDoList() {
  // 初始化方法 2
  const initialTodos = () =>
    JSON.parse(window.localStorage.getItem("todos") || "[]");
  const [todos, setTodos] = useState(initialTodos);

  // 初始化方法 1
  // useEffect(() => {
  //   const lsTodos = JSON.parse(localStorage.getItem("todos")) || [];
  //   setTodos(lsTodos);
  // }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onAddNewTodo = (title) => {
    setTodos((preTodos) => [
      ...preTodos,
      {
        id: preTodos.length + 1,
        title,
        completed: false,
      },
    ]);
  };

  const onDeleteTodo = (id) => {
    setTodos((preTodos) => preTodos.filter((todo) => todo.id !== id));
  };

  const onCheckTodo = (id) => {
    setTodos((preTodos) =>
      preTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <b>React Version: {React.version}</b>
      <AddTodo onAddNewTodo={onAddNewTodo}></AddTodo>
      <TodoList
        todos={todos}
        onDeleteTodo={onDeleteTodo}
        onCheckTodo={onCheckTodo}
      ></TodoList>
    </>
  );
}
