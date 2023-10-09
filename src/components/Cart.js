import { useSelector } from "react-redux";
import ResturantMenuCard from "./ResturantMenuCard";

const Cart = () =>{

    const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="container">

    <div className="row">
        <div className="col-8">
        <div className="payment-card">
            <h3>Make payment</h3>
         <button className="btn btn-success payment-btn">pay</button>
        </div>
        </div>
        <div className="col-4">
          
        </div>
    </div>
   
    </div>
  )
}
export default Cart;