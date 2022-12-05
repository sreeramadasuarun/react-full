import React, { useState, useEffect } from 'react'

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="


const Final2 = () => {

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

            <hr />

            {loading && !iserror?.status && <h3>loading data wait</h3>}
            {iserror?.status && <h3>went data wrong</h3>}


            {!loading && !iserror?.status &&

                <ul className='datapage'>
                    {
                        drinkdata.map((each) => {
                            const { strInstructions, strGlass, strDrink, idDrink, strDrinkThumb, strCategory } = each
                            return (
                                <li key={idDrink}>
                                    <div>
                                        <img style={{ width: "220px", height: "200px" }} src={strDrinkThumb} />
                                    </div>
                                    <div className='text'>
                                        <h2>Drink Name: {strDrink}</h2>
                                        <br />
                                        <h4>Category: {strCategory}</h4>
                                        <br />
                                        <h4>glass: {strGlass}</h4>
                                        <br />
                                        <h4 style={{ width: "460px", color: "grey" }}>Instructions: {strInstructions}</h4>
                                        <br />



                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            }

        </div >
    )
}

export default Final2;