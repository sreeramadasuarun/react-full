import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'



const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="


const Drinks = () => {

    const [drinkdata, setdrinkdata] = useState([])

    const [searchterm, setsearchterm] = useState("")

    const [iserror, setiserror] = useState({ status: false, msg: "" })

    const [loading, setloading] = useState(false)

    const fetchdrinks = async (url) => {
        setloading(true)
        setiserror({ status: false, msg: "" })
        try {
            const response = await fetch(url)
            const { drinks } = await response.json()
            setdrinkdata(drinks)
            setloading(false)
            setiserror({ status: false, msg: "" })
            if (!drinks) {
                throw new Error("drink not found select another drink");
            }
        } catch (error) {
            console.log(error);
            setloading(false)
            setiserror({
                status: true,
                msg: error.message || "went wrong"
            })
        }
    }


    useEffect(() => {
        const correcturl = `${URL}${searchterm}`
        fetchdrinks(correcturl)

    }, [searchterm])

    console.log(drinkdata);
    return (
        <div className='openpage'>
            <form className='formpage'>
                <input
                    type="text"
                    name="search"
                    value={searchterm}
                    id='search'
                    onChange={(e) => setsearchterm(e.target.value)}
                    placeholder='search new' />
            </form>
            <br />

            <hr />

            {loading && !iserror?.status && <h3>loading data wait</h3>}
            {iserror?.status && <h3>went data wrong</h3>}


            {!loading && !iserror?.status &&

                <div className='movie-container'>
                    {
                        drinkdata.map(({ strDrink, idDrink, strDrinkThumb, strCategory }) => {

                            return (
                                <NavLink to={`/Drinks/${idDrink}`} key={idDrink}>
                                    <div>
                                        <img style={{ width: "220px", height: "200px" }} src={strDrinkThumb} alt="no" />
                                    </div>
                                    <div className='text'>
                                        <h2>Drink Name: {strDrink}</h2>
                                        <br />
                                        <h4>Category: {strCategory}</h4>
                                        <br />
                                    </div>
                                </NavLink>
                            )
                        })
                    }
                </div>
            }

        </div >
    )
}

export default Drinks;



