import React, { useEffect, useState } from 'react'
import Button from '../../elements/button'
import { useNavigate } from 'react-router'

function UserTable() {
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('userInfo')) || [])
    const navigate = useNavigate()

    const handleOnEdit = (user) => {
        navigate(`/contact-us?id=${user.id}`)
    }

    const handleOnDelete = (id) => {
        if (window.confirm('Are you sure you want to delete the data?')) {
            // delete fun
            let usersList = users || []
            const index = usersList.findIndex(el => el.id === id)
            usersList.splice(index, 1)
            setUsers(usersList)
            localStorage.setItem('userInfo', JSON.stringify(usersList))
        }
    }

    return (
        <div>
            <table border={1} cellSpacing={0} cellPadding={10}>
                <thead>
                    <tr>
                        <td>first name</td>
                        <td>last name</td>
                        <td>hobbies</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{user.fname}</td>
                                <td>{user.lname}</td>
                                <td>{user.hobbies.join(', ')}</td>
                                <td><Button handleOnClick={() => handleOnEdit(user)} buttonText={'Edit'}></Button></td>
                                <td><Button handleOnClick={() => handleOnDelete(user.id)} buttonText={'Delete'}></Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default UserTable
