import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../login/auth'
import "../Componets/navcss.css"
import logo from "../assets/Merican-logo-2.jpg"


const Navlinks = () => {

    const { user, logout } = useAuth()

    const data = useAuth()

    console.log(data);


    return (
        <div className='nav_fixed'>

            <div className='wrapper'>
                <img className='logo_merican' src={logo} alt="no" />
                <nav className='tabs'>
                    <div className='selector' ></div>
                    <NavLink to="/" >Home </NavLink>
                    <NavLink to="/About">About </NavLink>
                    <NavLink to="/Contact">Contact </NavLink>
                    <NavLink to="/Projects">Projects </NavLink>
                    <NavLink to="/users">User </NavLink>
                    <NavLink to="/Movies">Movies </NavLink>
                    <NavLink to="/Drinks">Drinks </NavLink>
                    <NavLink to="/Person">Person </NavLink>

                    <div className='login_right'>
                        {
                            user ?
                                <NavLink onClick={logout} to="/Logout">Logout</NavLink>
                                :
                                <NavLink to="/Login">Signup/Login</NavLink>
                        }
                    </div>

                </nav>


            </div>
            <div id="container">
            </div>
        </div>
    )

}

export default Navlinks