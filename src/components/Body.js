import restrauntList from '../constants';
import RestrauntCard from './RestrauntCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';

function filterData(searchText,restaurants){
  return restaurants.filter((restaurant)=>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
);
};


const Body =()=>{
  const initialRestaurants  = restrauntList[0].card.card.gridElements.infoWithStyle.restaurants || [];

  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(()=> {
    getRestaurants();
  }, []);

  async function getRestaurants(){
    const response = await fetch(    
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    console.log(json);
    console.log("API Response:", json);
    // setAllRestaurants(json?.data?.cards?.find(
    //   (card) => card.card?.card?.imageGridCards?.info
    // )?.card?.card?.imageGridCards?.info);
    
    // setFilteredRestaurants(json?.data?.cards?.find(
    //   (card) => card.card?.card?.imageGridCards?.info
    // )?.card?.card?.imageGridCards?.info);

    const restaurants =
      json?.data?.cards?.find(
        (card) => card.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setAllRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  } 
  

    return (filteredRestaurants.length === 0) ? <Shimmer /> : (
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
              <RestrauntCard { ...restaurant.info} key={restaurant.info.id} />
            );
          })}; 
        </div>
      </>
    );
};


export default Body;

// import restrauntList from '../constants';
// import RestrauntCard from './RestrauntCard';
// import { useState, useEffect } from 'react';
// import Shimmer from './Shimmer';

// function filterData(searchText, restaurants) {
//   return restaurants.filter((restaurant) =>
//     restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
//   );
// }

// const Body = () => {
//   const [allRestaurants, setAllRestaurants] = useState([]);
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//   const [searchText, setSearchText] = useState("");

//   useEffect(() => {
//     getRestaurants();
//   }, []);

//   async function getRestaurants() {
//     try {
//       const response = await fetch(
//         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//       );
//       const json = await response.json();
//       const restaurants =
//         json?.data?.cards?.find(
//           (card) => card.card?.card?.gridElements?.infoWithStyle?.restaurants
//         )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
//       setAllRestaurants(restaurants);
//       setFilteredRestaurants(restaurants);
//     } catch (error) {
//       console.error("Error fetching restaurant data:", error);
//     }
//   }

//   return (
//     <>
//       <div className="search-container">
//         <input
//           type="text"
//           value={searchText}
//           placeholder="Search"
//           className="search-text"
//           onChange={(e) => {
//             setSearchText(e.target.value);
//           }}
//         />
//         <button
//           className="search-btn"
//           onClick={() => {
//             const data = filterData(searchText, allRestaurants);
//             setFilteredRestaurants(data);
//           }}
//         >
//           Search
//         </button>
//       </div>

//       {filteredRestaurants.length === 0 ? (
//         <Shimmer />
//       ) : (
//         <div className="cards">
//           {filteredRestaurants.map((restaurant) => (
//             <RestrauntCard
//               key={restaurant.info.id}
//               {...restaurant.info} // Pass `info` props directly to the card
//             />
//           ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default Body;
