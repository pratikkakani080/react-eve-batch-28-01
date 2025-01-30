import React from 'react'
import './header.css'
import Button from '../../elements/button'
import { test } from '../../utils'

export default function Header() {
    return (
        <div>
            <div className='header'>
                <div className='left'>
                    <h2>logo</h2>
                </div>
                <div className='middle'>
                    <a href='#'>home</a>
                    <a href='#'>about</a>
                    <a href='#'>menu</a>
                    <a href='#'>{test}</a>
                </div>
                <div className='right'>
                    <Button color={'magenta'} />
                </div>
            </div>
        </div>
    )
}
