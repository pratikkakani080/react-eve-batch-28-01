import React, { useState } from 'react'
import './login.css'

export default function Login() {
  const [data, setData] = useState({ text: '', password: '', email: '', number: '', checkbox: '', radio: '', date: '', textarea: '' })

  const hendchange = (event) => {
    const { name, value, type, checked } = event.target
    const newValue = type === 'checkbox' ? checked : value
    console.log(`Changed: ${name}, New Value: ${newValue}`)
    setData(prevData => ({ ...prevData, [name]: newValue }))
  }

  const submit = () => {
    localStorage.setItem('text', data.text)
    localStorage.setItem('password', data.password)
    localStorage.setItem('email', data.email)
    localStorage.setItem('number', data.number)
    localStorage.setItem('checkbox', data.checkbox)
    localStorage.setItem('radio', data.radio)
    localStorage.setItem('date', data.date)
    localStorage.setItem('textarea', data.textarea)
    setData({ text: '', password: '', email: '', number: '', checkbox: '', radio: '', date: '', textarea: '' }) 
  }
  return (
    <div>
      <form>
        <label>Text:
          <input type="text" name="text" placeholder="Enter text" onChange={hendchange} />
        </label><br />
        <label>Password:
          <input type="password" name="password" placeholder="Enter password" onChange={hendchange} />
        </label><br />
        <label>Email:
          <input type="email" name="email" placeholder="Enter email" onChange={hendchange} />
        </label><br />
        <label>Number:
          <input type="number" name="number" placeholder="Enter number" onChange={hendchange} />
        </label><br />
        <label>Checkbox:
          <input type="checkbox" name="checkbox" onChange={hendchange} />
        </label><br />
        <label>Radio:
          <input type="radio" name="radio" value="option1" onChange={hendchange} /> Option 1
          <input type="radio" name="radio" value="option2" onChange={hendchange} /> Option 2
        </label><br />
        <label>Date:
          <input type="date" name="date" onChange={hendchange} />
        </label><br />
        <label>Textarea:
          <textarea name="textarea" placeholder="Enter text" onChange={hendchange}></textarea>
        </label><br />
        <button type="submit" onClick={submit}>Submit</button>
      </form>
    </div>
  )
}
