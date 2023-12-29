import { NavLink } from "react-router-dom";
import "./emptycart.css"

export default function EmptyCart() {
    return (
        <div className="emptyCartWrapper">
            <p id="dialogue1">
                Your Cart is Empty

            </p>
            <NavLink id="ll" to={"/"}>
                <button id="dialogue2">Shop Now</button>

            </NavLink>
            
        </div>
    );
}