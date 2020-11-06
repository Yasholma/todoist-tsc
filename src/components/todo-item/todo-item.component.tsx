import React from "react";
import { ITodoItem } from "../../types";
import "./todo-item.styles.scss";

function TodoItem({
  item: { id, title, completed },
  handleRemoveTodo,
  handleCompleteTodo,
}: ITodoItem): JSX.Element {
  return (
    <div className={`todo-item ${completed && "completed"}`}>
      <span className="title">{title}</span>
      <div className="buttons">
        {!completed && (
          <span className="complete" onClick={() => handleCompleteTodo(id)}>
            &#10003;
          </span>
        )}
        <span className="remove" onClick={() => handleRemoveTodo(id)}>
          &#10005;
        </span>
      </div>
    </div>
  );
}

export default TodoItem;
