import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const EditButton = styled.button`
  border: none;
  border-radius: 30px;
  color: green;
  height: 30px;
  width: 100px;
  background-color: lightblue;
`;
const DeleteButton = styled.button`
  border: none;
  border-radius: 30px;
  color: red;
  height: 30px;
  width: 100px;
  background-color: lightblue;
`;

function ListToDo(props) {
  const deleteTodo = (id) => {
    props.setTodos((prev) => prev.filter((eachitems) => eachitems.id != id));
  };

  const editTodo = (id) => {
    const editTodo = props.todos.filter((item) => item.id === id);
    props.setTodo({ id: editTodo[0].id, title: editTodo[0].title });
    props.setisEdit(true);
  };

  localStorage.setItem("datas", JSON.stringify(props.todos));

  return (
    <div>
      <ul>
        {props.todos.map((items) => (
          <li
            key={items.id}
            className=" text-lg bg-white my-2 p-2 w-96  rounded-2xl"
          >
            <p className="font-bold">{items.title}</p>
            <EditButton onClick={() => editTodo(items.id)}>Edit</EditButton>
            <DeleteButton onClick={() => deleteTodo(items.id)}>
              Delete
            </DeleteButton>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListToDo;
