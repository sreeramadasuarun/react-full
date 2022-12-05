import React from "react"
import { useState, useCallback } from "react";
import Autton from "./button";
import Title from "./title"
import Count from "./count"



const Final = () => {

    const [age, setage] = useState(0)
    const [salary, setsalary] = useState(5000)

    const incrementage = useCallback(() => {
        setage(age + 1)
    }, [age])

    const incrementsalary = useCallback(() => {
        setsalary(salary + 1000)
    }, [salary])


    return (
        <>
            <Title />
            <Count text={"age"} number={age} />
            <Autton clickHandler={incrementage} >incrementage</Autton>
            <Count text={"salary"} number={salary} />
            <Autton clickHandler={incrementsalary} >incrementsalary</Autton>
        </>

    )
}

export default Final