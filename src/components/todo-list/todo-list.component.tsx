import React from "react";
import { ITodo, ITodoList } from "../../types";
import TodoItem from "../todo-item/todo-item.component";
import "./todo-list.styles.scss";

function TodoList({
  todos,
  handleRemoveTodo,
  handleCompleteTodo,
}: ITodoList | any): JSX.Element {
  return (
    <div className="todo-list">
      {todos &&
        todos.map(
          (todo: ITodo): JSX.Element => (
            <TodoItem
              key={todo.id}
              handleRemoveTodo={() => handleRemoveTodo(todo.id)}
              handleCompleteTodo={() => handleCompleteTodo(todo.id)}
              item={todo}
            />
          )
        )}
    </div>
  );
}

export default TodoList;
