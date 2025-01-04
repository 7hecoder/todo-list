import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex px-4 py-3 justify-between bg-slate-600 text-white'>
        <div className="logo">
            <span className='font-bold text-xl'>uTask</span>
        </div>
        <ul className='flex gap-5'>
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Your Task</li>

        </ul>
    </nav>
  )
}

export default Navbar
