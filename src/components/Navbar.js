import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

const navbar =(props)=>(
    
    <ul className="Navbar">
        <Link to="/" className="item"><li >Home</li></Link>
        <Link to="/game"><li className="item">Game</li></Link>
    </ul>
    
)
export default navbar;
