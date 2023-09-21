
import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return(
  <img className="logo"
   src={"https://img.freepik.com/premium-photo/3d-restaurant-application-icons_460848-11259.jpg?w=826"}></img>
);
}

const restaurantList = [

  {
    info: {
      id: "623168",
      name: "Favourite Wife",
      cloudinaryImageId: "u1f4pzhjeahvbwqtnvmt",
      locality: "Sashtri Nagar",
      areaName: "Bistupur",
      costForTwo: "₹150 for two",
      cuisines: [
        "Chinese",
        "Fast Food"
      ],
      rating: 3.6
    }
    },

   { 
    info: {
      id: "483015",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      cloudinaryImageId: "f4he3rgnbnbwwa4fwamf",
      locality: "Kadma",
      areaName: "Bistupur",
      costForTwo: "₹200 for two",
      cuisines: [
        "Desserts",
        "Ice Cream",
        "Ice Cream Cakes"
      ],
      rating: 4.2
    }
  },

  {
    info: {
      id: "669353",
      name: "Ishq Wala Egg",
      cloudinaryImageId: "68acb3e51d4421f3098b76b5e768a3ef",
      locality: "Hariom Nagar",
      areaName: "Adityapur",
      costForTwo: "₹200 for two",
      cuisines: [
        "Fast Food"
      ],
      rating: 3.5
     }
    },
{

    info: {
    id: "461565",
    name: "Domino's Pizza",
    cloudinaryImageId: "cnhwq8ezglktztveajxq",
    locality: "Dhirajganj",
    areaName: "Gamharia",
    costForTwo: "₹400 for two",
    cuisines: [
      "Pizzas",
      "Italian",
      "Pastas",
      "Desserts"
    ],
    rating: 4.1
  }
}

];


 const Header = () => {
  return (
    <div className="header">
      {Title()}

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    
    </div>
  );
};

const RestaurantCard = ({
  name ,
  cuisines,
  cloudinaryImageId,
  areaName,
  rating
}) =>{

  return(
    <div className="card">
      <img className="card-img-top" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId }>

      </img>
      <h5 className="card-title">{name}</h5>
      <h5 className="card-rating"><i className="rating-icon fa-regular fa-star fa-2xs"></i>{rating}</h5>
     <p className="card-text">{cuisines. join(", ")}</p>
     <p className="card-text">{areaName}</p>
    </div>
  );
   
}

const Body = () => {
  return (
    <div className="container">
    <div className="row restaurant-list">

      {restaurantList.map((restaurant) => {
        return(
          <div className="col-3">
         < RestaurantCard {...restaurant.info} key = {restaurant.info.id} />
         </div>
        );
      }

      )};
      </div>
    </div>
  )
}
const Footer  = () => {
  return <h3>footer</h3>
}
// JSX one parent problem
// React.Fregment - an component by React
// it's an empty tag
const AppLayout = () => {
  return (
    <React.Fragment>
     {Header()}
       {Body()}
      {Footer()}  
      </React.Fragment>    
  );
};

// you call call a function inside the { container_for_example } or can write any Js code. This is known a component composistion.

const root = ReactDOM.createRoot(document.getElementById("root"));

//    passing a react element inside the root.
//    passing a react component insidethe root we use root.render(< Name_of_component />) .


root.render(<AppLayout />);