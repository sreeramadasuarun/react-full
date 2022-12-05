import React, { useState } from 'react';


const Delete = () => {




    const inarry = [

        {
            id: "sdhaffsdkfjas",
            firstName: "emma",
            lastName: "watson",
            age: 27,
        },
        {
            id: "ksafewyiasere",
            firstName: "arun",
            lastName: "sree",
            age: 24,
        },
        {
            id: "35232fsf",
            firstName: "vihaan",
            lastName: "sree",
            age: 24,
        },
    ]

    const [data, setdata] = useState(inarry)

    const handle = (comingid) => {
        const filterdata = data.filter((eachiteam) => {
            return eachiteam.id !== comingid
        })
        setdata(filterdata)

    }

    return (
        <div>
            <ul className='list'>
                {
                    data.map((each, index) => {
                        const { firstName, lastName, age, id } = each;
                        return (
                            < li key={index}  >
                                <div >
                                    my firstname <strong>{firstName}</strong>
                                </div>
                                <div >
                                    my lastName <strong>{lastName}</strong>
                                </div>
                                <div >
                                    my age <strong>{age}</strong>
                                </div>
                                <button onClick={() => handle(id)} >delete</button>
                            </li>
                        )

                    })
                }
            </ul>

        </div >

    )
}

export default Delete;