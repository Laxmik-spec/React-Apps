import { React } from "react";
import { useCart } from "../context/cart";

const Item = (props) => {

    const cart = useCart();
    console.log('context ', cart);

    return (
        <div className="item-card">

            <p>{props.name}</p>
            <p>Price: {props.price}</p>
            <button onClick={() => cart.setItems([...cart.items, {name: props.name, price: props.price}])}>Add to Cart</button>
        </div>
    );
}

export default Item;