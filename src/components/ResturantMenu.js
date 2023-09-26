import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";

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
          console.log(json);
          setRestaurant(json?.data?.cards[0]?.card?.card?.info);
          setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    }
    
    return (!restaurant)? <Shimmer/> : (
        <div>
             <div>
            <h1 className="menu-heading" align="center">{restaurant.name}</h1>
        </div>
        <div>
            <ul>{
                Object.values(menu).map((menu) =><li key={menu?.card?.info?.id}>{menu?.card?.info?.name}</li>)
                // console.log(Object.values(menu))
              }</ul>
        </div>
        </div>
       
    );
};
export default ResturantMenu;