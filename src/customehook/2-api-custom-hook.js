import React from 'react'
import useFetch from "./3-api-custom-hook"

const URL = "https://jsonplaceholder.typicode.com/posts"

const Final2 = () => {

    const [userdata, loading] = useFetch(URL)

    if (loading === true) {
        return <h1>loading please wait</h1>
    }

    return (
        <div>
            <h1>user data</h1>
            <ul>
                {userdata.map(({ title, id }) => {
                    return <li key={id}>
                        <h4>{title}</h4>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Final2