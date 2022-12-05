// import React, { useState, useEffect } from 'react'

// const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="


// const Final = () => {

//     const [drinkdata, setdrinkdata] = useState([])

//     const [searchterm, setsearchterm] = useState("")

//     const [iserror, setiserror] = useState({ status: false, msg: "" })

//     const [loading, setloading] = useState(false)


//     const fetchdrinks = async (url) => {
//         setloading(true)
//         setiserror({ status: false, msg: "" })
//         try {
//             const response = await fetch(url)
//             const { drinks } = await response.json()
//             setdrinkdata(drinks)
//             setloading(false)
//             setiserror({ status: false, msg: "" })
//             if (!drinks) {
//                 throw new Error("drink not found select another drink");
//             }

//         } catch (error) {
//             console.log(error);
//             setloading(false)
//             setiserror({
//                 status: true,
//                 msg: error.message || "went wrong"
//             })
//         }
//     }


//     useEffect(() => {
//         const correcturl = `${URL}${searchterm}`
//         fetchdrinks(correcturl)

//     }, [searchterm])


//     return (
//         <div className='too'>
//             <form className='formm'>
//                 <input
//                     type="text"
//                     name="search"
//                     value={searchterm}
//                     id='search'
//                     onChange={(e) => setsearchterm(e.target.value)}
//                     placeholder='search new' />
//             </form>

//             <hr />

//             {loading && !iserror?.status && <h3>loading data wait</h3>}
//             {iserror?.status && <h3>went data wrong</h3>}


//             {!loading && !iserror?.status &&

//                 <ul className='cdata'>
//                     {
//                         drinkdata.map((each) => {
//                             const { strDrink, idDrink, strDrinkThumb } = each
//                             return (
//                                 <li key={idDrink}>
//                                     <div>
//                                         <img src={strDrinkThumb} />
//                                     </div>
//                                     <div className='text'>
//                                         <h2>{strDrink}</h2>
//                                     </div>
//                                 </li>
//                             )
//                         })
//                     }
//                 </ul>
//             }

//         </div>
//     )
// }

// export default Final