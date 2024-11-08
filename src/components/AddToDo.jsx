import React, { useEffect, useRef } from "react";
import { useState } from "react";
import styles from "./AddToDo.module.css";

const AddToDo = ({ todo, setTodo, setTodos, isEdit, setisEdit, todos }) => {
  // const [todo, setTodo] = useState("");

  const [isTodo, setisTodo] = useState(true);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const addTodoHandler = () => {
    if (todo.title !== "") {
      // setisTodo(true);
      setTodos((prev) => [...prev, todo]);
      setTodo({
        id: "",
        title: "",
      });
    } else {
      setisTodo(false);
    }
  };

  const updateTodo = () => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id == todo.id  ?{ ...item, title: todo.title } : item
      )
    );
    // setTodo(todo);
    console.log(todo);
    console.log(todos);

    setisEdit(false);
    setTodo({ id: "", title: "" });
  };

  return (
    <div className={styles.addToDo}>
      <input
        type="text"
        placeholder="Add todo"
        ref={inputRef}
        // value={todo}
        value={todo.title}
        // onChange={(e)=>setTodo(e.target.value)}
        onChange={(e) => {
          setTodo({
            id: !isEdit ? Math.random() : todo.id,
            title: e.target.value,
          });
        }}
      />
      {!isTodo && (
        <p style={{ fontSize: "20px", color: "red" }}> Todo is empty.</p>
      )}
      {!isEdit ? (
        <button onClick={addTodoHandler}>Add Todo</button>
      ) : (
        <button onClick={updateTodo}>Update</button>
      )}
    </div>
  );
};

export default AddToDo;
