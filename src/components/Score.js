import React from 'react'
import './Score.css'

function Score(props) {
    return (
        <div className="Score">
            <p>Score:{props.score} ||  Top Score:{props.topScore}</p>
        </div>
    )
}

export default Score
