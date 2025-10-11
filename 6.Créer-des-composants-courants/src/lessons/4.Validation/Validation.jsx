import { useState } from 'react'
import Pseudo from './Pseudo'
import Password from './Password'
import Confirmation from './Confirmation'

export default function Validation() {
    const [inputsStates, setInputsStates] = useState({
        pseudo: '',
        password: '',
        confirmPassword: '',
    })

    const [showValidation, setShowValidation] = useState({
        pseudo: false,
        password: false,
        confirmPassword: false,
    })

    const handleChange = (e) => {
        console.log(e.target.value)
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputsStates)
    }

  return (
    <form 
        className='max-w-xl mx-auto rounded-md bg-slate-800 text-white p-4'
        onSubmit={handleSubmit}>
            <p className='text-2xl font-bold mb-4 text-center'>Créez votre compte</p>

            <Pseudo />
            <Password />
            <Confirmation />

             <button type='submit' 
            className='bg-blue-500 mt-10 text-white px-4 py-2 rounded-md w-full'>Valider</button>
    </form>
  )
}