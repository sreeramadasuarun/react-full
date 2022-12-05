import React from 'react'

const initinalstate = {
    firstname: "vihaan arun",
    lastname: "sreerama",
    email: "vihaan@gmail.com"
}

export const Usercontext = React.createContext()

export const Usercontextprovider = ({ children }) => {
    return <Usercontext.Provider value={initinalstate}>
        {children}
    </Usercontext.Provider>
}
