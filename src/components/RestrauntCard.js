import {IMG_CDN_LINK} from '../constants';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';
import './RestrauntCard.css';

const RestrauntCard = ({ 
    cloudinaryImageId, 
    name, 
    cuisines, 
    costForTwo 
}) => {
    const {user} = useContext(UserContext);
    return (
        <div className="p-2 m-2 bg-pink-200 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 w-64 min-h-[350px] flex flex-col">
        <img className="w-full h-40 object-cover rounded-t-xl" src={`${IMG_CDN_LINK}${cloudinaryImageId}`} alt={name} />
        <div className="p-4 flex flex-col flex-grow">
            <h3 className="font-bold text-lg mb-1">{name}</h3>
            <p className="text-gray-600 text-sm flex-grow">{cuisines.join(", ")}</p>
            <p className="text-teal-500 font-semibold mt-auto">{costForTwo}</p>
            <h5 className='font-bold'>{user.name} - {user.email}</h5>
        </div>
        </div>
        );
}

export default RestrauntCard;