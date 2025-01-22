import './Header.css';
// export const Title = () => (
//     <a href='/'>
//     <img 
//     className='img-str'
//     alt="Ain't Starbuck" 
//     src="https://bcassetcdn.com/public/blog/wp-content/uploads/2022/04/26110727/Starbucks-1.png"
//     />
//     </a>
// )

// const Header =() => {
//     return (
//         <div className='header'>
//         <Title />
//         <div className="nav-items">
//             <ul>
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Contact</li>
//                 <li>Cart</li>
//             </ul>
//             </div>   
//         </div>
//     );
// };

// export default Header;

import { useState } from 'react';
import './Header.css';

export const Title = () => (
    <a href='/'>
        <img 
            className='img-str'
            alt="Ain't Starbucks" 
            src="https://bcassetcdn.com/public/blog/wp-content/uploads/2022/04/26110727/Starbucks-1.png"
        />
    </a>
);

const Header = () => {
    const [isNavActive, setIsNavActive] = useState(false);

    const handleScroll = () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);

    return (
        <div className='header'>
            <Title />
            <div className="hamburger-menu" onClick={() => setIsNavActive(!isNavActive)}>
                ☰
            </div>
            <div className={`nav-items ${isNavActive ? 'active' : ''}`}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>   
        </div>
    );
};

export default Header;
