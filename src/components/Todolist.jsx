import React, { useState } from "react";

const Todolist = () => {
  const [todolist, setTodolist] = useState([]);

  const saveToDoList = (e) => {
    e.preventDefault();

    const toname = e.target.toname.value;

    if (!todolist.includes(toname)) {
      const finaltodolist = [...todolist, toname];
      setTodolist(finaltodolist);
    } else {
      alert("Todo name already exists");
    }

    e.target.reset();
  };

  return (
    <div>
      <form
        onSubmit={saveToDoList}
        className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md w-full max-w-3/5 m-auto"
      >
        <input
          type="text"
          name="toname"
          placeholder="Enter your task..."
          className="flex-1 px-4 py-2 border-2 border-indigo-500 rounded-lg"
        />

        <button
          type="submit"
          className="px-5 py-2 bg-indigo-600 text-white rounded-lg"
        >
          Save
        </button>
      </form>

      <div className="w-full max-w-3/5 m-auto">
        <ul>
          {todolist.map((value, index) => (
            <TodolistItem key={index} value={value} indexnumber={index} todolist={todolist}  setTodolist={setTodolist}/>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todolist;

function TodolistItem({ value, indexnumber, todolist, setTodolist }) {

const [status, setStatus] = useState(false);  

const deleterow = () =>{
  const finaldata = todolist.filter((v,i)=>i!=indexnumber)
  setTodolist(finaldata)
}

const checkstatus = ()=>{
  setStatus(!status)
}

  return <li 
  className={`${status ? "bg-amber-300 line-through text-red-500" : "bg-black text-white"} mt-2.5 p-2 flex justify-between`}
  onClick={checkstatus}>{value}<button onClick={deleterow} className="bg-white p-1.5 text-black">Delete</button></li>;
}