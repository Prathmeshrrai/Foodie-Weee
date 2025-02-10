import { useState } from "react";
import {FETCH_URL_LINK} from "../constants";

const useRestaurant = (id) =>{
    const[restaurantInfo, setRestaurantInfo] = useState(null);
    
    useEffect(()=> {
        getRestaurantMenu();
    }, []);

    async function getRestaurantMenu(){
        const data = await fetch(FETCH_URL_LINK + id);
        const json = await data.json();
        console.log(json.data);
        console.log(
            json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        );
    
    const restaurantData = json?.data?.cards?.find(
        (card) =>
            card?.card?.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    )?.card?.card?.info;

    console.log("Fetched Restaurants:", restaurantData);

    setRestaurantInfo(restaurantData);
    } 

    return restaurantInfo;
};

export default useRestaurant;