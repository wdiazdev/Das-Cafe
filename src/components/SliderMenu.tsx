import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMenuBag } from '../context/MenuContext';
import { formatCurrency } from '../utilities/formatCurrency';
import BagCard from './BagCard';
import './Styles/SliderMenu.css';
import HotCoffee from '../data/HotCoffee.json';


export default function SliderMenu({ closeBag }: any) {
    const { bagItems } = useMenuBag();

    return (
        <div className="slider--menu">
            <button onClick={() => closeBag(false)}>
                <FontAwesomeIcon icon={faXmark} className='slider--icon' />
            </button>

            <h2 id="slider--title">Your Order</h2>
            {bagItems.map(item => (
                <BagCard key={item.id} {...item} />
            ))}
            <div className='order--total'>
                Total: {formatCurrency(
                    bagItems.reduce((total, bagItem) => {
                        const item = HotCoffee.find(i => i.id === bagItem.id)
                        return total + (item?.price || 0) * bagItem.quantity
                    }, 0)
                )}
            </div>
        </div>
    )
};
