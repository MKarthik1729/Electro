import React, { useRef, useState } from 'react'
import './index.scss'
import axios from 'axios'
import { useItems } from '../context'
import { useNavigate } from 'react-router-dom'
function Index() {
  const navigate = useNavigate()
  const {setId}  = useItems()
  const email = useRef()
  const password = useRef()

  const handleSubmit = async(e) => {
    const store = {
      email:email.current.value,
      password:password.current.value,
    }
    console.log(store)

    try {
      const response = await axios.post('http://localhost:4000/users/login', store);
      console.log('Form submitted successfully!', response.data);
      setId(response.data.id)

      
    } catch (error) {
      console.error('Error submitting form:', error);
    }
navigate('/')
  }
  return (
    <div className='middle shadow'>
        <h4 style={{
          fontSize:"30px",
          margin:"0",
          padding:"0  "
        }}>SIGNIN</h4>
      <div className='signup'>
        <div>
          <label htmlFor="email">Email</label>
          <input type='email' id="email" 
          ref={email}
          placeholder='Email' className="input-field" />
          <label htmlFor="pass">Password</label>
          <input type='password' id="pass" 
          ref={password}
          placeholder='Password' className="input-field" />
          <button onClick={handleSubmit}>Submit </button>
        </div>

      </div>

    </div>
  )
}

export default Index