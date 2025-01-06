import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const Form = ({input, setInput, todos, setTodos}) => {
    const onInputChange = (e) => {
        setInput(e.target.value);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
        setInput("");
    };
  return (
    <form onSubmit={onFormSubmit}>
        <div className="flex">
            <input type="text" className='w-full rounded-lg ml-4 px-5 py-1' placeholder='Enter a Task...' value={input} onChange={onInputChange}/>
            <button className='bg-slate-800 mx-2 rounded-full mr-4 hover:bg-slate-950 disabled:bg-slate-500 p-4 py-2 text-sm font-bold text-white'>Add</button>
        </div>
    </form>
  )
}

export default Form
