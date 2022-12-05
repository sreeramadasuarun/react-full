// import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'

// const Final = () => {



//     const [count, setcount] = useState(0)

//     const [pagewidth, setpagewidth] = useState(window.innerWidth)

//     useEffect(() => {

//         const resize = () => {
//             setpagewidth(window.innerWidth)
//         }

//         window.addEventListener("resize", resize)
//         console.log("hello i am effect", count, pagewidth);

//         return () => {
//             console.log("i am removing");
//             window.removeEventListener("resize", resize)
//         }

//     })






//     return (
//         <div>

//             <h2>learn useEffect</h2>

//             <h1>{pagewidth}</h1>
//             <h1>{count}</h1>

//             <button onClick={() => setcount(count + 1)}>+</button>

//         </div>
//     )
// }

// export default Final