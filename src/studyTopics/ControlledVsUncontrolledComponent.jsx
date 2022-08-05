import React from 'react'
import { useState } from 'react'

// An input form element whose value is controlled by React in this way is called a “controlled component”. The value of the input 
//can be changed only by react
const ControlledComponent = () => {

    const [inputValue, setInputValue] = useState('')
    //var inputValue = " "

   

    const inputChange = (event) => {
        setInputValue(event.target.value)
        console.log("It´s changing by react: ", inputValue)
    }

    return (
        <>
            <form>
                <label>
                Controlled component:
                <input type="text" value={inputValue} onChange = {(event) => inputChange(event)}/>
                </label>
            </form>
        </>
    )
}

// An input form element whose value is controlled by the DOM in this way is called a “UnControlled component”. The value of the input 
//can be changed by the DOM
const UnControlledComponent = () => {

    return(
         <>
            <form>
                <label>
                UnControlled component:
                <input type="text" defaultValue="Any value" />
                </label>
            </form>
         </>
    )
}



const ControlledVsUncontrolledComponent = () => {
    return (
        <>
            <ControlledComponent/>
            <UnControlledComponent/>
        </>
    )
}

export default ControlledVsUncontrolledComponent