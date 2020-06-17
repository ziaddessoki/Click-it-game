import React from 'react'

export default function Actor(props) {
    return (
        <div>
        <img src={props.src} width="250" height="150" onClick={props.imgClicked}/>
        </div>
    )
};

