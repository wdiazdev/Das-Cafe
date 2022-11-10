import { Link } from 'react-router-dom';
import './Styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useMenuBag } from '../context/MenuContext';



function Navbar() {
    const [click, setClick] = useState(false);
    const [menuSlider, setMenuSlider] = useState(false);

    const handleClick = () => setClick(!click);

    const handleBagClick = () => {
        setMenuSlider(current => !current)
    }

    const { bagQuantity } = useMenuBag();


    return (
        <div className='navbar--container'>
            <Link to='/'><h3 className='navbar--logo'>Das Café</h3></Link>

            <ul className={click ? 'navbar--links active' : 'navbar--links'}>
                <li><Link to='/menu'>Menu</Link></li>
                <li><Link to='/'>About</Link></li>
                <li><Link to='/'>Contact Us</Link></li>
            </ul>


            {bagQuantity > 0 && (
                <button
                    className='cart bag--active'
                    onClick={handleBagClick}
                >

                    {/* MENU SLIDER ON CLICK EVENT  */}
                    {menuSlider && <MenuSlider />}

                    <FontAwesomeIcon icon={faBagShopping} className='cart--icon' />
                    <div className='rounded--circle'>
                        {bagQuantity}
                    </div>
                </button>
            )
            }

            <div className='hamburger--menu' onClick={handleClick}>
                {click ? (<FontAwesomeIcon icon={faXmark} />) : (<FontAwesomeIcon icon={faBars} />)}
            </div>

        </div >
    )
}

function MenuSlider() {
    return (
        <div className='slider--container'>
            <h3>Your Order</h3>
        </div>
    )
}

export default Navbar