import { useMenuBag } from "../context/MenuContext";
import HotCoffee from '../data/HotCoffee.json';
import { formatCurrency } from "../utilities/formatCurrency";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Styles/BagCard.css';

type BagItemProps = {
    id: number
    quantity: number
}

export default function BagCard({ id, quantity }: BagItemProps) {
    const { removeFromBag } = useMenuBag();

    const item = HotCoffee.find(i => i.id === id)
    if (item == null) return null

    return (
        <div className="bag--item">

            <img src={item.imgUrl} className='bag--card--img' />

            <div className="bag--card--content">

                <div className="name--price--quantity">
                    <div>
                        <span>{item.name}</span>
                        {quantity > 1 && <span className="quantity">x{quantity}</span>}
                    </div>

                    <div className="price">
                        {formatCurrency(item.price)}
                    </div>
                </div>

                <div className="total--price--remove">
                    <div>{formatCurrency(item.price * quantity)}</div>
                    <button className="remove--btn" onClick={() => removeFromBag(item.id)}>
                        <FontAwesomeIcon icon={faXmark} className='remove--btn' />
                    </button>
                </div>

            </div>
        </div >
    )
};

