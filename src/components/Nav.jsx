import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Nav = () => {

  const {cart} =useSelector((state)=>state);
  return (
    <div className="nav-container">
       <div >
        <NavLink to="/" className="nav-bar"><h1 className="nav-icon">Ecomerce Platform</h1> </NavLink>
      </div>
      <div className="nav-cart">
        <NavLink to="/" className="nav-bar"><p className="home">Home</p></NavLink>
        <NavLink to="/cart" className="nav-bar">
          <div>
            <FaShoppingCart className="cart" />
            <div >
              {
                cart.length>0 && <span className="logo">{cart.length}</span> 
              }
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Nav
