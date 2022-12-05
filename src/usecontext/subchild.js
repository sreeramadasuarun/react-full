import React, { useContext } from 'react'
import { Usercontext } from './usercontext';


const SubChild = () => {
    const data = useContext(Usercontext)
    const { firstname, lastname, email } = data
    return (
        <div>
            <h3>3subchild</h3>
            <h4>first:{firstname}</h4>
            <h4>last:{lastname}</h4>
            <h4>email:{email}</h4>
        </div>
    )
}
export default SubChild;