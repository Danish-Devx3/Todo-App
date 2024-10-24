import React from 'react'

const Navbar = () => {
  return (
   <nav className='flex justify-between bg-slate-600 text-white h-9 items-center px-6 py-7'>
    <div className="logo">
        <span className='font-bold '>DaTask</span>
    </div>
    <ul className='flex justify-around gap-8' >
        <li>Home</li>
        <li>Your Tasks</li>
    </ul>
   </nav>
  )
}

export default Navbar
