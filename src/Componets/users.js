import React from 'react'
import { NavLink } from 'react-router-dom'
import userdata from './userdata'



const Users = () => {
    return (
        <div className='allcard'>
            <h1>Users</h1>
            <div className='cardcon'>
                {
                    userdata.map(({ name, id }) => {

                        return <NavLink to={`/users/${id}`} key={id} >
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

export default Users