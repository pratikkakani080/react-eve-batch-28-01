import React, { useState } from 'react'
import Button from '../../elements/button'

function ContactUs() {
    const [formData, setFormData] = useState({ fname: '', lname: '' })
    
    const handleChange = (event) => {
        const { name, value } = event.target
        console.log("target***",event.target)
        setFormData(formData=> ({ ...formData, [name]: value }))
    }

    const handleSubmit = () => {
        console.log(formData.fname)
        localStorage.setItem('fName', formData.fname)
        localStorage.setItem('lName', formData.lname)
        setFormData({ fname: '', lname: '' })
    }

    return (
        <div>
            <label htmlFor="fname">First name:</label><br />
            <input type="text" id="fname" name="fname" placeholder='please enter fname' value={formData.fname} onChange={handleChange} /><br />
            <label htmlFor="lname">Last name:</label><br />
            <input type="text" id="lname" name="lname" placeholder='please enter lname' value={formData.lname} onChange={handleChange} /><br /><br />
            <Button
                buttonText={'Submit'}
                handleOnClick={handleSubmit}
            />
            
        </div>
    )
}

export default ContactUs
