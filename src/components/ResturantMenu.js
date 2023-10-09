import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import ResturantMenuCard from "./ResturantMenuCard";
import useResturant from "../utils/useRestaurant";
import useMenu from "../utils/useMenu";

const ResturantMenu = () => {

    const {resId} = useParams();
   const restaurant = useResturant(resId);
   const menu = useMenu(resId);

    return (
        <div>
             <div className="container menu-heading">
              <div>
            <h5 className="resturant-name" align="center">{restaurant.name}</h5>
              <p className="resturant-description">{restaurant.cuisines}</p>
              </div>
              <div className="ratings">
                <h6>{restaurant.avgRating}</h6>
                
              </div>
        </div>
       <hr/>
        <div>

        {Object.values(menu).map((menu) => {
          return(

            <div className="row menu-list" key={menu?.card?.info?.id} >
              < ResturantMenuCard {...menu?.card}  />
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
