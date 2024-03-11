
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slice/CartSlice";
import { toast } from "react-hot-toast";

const CartItems = ({item}) => {

  const dispatch =useDispatch();

      function removeFromCart()
        {
            dispatch(remove(item.id))
            toast.success("Items removed")

        }
  return (
    <div>
      <div className="main">
      <div>
        <img src={item.image} className="cart-image"/>
      </div>
      <div>
        <p className="item">{item.title}</p>
        <p className="des-1">{
          (item.description.length>58) ? (item.description.substr(0,81)+"..."): (item.description)
          }</p>
       <div className="price">
          <p className="post-price"><span>$</span>{item.price}</p>
          <MdOutlineDelete onClick={removeFromCart} className="btn-1"/>
        </div>

      </div>
      </div>
      <div className="line"></div>
    </div>
    
  )
}

export default CartItems
