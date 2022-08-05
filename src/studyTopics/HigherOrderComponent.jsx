import React, { useEffect, useState } from 'react'
import axios from 'axios';

//highOrderFunction is a function that can receive a function as parameter and return another function
const HigherOrderFunctionExample = () => {

  const executeAdder = (firstNumber) => (secondNumber) => console.log(firstNumber + secondNumber);

  //if we do something like this it will return the function
  executeAdder(5)

  //if we do this we asign the funtion to a variable
  const adderFuntion = executeAdder(5)

  //if we do this we get the value from the funtion. Because this variable has the function assigned already and we´re adding 5 + 4
  //the reason why 5 is adding first is because "adderFuntion" has assigned "(secondNumber) => firstNumber + secondNumber"
  adderFuntion(4)


}

//this is the higher order component
//a higher-order component is a function that takes a component and returns a new component.

const WithRandomNumber = Component => {

  const [result, setResult] = useState()

  useEffect(() => {
    axios.get('http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1').then((response) => {
      console.log(response.data)
      setResult(response.data)
    })

  }, [])

  const NewComponent = ({ number, ...props }) => {
    return <Component {...props} number={result} />
  }

  return NewComponent;
}


const HigherOrderComponent = () => {

  //this is an example about the base functionality about this
  useEffect(() => {
    HigherOrderFunctionExample();
  }, [])



  const DisplayNumber = ({ number }) => {
    return (
      <>
        <div>
          <strong> the number is {number} </strong>
        </div>
      </>
    )
  }

  const AddNumberToFive = ({ number }) => {
    const result = 5 + Number(number);

    return (
      <>
        the result of 5 + {number} is = {result}
      </>
    )
  }

  const AddNumberToFiveWithCurrentUser = WithRandomNumber(AddNumberToFive)
  const DisplayRandomnNumber = WithRandomNumber(DisplayNumber)

  return (
    <>
      <h3>Higher order component example</h3>
      <AddNumberToFiveWithCurrentUser />
      <DisplayRandomnNumber />
    </>
  )
}

React.memo(HigherOrderComponent)
export default HigherOrderComponent