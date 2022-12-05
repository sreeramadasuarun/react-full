import React, { useState } from 'react'
import Child from "./child";

const Parent = () => {
    const [userdetails, setuserdetails] = useState({
        firstname: "arun",
        lastname: "sreeramadasu",
        email: "arun@gmail.com"
    })

    return (
        <div>
            <h3>1parent</h3>
            <Child />
        </div>
    )
}

export default Parent;