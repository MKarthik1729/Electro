import React, { useRef, useState } from 'react'
import axios from 'axios'
import './index.scss'
import { useNavigate } from 'react-router-dom'
function Index() {
  const first_name = useRef()
  const second_name = useRef()
  const email = useRef()
  const password = useRef()
  const cpassword = useRef()
  const phone_number = useRef()
  const navigate = useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault()
    const store = {
      firstname:first_name.current.value,
      secondname:second_name.current.value,
      email:email.current.value,
      password:password.current.value,
      phone:phone_number.current.value
    }
    console.log(store)
    if (password.current.value === cpassword.current.value && password.current.value.length>=8 ){
    try {
      const response = await axios.post('http://localhost:4000/users/signup', store);
      console.log('Form submitted successfully!', response.data);
      navigate('/signin')
    } catch (error) {
      console.error('Error submitting form:', error);
      // Optionally, handle error (e.g., show an error message)
    }
  }else{
    alert("passwords Not Matching or characters less than 8")
  }

  }
  return (
    <form className='middle shadow' onSubmit={handleSubmit}>
        <h4 style={{
          fontSize:"40px",
          width:"100%",
          textAlign:"center",
          padding: "0",
          margin: "0"
      }}>SIGNUP</h4>
      <div className='signup'>
        <div>
          <label htmlFor="first_name">First Name</label>
          <input type='text' id="first_name" 
          ref={first_name} required
          placeholder='First Name' className="input-field" />
          <label htmlFor="second_name">Second Name</label>
          <input type='text' id="second_name" 
          ref={second_name} required
          placeholder='Second Name' className="input-field" />
          <label htmlFor="email">Email</label>
          <input type='email' id="email" 
          ref={email} required
          placeholder='Email' className="input-field" />
        </div>
        <div>
          <label htmlFor="phone_number">Phone number</label>
          <input type='number' id="phone_number" 
          ref={phone_number} required
          placeholder='Phone Number' className="input-field" />
          <label htmlFor="pass">Password</label>
          <input type='password' id="pass" 
          ref={password} required
          placeholder='Password' className="input-field" />
          <label htmlFor="conpass">Confirm Password</label>
          <input type='password' id="conpass" 
          ref={cpassword} required
          placeholder='Confirm Password' className="input-field" />
        </div>
      </div>
          <button className='button' type='submit' >Submit</button>

    </form>
  )
}

export default Index