import React from 'react'
import './Score.css'

function Score(props) {
    return (
        <div >
            <p className="Score">Score: {props.score} <br/> Top Score: {props.topScore}</p>
        </div>
    )
}

export default Score
