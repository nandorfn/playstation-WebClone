import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGamepad, faAngleRight, faServer, faTv, faNewspaper, faStore, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

interface MenuNavbarProps {
    nav: boolean;
}

const MenuNavbar: React.FC<MenuNavbarProps> = ({nav}) => {
    interface MenuItem {
        icon: IconDefinition;
        text: string;
    }

    const menuItems: MenuItem[] = [
        { icon: faGamepad, text: 'Games' },
        { icon: faServer, text: 'Hardware' },
        { icon: faTv, text: 'Services' },
        { icon: faNewspaper, text: 'News' },
        { icon: faStore, text: 'Shop' },
        { icon: faCircleQuestion, text: 'Support' }
    ];
    const navCSS: string = "md:hidden h-full bg-white ease-in-out duration-500 z-0 relative top-5";

    return (
        <>
            <ul className={nav
                ? `${navCSS} left-4 w-[100%]`
                : `${navCSS} left-[-100%] w-[60%]`}>
                {menuItems.map((item, index) => (
                    <li key={index} className='p-4 flex justify-between'>
                        <div>
                            <FontAwesomeIcon icon={item.icon} size='xl' fixedWidth style={{ color: "#ADABAB" }} />
                            <a className='ml-8' href="/">{item.text}</a>
                        </div>
                        <FontAwesomeIcon className='relative right-4' icon={faAngleRight} style={{ color: "#ADABAB" }} />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default MenuNavbar;