import React, { useState } from 'react'
import Button from '../../elements/button'

function ContactUs() {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    // const [hobbies, setHobbies] = useState({})
    const [hobbies, setHobbies] = useState([])
    console.log('hobbies**', hobbies);


    const handleSubmit = () => {
        console.log(fname)
        localStorage.setItem('fName', fname)
        localStorage.setItem('lName', lname)
        // localStorage.setItem('hobbies', JSON.stringify(hobbies))
        setFname('')
        setLname('')
        // setHobbies({})
    }

    const handleCheckbox = (e) => {
        let arr = [...hobbies]
        if (e.target.checked) {
            arr.push(e.target.name)
        } else {
            let i = arr.findIndex(el => el === e.target.name)
            arr.splice(i, 1)
        }
        setHobbies(arr)
    }

    return (
        <div>
            <label htmlFor="fname">First name:</label><br />
            <input type="text" id="fname" name="fname" placeholder='please enter fname' value={fname} onChange={(event) => setFname(event.target.value)} /><br />
            <label htmlFor="lname">Last name:</label><br />
            <input type="text" id="lname" name="lname" placeholder='please enter lname' value={lname} onChange={(event) => setLname(event.target.value)} /><br /><br />
            {/* <input id='reading' type='checkbox' name='reading' checked={hobbies.reading} onChange={(e) => setHobbies({ ...hobbies, [e.target.name]: e.target.checked })} />
            <label htmlFor='reading'>Reading</label><br />
            <input id='gaming' type='checkbox' name='gaming' checked={hobbies.gaming} onChange={(e) => setHobbies({ ...hobbies, [e.target.name]: e.target.checked })} />
            <label htmlFor='gaming'>Gaming</label><br /> */}
            <input id='reading' type='checkbox' name='reading' checked={null} onChange={(e) => handleCheckbox(e)} />
            <label htmlFor='reading'>Reading</label><br />
            <input id='gaming' type='checkbox' name='gaming' checked={null} onChange={(e) => handleCheckbox(e)} />
            <label htmlFor='gaming'>Gaming</label><br />
            <Button
                buttonText={'Submit'}
                handleOnClick={handleSubmit}
            />
        </div>
    )
}

export default ContactUs
