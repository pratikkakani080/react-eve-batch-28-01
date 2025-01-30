import React from 'react'
import Button from '../../elements/button'
import './footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <Button
        buttonText={'submit'}
        color={'green'}
      />
    </div>
  )
}
