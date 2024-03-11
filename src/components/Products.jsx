//import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux"
import {add,remove} from "../redux/slice/CartSlice"
import { toast } from "react-hot-toast"
const Products = ({post}) => {

  
  
  const {cart} = useSelector((state)=>state)
  const dispatch =useDispatch();

  function addToCart(){
    dispatch(add(post))
    toast.success("Items Added")
  }

  function removeFromCart()
  {
    dispatch(remove(post.id))
    //toast.success("Items removed")
  }
  return (
    <div className="card">
      
      <div className="des">
        {
          (post.title.length>18) ? (post.title.substr(0,18)+"..."): (post.title)
        }
      </div>
      <div className="des-1">
        {
          (post.description.length>58) ? (post.description.substr(0,52)+"..."): (post.description)
        }
      </div>
      <div className="post-image">
        <img src={post.image} className="post-image"/>
      </div>
      <div className="price">
        <p className="post-price"><span>$</span>{post.price}</p>
        {
          cart.some ((p) => p.id == post.id ) ?
          
          (<button onClick={removeFromCart} className="btn">Remove Item</button>):
          
          (<button onClick={addToCart} className="btn">Add to cart</button>)
        }
        </div>
      
    </div>
  )
}

export default Products
