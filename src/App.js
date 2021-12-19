import React,{useState} from 'react';
import './App.css';
//import data from './Components/Back/Data/Data';
import Header from './Components/Front/Header/Header';
import Routes from './Components/Front/Routes/Routes';

import {BrowserRouter as Router} from "react-router-dom"
function App() {
const [cartItems, setCartItems]=useState([]);

//
const handleAddProduct=(productItem)=>{
  const productExist=cartItems.find((item)=>item.id===productItem.id);
  if(productExist){
    setCartItems(cartItems.map((item)=>item.id===productItem.id ?
    {...productExist,quantity:productExist.quantity+1}:item))
  }
  else{
   
    setCartItems([...cartItems,{...productItem,quantity:1}])
  }
}
// remove item
const handleRemoveProduct=(productItem)=>{
  const productExist=cartItems.find((item)=>item.id===productItem.id)
if(productExist.quantity=== 1){
  setCartItems(cartItems.filter((item)=>item.id!==productItem.id))
  }
  else{
    setCartItems(cartItems.map((item)=>
    item.id===productItem.id?
    {...productExist,quantity:productExist.quantity-1}:
    item))
  }
}
const clearCart=()=>{
  setCartItems([]);
}
  //const productItems=data;
  const productItems=[
    {
        id:"1",
        name:"Boat Headphone Mini",
        price:1299,
        image:"./pics/boat.jpeg" },
    {
        id:"2",
        name:"Sol Headphone",
        price:899,
        image:"./pics/headphones.png"
    },
    {
        id:"3",
        name:"MIVI headphones",
        price:999,
        image:"./pics/mivi.jpeg"
    },
    {
        id:"4",
        name:"oneplus",
        price:45000,
        image:"./pics/77.jpeg"
    },
    {
        id:"5",
        name:"Iphone",
        price:54000,
        image:"./pics/iphone.jpeg"
    },
    {
        id:"6",
        name:"Vivo",
        price:10999,
        image:"./pics/vivo.jpeg"
    },
    {
        id:"7",
        name:"samsung",
        price:13999,
        image:"./pics/samsung.jpeg"
    },
    {
      id:"8",
      name:"Hp Laptop",
      price:56899,
      image:"./pics/laptop.jpeg"
  },
  {
    id:"9",
    name:"Mi powerbank",
    price:999,
    image:"./pics/mipower.jpeg"
},
]
  return (
    <div >
    <Router>
  
  <Header cartItems={cartItems}/>
  <Routes productItems={productItems}
  cartItems={cartItems}
  handleAddProduct={handleAddProduct}
  handleRemoveProduct={handleRemoveProduct}
  clearCart={clearCart}/>

  </Router>

  
    </div>
  );
}

export default App;
