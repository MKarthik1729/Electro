import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const ItemsContext = createContext();
export const ItemsProvider = ({ children }) => {
  // Initialize state for items
  const [items, setItems] = useState([]);
  const [id,setId]=useState()

  // Function to add an item
  const addItem = (newItem) => {

    if (id){

    if (!items.some(item => item._id === newItem._id)) {
      setItems([...items, newItem]);
    } else {

      console.log("Item already exists in the array.");
    }}
    else{
      alert("please Login !!")
    }
  };
  

  // Function to remove an item
  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };
  const updateItem = (index, updatedItem) => {
    const updatedItems = [...items];
    updatedItems[index] = updatedItem;
    setItems(updatedItems);
  };


  return (
    <ItemsContext.Provider value={{ items, addItem,updateItem, removeItem,id,setId }}>
      {children}
    </ItemsContext.Provider>
  );
};

// Custom hook to consume the items context
export const useItems = () => useContext(ItemsContext);
