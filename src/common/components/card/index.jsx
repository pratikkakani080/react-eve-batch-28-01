import React from 'react'
import "./card.css";

function Card(props) {
    // console.log(props);

    return (
        <div className='card'>
            <div className='image'>
                {/* {props?.el?.image || 'test'} */}
                <img src={props?.el?.image} alt={'image'} height={'100%'} width={'100%'} />
            </div>
            <div className='title'>
                <p>
                    {props?.el?.title || props.el.name || 'test'}
                </p>
            </div>

        </div>
    )
}

export default Card
