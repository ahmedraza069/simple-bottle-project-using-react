import { useEffect, useState } from "react";
import Bottle from "./Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {
    const [bottles, setBottles] = useState([]);

    const [cart, setCart] = useState([])


    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])
const handleAddToCart = bottle => {
    const newCart = [...cart, bottle]
    setCart(newCart)
}

    return (
        <div>
            <h1>Bottles here: {bottles.length}</h1>
            <h4>Cart : {cart.length}</h4>
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle bottle={bottle} key={bottle.id} handleAddToCart={handleAddToCart}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;