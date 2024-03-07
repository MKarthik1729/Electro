import React from 'react'
import { useItems } from '../context'
import './PlaceOrder.scss'
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
export default function PlaceOrder() {
    const navigate = useNavigate()
    const { items, updateItem, removeItem } = useItems()
  return (
    <div style={{
        display:"flex"
    }}>
                <div>
            <table className='table'>
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

            </div>
        </div>
        <form>
            <label>Name<br />
            <textarea  /></label><br />
            <label>Address<br /><textarea /></label><br />
            <label>pincode<br /><textarea /></label><br />
            <button>Submit</button>
        </form>
    </div>
  )
}
