
import { useEffect, useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

// State - local react variable
// useState  - return a array . first item is the name and the secound variable is the setSearchText.
// Hooks - just a function

function filterData(searchText, restaurants){
    return  restaurants.filter((restaurant)=> restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()))
}

const Body = () => {
  // const searchvar = userState
  const [allRestaurants, setAllRestaurants] = useState([]);
 const [FilteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  
useEffect(()=>{
  // API call
  getRestaurants();
}, []);


async function getRestaurants(){
  try{
 const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.8271301&lng=86.1026455&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  console.log(json);
  setAllRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }catch (error) {
    console.error("Error while fetching or processing data:", error);
  }
}

    return (FilteredRestaurants.length === 0)? <Shimmer/>  :  (
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
               const data = filterData(searchText,allRestaurants);
                // update the state with filter data
                setFilteredRestaurants(data);

              }}

            > Search</button>
        </div>


      <div className="row restaurant-list">
        {FilteredRestaurants.map((restaurant) => {
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