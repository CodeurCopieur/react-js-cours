import { useState } from 'react'

export default function Confirmation() {
  return (
    <>
        <label 
            htmlFor="confirmPassword"
        className='text-slate-50 inline-block mt-5'
        >Confirmer votre mot de passe</label>
        <input id="confirmPassword"
            type="password"
            className='mt-1 block p-4 w-full rounded-md border-gray-700  text-white placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500'
            placeholder='Entrez votre mot de passe' />
    </>
  )
}