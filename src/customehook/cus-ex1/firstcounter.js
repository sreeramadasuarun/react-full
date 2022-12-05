import React, { useState } from 'react'
import useCounter from './useCounter'


const Final = () => {
    const [count, increment, decrement, reset] = useCounter()


    return (
        <>
            <h1>count:{count}</h1>
            <div>
                <button onClick={increment}>increment</button>

                <button onClick={decrement}>decrement</button>

                <button onClick={reset}>reset</button>
            </div>
        </>
    )
}





export default Final