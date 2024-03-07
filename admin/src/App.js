import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './components/Home'
import Products from './components/Products'
import Sign from './components/Addproducts'
import SignIn from './components/Addproducts/SignIn';

function App() {
  const [logIn, setLogIn] = useState(false)
console.log(logIn)
  const log  = (e)=>{
    if (e.email === 'varshith.a20@iiits.in' && e.password === '123456'){
      setLogIn(true)
    }else{
      alert("Login In details are incorrect !!!!")
    }
  }
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar logIn={logIn} />}>
        <Route path='' exact Component={Home} />
        <Route path='products' Component={Products} />
        <Route path='addproducts' Component={Sign} />
        <Route path='signin' element={<SignIn  log={log} />} />

          </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
