import React, {useState} from 'react';
import './Intro.css'

const  intro=(props)=>{
        const[mode,setMode]= useState("theOffice");
        const dothat=()=>{
            console.log(mode);
        }
    return(
        <div className="Home">
        <p>lorem   dsoisdlkjsdoksldsodjl</p>
        <select name="gameMode" id="cars">
            <option value="theOffice">The Office</option>
            <option value="friends">Friends</option>
        </select>
        <button onClick={()=>setMode(e.target.value),dothat()}>Play now</button>
        </div>
    );
    
}   
    

export default intro;