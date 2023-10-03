
import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useIsOnline from "../utils/useIsOnline";





const Body = () => {

  const [allRestaurants, setAllRestaurants] = useState([]);
 const [FilteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  
useEffect(()=>{

  getRestaurants();
}, []);


async function getRestaurants() {
  try{
 const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.8271301&lng=86.1026455&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  setAllRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }catch (error) {
    console.error("Error while fetching or processing data:", error);
  }
}

const isOnline = useIsOnline();
if(!isOnline){
 return(
  <h1>Opps!</h1>
 );
}

 if(!allRestaurants)return null;

    return  (allRestaurants.length===0) ? <Shimmer/> :(
      <div className="container">
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            ></input>
            <button className="btn btn-primary search-btn" 
              onClick={() =>{

               const data = filterData(searchText,allRestaurants);

                setFilteredRestaurants(data);

              }}

            > <i className="fa-solid fa-magnifying-glass"></i></button>
        </div>


      <div className="row restaurant-list">
        {FilteredRestaurants.map((restaurant) => {
          return(

            <div className="col-3 list" key = {restaurant.info.id} >
              <Link className="link" to = {"/resturant/" + restaurant.info.id}>
              < RestaurantCard {...restaurant.info} />
              </Link>
           </div>

          );
           }
        )};
        </div>
      </div>
    );
  };

  export default Body;