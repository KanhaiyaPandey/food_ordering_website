import { IMG_CDN_URL } from "../config";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ResturantMenuCard = ({
  info
    // name ,
    // description,
    // imageId,
    // price,
  }) =>{

    const dispatch = useDispatch();

    const handleAddItem = (info) =>{
      dispatch(addItem(info));
    }
    const handleRemoveItem = () =>{
      dispatch(removeItem());
    }

    return (
 <div className="container container-flex menu">
    <div className="dish-details"> 
    <h5 className="dish-name">{info.name}</h5>
    <h6><i className="fa-solid fa-indian-rupee-sign"></i>  {info.price /100}</h6>
    <p className="menu-description">{info.description}</p>
    </div>
    <div className="menu-img-btn">
        <img className="menu-image img-on-top" src={IMG_CDN_URL + info.imageId}></img>
     
        <button className="minus-btn" onClick={() => handleRemoveItem()}> - </button>
        <button className="add-btn" onClick={() => handleAddItem(info)}> + </button>
        
      
    </div>
 </div>
    );
}
export default ResturantMenuCard;