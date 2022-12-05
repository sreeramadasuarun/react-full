// import React, { useEffect, useReducer, useState } from 'react'


// const reducer = (state, action) => {
//     if (action.type === "UPDATE") {
//         return {
//             ...state,
//             userdata: action.payload
//         }
//     }



//     if (action.type === "DELETE") {
//         const person = state.userdata.filter((each) => {
//             return each.id !== action.payload
//         })
//         return ({
//             ...state,
//             userdata: person
//         })

//     }


//     if (action.type === "ONCLICK_edit") {
//         return {
//             ...state,
//             isediting: action.payload,
//         }
//     }

//     if (action.type === "UPDATEDATA") {
//         const newuser = state.userdata.map((each) => {
//             if (each.id === action.payload.id) {
//                 return {
//                     id: action.payload.id,
//                     name: action.payload.name,
//                     email: action.payload.email
//                 }
//             } else {
//                 return each
//             }
//         })
//         return {
//             ...state,
//             userdata: newuser
//         }
//     }
//     return state
// }
















// const Final = () => {

//     const fetchdata = async (url) => {


//         try {
//             const response = await fetch(url)
//             const data = await response.json()

//             dispatch({ type: "UPDATE", payload: data })

//         } catch (error) {

//         }
//     }


//     useEffect(() => {
//         fetchdata("https://jsonplaceholder.typicode.com/users")
//     }, [])


//     const initinalstate = {
//         userdata: [],
//         isloading: false,
//         iserror: { status: false, msg: "" },
//         isediting: { status: false, id: "", name: "", email: "" }
//     }

//     const [state, dispatch] = useReducer(reducer, initinalstate)



//     const handledelete = (id) => {
//         dispatch({
//             type: "DELETE",
//             payload: id,
//         })
//     }


//     const updatedata = (id, name, email) => {

//         dispatch({
//             type: "UPDATEDATA",
//             payload: { id, name, email }
//         })
//         // dispatch({
//         //     type: "ONCLICK_edit",
//         //     payload: { status: false, id: "", name: "", email: "" }
//         // })
//     }



//     return (
//         <div>
//             <h1>user information</h1>

//             {state.isediting?.status && <Editform id={state.isediting.id} comingtitle={state.isediting.name} comingemail={state.isediting.email} updatedata={updatedata} />}


//             {
//                 state.userdata.map((each) => {
//                     const { id, name, email } = each
//                     return (
//                         <div key={id} style={{ background: "lightblue" }}>
//                             <h3>{name}</h3>
//                             <h3>{email}</h3>
//                             <button onClick={() => handledelete(id)}>delete</button>

//                             <button
//                                 onClick={() => dispatch({
//                                     type: "ONCLICK_edit",
//                                     payload: { status: true, id: id, name: name, email: email }
//                                 })}>edit</button>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }







// const Editform = ({ id, comingtitle, comingemail, updatedata }) => {

//     const [title, settitle] = useState(comingtitle || "")
//     const [email, setemail] = useState(comingemail || "")

//     return (

//         <div>
//             <form>
//                 <input type="text" name="title" id="title" value={title} onChange={(e) => settitle(e.target.value)} />

//                 <input type="email" name="email" id="email" value={email} onChange={(e) => setemail(e.target.value)} />

//                 <button onClick={() => updatedata(id, title, email)} >update data</button>
//             </form>
//         </div>
//     )
// }

// export default Final