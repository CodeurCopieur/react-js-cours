import { useState } from 'react'

export default function Password({inputsStates, setInputsStates, showValidation}) {
  return (
    <>
        <label 
                htmlFor="password"
            className='text-slate-50 inline-block mt-5'
            >Votre mot de passe doit avoir au moins unchiffre et 6 caractères</label>
        <input id="password"
            type="password"
            className='mt-1 block p-4 w-full rounded-md border-gray-700 placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500'
            value={inputsStates.password}
            onChange={(e) => setInputsStates({...inputsStates, password: e.target.value})}
            placeholder='Entrez votre mot de passe' />
        {showValidation.password && (
          <p className='text-red-500'>
            Veuillez entrer un mot de passe valide (6 caractères minimum et un chiffre minimum)
            </p>)}
    </>
  )
}