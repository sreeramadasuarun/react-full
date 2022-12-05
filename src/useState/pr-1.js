import React, { useState } from "react";

const Index = () => {



    const [message, setmessage] = useState({
        text: "",
        id: ""
    })


    const changemessage = (e) => {
        setmessage({
            text: e.target.value
        })
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        let newto = {
            text: message.text,
            id: new Date().getTime().toString(),
        }
        setlist([...list, newto])

        setmessage({
            text: "",
            id: ""
        })
    }






    // ......................................................................................................




    const [list, setlist] = useState([])


    const [edititem, setedititem] = useState({
        id: "",
        isediting: false
    })


    const handledelete = (id) => {
        let newdelete = list.filter((each) => {
            return each.id !== id
        })
        setlist(newdelete);

    }

    const changeeditstate = (id) => {
        setedititem({
            ...edititem,
            id: id,
            isediting: true
        })
        let reedit = list.find((each) => {
            return each.id === id
        })
        setmessage({
            ...message,
            text: reedit.text,
            id: reedit.id
        })
        console.log(reedit);
    }


    const handleedit = (e) => {
        e.preventDefault()
        let newone = list.map((each) => {

            if (each.id === edititem.id) {
                return {
                    text: message.text,
                    id: edititem.id
                }
            } else {
                return each
            }
        })
        setlist(newone)
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

                <input type="text" name="message" placeholder="enter text" onChange={changemessage} value={message.text}
                />


                {edititem.isediting ? <button onClick={handleedit} type="submit" >edit</button>
                    : <button onClick={handlesubmit} type="submit" >add</button>
                }


            </form>

            <hr />

            <ul>

                {
                    list.map((each) => {

                        const { text, id } = each

                        return <li key={id}>
                            <div>{text}</div>
                            <button onClick={() => changeeditstate(id)} >edit</button>
                            <button onClick={() => handledelete(id)} >delete</button>
                        </li>
                    })
                }

            </ul>

        </div>

    )
}
export default Index;