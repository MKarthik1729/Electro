import React from 'react'
import { useItems } from '../context'
import './cart.scss'
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Cart() {
    const navigate = useNavigate()
    const { items, updateItem, removeItem } = useItems()
    console.log(items)
    return (
        <div>
            <table className='table table-margin'>
                <thead>
                    <th>Title</th>
                    <th>Cost per Item</th>
                    <th>No of Items</th>
                    <th>Total</th>
                </thead>
                <tbody>

                    {
                        items && items.map((e, index) => {
                            return (<tr>
                                <td>
                                    {e.title}
                                </td>
                                <td>
                                    {e.cost}
                                </td>
                                <td>
                                    <input type='number' placeholder={e.NoOfItems}
                                        onChange={(ele) => updateItem(index, { ...e, NoOfItems: ele.target.value })}
                                    />
                                </td>
                                <td>
                                    {e.NoOfItems * e.cost}
                                </td>
                                <td className='del' onClick={removeItem}>
                                    <FaTrashAlt />
                                </td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "30px"
            }}>

                <h2 style={{
                    textAlign: "center"
                }}>total : {items.reduce((acc, item) => {
                    return acc + (item.cost * item.NoOfItems);
                }, 0)}</h2>
                <button
                    onClick={() => navigate('/placeorder')}
                    style={{
                        margin: "0",
                        width: "40%"
                    }}
                > Place Order</button>
            </div>
        </div>
    )
}

export default Cart