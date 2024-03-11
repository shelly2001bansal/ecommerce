import {useSelector} from"react-redux"
import {NavLink} from "react-router-dom"
import CartItems from "../components/CartItems"
import { useEffect, useState } from "react"
const Cart = () => {

  const {cart}=useSelector((state)=>state)
  const [totalAmount,setTotalAmount]=useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart])
  return (
    <div>
      <div className="content">
        {
          cart.length>0 ? 
          (
            <div className="check">
              <div>
              {
                cart.map((item,index)=>(
                  <CartItems key={item.id} item={item} itemIndex={index}/>
                ))
              }
              </div>
              <div className="summary">
              <div>
                <p className="your">Your Cart</p>
                <p className="describe">Summary</p>
                <span className="total">Total Items : {cart.length}</span>
              </div>
              <div className="out">
                <p >Total Amount:<span className="amount">$</span><span className="amount">{totalAmount}</span></p>
                <button className="btn-2">CheckOut Now</button>
              </div>
              </div>
            </div>
          ):
          (<div className="no-item">
            <h1 className="empty">Cart Empty</h1>
            <NavLink to="/" className="shop"><button className="now">Shop Now</button></NavLink>
          </div>)
        }
      </div>
    </div>
  )
}

export default Cart
