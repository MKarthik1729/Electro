import './App.css';

import Navbar from './components/Navbar'
import Home from './components/Home'
import Products from './components/Products'
import Sign from './components/Sign'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/Sign/SignIn';
import { ItemsProvider } from './components/context';
import Cart from './components/cart/Cart';
import MyComponent from './components/Item/index'
import PlaceOrder from './components/PlaceOrder/PlaceOrder';


function App() {
  return (
    <div>
      <ItemsProvider>
        <BrowserRouter>
          <Routes>
            {/* <Route path='/' Component={Navbar}>
              <Route path='' exact Component={Products} />
              <Route path='products' Component={Products} />
              <Route path='signup' Component={Sign} />
              <Route path='signin' Component={SignIn} />
              <Route path='cart' Component={Cart} />
              <Route path='item/:id' component={MyComponent} />
            </Route> */}
                    <Route path="/" element={<Navbar />} >
        <Route path="products" element={<Products />} />
        <Route path="signup" element={<Sign />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="cart" element={<Cart />} />
        <Route path="placeorder" element={<PlaceOrder />} />
        <Route path="item/:id" element={<MyComponent />} /></Route> 
          </Routes>
        </BrowserRouter>
      </ItemsProvider>
    </div>
  );
}

export default App;
