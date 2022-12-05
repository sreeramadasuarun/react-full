import React, { useState } from "react";

const Index = () => {

    const [message, setmessage] = useState({
        text: "",
        id: ""
    })


    const changemessage = (e) => {
        setmessage({
            ...message,
            text: e.target.value
        })
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        let pushtodo = {
            text: message.text,
            id: new Date().getTime().toString()
        }
        setlist([...list, pushtodo])

        setmessage({
            text: "",
            id: ""
        })


    }



    // .....................................................................................................


    const [edititem, setedititem] = useState({
        id: "",
        isediting: false
    })



    const changeedit = (id) => {
        setedititem({
            ...edititem,
            id: id,
            isediting: true
        })
        let editable = list.find((each) => {
            return each.id === id
        })
        setmessage({
            ...message,
            text: editable.text,
            id: editable.id
        })
    }




    const [list, setlist] = useState([])



    const handledelete = (id) => {
        let deleted = list.filter((each) => {
            return each.id !== id
        })
        setlist(deleted);
    }


    const afterchange = (e) => {
        e.preventDefault()
        let afterchangedone = list.map((each) => {
            if (each.id === edititem.id) {
                return ({
                    text: message.text,
                    id: edititem.id
                })
            } else {
                return each

            }
        })
        setlist(afterchangedone)
        setmessage({
            text: "",
            id: ""
        })
        setedititem({
            id: "",
            isediting: false
        })
    }




    return (
        <div>
            <form>
                <input type="text" name="message" value={message.text} onChange={changemessage}
                />
                {
                    edititem.isediting ? <button onClick={afterchange} type="submit">Edit</button>

                        : <button onClick={handlesubmit} type="submit">Add</button>
                }





            </form>

            <hr />

            {
                list.length === 0 && <h3>no list</h3>
            }

            <ul>
                {
                    list.map((each) => {
                        const { text, id } = each
                        return (
                            <li key={id}>
                                <div>{text}</div>
                                <button onClick={() => changeedit(id)}>edit</button>
                                <button onClick={() => handledelete(id)} >delete</button>
                            </li>
                        )
                    })
                }
            </ul>




        </div >
    )
}


export default Index;