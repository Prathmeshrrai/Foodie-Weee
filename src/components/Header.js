import { useState } from 'react';
import './Header.css';
import Logo from '../assets/img/scar.jpg';
import { Link } from 'react-router';

export const Title = () => (
    <a href='/'>
        <img 
            className='img-str'
            alt="Ain't Starbucks" 
            src={Logo}
        />
    </a>
);

const Header = () => {
    const [isNavActive, setIsNavActive] = useState(false);

    return (
        <div className='header'>
            <Title />
            <div className="hamburger-menu" onClick={() => setIsNavActive(!isNavActive)}>
                ☰
            </div>
            <div className={`nav-items ${isNavActive ? 'active' : ''}`}>
                <ul>
                    <Link to = "/">
                    <li>Home</li>
                    </Link>
                    <Link to="/about">
                    <li>About</li>
                    </Link>
                    <Link to="/contact">
                    <li>Contact</li>
                    </Link>
                    <Link to="/cart">
                    <li>Cart</li>
                    </Link>
                </ul>
            </div> 
            {
                isNavActive? <button onClick={()=>setIsNavActive(false)}>Login</button>:
                <button onClick={()=>setIsNavActive(true)}>LogOut</button>
            } 
        </div>
    );
};

export default Header;
