// import React, { useState } from 'react'

// const Index = () => {

//     const [data, setdata] = useState({
//         firstname: "emma",
//         lastname: "arun",
//         age: "27"
//     })

//     const changefirstname = () => {
//         setdata({
//             ...data,
//             firstname: "vihaan"
//         })
//     }
//     const changelastname = () => {
//         setdata({
//             ...data,
//             lastname: "pad"
//         })
//     }

//     return (
//         <div>
//             <h1>my name {data.firstname}</h1>
//             <button onClick={changefirstname}>change name</button>
//             <h1>my name {data.lastname}</h1>
//             <button onClick={changelastname}>change name</button>
//             <h1>my age {data.age}</h1>
//         </div>
//     )
// }
// export default Index













// import React, { useState } from 'react'

// const Index = () => {

//     const [firstname, setfirstname] = useState("emma")
//     const [lastname, setlastname] = useState("watson")
//     const [age, setage] = useState("27")

//     const changefirstname = () => {
//         setfirstname("arun")
//     }
//     const changelastname = () => {
//         setlastname("sree")
//     }
//     const changeage = () => {
//         setage("33")
//     }

//     return (
//         <div>
//             <h1>my name {firstname}</h1>
//             <button onClick={changefirstname}>change name</button>
//             <h1>my name {lastname}</h1>
//             <button onClick={changelastname}>change name</button>
//             <h1>my age {age}</h1>
//             <button onClick={changeage}>change age</button>

//         </div>
//     )

// }
// export default Index














// import React, { useState } from 'react'

// const Index = () => {

//     const inarray = [
//         {
//             firstname: "emma",
//             lastname: "watson",
//             age: "27",
//         },
//         {
//             firstname: "arun",
//             lastname: "sree",
//             age: "33"
//         },
//         {
//             firstname: "vihan",
//             lastname: "saho",
//             age: "3"
//         }]


//     const [data, setdata] = useState(inarray)

//     return (
//         <div>
//             <ul>
//                 {data.map(({ firstname, lastname, age, index }) => {

//                     return <li key={index}>
//                         <div>
//                             firstname:<strong>{firstname}</strong>
//                         </div>
//                         <div>
//                             lastname:<strong>{lastname}</strong>
//                         </div>
//                         <div>
//                             age:<strong>{age}</strong>
//                         </div>
//                     </li>
//                 })
//                 }
//             </ul>
//         </div>
//     )

// }
// export default Index;











// import React, { useState } from "react";



// const Delete = () => {


//     const inarray = [
//         {
//             id: "sdhaffsdkfjas",
//             firstName: "emma",
//             lastName: "watson",
//             age: 27,
//         },
//         {
//             id: "ksafewyiasere",
//             firstName: "srikanth",
//             lastName: "racharla",
//             age: 24,
//         },
//         {
//             id: "35232fsf",
//             firstName: "don",
//             lastName: "seenu",
//             age: 24,
//         },
//     ]



//     const [data, setData] = useState(inarray);

//     const handleDelete = (comingId) => {
//         const filterData = data.filter((eachItem) => {
//             return eachItem.id !== comingId;
//         });
//         setData(filterData);
//     };

//     return (
//         <div>
//             <ul>
//                 {data.map((eachItem, index) => {
//                     const { firstName, lastName, age, id } = eachItem;
//                     return (
//                         <li key={index}>
//                             <div>
//                                 my firstName <strong>{firstName}</strong>
//                             </div>
//                             <div>
//                                 my lastName <strong> {lastName}</strong>
//                             </div>
//                             <div>
//                                 my age <strong>{age}</strong>
//                             </div>
//                             <button onClick={() => handleDelete(id)}>delete me</button>
//                         </li>
//                     );
//                 })}
//             </ul>
//         </div>
//     );
// };

// export default Delete;