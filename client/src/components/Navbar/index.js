import React, { useContext } from 'react'
import './index.scss'
import {Link, Outlet} from 'react-router-dom'
import {useItems} from '../context/index'
import { BsCart4 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
function Navbar(){
  const {id,setId} = useItems()
  return (
    <div>
        <div className='nav'>
            <Link to='/'
            >Logo</Link>
            <Link to='/products'
            >Products</Link>
        {!id && <Link to='/signin'
            >SignIn</Link>}
                {!id && <Link to='/signup'
            >SignUp</Link>}
                {id && <Link to='/cart'
            ><BsCart4 /></Link>}
        {id && <Link to='/wishlist'
            ><CiHeart style={{fontSize:"30px"}} /></Link>}
        {id && <Link onClick={()=>setId(null)} to='/'>
            LogOut
            </Link>}
        </div>
        <Outlet />
    </div>
  )
          }

export default Navbar;