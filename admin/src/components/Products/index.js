import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.scss'
import { CiHeart } from "react-icons/ci";
import { BsCart4 } from "react-icons/bs";
import Notification from '../Success';
import { useNavigate } from 'react-router-dom';
function ProductList() {
  const navigate = useNavigate()
  const [showNotification, setShowNotification] = useState(false);

  const handleShowNotification = () => {
    setShowNotification(true);

  };
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    // Fetch products when the component mounts
    axios.get('http://localhost:4000/admin/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        setError(error);
      });
  }, []); // Empty dependency array to ensure useEffect runs only once

  if (error) {
    return <div>Error fetching products: {error.message}</div>;
  }


  return (
    <div >
      <h1 style={{
        width:"100%",
        textAlign:"center"
      }}>Products</h1>
      <ul className='flex'>
      {products.map(product => (
          <li className='product' key={product._id}>
            <div >
              {product.file && product.file.data && (
                <img
                  src={`http://localhost:4000/admin/products/${product._id}`}
                  alt={product.title}
                />
              )}
              <div style={{display:"flex",justifyContent:"space-between"}}>
                
              <h2
              onClick={()=>navigate(`/item/${product._id}`)}
              >{product.title}</h2><CiHeart className='icon'/>
              </div>
              <p>{product.description}</p>
              <div className='flex1'>

              <p 
              style={{
                fontSize:"30px",
                width:"50%"
              }}
              >${product.cost}</p>
              </div>
              {/* <button onClick={handleShowNotification}>Show Notification</button> */}
      {/* <Notification message="Item Added To Cart!!" show={showNotification} /> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
