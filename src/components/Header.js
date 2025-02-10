import { useState, useContext } from 'react';
import './Header.css';
import Logo from '../assets/img/scar.jpg';
import { Link } from 'react-router';
import useOnline from '../utils/useOnline';
import UserContext from '../utils/UserContext';

export const Title = () => (
    <a href='/'>
        <img 
            className="w-12 h-12 object-cover rounded-full mr-2 hover:scale-110 transition-transform duration-300 border-2 border-white shadow-md"
            alt="Ain't Starbucks" 
            src={Logo}
        />
    </a>
);

const Header = () => {
    const [isNavActive, setIsNavActive] = useState(false);
    const isOnline = useOnline();

    const {user} = useContext(UserContext);
    return (
        <div className="flex justify-between items-center bg-gradient-to-r from-pink-500 to-blue-500 text-white shadow-lg p-4 bg-pink-300">
            <Title />
            {/* <h1 className="text-2xl font-bold tracking-wide">InstaMart</h1> */}
            <div 
                className="lg:hidden text-3xl cursor-pointer"
                onClick={() => setIsNavActive(!isNavActive)}
            >
                ☰
            </div>
            <div className={`nav-items ${isNavActive ? 'active' : ''}`}>
                <nav className={`flex-col lg:flex lg:flex-row lg:items-center 
                    ${isNavActive ? "flex" : "hidden"} 
                    absolute lg:static right-4 top-16 bg-white text-black p-4 rounded-md shadow-lg lg:shadow-none`}
                >
                    <ul className="flex flex-col lg:flex-row gap-4">
                        <Link className="hover:text-yellow-300" to="/">
                            <li className='px-2'>Home</li>
                        </Link>
                        <Link className="hover:text-yellow-300" to="/about">
                            <li className='px-2'>About</li>
                        </Link>
                        <Link className="hover:text-yellow-300" to="/contact">
                            <li className='px-2'>Contact</li>
                        </Link>
                        <Link className="hover:text-yellow-300" to="/cart">
                            <li className='px-2'>Cart</li>
                        </Link>
                        <Link className="hover:text-yellow-300" to="/instamart">
                            <li className='px-2'>InstaMart</li>
                        </Link>
                    </ul>
                </nav>
            </div> 
            <div className="ml-4 text-sm">
                <span className="mr-2">{isOnline ? "🟢 ACTIVE" : "🔴 INACTIVE"}</span>
                <span className='p-10 font-bold text-red-900'>{user.name}</span>
                {isNavActive ? (
                    <button 
                        className="bg-teal-500 text-white px-3 py-1 rounded-md hover:bg-teal-600 transition-colors"
                        onClick={() => setIsNavActive(false)}
                    >
                        Login
                    </button>
                ) : (
                    <button 
                        className="bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-600 transition-colors"
                        onClick={() => setIsNavActive(true)}
                    >
                        LogOut
                    </button>
                )}
            </div>
        </div>
    );
};

export default Header;

// import { useState } from 'react';
// import './Header.css';
// import Logo from '../assets/img/scar.jpg';
// import { Link } from 'react-router';
// import useOnline from '../utils/useOnline';

// export const Title = () => (
//     <a href='/'>
//         <img 
//             className="w-12 h-12 object-cover rounded-full border-2 border-white shadow-md"
//             alt="Ain't Starbucks" 
//             src={Logo}
//         />
//     </a>
// );

// const Header = () => {
//     const [isNavActive, setIsNavActive] = useState(false);
//     const isOnline = useOnline();

//     return (
//         <div className="flex items-center justify-between bg-gradient-to-r from-pink-500 to-blue-500 text-white shadow-lg p-4">
            
//             {/* Logo */}
//             <div className="flex items-center space-x-4">
//                 <Title />
//                 <h1 className="text-lg font-bold tracking-wide hidden lg:block">InstaMart</h1>
//             </div>

//             {/* Search Box */}
//             <div className="flex-grow max-w-md mx-4 hidden lg:flex">
//                 <input
//                     type="text"
//                     placeholder="Search for products..."
//                     className="w-full px-3 py-2 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//             </div>

//             {/* Navigation Links & Mobile Toggle */}
//             <div className="flex items-center space-x-6">
                
//                 {/* Mobile Menu Icon */}
//                 <div 
//                     className="lg:hidden text-3xl cursor-pointer"
//                     onClick={() => setIsNavActive(!isNavActive)}
//                 >
//                     ☰
//                 </div>

//                 {/* Desktop Navigation */}
//                 <nav className={`lg:flex lg:items-center ${isNavActive ? "flex" : "hidden"} 
//                     absolute lg:static right-4 top-16 bg-white lg:bg-transparent text-black lg:text-white p-4 rounded-md shadow-lg lg:shadow-none`}
//                 >
//                     <ul className="flex flex-col lg:flex-row gap-4">
//                         <Link className="hover:text-yellow-300" to="/">
//                             <li className='px-2'>Home</li>
//                         </Link>
//                         <Link className="hover:text-yellow-300" to="/about">
//                             <li className='px-2'>About</li>
//                         </Link>
//                         <Link className="hover:text-yellow-300" to="/contact">
//                             <li className='px-2'>Contact</li>
//                         </Link>
//                         <Link className="hover:text-yellow-300" to="/cart">
//                             <li className='px-2'>Cart</li>
//                         </Link>
//                         <Link className="hover:text-yellow-300" to="/instamart">
//                             <li className='px-2'>InstaMart</li>
//                         </Link>
//                     </ul>
//                 </nav>

//                 {/* Online Status & Login Button */}
//                 <div className="flex items-center space-x-3 text-sm">
//                     <span>{isOnline ? "🟢 ACTIVE" : "🔴 INACTIVE"}</span>
//                     {isNavActive ? (
//                         <button 
//                             className="bg-teal-500 text-white px-3 py-1 rounded-md hover:bg-teal-600 transition-colors"
//                             onClick={() => setIsNavActive(false)}
//                         >
//                             Login
//                         </button>
//                     ) : (
//                         <button 
//                             className="bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-600 transition-colors"
//                             onClick={() => setIsNavActive(true)}
//                         >
//                             Logout
//                         </button>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Header;
