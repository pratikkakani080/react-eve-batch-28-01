import React from 'react'
import './button.css'

function Button({
    handler,
    className,
    color,
    buttonText
}) {
    const test = 342353254352
    console.log('props**', handler && handler(test));
    return (
        <button
            className={`button ${className}`}
            style={{ backgroundColor: color }}
        >
            {buttonText || 'View all'}
        </button>
    )
}

export default Button
