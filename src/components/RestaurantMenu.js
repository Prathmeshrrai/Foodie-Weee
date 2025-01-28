import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_LINK } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const {id} = useParams();

    const[restaurantInfo, setRestaurantInfo] = useState(null);

    useEffect(()=> {
        getRestaurantMenu();
    }, []);

    async function getRestaurantMenu(){
    const data = await fetch(
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.24630&lng=73.13150&restaurantId=" + id
    );
    const json = await data.json();
    console.log(json.data);
    console.log(
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
    
    // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.24630&lng=73.13150&restaurantId=81940&catalog_qa=undefined&submitAction=ENTER"

    const restaurantData = json?.data?.cards?.find(
        (card) =>
            card?.card?.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    )?.card?.card?.info;

    console.log("Fetched Restaurants:", restaurantData);


    setRestaurantInfo(restaurantData);
    } 

    // const menuCards =
    // restaurantInfo.cards?.find(
    // (card) =>
    //     card?.card?.card["@type"] ===
    //     "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    // )?.card?.card?.itemCards || [];


    return !restaurantInfo ?(
        <Shimmer />
    ) : (
        <div>
        <div style={{ marginTop: "20px" }}>
            <h1>ID: {id}</h1>
            <h1>{restaurantInfo.name}</h1>
            <p>Location: {restaurantInfo.locality}, {restaurantInfo.city}</p>
            <p>Cost for Two: {restaurantInfo.costForTwoMessage}</p>
            <p>Cuisines: {restaurantInfo.cuisines?.join(", ")}</p>
            <p>Average Rating: {restaurantInfo.avgRating} ⭐</p>
            <img src={`${IMG_CDN_LINK}${restaurantInfo.cloudinaryImageId}`} alt={restaurantInfo.name} style={{ width: "300px", borderRadius: "8px" }}/>
        </div>
        {/* <div>
        <h1>Menu</h1>
                {menuCards.length > 0 ? (
                    <p>
                        {menuCards
                            .map((item) => item.card?.info?.name)
                            .filter((name) => name)
                            .join(", ")}
                    </p>
                ) : (
                    <p>No menu items available.</p>
                )}
        </div> */}
        </div>
    );
};

export default RestaurantMenu;