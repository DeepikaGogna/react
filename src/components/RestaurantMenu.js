import { useState, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API_URL } from "../utils/constants";
import { useParams } from "react-router";

const ResturantMenu = ()=>{
    const [resList, setResList] =useState(null);
    
    const {resId} = useParams();
    useEffect(() =>{
        fetchMenu();
    },[]);
    const fetchMenu = async () =>{
        const data = await fetch(
            MENU_API_URL + resId
        );
        const json = await data.json();
        console.log(json);
        setResList(json.data);
    };
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