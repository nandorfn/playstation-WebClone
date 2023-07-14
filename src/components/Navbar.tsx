import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faGamepad, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import psLogo from '../assets/ps-logo.svg';

const Navbar: React.FC = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const navCSS = "fixed md:hidden top-16 h-full bg-white ease-in-out duration-500";

    return (
        <div className='flex justify-between items-center h-16 max-w-[1240px] mx-auto px-4'>
            <div className='flex justify-between gap-4 items-center'>
                <div onClick={handleNav} className='block md:hidden cursor-pointer'>
                    {nav ? <FontAwesomeIcon icon={faXmark} size='xl' /> : <FontAwesomeIcon icon={faBars} size='xl' />}
                </div>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#000000",}} size='xl'/>
            </div>
            <img src={psLogo} width={60} alt="SVG Image" />
            <ul className='hidden md:flex'>
                <li className='p-4'><a href="/">Home test</a></li>
                <li className='p-4'><a href="/">Company</a></li>
                <li className='p-4'><a href="/">Resources</a></li>
                <li className='p-4'><a href="/">About</a></li>
                <li className='p-4'><a href="/">Contact</a></li>
            </ul>
            <button className='bg-[#0070D1] px-4 rounded-xl text-white'>Sign In</button>
            
            <ul className={nav
                ? `${navCSS} left-0  w-[100%]`
                : `${navCSS} left-[-100%] w-[60%]`}>

                <li className='p-4'>
                    <FontAwesomeIcon icon={faGamepad} size='xl'/>
                    <a className='ml-4' href="/">Games</a>
                </li>
                <li className='p-4'><a href="/">Hardware</a></li>
                <li className='p-4'><a href="/">Services</a></li>
                <li className='p-4'><a href="/">News</a></li>
                <li className='p-4'><a href="/">Shop</a></li>
                <li className='p-4'><a href="/">Support</a></li>
            </ul>
        </div>
    );
};

export default Navbar;
