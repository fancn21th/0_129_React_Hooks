import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import useLocalStorage from "./hooks/useLocalStorage";
import useDocumentTitle from "./hooks/useDocumentTitle";

export default function ToDoList() {
  const [todos, setTodos] = useLocalStorage("todos", [], (values) => {});

  const imCompleteTodosCount = todos.reduce(
    (acc, todo) => (!todo.completed ? acc + 1 : acc),
    0
  );

  const title = `Todos (${imCompleteTodosCount})`;

  useDocumentTitle(title);

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
