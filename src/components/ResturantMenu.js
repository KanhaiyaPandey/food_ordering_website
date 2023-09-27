import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";
import ResturantMenuCard from "./ResturantMenuCard";

const ResturantMenu = () => {
    const {resId} = useParams();
    const [restaurant, setRestaurant] = useState({});
    const [menu, setMenu] = useState({});

    useEffect(() => {
    getResturantInfo();
    }, []);

    async function getResturantInfo (){
          const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.8271301&lng=86.1026455&&submitAction=ENTER&restaurantId="+resId);

          const json = await data.json();
          setRestaurant(json?.data?.cards[0]?.card?.card?.info);
          setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    }
    
    return (restaurant.length===0 && menu.length===0)? <Shimmer/> : (
        <div>
             <div>
            <h1 className="menu-heading" align="center">{restaurant.name}</h1>
            <hr/>
        </div>
        <div>

        {Object.values(menu).map((menu) => {
          return(

            <div className="row menu-list" key={menu?.card?.info?.id} >
              < ResturantMenuCard {...menu?.card?.info}  />
              <hr/>
           </div>

          );
           }
        )};
        </div>
        </div>
       
    );
};
export default ResturantMenu;

/**
 *   <div className="row restaurant-list">
        {Object.values(menu).map((menu) => {
          return(

            <div className="row menu-list" key={menu?.card?.info?.id} >
              < RestaurantMenuCard {...menu.card.info}  />
              <br/>
           </div>

          );
           }
        )};
        </div> */ 