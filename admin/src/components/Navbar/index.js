import React from 'react'
import './index.scss'
import {Link, Outlet} from 'react-router-dom'

function Index({logIn}) {

  return (
    <div>
        <div className='nav'>
            <Link to='/'
            >Logo</Link>
            <Link to='/products'
            >Products</Link>
           {logIn && <Link to='/addproducts'
            >New Products</Link>}
            {!logIn&&<Link to='/signIn'
            >SignIn</Link>}
        </div>
        
        <Outlet />
    </div>
  )
}

export default Index