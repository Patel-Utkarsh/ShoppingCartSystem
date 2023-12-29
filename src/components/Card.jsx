import { toast } from "react-toastify";
import "./card.css"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { AppProvider } from "../data";
export default function Card(data) {
  
  
    const {btn,setButton,cartData,setCartData} = useContext(AppProvider);
    console.log(data);
   
    function clickHandler() {
        const newButton = [...btn];
        

        if(!btn[data.ind]) {
            toast.success('Item Added to Cart !');
            const newData = [...cartData];
            newData.push(data.values);
            setCartData(newData);


        }

        else{
            toast.error('Item removed from cart');
            const newData = [...cartData];
           const updatedCart =  newData.filter((item)=>item.id!==data.id);
           setCartData(updatedCart);
        }

        newButton[data.ind] = !btn[data.ind];
        setButton(newButton);
        


    }


    return(
        <div className="cardClass">
            <h2 id="cardHeading">{data.values.title.substring(0,20)}</h2>
            <p id="cardDes">{`${data.values.description.substring(0,100)}...`}</p>
            <img id="cardImg" src={data.values.image} alt="" />
            <div className="cardbtns">
                <h2 id="cardPrice">{`$${data.values.price}`}</h2>
            
            <button id="cardbtn" onClick={clickHandler}>{btn[data.ind]?`Remove from Cart` : `Add to cart`}</button>
           

                   


                
                
            </div>

           
        </div>


    );

}