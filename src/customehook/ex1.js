import React, { useState, useEffect } from 'react'

const Final = () => {


    const [count, setcount] = useState(0)


    useEffect(() => {
        document.title = `count:${count}`
    }, [count])


    return (
        <div>
            <button onClick={() => setcount(count + 1)} >count:{count}</button>
        </div>
    )
}

export default Final