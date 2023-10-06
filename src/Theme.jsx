import React, { useState } from "react";
import './Theme.css'

function Theme(){
    let [dark, setDark] = useState(true)
    function chage_theam(){
        setDark(!dark)
    }   

    let theam_class = dark ? 'night' : 'white';

    return(
        <>
            <div className={`${theam_class}`}>
                <button onClick={chage_theam}>Theam</button>
            </div>
        </>
    )


}

export default Theme;