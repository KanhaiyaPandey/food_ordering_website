import { useState } from "react";
import { useEffect } from "react";
import { FETCHING_MENU_URL } from "../config";

const useMenu = (resId) => {

    const[menu,setMenu] = useState({});

    useEffect(() => {
        getResturantInfo();
        }, []);
    
        async function getResturantInfo (){
          try{
              const data = await fetch( FETCHING_MENU_URL + resId);
              const json = await data.json();
              setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
            }
            catch (error) {
              console.error("Error while fetching or processing data:", error);
            }
    
        }

        return menu;

}
export default useMenu;