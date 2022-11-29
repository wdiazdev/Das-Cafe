import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import "../components/Styles/About.css";


export default function About() {
    return (
        <div>

            <div className="about--container">
                <div className="about--content">
                    <h2 className="heading">A few words about our business</h2>
                    <h3>Let us introduce ourselves.</h3>
                    <p>We serve exclusively international coffee.
                        In addition to our private label brand, our coffee
                        beans are roasted by an experienced partner company
                        using a Centurion family technique to make the
                        best-tasting coffee you've ever had.</p>
                </div>
                <Footer />
            </div>
            <div className="carousel">
                <Carousel />
            </div>
        </div>
    )
}