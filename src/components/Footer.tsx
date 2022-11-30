import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faCoffee } from '@fortawesome/free-solid-svg-icons';
import './Styles/Footer.css'


const Footer = () => {

    return (
        <div className='footer'>
            <div className='footer--container'>
                <div className='left'>

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

                <div className='right'>
                    <h4>Das Café</h4>
                    <p>Our award-winning coffees didn’t come into being by
                        accident. There are a number of things that happen in
                        our processes here at Das café that translate into the
                        consistently tasty roasts you enjoy.</p>

                    <a href='https://www.linkedin.com' target='_blank'>
                        <FontAwesomeIcon icon={faCoffee} className='footer--icon' />
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Footer;