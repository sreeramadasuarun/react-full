import React, { useState, useEffect } from 'react'



function useFetch(URL) {

    const [userdata, setuserdata] = useState([])
    const [loading, setloading] = useState(false)


    const fetchdata = async (url) => {
        setloading(true)
        try {
            const response = await fetch(url)
            const data = await response.json()
            console.log(data);
            setuserdata(data)
            setloading(false)

        } catch (error) {
            setloading(false)

        }
    }

    useEffect(() => {
        fetchdata(URL)
    }, [])


    return [userdata, loading]
}

export default useFetch;