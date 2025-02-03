import React, { useState } from 'react'
import './header.css'
import Button from '../../elements/button'
import { test } from '../../utils'

export default function Header() {
    const [data, setData] = useState('test')
    // let data2 = 'test'

    const handleOnClick = () => {
        setData('data_changed')
        // data2 = 'data_changed'
        console.log('inside_log**', data);
    }
    console.log('outside_log**', data);

    const callbkFn = (data) => {
        console.log('data***', data);
    }
    return (
        <div>
            <div className='header'>
                <div className='left'>
                    <h2>logo{data}</h2>
                </div>
                <div className='middle'>
                    <a href='#'>home</a>
                    <a href='#'>about</a>
                    <a href='#'>menu</a>
                    <a href='#'>{test}</a>
                </div>
                <div className='right'>
                    <Button
                        color={'magenta'}
                        handler={callbkFn}
                        handleOnClick={handleOnClick}
                    />
                </div>
            </div>
        </div>
    )
}
