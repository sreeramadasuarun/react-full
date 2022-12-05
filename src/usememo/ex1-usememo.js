// import React, { useState, useEffect, useMemo } from 'react'

// const Final = () => {


//     const [number, setnumber] = useState(0)

//     const [dark, setdark] = useState(false)

//     const doublenumber = useMemo(() => {
//         return slowfunction(number)
//     }, [number])

//     const themechange = useMemo(() => {
//         return {

//             backgroundColor: dark ? "black" : "white",
//             color: dark ? "white" : "black"

//         }
//     }, [dark])


//     useEffect(() => {
//         console.log("changed theme");
//     }, [themechange])


//     return (
//         <>
//             <input
//                 type="number"
//                 name="numbers"
//                 value={number}
//                 onChange={(e) => setnumber(Number(e.target.value))}

//             />
//             <div>
//                 <button onClick={() => setdark(!dark)}>change theme</button>
//             </div>

//             <h2 style={themechange}>number:{doublenumber}</h2>

//         </>
//     )
// }

// const slowfunction = (number) => {
//     for (let index = 0; index < 1000000000; index++) { }
//     console.log("im running");
//     return number * 2
// }

// export default Final