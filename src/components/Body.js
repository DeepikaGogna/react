import ResturantCard from "./ResturantCard.js";
import {useState} from "react";
import resList from "../utils/mockData.js"

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (  <div className="body" >
    <div className="filter">
        <button className="filter-btn" 
        onClick={() => {
            const filterList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.2
            );
            setListOfRestaurants(filterList);
        }}
        >Top Rated Resturant</button>
        </div>
    <div className="res-container">
        {
            listOfRestaurants.map(
                resturant => <ResturantCard key= {resturant.info.id} resData = {resturant} /> 
            ) 
        }
    </div>
     </div> );
}

export default Body;