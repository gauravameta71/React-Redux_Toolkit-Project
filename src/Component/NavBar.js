import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const items=useSelector((state)=>state.cart);  
  return (
    <div style={{display:'flex', alignItems:'center ',justifyContent:'space-between'} }>
      <span className="logo">REDUX STORE</span>
      <div>
        <Link className="navLink" to="/">Home</Link>
        <Link className="navLink" to="/cart">Cart</Link>
        <span className="cartCount">cart items : {items.length}</span>
      </div>
    </div>
  );
};

export default NavBar;
