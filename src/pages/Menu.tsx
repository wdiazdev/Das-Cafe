import HotCoffeeData from '../data/HotCoffee.json';
import MenuItems from '../components/MenuItems';
import '../components/Styles/Menu.css';
import MenuBanner from '../components/MenuBanner';

export default function Menu() {

    return (
        <div className='menu'>
            <MenuBanner
                title="Menu"
                subtitle="Coffee served right"
            />
            <h2 className='menu--subtitle'>Our coffee</h2>
            <p className='sub--description'>We have carefully selected great tasting coffees from around the world.</p>
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
