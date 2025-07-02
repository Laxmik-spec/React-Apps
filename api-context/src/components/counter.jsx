import { React, useContext } from "react";
import { CounterContext } from "../context/counter";    

const Counter = () => {

    const CounterContexts = useContext(CounterContext);
    console.log('context ',CounterContext);

    return(
        <>
            <button onClick= {() => CounterContexts.setCount(CounterContexts.count + 1)} >Increment</button>
            <button onClick= {() => CounterContexts.setCount(CounterContexts.count - 1)}>Decrement</button><br/>
        </>

    )
}

export default Counter;