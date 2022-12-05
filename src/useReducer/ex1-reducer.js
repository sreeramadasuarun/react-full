// import React, { useReducer } from "react";


// const reducer = (state, action) => {
//     if (action.type === "DELETE") {
//         const person = state.data.filter((each) => {
//             return each.id !== action.payload
//         })
//         return ({
//             ...state,
//             data: person,
//             length: state.length - 1
//         })
//     }
// }


// const Final = () => {

//     const initinalstate = {
//         data: [
//             { id: "dcddssc", firstname: "arun", email: "arun@gmail.com" },
//             { id: "ewniciewfe", firstname: "emma", email: "emma@gmail.com" }
//         ],
//         length: 2,
//     }


//     const [state, dispatch] = useReducer(reducer, initinalstate)


//     const handledelete = (id) => {
//         dispatch({
//             type: "DELETE",
//             payload: id,
//         })
//     }


//     return (
//         <div>
//             <h1>current length:{state.length}</h1>
//             {
//                 state.data.map((each) => {
//                     const { firstname, email, id } = each
//                     return (<div key={id}>
//                         <h3>
//                             {firstname}
//                         </h3>
//                         <p>
//                             {email}
//                         </p>
//                         <button onClick={() => handledelete(id)}>delete</button>
//                     </div>
//                     )
//                 })
//             }
//         </div>
//     )

// }


// export default Final;
