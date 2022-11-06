import './Styles/HomeBg.css';
import HomeVideo from '../assets/homevideo.mp4';
import { Link } from 'react-router-dom';

export default function HomeBg() {
    return (
        <div className='video--container'>
            <div className='overlay'></div>
            <video autoPlay loop muted className='video'>
                <source src={HomeVideo} type='video/mp4' />
            </video>
            <div className='home--header'>
                <h1>Das Café</h1>
                <p>Start your Day with</p>
                <p> a Perfect <span>Coffee</span></p>
                <div className="btn--container">
                    <Link to='/contact' className='btn'>book a table</Link>
                    <Link to='/menu' className='btn'>menu</Link>
                </div>
            </div>
        </div>
    )
};
