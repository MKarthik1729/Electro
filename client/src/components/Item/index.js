import React, { useEffect, useState } from 'react'
import './index.scss'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BsCart4 } from "react-icons/bs";
import { useItems } from '../context';

function ELe() {
    const {addItem} = useItems()
    const { id } = useParams();
    const [products, setProducts] = useState();

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get(`http://localhost:4000/admin/${id}`);
          setProducts(response.data);
          console.log(products)
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProducts();
    }, []);
  return (
    <div className='item'>

        <img src={`http://localhost:4000/admin/products/${id}`} />
        {products && <div>
        <h2>{products.title}</h2>
        <hr />
        <p id='des'>{products.description}</p>
        <hr />
        <p id='quantity'>Stock : {products.quantity}</p>
        <p id='cost'>Price : {products.cost}</p>
        <button onClick={()=>addItem({...products,NoOfItems:1})}>Add to cart  <BsCart4 /></button>
        </ div>}
    </div>
  )
}

export default ELe