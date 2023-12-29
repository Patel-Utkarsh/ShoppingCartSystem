import Card from "./Card";
import "./home.css";
import { AppProvider } from "../data";
import { useContext } from "react";

export default function Home() {
    const {products} = useContext(AppProvider);
   
    return (
        <div className="Cards">
            {
                products.map((item,key)=>{
                  
                   
                    return <Card values={item} ind={key} id={item.id}/>


                })
            }

        </div>
    );
}