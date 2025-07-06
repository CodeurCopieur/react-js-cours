import './App.css'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import ListItem from './components/ListItem'

function App() {

  const [todoList, setTodoList] = useState([
    { id: nanoid(8), title: 'Faire les courses :)', completed: false},
    { id: nanoid(8), title: 'Faire le ménage :)', completed: false},
    { id: nanoid(8), title: 'Faire le sport :)', completed: false},
  ])

  function deleteTodo(id) {
    setTodoList(todoList.filter((item) => item.id !== id))
  }

  return (
    <>
      <div className='h-screen bg-slate-900'>
        <div className='max-w-4xl mx-auto pt-20 px-6'>
          <h1 className='text-4xl font-bold text-white'>
            Todo App
          </h1>

          <form className='mb-10'>
            <label htmlFor="todo-item" className='text-slate-50'>
              Ajouter une chose à faire
            </label>
            <input type="text" id="todo-item" className='mt-1 block p-4 w-full rounded-md border-gray-700 bg-slate-800 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500' placeholder='Ajouter une chose à faire' />
            <button type='submit' className='mt-4 w-full rounded-md bg-blue-600 py-4 text-white'>Ajouter</button>
          </form>
          {todoList.map((item) => (
            <ListItem key={item.id} itemData={item} deleteTodo={deleteTodo} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
