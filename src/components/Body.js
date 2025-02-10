//import restrauntList from '../constants';
import RestrauntCard from './RestrauntCard';
import { useState, useEffect, useContext } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
import { filterData } from '../utils/helper';
import UserContext from '../utils/UserContext';


const Body =()=>{
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const {user, setUser} = useContext(UserContext);

  useEffect(()=> {
    getRestaurants()
  }, []);

  async function getRestaurants(offset = 0){
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&offset=0&pageSize=100"
  )
    const json = await data.json();
    console.log("API Response:", json);

    const restaurants =
      json?.data?.cards?.find(
        (card) => card.card?.card?.gridElements?.infoWithStyle?.restaurants)?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    
    console.log("Fetched Restaurants:", restaurants);

    setAllRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  } 

  const isOnline = useOnline();
  if(!isOnline){
    return <h1 className="text-xl font-semibold text-center my-8"> 🔴 Offline, please check your internet connection!!</h1>;
  }
  
  if(!allRestaurants){
    return null;
  } 

  //(filteredRestaurants?.length === 0) return <h1>No restaurant match your filter</h1>bg-gray-100 rounded-lg  shadow-md 
  
    return (allRestaurants.length === 0) ? <Shimmer /> : (
      <>
        <div className="flex flex-col md:flex-row items-right justify-right gap-3 md:gap-4 p-4 mx-2 md:mx-auto max-w-10xl"> 
        <input
          type='text'
          value= {searchText}
          placeholder="🔍 Search for restaurants..."
          className="w-full md:w-80 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          />
          <button
            className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors"
            onClick={() =>{
              const data = filterData(searchText, allRestaurants);
              setFilteredRestaurants(data);
            }}>search</button>
            <input 
            className=" md:w-80 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
            value={user.name} onChange={
              e => setUser({
                ...user,
                name:e.target.value,
              })
            }></input>
            <input 
            className="w-full md:w-80 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
            value={user.email} onChange={
              e => setUser({
                ...user,
                email:e.target.value,
              })
            }></input>
          </div>

        <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">

          {filteredRestaurants.map((restaurant) => {
            return (
              <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
              <RestrauntCard { ...restaurant.info} />
              </Link>
            )
          })}
        </div>
      </>
    );
};

// <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
//         {filteredRestaurants.length > 0 ? (
//           filteredRestaurants.map((restaurant) => (
//             <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
//               <RestrauntCard {...restaurant.info} />
//             </Link>
//           ))
//         ) : (
//           <h1 className="col-span-full text-center text-xl text-gray-600">
//             ❌ No restaurants match your search.
//           </h1>
//         )}
//       </div>
{/* <div className="flex justify-center mt-4">
        <div className="flex items-center border border-gray-300 rounded-full shadow-sm w-full max-w-md">
          <input
            type="text"
            value={searchText}
            placeholder="Search for restaurants..."
            className="flex-grow p-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
            onChange={(e) => {
              setSearchText(e.target.value);
              setFilteredRestaurants(filterData(e.target.value, allRestaurants));
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setFilteredRestaurants(filterData(searchText, allRestaurants));
              }
            }}
          />
          <button
            className="bg-teal-500 text-white px-4 py-2 rounded-r-full hover:bg-teal-600 transition-colors"
            onClick={() => {
              setFilteredRestaurants(filterData(searchText, allRestaurants));
            }}
          >
            🔍
          </button>
        </div>
      </div> */}


export default Body;