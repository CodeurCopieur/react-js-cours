import { useState } from 'react'

export default function Password() {
  return (
    <>
        <label 
                htmlFor="password"
            className='text-slate-50 inline-block mt-5'
            >Votre mot de passe doit avoir au moins unchiffre et 6 caractères</label>
        <input id="password"
            type="password"
            className='mt-1 block p-4 w-full rounded-md border-gray-700  text-white placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500'
            placeholder='Entrez votre mot de passe' />
    </>
  )
}