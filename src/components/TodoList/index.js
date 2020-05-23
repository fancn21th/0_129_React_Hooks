import React, { useReducer } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import useLocalStorage from "./hooks/useLocalStorage";
import useDocumentTitle from "./hooks/useDocumentTitle";
import useTodos from "./hooks/useTodos";

const inCompleteTodosCount = (todos) =>
  todos.reduce((acc, todo) => (!todo.completed ? acc + 1 : acc), 0);

export default function ToDoList() {
  console.log("ToDoList refresh");

  const [todos, dispatch] = useTodos();
  const inCompleteCount = inCompleteTodosCount(todos);
  const title = `Todos (${inCompleteCount})`;

  useDocumentTitle(title);

  const onAddNewTodo = (title) => {
    dispatch({
      type: "ADD_TODO",
      payload: {
        title,
      },
    });
  };

  const onDeleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: { id } });
  };

  const onCheckTodo = (id) => {
    dispatch({ type: "TOOGLE_TODO", payload: { id } });
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
