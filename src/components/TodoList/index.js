import React, { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const useLocalStorage = (key, defaultValue, callback) => {
  const initialValue = () => {
    const valueFromStorage = JSON.parse(
      window.localStorage.getItem(key) || JSON.stringify(defaultValue)
    );
    if (callback) callback(valueFromStorage);
    return valueFromStorage;
  };
  const [storage, setStorage] = useState(initialValue);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storage));
  }, [storage]);

  return [storage, setStorage];
};

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

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
