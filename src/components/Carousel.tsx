import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import CarouselData from '../data/CarouselData.json';
import '../components/Styles/Carousel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Carousel() {

    const handleDragStart = (event: any) => event.preventDefault();

    const items = CarouselData.map(item => (
        <div key={item.id} className="review--card">
            <img src={item.imgUrl} onDragStart={handleDragStart} role="presentation" />
            <span className='name'>{item.name}</span>
            <div className='review--stars'>
                <FontAwesomeIcon icon={faStar} className="review-stars" />
                <FontAwesomeIcon icon={faStar} className="review-stars" />
                <FontAwesomeIcon icon={faStar} className="review-stars" />
                <FontAwesomeIcon icon={faStar} className="review-stars" />
                <FontAwesomeIcon icon={faStar} className="review-stars" />
            </div>
            <div className='divider'></div>
            <p className='review'>{item.review}</p>
        </div>
    ))

    const responsive = {
        500: {
            items: 2,
        },
        1000: {
            items: 2,
        },
        1200: {
            items: 3,
        },
    };

    return (
        <div className='reviews'>
            <AliceCarousel
                mouseTracking
                items={items}
                autoPlay
                infinite
                autoPlayInterval={2500}
                animationDuration={2500}
                animationType={"fadeout"}
                disableButtonsControls={true}
                disableDotsControls={true}
                responsive={responsive}
                autoPlayStrategy={"none"}
            />
        </div >
    )
}