import React from 'react'
import Moviesdata from './Moviesdata'
import { NavLink } from "react-router-dom"



const Movies = () => {


    return (
        <div >
            <div className='back'></div>
            <h1 className='back_tag'>Movies</h1>


            <div className='movie-container'>
                {
                    Moviesdata.map(({ title, story, imgurl, description, id }) => {
                        return <NavLink to={`/Movies/${id}`} key={id}>
                            <div className='movie'>
                                <h3>{title}</h3>
                                <br />
                                <img src={imgurl} alt="" />
                                <h3>{story}</h3>
                                <p>{description}</p>
                            </div>
                        </NavLink>
                    })
                }
            </div>

        </div >
    )
}

export default Movies