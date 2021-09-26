import React from 'react'
import Products from '../Products/Products'

import Cart from '../Cart/Cart'
import {Route,Switch} from 'react-router-dom'
import ContactUs from '../ContactUs/ContactUs'
const Routes = ({productItems,cartItems,handleAddProduct,handleRemoveProduct,clearCart}) => {
    return (
        <div>
          <Switch>
          <Route path="/" exact>
          <Products productItems={productItems}
          handleAddProduct={handleAddProduct}/>
          </Route>
          <Route path="/contactus" >
          <ContactUs/>
          
          </Route>
          <Route path="/cart">
          <Cart cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          clearCart={clearCart}/></Route>
          </Switch>
        </div>
    )
}

export default Routes
