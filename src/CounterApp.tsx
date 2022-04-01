import React, { useState } from 'react';

export interface CounterValue {
    value: number;
  }

const CounterApp: React.FC<CounterValue> = ({ value }) => {
    const [counter, setCounter] = useState(value);

    const subtractHandler = () => {
        setCounter(counter - 1);
    };

    const addHandler = () => {
        setCounter(counter + 1);
    };

    const resetHandler = () => {
        setCounter(value);
    };

    return (
        <>
        <h2>{counter}</h2>
        <button onClick={subtractHandler}>-1</button>
        <button onClick={resetHandler}>RESET</button>
        <button onClick={addHandler}>+1</button>
        </>
    );
};

export default CounterApp;