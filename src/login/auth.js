import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Authcontext = React.createContext()


const namedata = [

    {
        name: "Arun",
        email: "arun@gmail.com",
        password: "123"
    },

]

export const Authprovider = ({ children }) => {
    const [user, setuser] = useState(null)
    const navigate = useNavigate()


    const login = (username, password) => {


        namedata.forEach(eachuser => {

            if (eachuser.email === username) {

                if (eachuser.password === password) {
                    setuser(username)
                    navigate("/LogSucces", { replace: true })
                } else {
                }
            }
        })
    }


    const logout = () => {
        setuser(null)
    }


    return <Authcontext.Provider value={{ user, login, logout }} >
        {children}
    </Authcontext.Provider>
}

export const useAuth = () => {
    return useContext(Authcontext)
}