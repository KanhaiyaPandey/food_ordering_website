import { IMG_CDN_URL } from "../config";



 const RestaurantCard = ({
    name ,
    cuisines,
    cloudinaryImageId,
    areaName,
    rating
  }) =>{
  
    return(
      <div className="card">
        <img className="card-img-top" src={ IMG_CDN_URL + cloudinaryImageId }>
  
        </img>
        <h5 className="card-title">{name}</h5>
        <h5 className="card-rating"><i className="rating-icon fa-regular fa-star fa-2xs"></i>{rating}</h5>
       <p className="card-text">{cuisines. join(", ")}</p>
       <p className="card-text">{areaName}</p>
      </div>
    );
     
  };
  
export default RestaurantCard ;