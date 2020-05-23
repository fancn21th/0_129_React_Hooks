import { useReducer, useEffect, useMemo } from "react";

const reduceMap = {
  ADD_TODO: (todos, { title }) => [
    ...todos,
    {
      id: todos.length + 1,
      title,
      completed: false,
    },
  ],
  TOOGLE_TODO: (todos, { id }) =>
    todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ),
  DELETE_TODO: (todos, { id }) => todos.filter((todo) => todo.id !== id),
};

const useTodos = () => {
  const initialValue = () => {
    const valueFromStorage = JSON.parse(
      window.localStorage.getItem("todos") || JSON.stringify([])
    );
    return valueFromStorage;
  };

  const [todos, dispatch] = useReducer((state, { type, payload }) => {
    return reduceMap[type] ? reduceMap[type](state, payload) : state;
  }, useMemo(initialValue, []));

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return [todos, dispatch];
};

export default useTodos;
