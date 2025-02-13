import React, { useState } from 'react'
import Button from '../../elements/button'

function ContactUs() {
    const [user, setUser] = useState({})
    const [errors, setErrors] = useState({})

    const validate = () => {
        let error = {}
        let formIsValid = true
        if (!user.fname || user.fname.trim() === '') {
            error.fname = '* please enter valid first name'
            formIsValid = false
        }
        if (!user.lname || user.lname.trim() === '') {
            error.lname = '* please enter valid last name'
            formIsValid = false
        }
        setErrors(error)
        return formIsValid
    }

    const handleSubmit = () => {
        if (validate()) {
            localStorage.setItem('userInfo', JSON.stringify(user))
        }
    }
    console.log('errors**', errors);


    const handleOnChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
        setErrors({ ...errors, [name]: '' })
    }

    const handleCheckbox = (e) => {
        let arr = [...(user.hobbies || [])]
        if (e.target.checked) {
            arr.push(e.target.name)
        } else {
            let i = arr.findIndex(el => el === e.target.name)
            arr.splice(i, 1)
        }
        setUser({ ...user, ['hobbies']: arr })
    }

    return (
        <div>
            <label htmlFor="fname">First name:</label>
            {errors.fname && <span style={{ fontSize: '10px', color: 'red' }}>{errors.fname}</span>}<br />
            <input type="text" id="fname" name="fname" placeholder='please enter fname' onChange={(event) => handleOnChange(event)} /><br />
            <label htmlFor="lname">Last name:</label>
            {errors.lname && <span style={{ fontSize: '10px', color: 'red' }}>{errors.lname}</span>}<br />
            <input type="text" id="lname" name="lname" placeholder='please enter lname' onChange={(event) => handleOnChange(event)} /><br /><br />

            {/* <input id='reading' type='checkbox' name='reading' checked={hobbies.reading} onChange={(e) => setHobbies({ ...hobbies, [e.target.name]: e.target.checked })} />
            <label htmlFor='reading'>Reading</label><br />
            <input id='gaming' type='checkbox' name='gaming' checked={hobbies.gaming} onChange={(e) => setHobbies({ ...hobbies, [e.target.name]: e.target.checked })} />
            <label htmlFor='gaming'>Gaming</label><br /> */}

            <input id='reading' type='checkbox' name='reading' checked={null} onChange={(e) => handleCheckbox(e)} />
            <label htmlFor='reading'>Reading</label><br />
            <input id='gaming' type='checkbox' name='gaming' checked={null} onChange={(e) => handleCheckbox(e)} />
            <label htmlFor='gaming'>Gaming</label><br />
            <Button buttonText={'Submit'} handleOnClick={handleSubmit} />
        </div>
    )
}

export default ContactUs
