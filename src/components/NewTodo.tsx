import React, { useRef } from "react";
import "./NewTodo.css";

type NewTodoProps = {
    onAddTodo: (todoText:string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (prpps) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    prpps.onAddTodo(enteredText);
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">TODOの入力欄</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">TODO登録</button>
    </form>
  );
};

export default NewTodo;
