import { useState } from 'react'

export default function Pseudo() {
  return (
    <>
        <label 
            htmlFor="userName"
            className='text-slate-50'
            >Votre pseudo (3-64 caractères)</label>
        <input id="userName"
            type="text"
            className='mt-1 block p-4 w-full rounded-md border-gray-700  text-white placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500'
            placeholder='Entrez votre pseudo' />
    </>
  )
}