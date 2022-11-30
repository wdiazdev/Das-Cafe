import Footer from '../components/Footer';
import Form from '../components/Form'
import MenuBanner from '../components/MenuBanner';
import '../components/Styles/Contact.css';

export default function Contact() {
    return (
        <div className='contact--container'>
            <MenuBanner
                title="Have a question?"
                subtitle="Our team is happy to answer your questions"
            />
            <Form />
            <Footer />
        </div>
    )
};
