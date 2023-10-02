import { IMG_CDN_URL } from "../config";

const ResturantMenuCard = ({
    name ,
    description,
    imageId,
    price,
  }) =>{

    return (
 <div className="container container-flex menu">
    <div className="dish-details"> 
    <h5 className="dish-name">{name}</h5>
    <h6><i className="fa-solid fa-indian-rupee-sign"></i>  {price /100}</h6>
    <p className="menu-description">{description}</p>
    </div>
    <div className="menu-img-btn">
        <img className="menu-image img-on-top" src={IMG_CDN_URL + imageId}></img>
     
        <button className="minus-btn"> - </button>
        <button className="add-btn"> + </button>
        
      
    </div>
 </div>
    );
}
export default ResturantMenuCard;