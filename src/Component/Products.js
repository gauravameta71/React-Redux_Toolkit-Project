import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";


const Products = () => {
  const dispatch=useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://api.escuelajs.co/api/v1/products");
      //this will return string so we have to convert it into json
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);
  const handelAdd = (product)=>{
    dispatch(add(product))
  }
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.imagde} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>

          <button onClick={()=>handelAdd(product)} className="btn">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
