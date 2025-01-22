import {IMG_CDN_LINK} from '../constants';
import './RestrauntCard.css';

const RestrauntCard = ({ cloudinaryImageId, name, cuisines, costForTwo }) => (
        <div className="card">
        <img className="dish" src={`${IMG_CDN_LINK}${cloudinaryImageId}`} alt={name} />
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>{costForTwo}</p>
        </div>
        );

// const RestrauntCard = ({ restaurant }) =>{

//     if (!restaurant) return null; 
    
//     return(
//         <div className='card'>
//             <img 
//             className="dish" 
//             src={IMG_CDN_LINK+ (restaurant.cloudinaryImageId || "placeholder_image_id")}
//             >
//             </img>
//             <h2>{restaurant.name || "Restaurant Name"}</h2>
//             <h4>{restaurant.cuisines?.join(", ") || "Cuisines not available"}</h4>
//             <p>Cost for Two: {restaurant.costForTwo || "N/A"}</p>
//             <p>Average Rating: {restaurant.avgRating || "Not Rated"}</p>
//             <p>Delivery Time: {restaurant.sla?.deliveryTime || "N/A"} mins</p>
//         </div>
//     );
// };

export default RestrauntCard;