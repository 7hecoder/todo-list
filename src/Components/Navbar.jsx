import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex px-4 py-3 justify-between bg-slate-600 text-white'>
        <div className="logo ml-5">
            <span className='text-white font-bold text-xl border border-white px-2 py-1 rounded-lg'>uTask</span>
        </div>
        <ul className='flex gap-5 mr-10'>
            <li className='cursor-pointer underline hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer underline hover:font-bold transition-all'>Your Task</li>

        </ul>
    </nav>
  )
}

export default Navbar
