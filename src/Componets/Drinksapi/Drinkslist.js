import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'



const Drinkslist = () => {
    const [drinkdata, setdrinkdata] = useState([])

    const fetchdrinks = async (url) => {

        const response = await fetch(url)
        const { drinks } = await response.json()
        setdrinkdata(drinks)

    }

    useEffect(() => {
        fetchdrinks("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + tailid)

    }, [])

    console.log(drinkdata);

    const { tailid } = useParams([])

    const Drinkslistdata = drinkdata.find((each) => {
        return each.idDrink == tailid
    })
    console.log(tailid);
    console.log(Drinkslistdata);

    return (
        <div className='tails'>


            <h1>Drinksdetails</h1>
            <br />
            <hr />
            <br />
            <h3>strDrink: {Drinkslistdata ? Drinkslistdata.strDrink : "Loading..."}</h3>
            <br />
            <h3>strCategory: {Drinkslistdata ? Drinkslistdata.strCategory : "Loading..."}</h3>
            <br />
            <img src={Drinkslistdata ? Drinkslistdata.strDrinkThumb : "Loading..."} />



        </div >
    )
}

export default Drinkslist;