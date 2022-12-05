import React, { useEffect, useState } from 'react'




const URL = "https://jsonplaceholder.typicode.com/users"

const Final = () => {

    const [loading, setloading] = useState(false)
    const [userdata, setuserdata] = useState([])
    const [iserror, setiserror] = useState()

    const fetchdata = async (apiurl) => {

        setloading(true)

        try {
            const response = await fetch(apiurl)
            const data = await response.json()
            setuserdata(data)
            setloading(false)

        } catch (error) {
            setloading(false)

        }
    }

    useEffect(() => {
        fetchdata(URL)
    }, [])

    if (loading) {
        return (
            <div>
                <h1>loading please wait</h1>
            </div>
        )
    }


    return (
        <div>
            {
                userdata.map((each) => {
                    const { name, email, id, phone } = each
                    return (
                        <div key={id}>

                            <h4>{name}</h4>
                            <h4>{email}</h4>
                            <h4>{phone}</h4>

                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Final;