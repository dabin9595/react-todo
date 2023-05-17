import "./TodoInsert.scss";
import { useState, useCallback } from "react";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        value={value}
        onChange={onChange}
        placeholder="오늘 할일을 입력하세요!"
      />
      <button type="submit">입력</button>
    </form>
  );
};
export default TodoInsert;
