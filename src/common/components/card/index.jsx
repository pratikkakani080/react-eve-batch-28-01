import React from 'react'
import "./card.css";

function Card(props) {
    console.log(props);

    return (
        <div className='card'>
            <div className='image'>
                {props.el.image}
            </div>
            <div className='title'>
                <p>
                    {props.el.title}
                </p>
            </div>

        </div>
    )
}

export default Card
