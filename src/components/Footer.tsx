import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import './Styles/Footer.css'


const Footer = () => {

    return (
        <div className='footer'>
            <div className='footer--content'>
                <FontAwesomeIcon icon={faLocationDot} className='footer--icon' />
                <div>
                    <p>Central Park</p>
                    <h4>New York City, New York</h4>
                </div>
            </div>

            <div className='footer--content'>
                <FontAwesomeIcon icon={faPhone} className='footer--icon' />
                <h4>646-715-8493</h4>
            </div>

            <div className='footer--content'>
                <FontAwesomeIcon icon={faEnvelope} className='footer--icon' />
                <h4>info@dascafe.com</h4>
            </div>
        </div>
    )
};

export default Footer