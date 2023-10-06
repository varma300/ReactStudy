import { useRef } from "react";

function Ref(){

    let inputRef = useRef(null)

    function handleRuf(e){
        console.log(e.tageet);
    }

    return(
        <>
            <input type="text" value={inputRef}/>
            <button onClick={handleRuf}>add value</button>
        </>
    )
}

export default Ref;



