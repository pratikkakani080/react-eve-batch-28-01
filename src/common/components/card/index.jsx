import React from 'react'
import "./card.css";
import Button from '../../elements/button';

function Card(props) {
    console.log('props(((card', props);

    return (
        <div className='card'>
            <div className='image'>
                {/* {props?.el?.image || 'test'} */}
                <img src={props?.el?.image} alt={'image'} height={'100%'} width={'100%'} />
            </div>
            <div className='title'>
                <p onClick={() => { props.ref.current.style.backgroundColor = 'red' }}>
                    {props?.el?.title || props.el.name || 'test'}
                </p>
            </div>
            {(props.index === 0 || props.index === 16 || props.el.cuisine === 'Asian') && (
                <div>
                    <Button />
                </div>
            )}
        </div>
    )
}

export default Card
