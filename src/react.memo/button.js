import React from "react";


const Autton = ({ children, clickHandler }) => {
    console.log(`${children} render`);

    return <button onClick={clickHandler}>{children}</button>
}
export default React.memo(Autton)