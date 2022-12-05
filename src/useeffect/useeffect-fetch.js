import React, { useState, useEffect } from 'react'
// import Final from "./useeffect/useeffect-fetch"
// import Image from "./icon.gif"


const URL = "https://jsonplaceholder.typicode.com/users"

const App = () => {

    const [userdata, setuserdata] = useState([])
    const [loading, setloading] = useState(false)
    const [iserror, setiserror] = useState({ status: false, msg: "" })

    const fetchdata = async (apiurl) => {
        setloading(true)
        setiserror({ status: false, msg: "" })
        try {
            const response = await fetch(apiurl)
            const data = await response.json()
            setuserdata(data)
            setloading(false)
            setiserror({ status: false, msg: "" })
            if (response.status === 404) {
                throw new Error("data not found")
            }


        } catch (error) {
            setloading(false)
            setiserror({
                status: true,
                msg: error.message
            })

        }
    }



    useEffect(() => {
        fetchdata(URL)
    }, [])




    if (loading) {
        return <div>
            {/* <img src={Image} alt="no" /> */}
            <h3>loading please wait!</h3>
        </div>
    }



    if (iserror?.status) {
        return <div>
            <h3 style={{ color: "red" }}>{iserror.msg}</h3>
        </div>
    }



    return (
        <div>
            <h1>useEffect</h1>
            <ul>
                {
                    userdata.map((each) => {
                        const { name, id, email, address } = each
                        return (
                            <li key={id}>

                                <div>{name}</div>
                                <div>{email}</div>
                                <div>{address.zipcode}</div>
                                <br /><br />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}


export default App;