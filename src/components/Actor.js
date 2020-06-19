import React from 'react';
import './Actor.css'

export default function Actor(props) {
    return (
        <div>
        <img src={props.src} className="Actor" 
        onClick={props.imgClicked}
         alt={`actor${props.id}`}/>
        </div>
    )
};

