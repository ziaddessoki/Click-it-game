import React from 'react'
import './Score.css'

function Score(props) {
    return (
        <div className={Score}>
            <h1>Score:{props.score} ||  Top Score:{props.topScore}</h1>
        </div>
    )
}

export default Score
