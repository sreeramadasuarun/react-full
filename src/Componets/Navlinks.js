import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../login/auth'


const Navlinks = () => {

    const { user, logout } = useAuth()

    const data = useAuth()

    console.log(data);


    return (

        <div>
            <nav>
                <NavLink to="/" >Home </NavLink>
                <NavLink to="/About">About </NavLink>
                <NavLink to="/Contact">Contact </NavLink>
                <NavLink to="/Projects">Projects </NavLink>
                <NavLink to="/users">User </NavLink>
                <NavLink to="/Movies">Movies </NavLink>
                <NavLink to="/Drinks">Drinks </NavLink>
                <NavLink to="/Person">Person </NavLink>

                {
                    user ?
                        <NavLink onClick={logout} to="/Logout">Logout</NavLink>
                        :
                        <NavLink to="/Login">Login</NavLink>
                }

            </nav>

        </div>
    )
}

export default Navlinks