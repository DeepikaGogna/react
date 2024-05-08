import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useResturantMenu from "../utils/useResturantMenu";

const ResturantMenu = ()=>{    
    const {resId} = useParams();

    const resList = useResturantMenu(resId);
    console.log(resList);
  if(resList == null ){
        return (< Shimmer />);
    }
      const {name, cuisines, cloudinaryImageId, costForTwoMessage} = resList?.cards[2]?.card?.card?.info;

    const {itemCards} = resList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[8]?.card?.card;
         return (
        <div className="resturantMenu-container">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
           <ul>
         {itemCards.map((list) => (
               <li> {list.card.info.name} - {list.card.info.price || list.card.info.defaultPrice}</li>
                )) }
           </ul>
        </div>
    ); 
}

export default ResturantMenu;