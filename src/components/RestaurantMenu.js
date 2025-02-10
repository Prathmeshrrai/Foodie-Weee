import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_LINK } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
    const {id} = useParams();
    const restaurantInfo = useRestaurant(id);

    return !restaurantInfo? (
    <Shimmer/>
    ) : (
        <div className="p-4">
        <div style={{ marginTop: "20px" }} className="mb-6">
            <h1 >ID: {id}</h1>
            <h1 className="text-2xl font-bold">{restaurantInfo.name}</h1>
            <p className="text-gray-700">Location: {restaurantInfo.locality}, {restaurantInfo.city}</p>
            <p className="text-teal-600 font-medium">Cost for Two: {restaurantInfo.costForTwoMessage}</p>
            <p className="text-gray-600">Cuisines: {restaurantInfo.cuisines?.join(", ")}</p>
            <p className="text-yellow-500 font-semibold">Average Rating: {restaurantInfo.avgRating} ⭐</p>
            <img className="w-72 rounded-lg mt-4" src={`${IMG_CDN_LINK}${restaurantInfo.cloudinaryImageId}`} alt={restaurantInfo.name} style={{ width: "300px", borderRadius: "8px" }}/>
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