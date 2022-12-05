import React from "react";



const Title = () => {
    console.log("title rendering");
    return <h1>usecallback and react.demo</h1>
}


export default React.memo(Title)