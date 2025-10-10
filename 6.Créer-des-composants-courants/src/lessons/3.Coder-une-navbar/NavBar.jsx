import { useState } from 'react'
import hamburger from './assets/hamburger.svg'
import close from './assets/close.svg'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <nav className='fixed justify-center top-0 w-full p-4 bg-slate-800 text-white'>
      <ul className={`${isOpen ? 'flex' : 'hidden' } flex-col items-center 
      bg-slate-800 w-full left-0 absolute top-full pb-5
      sm:flex sm:relative sm:flex-row sm:pb-0 sm:justify-center`}>
        <li>
          <a href="#"
          className='inline-block mx-4 py-2 text-lg sm:py-0'>Home</a>
        </li>
        <li>
          <a href="#"
          className='inline-block mx-4 py-2 text-lg sm:py-0'>About</a>
        </li>
        <li>
          <a href="#"
          className='inline-block mx-4 py-2 text-lg sm:py-0'>Services</a>
        </li>
        <li>
          <a href="#"
          className='inline-block mx-4 py-2 text-lg sm:py-0'>Contact</a>
        </li>
      </ul>
      <button onClick={() => setIsOpen(!isOpen)} className='mr-auto sm:hidden'>
        <img src={isOpen ? close : hamburger} 
             alt={`${isOpen ? 'Cacher le menu' : 'Montrer le menu'}`}
             className='w-6 h-6' />
      </button>
    </nav>
  )
}