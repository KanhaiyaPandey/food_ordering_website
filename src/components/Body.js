
import { useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";

// State - local react variable
// useState  - return a array . first item is the name and the secound variable is the setSearchText.
// Hooks - just a function

function filterData(searchText, restaurants){
    return  restaurants.filter((restaurant)=> restaurant.info.name.includes(searchText))
}

const Body = () => {
  // const searchvar = userState
 const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");
    return (
      <div className="container">
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            ></input>
            <button className="btn btn-primary srarch-btn" 
              onClick={() =>{

                // need to filter the data
               const data = filterData(searchText,restaurants);
                // update the state with filter data
                setRestaurants(data);

              }}
             
            > Search</button>
        </div>


      <div className="row restaurant-list">
        {restaurants.map((restaurant) => {
          return(
            <div className="col-3">
           < RestaurantCard {...restaurant.info} key = {restaurant.info.id} />
           </div>
          );
        }
  
        )};
        </div>
      </div>
    );
  };

  export default Body;