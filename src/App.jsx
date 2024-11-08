import React from "react";
import { useState } from "react";
import AddToDo from "./components/AddToDo";
import ListToDo from "./components/ListToDo";
import "./App.css";
const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("datas"))
      ? JSON.parse(localStorage.getItem("datas"))
      : []
  );
  // const [tempEdit, settempEdit] = useState([]);
  // const [editData, seteditData] = useState({ id: "", title: "" });
  const [todo, setTodo] = useState({
    id: "",
    title: "",
  });
  const [isEdit, setisEdit] = useState(false);
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-800">
      <h2 className="text-4xl text-green-500 shadow font-bold my-2">ToDo</h2>
      <AddToDo
        setTodos={setTodos}
        todo={todo}
        todos={todos}
        setTodo={setTodo}
        isEdit={isEdit}
        setisEdit={setisEdit}
      />

      <ListToDo
        todos={todos}
        setTodos={setTodos}
        todo={todo}
        setTodo={setTodo}
        isEdit={isEdit}
        setisEdit={setisEdit}
      />
    </div>
  );
};

export default App;
