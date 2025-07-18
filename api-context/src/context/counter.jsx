import { createContext, useState } from 'react';

export const CounterContext = createContext(null);

export const ContextProvider = (props) => {
    const [count, setCount] = useState(0);

    // const increment = () => {
    //     setCount(count + 1);
    // }

    // const decrement = () => {
    //     setCount(count - 1);
    // }

    return (
        <CounterContext.Provider value={{ count, setCount, name:'xyz' }}>
            {props.children}
        </CounterContext.Provider>
    );
}

