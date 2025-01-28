//import restrauntList from '../constants';
import RestrauntCard from './RestrauntCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

function filterData(searchText,restaurants){
  return restaurants.filter((restaurant)=>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
);
};

const Body =()=>{

  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(()=> {
    getRestaurants();
  }, []);

  async function getRestaurants(offset = 0){
    const data = await fetch(    
    // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&offset=0&pageSize=100"

  );
    const json = await data.json();
    console.log("API Response:", json);

    const restaurants =
      json?.data?.cards?.find(
        (card) => card.card?.card?.gridElements?.infoWithStyle?.restaurants)?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    
    console.log("Fetched Restaurants:", restaurants);

    setAllRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  } 
  
  if(!allRestaurants) return null;

  //(filteredRestaurants?.length === 0) return <h1>No restaurant match your filter</h1>
  
    return (allRestaurants.length === 0) ? <Shimmer /> : (
      <>
        <div className='search-container'>
        <input
          type='text'
          value= {searchText}
          placeholder='Search'
          className='search-text'
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          />
          <button
            className='search-btn'
            onClick={() =>{
              const data = filterData(searchText, allRestaurants);
              setFilteredRestaurants(data);
            }}>search</button>
          </div>

        <div className='cards'>

          {filteredRestaurants.map((restaurant) => {
            return (
              <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
              <RestrauntCard { ...restaurant.info} />
              </Link>
            );
          })}; 
        </div>
      </>
    );
};


export default Body;