import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import CarouselData from '../data/CarouselData.json';
import '../components/Styles/Carousel.css'

export default function Carousel() {

    const handleDragStart = (event: any) => event.preventDefault();

    const items = CarouselData.map(item => (
        <div key={item.id} className="review--container">
            <img src={item.imgUrl} onDragStart={handleDragStart} role="presentation" />
            <span className='name'>{item.name}</span>
            <p className='review'>{item.review}</p>
        </div>
    ))

    const responsive = {
        0: {
            items: 1,
        },
        1000: {
            items: 3,
        },
    };

    return (
        <AliceCarousel
            mouseTracking
            items={items}
            autoPlay
            infinite
            autoPlayInterval={4000}
            animationDuration={3000}
            animationType={"fadeout"}
            disableButtonsControls={true}
            responsive={responsive}
        />
    )
}