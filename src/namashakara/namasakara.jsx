import React from "react";
import Image from "./Image";


function Namasakara(props){
    return (
        <div className="poses">
            <div className="top">
                <h2 className="name">{props.title}</h2>
                <p className="info">{props.detail}</p>
            </div>

            <div className="bottom">
            
            <Image photos={props.photos}/>
            </div>
        
        </div>
    )
    
}

export default Namasakara;