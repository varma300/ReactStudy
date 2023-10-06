import { useState } from "react";

function UseState(){

    let [state, setState] = useState(0);
    function click_Manage (){
        setState(state + 1)
    }

    return(
        <>
        <h2 id="couter_heading" >Counter App</h2>
            <button onClick={click_Manage} >Click Here</button>
            <h1> {state} </h1>
        </>
    )
}

export default UseState