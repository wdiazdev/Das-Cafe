import { Link } from 'react-router-dom';
import './Styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useMenuBag } from '../context/MenuContext';
import SliderMenu from './SliderMenu';

function Navbar() {
    const [click, setClick] = useState(false);
    const [openBag, setOpenBag] = useState(false);

    const handleClick = () => setClick(!click);

    const { bagQuantity } = useMenuBag();

    return (
        <div className='navbar--container'>
            <Link to='/'><h3>Das Café</h3></Link>

            <ul className={click ? 'navbar--links active' : 'navbar--links'}>
                <li onClick={handleClick} className='text-focus-in'><Link to='/'>Home</Link></li>
                <li onClick={handleClick} className='text-focus-in'><Link to='/menu'>Menu</Link></li>
                <li onClick={handleClick} className='text-focus-in'><Link to='/about'>About Us</Link></li>
                <li onClick={handleClick} className='text-focus-in'><Link to='/contact'>Contact Us</Link></li>
            </ul>

            {bagQuantity > 0 && (
                <button className='bag--button' onClick={() => setOpenBag(true)}>
                    <FontAwesomeIcon icon={faBagShopping} className='cart--icon' />
                    <div className='rounded--circle'>
                        {bagQuantity}
                    </div>
                </button>
            )}

            {openBag &&
                <div className='test'>
                    <SliderMenu closeBag={setOpenBag} />
                </div>
            }

            < div className='hamburger--menu' onClick={handleClick}>
                {click ? (<FontAwesomeIcon icon={faXmark} />) : (<FontAwesomeIcon icon={faBars} />)}
            </div>

        </div >
    )
};

export default Navbar