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

    console.log(inputsStates)

    const handleChange = (e) => {
        console.log(e.target.value)
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputsStates)

        if(validationCheck()) {
            console.log("Validation successful")
        }
    }

    function validationCheck() {
        const areValid = {
            pseudo: false,
            password: false,
            confirmPassword: false,
        }

        if(inputsStates.pseudo.length < 3 || inputsStates.pseudo.length > 64) {
            setShowValidation(state => ({...state, pseudo: true}))
        } else {
            areValid.pseudo = true;
            setShowValidation(state => ({...state, pseudo: false}))
        }

        if(inputsStates.password.length < 6 || !/\d/.test(inputsStates.password)) {
            setShowValidation(state => ({...state, password: true}))
        } else {
            areValid.password = true;
            setShowValidation(state => ({...state, password: false}))
        }

        if(inputsStates.confirmPassword !== inputsStates.password) {
            setShowValidation(state => ({...state, confirmPassword: true}))
        } else {
            areValid.confirmPassword = true;
            setShowValidation(state => ({...state, confirmPassword: false}))
        }

        console.log(areValid)

        if(Object.values(areValid).every(isValid => isValid)) {
            return true
        } else {
            return false
        }

        
        
        
    }

  return (
    <form 
        className='max-w-xl mx-auto rounded-md bg-slate-800 p-4'
        onSubmit={handleSubmit}>
            <p className='text-2xl font-bold mb-4 text-center text-white'>Créez votre compte</p>

            <Pseudo 
                inputsStates={inputsStates} 
                setInputsStates={setInputsStates} showValidation={showValidation}/>
            <Password 
                inputsStates={inputsStates} 
                setInputsStates={setInputsStates} showValidation={showValidation}/>
            <Confirmation 
                inputsStates={inputsStates} 
                setInputsStates={setInputsStates} showValidation={showValidation}/>

             <button type='submit' 
            className='bg-blue-500 mt-10 text-white px-4 py-2 rounded-md w-full'>Valider</button>
    </form>
  )
}