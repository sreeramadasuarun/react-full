import React from 'react'
import { useNavigate } from 'react-router-dom'
import KFG from "../assets/KGF.mp4"

const Home = () => {

    const navigate = useNavigate()


    return (
        <>
            <h1>Home</h1>

            <video width="60%" controls>
                <source src={KFG} type="video/mp4" />
            </video>
            {/* <img src={tree} /> */}


            <br />
            <button onClick={() => navigate("./Success")} >submit form</button>
        </>
    )
}

export default Home;