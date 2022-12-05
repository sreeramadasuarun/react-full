import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'



const Person = () => {


    const [person, setperson] = useState([])


    const fetchdata = async (url) => {

        const response = await fetch(url)
        const data = await response.json()
        setperson(data)
        console.log(data);

    }


    useEffect(() => {
        fetchdata("https://jsonplaceholder.typicode.com/users")
    }, [])


    return (
        <div className='allcard'>
            <h1>Persons</h1>
            <div className='cardcon'>
                {
                    person.map(({ name, id }) => {

                        return <NavLink to={`/Person/${id}`} key={id} >
                            <article className='card' >
                                <h3>{name}</h3>
                            </article>
                            <br />
                        </NavLink>
                    })
                }
            </div>
        </div >
    )
}

export default Person







