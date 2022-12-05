import React from 'react'
import useFetch from "./3-api-custom-hook"

const URL = "https://jsonplaceholder.typicode.com/users"

const Final = () => {

    const [userdata, loading] = useFetch(URL)

    if (loading === true) {
        return <h1>loading please wait</h1>
    }

    return (
        <div>
            <h1>user data</h1>
            <ul>
                {userdata.map(({ name, id }) => {
                    return <li key={id}>
                        <h4>{name}</h4>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Final