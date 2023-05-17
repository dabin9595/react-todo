import React from "react";
import "./TodoListItem.scss";

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem">
      <input
        type="checkbox"
        className="check_box"
        onClick={() => onToggle(id)}
      />
      <span>{text}</span>
      <button className="remove" onClick={() => onRemove(id)}>
        삭제
      </button>
    </div>
  );
};
export default React.memo(TodoListItem);
