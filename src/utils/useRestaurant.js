import { useState } from "react"
import { useEffect } from "react";
import { FETCHING_MENU_URL } from "../config";

const useResturant = (resId) => {
    const [restaurant, setRestaurant] = useState({});

    useEffect(() => {
        getResturantInfo();
        }, []);
    
        async function getResturantInfo (){
          try{
              const data = await fetch(FETCHING_MENU_URL + resId);
              const json = await data.json();
              setRestaurant(json?.data?.cards[0]?.card?.card?.info);
            }
            catch (error) {
              console.error("Error while fetching or processing data:", error);
            }
    
        }

        return restaurant;
}
export default useResturant