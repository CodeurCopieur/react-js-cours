import React from 'react'

const ListItem = ({ itemData, deleteTodo }) => {    
  return (
    <div className="p-2 bg-zinc-200 mb-2 rounded flex">
        <span>{itemData.title}</span>
        <button onClick={() => deleteTodo(itemData.id)} className="ml-auto bg-red-600 w-6 h-6 rounded text-zinc-200">X</button>
    </div>
  )
}

export default ListItem