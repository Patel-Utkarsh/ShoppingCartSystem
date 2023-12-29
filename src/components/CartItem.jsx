import { useContext } from "react";
import "./cartItem.css"
import { MdDelete } from "react-icons/md";
import { AppProvider } from "../data";
import { toast } from "react-toastify";
export default function CartItem(data) {
    console.log(data);
    const {cartData,setCartData,btn,setButton} = useContext(AppProvider)

    const style = {
        height : '40px'
    }

    function clickHandler() {
        const newCartData = cartData.filter((item)=>item.id!==data.id)
        setCartData(newCartData);
        const newBtn = [...btn];
        newBtn[(data.id)-1] = false;
        toast.error('Item removed from cart');
        setButton(newBtn);
    }

    return (
        <div className="cartItemWrapper">
            <img id="cartItemImg" src={data.value.image} alt="" />

            <div className="cartItemRight">
                <h2 id="cartItemHeading">
                    {data.value.title};

                </h2>

                <p id="cartItemDescription">
                {data.value.description};

                </p>

                <div className="cartItemBottom">

                    <h2 id="cartItemPrice">{`$${data.value.price}`}</h2>

                    <button id="deleteItemBtn" onClick={clickHandler}>
                        <MdDelete fill="red" size={30}/>

                         </button>

                </div>
               
            </div>

            <br />
        </div>
    );
}