import React from 'react'
import { useParams } from 'react-router-dom'
import Moviesdata from './Moviesdata'
import Player from "../player/Player.js"

const Movieslist = () => {

    const { Movieid } = useParams()


    const movielistdata = Moviesdata.find((each) => each.id == Movieid)

    console.log(Movieid);
    console.log(movielistdata);

    return (


        <div className='movielist' style={{ textAlign: "center" }}>

            <div className='back'></div>

            <h3>{movielistdata.title}</h3>
            <Player />
            <br />
            <h3>{movielistdata.description}</h3>


        </div>
    )
}

export default Movieslist