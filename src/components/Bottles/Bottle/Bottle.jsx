
import './Bottle.css'
const Bottle = ({bottle, handleAddToCart}) => {
const {name, img, price} = bottle;


    return (
        <div className='bottle'>
            <h3>Name : {name}</h3>
            <img src={img} alt="" />
            <h4>Price : ${price}</h4>
            <button onClick={() => handleAddToCart(bottle)} className='btn'>Add To Cart</button>
        </div>
    );
};

export default Bottle;