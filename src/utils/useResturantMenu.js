//Always start all Hooks using use in small letter react will easily understant this is hook
import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";
const useResturantMenu = (resId) =>{
    const [resInfo, setresInfo] = useState(null);
    //fetch Data
    useEffect(()=> {
        fetchData();
    },[])
    const fetchData = async () => {
        const data = await fetch(MENU_API_URL + resId);
        const json = await data.json();
        setresInfo(json.data);
    };

    return resInfo;
    };

    export default useResturantMenu;


    