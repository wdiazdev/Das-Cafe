import { useMenuBag } from "../context/MenuContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

type MenuItemsProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export default function MenuItems({ id, name, price, imgUrl }: MenuItemsProps) {
    const {
        getItemQuantity,
        increaseBagQuantity,
        decreaseItemQuantity,
        removeFromBag
    } = useMenuBag();

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const quantity = getItemQuantity(id);

    return (
        <div className="card--container">
            <div className="card--content">

                <FontAwesomeIcon
                    icon={faStar}
                    className={click ? "liked" : "favorite"}
                    onClick={handleClick}
                />

                <img className="item--img" src={imgUrl} alt="Coffee" />

                <div className="name--price">
                    <span>{name}</span>
                    <span>{formatCurrency(price)}</span>
                </div>

                <div className="card--btn--container">
                    {quantity === 0 ?
                        <button
                            className="card--btn"
                            onClick={() => increaseBagQuantity(id)}>
                            Add To Bag
                        </button> :
                        <div className="quantity--container">
                            <div className="plus--minus">
                                <button onClick={() => decreaseItemQuantity(id)}>-</button>
                                <span>{quantity}</span> in bag
                                <button onClick={() => increaseBagQuantity(id)}>+</button>
                            </div>
                            <button
                                className="remove-btn"
                                onClick={() => removeFromBag(id)}>
                                Remove
                            </button>
                        </div>
                    }
                </div>
            </div>
        </div >
    )
}
