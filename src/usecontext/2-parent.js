import React, { useState } from 'react'

const Parent = () => {
    const [userdetails, setuserdetails] = useState({
        firstname: "arun",
        lastname: "sree",
        email: "arun@gmail.com"
    })

    return (
        <div>
            <h3>1parent</h3>
            <Child userdetails={userdetails} />
        </div>
    )
}


const Child = ({ userdetails }) => {
    return (
        <div>
            <h3>2child</h3>
            <SubChild userdetails={userdetails} />

        </div>
    )
}


const SubChild = ({ userdetails }) => {
    return (
        <div>
            <h3>3subchild</h3>
            <h4>first:{userdetails.firstname}</h4>
            <h4>last:{userdetails.lastname}</h4>
            <h4>email:{userdetails.email}</h4>
        </div>
    )
}


export default Parent;