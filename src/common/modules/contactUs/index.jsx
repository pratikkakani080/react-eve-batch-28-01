import React, { useEffect, useState } from 'react'
import Button from '../../elements/button'
import { useNavigate, useSearchParams } from 'react-router'
import { toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid';

function ContactUs() {
    const [user, setUser] = useState({})
    const [errors, setErrors] = useState({})
    const [page, setPage] = useState('page1')
    const navigate = useNavigate()
    const storedUsers = JSON.parse(localStorage.getItem('userInfo')) || []
    const [_params] = useSearchParams()
    const params = _params.get('id')

    useEffect(() => {
        setUser(storedUsers.find(el => params === el.id) || {})
    }, [])

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
            let listOfUsers = storedUsers || []
            if (listOfUsers.find(el => el.fname === user.fname && el.lname === user.lname)) {
                toast.error('user already exists')
            } else {
                if (params) {
                    const updatedUsers = listOfUsers.map(el => el.id === params ? user : el)
                    localStorage.setItem('userInfo', JSON.stringify(updatedUsers))
                    navigate('/user-table')
                } else {
                    listOfUsers.push({ ...user, id: uuidv4() })
                    localStorage.setItem('userInfo', JSON.stringify(listOfUsers))
                    navigate('/user-table')
                }
            }
        }
    }


    const handleOnChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
        setErrors({ ...errors, [name]: '' })
    }

    const handleCheckbox = (e) => {
        let arr = [...(user?.hobbies || [])]
        if (e.target.checked) {
            arr.push(e.target.name)
        } else {
            let i = arr.findIndex(el => el === e.target.name)
            arr.splice(i, 1)
        }
        setUser({ ...user, hobbies: arr })
    }


    const handleFormRender = () => {
        switch (page) {
            case 'page1':
                return (
                    <>
                        <label htmlFor="fname">First name:</label>
                        {errors.fname && <span style={{ fontSize: '10px', color: 'red' }}>{errors.fname}</span>}<br />
                        <input type="text" id="fname" name="fname" placeholder='please enter fname' value={user?.fname} onChange={(event) => handleOnChange(event)} /><br />
                        <label htmlFor="lname">Last name:</label>
                        {errors.lname && <span style={{ fontSize: '10px', color: 'red' }}>{errors.lname}</span>}<br />
                        <input type="text" id="lname" name="lname" placeholder='please enter lname' value={user?.lname} onChange={(event) => handleOnChange(event)} /><br /><br />

                        {/* <input id='reading' type='checkbox' name='reading' checked={hobbies.reading} onChange={(e) => setHobbies({ ...hobbies, [e.target.name]: e.target.checked })} />
                    <label htmlFor='reading'>Reading</label><br />
                    <input id='gaming' type='checkbox' name='gaming' checked={hobbies.gaming} onChange={(e) => setHobbies({ ...hobbies, [e.target.name]: e.target.checked })} />
                    <label htmlFor='gaming'>Gaming</label><br /> */}

                        <input id='reading' type='checkbox' name='reading' checked={user?.hobbies?.includes('reading')} onChange={(e) => handleCheckbox(e)} />
                        <label htmlFor='reading'>Reading</label><br />
                        <input id='gaming' type='checkbox' name='gaming' checked={user?.hobbies?.includes('gaming')} onChange={(e) => handleCheckbox(e)} />
                        <label htmlFor='gaming'>Gaming</label><br />
                        <Button buttonText={'Next'} handleOnClick={() => { if (validate()) setPage('page2') }} />
                    </>
                )

            case 'page2':
                return (
                    <>
                        <label htmlFor='email' >Email:</label>
                        <input type='email' id='email' name='email' placeholder='please enter valid email' />
                        <Button buttonText={'Previous'} handleOnClick={() => setPage('page1')} />
                        <Button buttonText={'Submit'} handleOnClick={handleSubmit} />
                    </>
                )


            default:
                break;
        }
    }

    return (
        <div>
            {handleFormRender()}
        </div>
    )
}

export default ContactUs
