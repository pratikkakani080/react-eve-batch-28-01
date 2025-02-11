import React, { useState } from 'react'
import Button from '../../elements/button'

function ContactUs() {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const handleSubmit = () => {
        console.log(fname)
        localStorage.setItem('fName', fname)
        localStorage.setItem('lName', lname)
        setFname('')
        setLname('')
    }
    return (
        <div>
            <label htmlFor="fname">First name:</label><br />
            <input type="text" id="fname" name="fname" placeholder='please enter fname' value={fname} onChange={(event) => setFname(event.target.value)} /><br />
            <label htmlFor="lname">Last name:</label><br />
            <input type="text" id="lname" name="lname" placeholder='please enter lname' value={lname} onChange={(event) => setLname(event.target.value)} /><br /><br />
            <Button
                buttonText={'Submit'}
                handleOnClick={handleSubmit}
            />
        </div>
    )
}

export default ContactUs
