import React, { useState, useEffect } from 'react'
import useAll from "./ex-cus"
const Final = () => {


    const [count, setcount] = useState(0)

    useAll(count)

    return (
        <div>
            <button onClick={() => setcount(count + 1)} >count:{count}</button>
        </div>
    )
}

export default Final