import './App.css'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import ListItem from './components/ListItem'

function App() {

  const [todoList, setTodoList] = useState([])

  const [newTodo, setNewTodo] = useState('')

  const [showValidated, setShowValidated] = useState(false)

  function deleteTodo(id) {
    setTodoList(todoList.filter((item) => item.id !== id))
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (newTodo.trim() === '') {
      setShowValidated(true)
      return
    }

    setTodoList([...todoList, { id: nanoid(8), title: newTodo, completed: false }])
    setNewTodo('')
    setShowValidated(false)
  }

  return (
    <>
      <div className='h-screen'>
        <div className='max-w-4xl mx-auto pt-20 px-6'>
          <h1 className='text-4xl font-bold text-white'>
            Todo App
          </h1>

          <form onSubmit={handleSubmit} className='mb-10'>
            <label htmlFor="todo-item" className='text-slate-50'>
              Ajouter une chose à faire
            </label>
            <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} type="text" id="todo-item" 
              className='mt-1 block p-4 w-full rounded-md border-gray-700 bg-slate-800 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500' placeholder='Ajouter une chose à faire' />
            {showValidated && <p className='text-red-500'>Veuillez entrer une chose à faire</p>}
            <button type='submit' className='mt-4 w-full rounded-md bg-blue-600 py-4 text-white'>Ajouter</button>
          </form>

          {
            todoList.length > 0 ? (
              todoList.map((item) => (
                <ListItem key={item.id} itemData={item} deleteTodo={deleteTodo} />
              ))
            ) : (
              <p className='text-slate-50'>Aucune chose à faire</p>
            )
          }
        </div>
      </div>
    </>
  )
}

export default App
