import ResturantCard from "./ResturantCard.js";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer.js";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");
    useEffect(()=> {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        // Optional Channing
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }
    // Conditional Rendering
   /* if(listOfRestaurants.length === 0 ){
       return <Shimmer/>;
    } */
    // Ternary Operator Conditional Rendering
  return listOfRestaurants.length === 0 ? <Shimmer/> : (  <div className="body" >
    <div className="filter">
        <div className="search">
        <input type="text" className="searchBox" value={searchText} onChange={
            (e) => setSearchText(e.target.value)
        }/>
        <button onClick={()=>{
                const filteredRestaurants = listOfRestaurants.filter(
                    (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurants(filteredRestaurants);
            }
        }>Search</button>
        </div>
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
            filteredRestaurants.map(
                resturant => <ResturantCard key= {resturant.info.id} resData = {resturant} /> 
            ) 
        }
    </div>
     </div> );
}

export default Body;