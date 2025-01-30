import React from 'react'
import './button.css'

function Button(props) {
    console.log('props**', props);

    return (
        <button
            className={`button ${props.className}`}
            style={{ backgroundColor: props.color }}
        >
            {props.buttonText || 'View all'}
        </button>
    )
}

export default Button
