import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'




const Persondetails = () => {
    const [user, setUser] = useState([])

    console.log(0);
    console.log(user);

    const fetchdata = async (url) => {
        console.log(1);
        const response = await fetch(url)
        const data = await response.json()
        setUser(data)
        console.log(2);
    }

    useEffect(() => {
        console.log(3);
        fetchdata("https://jsonplaceholder.typicode.com/users")
        console.log(4);
    }, [])


    const { personid } = useParams()

    const persondata = user.find((each) => each.id == personid)



    return (


        <div>
            <h1>persondetails</h1>
            <main>
                <h1>User List</h1>
                <h1>{persondata ? persondata.name : "Loading....."}</h1>

            </main>

        </div>
    )

}

export default Persondetails;