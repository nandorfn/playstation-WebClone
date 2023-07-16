import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import psLogo from '../assets/ps-logo.svg';
import MenuNavbar from './MenuNavbar';

const Navbar: React.FC = () => {
    const [nav, setNav] = useState(false);

    const handleNav: () => void = () => {
        setNav(!nav);
    };
    const navStyle: string = 'relative flex justify-between items-center h-16 max-w-[1240px] mx-auto px-4 bg-white z-20'

    return (
        <div>
            <div className={nav
                ? `${navStyle} border-b-2 drop-shadow-lg`
                : `${navStyle}`} >
                <div className='flex justify-between gap-6 items-center'>
                    <div onClick={handleNav} className='block md:hidden cursor-pointer'>
                        {nav ? <FontAwesomeIcon icon={faXmark} size='xl' /> : <FontAwesomeIcon icon={faBars} size='xl' />}
                    </div>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#000000", }} size='xl' />
                </div>
                <img src={psLogo} width={55} alt="SVG Image" />
                <ul className='hidden md:flex'>
                    <li className='p-4'><a href="/">Home test</a></li>
                    <li className='p-4'><a href="/">Company</a></li>
                    <li className='p-4'><a href="/">Resources</a></li>
                    <li className='p-4'><a href="/">About</a></li>
                    <li className='p-4'><a href="/">Contact</a></li>
                </ul>
                <button className='bg-[#0070D1] px-4 rounded-xl text-white'>Sign In</button>

            </div>
            <MenuNavbar nav={nav}/>
        </div>
    );
};

export default Navbar;
