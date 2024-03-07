import React, { useRef, useState } from 'react'
import './index.scss'
import { useNavigate } from 'react-router-dom'
function Index({log}) {
  const email = useRef()
  const pass = useRef()
  const navigate = useNavigate()
  const OnSubmit = (e) => {
    e.preventdefault()
    console.log("relax working")
  }

  return (
    <div>
      <div className='signup'>
        <h4>SIGNIN</h4>
        <div>
          <label htmlFor="email">Email</label>
          <input type='email' id="email" 
          ref={email}
          placeholder='Email' className="input-field" />
          <label htmlFor="pass">Password</label>
          <input type='password' id="pass" 
          ref={pass}
          placeholder='Password' className="input-field" />
          <button onClick={() => {
            log({
              email:email.current.value,
              password:pass.current.value,
            })
            navigate('/')
          }}>Submit </button>
        </div>

      </div>

    </div>
  )
}

export default Index