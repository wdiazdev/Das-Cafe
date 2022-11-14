import { useState } from 'react';
import HotCoffeeData from '../data/HotCoffee.json';
import MenuItems from '../components/MenuItems';
import '../components/Styles/Menu.css';
import MenuBanner from '../components/MenuBanner';

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const openBag = () => setIsOpen(true)

    const closeBag = () => setIsOpen(false)

    return (
        <div className='menu'>
            <MenuBanner />
            <h2 className='hot--coffee'>Hot Coffee</h2>
            <p></p>
            <div className='menu--container'>
                {HotCoffeeData.map(item => (
                    <div key={item.id}>
                        <MenuItems {...item} />
                    </div>
                ))}
            </div>
        </div>
    )
};
