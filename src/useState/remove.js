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