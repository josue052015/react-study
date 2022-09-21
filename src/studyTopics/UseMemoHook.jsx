import React, { useState, useMemo } from 'react'


  //this is an expensive function because if we execute this function every re-render, we'll get a delay because of its multiple loops
  const expensiveFunction = () => {

    console.log("entro")
    let result = 0
    

    for ( let x = 1 ; x <= 1000000000; x++){

        result += x; 

    }
    
    return result;

}

const UseMemoHook = () => {

    const [memoDependency, setMemoDependency] = useState(0);
    //The React useMemo Hook returns a memoized value.  so that it does not need to be recalculated.
    //It's usefull specially when we have expensive functions to get some value and we dont want to get the same value every re-render
    //The useMemo Hook only runs when one of its dependencies update.

    const expensiveFunctionResult = useMemo(() => expensiveFunction(),[memoDependency]);
    const [count, setCount] = useState(0);
   

    const incrementCount = () => {
        setCount((e) => e + expensiveFunctionResult)
    }

    return (
        <>

            <br />
            <h2>Use Memo Example</h2>
            <br/>
       
            <span>count: </span>{count}
            <button onClick={() => incrementCount()}>Increment Count</button> 
            <br/>
            <button onClick={() => setMemoDependency((e) => (e + 1))}>Change Use Memo Dependency</button> 
        </>
    )
}

export default UseMemoHook