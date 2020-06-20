import React from 'react';
import './Actor.css'

export default function Actor(props) {
    return (
        
        <img src={props.src} 
        // className={`Actor${props.shake?'shake':""}`} 
className="Actor"
        onClick={props.imgClicked}
         alt={`actor${props.id}`}/>
        
    )
};

