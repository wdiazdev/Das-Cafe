import { Link } from 'react-router-dom';
import './Styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
    return (
        <div className='navbar--container'>
            <Link to='/'><h3 className='navbar--logo'>Das Café</h3></Link>
            <div className='navbar--links'>
                <ul>
                    <li><Link to='/services'>Menu</Link></li>
                    <li><Link to='/contact'>About</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                </ul>
            </div>
            <FontAwesomeIcon icon={faMugHot} className='cart--icon' />
        </div>
    )
}

export default Navbar