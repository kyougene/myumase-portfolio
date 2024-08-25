import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Navbar from "./Navbar";
import { hero } from "../data/hero";

const Home = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: false,
        arrows: false
    };

    return (
        <>
            <Navbar />
            <Slider {...settings} className="w-[100vw] h-[100vh] overflow-hidden">
                {hero.map((image, index) => (
                    <div key={index} className="relative">
                        <div
                            className="w-screen h-screen bg-cover bg-center"
                            style={{ backgroundImage: `url(${image})` }}
                        />
                    </div>
                ))}
            </Slider>
        </>
        
    );
};

export default Home;
