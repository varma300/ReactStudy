// counting app using useState
import { useState } from "react";

function UseState(){

    let [state, setState] = useState(0); // initiolising state

    function click_Manage (){            // couting function
        setState(state + 1)              // new value adding to state using setState
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