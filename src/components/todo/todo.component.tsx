import React from "react";
import "./todo.styles.scss";
import useFetch from "../../hooks/useFetch";
import withSpinner from "../../hoc/withSpinner";
import TodoList from "../todo-list/todo-list.component";
import { ITodo } from "../../types";

const TodoListWithLoading = withSpinner(TodoList);

function Todo(): JSX.Element {
  const [todos, setTodos, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const removeTodo = (id: number): void => {
    const newTodos = todos.filter((todo: ITodo) => todo.id !== id);
    setTodos(newTodos);
  };

  const completeTodo = (id: number): void => {
    const updatedTodos = todos.map((todo: ITodo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="todos">
      <TodoListWithLoading
        todos={todos}
        handleRemoveTodo={removeTodo}
        handleCompleteTodo={completeTodo}
        isLoading={loading}
      />
    </div>
  );
}

export default Todo;
