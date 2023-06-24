import React from "react";
import Namasakara from './namasakara';
import poses from "./poses";

function steps(pose){
return(<Namasakara 
    key={pose.id} 
    title={pose.title} 
    detail={pose.description} 
    photos={pose.imageURL} />);

}


function App(){
    return (
        <div>
        <h1 className="heading">Surya Namasakara</h1>
        {poses.map(steps)}
        </div>
        
    ) 
}

export default App;