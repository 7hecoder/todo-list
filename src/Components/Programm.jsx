import React from 'react'

const Programm = () => {
  return (
    <div className="app bg-slate-100 min-h-[85vh] m-5 border border-black rounded-lg">
        <h1 className='font-bold text-center text-2xl text-slate-800'>uTask - Manage your todos at one place</h1>
        <div className="addTodo my-5 flex flex-col gap-4">
            <h2 className='text-2xl font-semibold mx-4 text-slate-800'>Add a new Todo</h2>
            <div className="flex">
                <input type="text" className='w-full rounded-lg ml-4 px-5 py-1' />
                <button className='bg-slate-800 mx-2 rounded-full mr-4 hover:bg-slate-950 disabled:bg-slate-500 p-4 py-2 text-sm font-bold text-white'>Add</button>
            </div>
        </div>

        <input className='m-4' type="checkbox" name="" id="show" />
        <label className='mx-1 text-slate-800' htmlFor="show">Show Finished</label>

        <h2 className='text-lg font-bold mx-3 text-slate-800'>Your To Dos</h2>
        <div className="todos">
        <div className="todo flex mx-3">
        <div className="text m-2 text-slate-950">Resolution 2025: Want to become a millionaire in 2025</div>
        <div className="buttons">
            <button className='bg-slate-800 mx-1 rounded-full hover:bg-slate-950 disabled:bg-slate-500 p-4 py-2 text-sm font-bold text-white'>Edit</button>
            <button className='bg-slate-800 mx-1 rounded-full hover:bg-slate-950 disabled:bg-slate-500 p-4 py-2 text-sm font-bold text-white'>Delete</button>
        </div>
        </div>
        </div>


    </div>
  )
}

export default Programm
