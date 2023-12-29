import { useContext } from "react";
import "./cart.css"
import { AppProvider } from "../data";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
export default function Cart() {
    const { cartData } = useContext(AppProvider);
    console.log(cartData);
    let sum = 0;
    cartData.forEach((item) => sum += item.price);

    return (

        <div>
            {
                cartData.length == 0 ? <EmptyCart/> : 
            

            <div className="cartWrapper">
                <div className="cartLeft">
                    {
                        cartData.map((item) => {
                            return <CartItem value={item} id={item.id}></CartItem>

                        })
                    }

                </div>

                <div className="cartRight">
                    <p id="sub1">Your Cart</p>
                    <h1 id="sub2">Summary</h1>
                    <p id="sub3">Total Items :  {cartData.length}</p>
                    <p id="sub4">Total Amount : ${sum.toFixed(2)}</p>
                    <button id="sub5">Checkout Now</button>

                </div>
            </div>
        }

        </div>
        


    );
}