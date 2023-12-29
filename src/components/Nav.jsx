import "./nav.css"
import { useContext } from "react";
import AppData, { AppProvider } from "../data";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../images/3081559.png"


import { GoDotFill } from "react-icons/go";
import { NavLink } from "react-router-dom";



export default function Nav() {
  
    const style = {
        color : 'yellow',
        position : 'absolute',
        top : 12,
        left:15
    }
   const {products,cartData} = useContext(AppProvider);
   console.log(cartData)

    return(
        <nav className="navClass">
            <div className="nav">
                <NavLink to={"./"}>
                    <img id="logo" src={logo} alt="" />
                </NavLink>
                
                <NavLink to={"/cart"}>
                <button id="cart">
                   <FaShoppingCart id="crt" fill="yellow" size={30}/>
                   {cartData.length > 0 ? <GoDotFill style={style}></GoDotFill> : `` };
                
                </button>

                </NavLink>
                

            </div>
           
        </nav>
    );
}