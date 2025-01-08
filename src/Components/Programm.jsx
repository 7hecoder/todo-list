import React from 'react'
import { useState } from 'react';

const Programm = () => {

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    setTodos ([...todos, {id: uuidv4(), todo, isCompleted: false}])
    setTodo ("");
    console.log(todos);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleDelete = () => {};
  const handleEdit = () => {};
  const handleCheckbox = () => {};

  return (
    <div className="app bg-slate-100 min-h-[85vh] m-5 border border-black rounded-lg">
        <h1 className='font-bold text-center text-2xl text-slate-800'>uTask - Manage your todos at one place</h1>
        <div className="addTodo my-5 flex flex-col gap-4">
            <h2 className='text-2xl font-semibold mx-4 text-slate-800'>Add a new Todo</h2>
            <div className="flex">
                <input onChange={handleChange} value={todo} type="text" className='w-full rounded-lg ml-4 px-5 py-1' />
                <button onClick={handleAdd} className='bg-slate-800 mx-2 rounded-full mr-4 hover:bg-slate-950 disabled:bg-slate-500 p-4 py-2 text-sm font-bold text-white'>Add</button>
            </div>
        </div>
        <h2 className='text-lg font-bold mx-3 text-slate-800'>Your To Dos</h2>
        <div className="todos">

        <label className='mx-1 text-slate-800' htmlFor="show">Show Finished</label>

          {todos.map(item=>{
            return <div key={todo} className="todo flex mx-3 justify-between w-2/4 my-1">
        <input onChange={handleCheckbox} className='m-4' type="checkbox" name="" id="show" />
        <div className={item.isCompleted?"line-through" : ""}>{item.todo}</div>
        <div className="buttons">
            <button onClick={handleEdit} className='bg-slate-800 mx-1 rounded-full hover:bg-slate-950 disabled:bg-slate-500 p-4 py-2 text-sm font-bold text-white'>Edit</button>
            <button onClick={handleDelete}  className='bg-slate-800 mx-1 rounded-full hover:bg-slate-950 disabled:bg-slate-500 p-4 py-2 text-sm font-bold text-white'>Delete</button>
        </div>
        </div>
        })}
        </div>


    </div>
  )
}

export default Programm
