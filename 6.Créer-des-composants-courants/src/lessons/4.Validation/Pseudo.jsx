import { useState } from 'react'

export default function Pseudo({inputsStates, setInputsStates, showValidation}) {
  return (
    <>
        <label 
            htmlFor="userName"
            className='text-slate-50'
            >Votre pseudo (3-64 caractères)</label>
        <input id="userName"
            type="text"
            className='mt-1 block p-4 w-full rounded-md border-gray-700 placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500'
            value={inputsStates.pseudo}
            onChange={(e) => setInputsStates({...inputsStates, pseudo: e.target.value})}
            placeholder='Entrez votre pseudo' />
        {showValidation.pseudo && (
          <p className='text-red-500'>
            Veuillez entrer un pseudo valide (3-64 caractères)
            </p>)}
    </>
  )
}