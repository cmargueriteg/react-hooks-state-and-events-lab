import React, {useState} from "react";

function Item({ name, category }) {
    const [itemInCart, setIsInCart] = useState(false)

    function addToCart(){
      setIsInCart((itemInCart) => !itemInCart)
    }


  return (
    <li className={itemInCart ? "in-cart" : ""}>
    <span>{name}</span>
    <span className="category">{category}</span>
    <button
      className={itemInCart ? "remove" : "add"}
      onClick={addToCart}
    >
      {itemInCart ? "Remove From" : "Add to"} Cart
    </button>
  </li>
  );
}

export default Item;
