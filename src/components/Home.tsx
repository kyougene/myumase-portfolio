import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Navbar from "./Navbar";

const Home = () => {
    // const images = [
    //     "./flower/flower11.jpg",
    //     "./flower/flower12.jpg",
    //     "./hero/hero1.jpg",
    //     "./hero/hero3.jpg",
    //     "./hero/hero13.jpg",
    // ];

    const images = [
        "/work/LunaCafe/work1.jpg",
        "/work/LunaCafe/work2.jpeg",
        "/work/LunaCafe/work3.jpeg",
        "/work/LunaCafe/work4.jpeg"
      ];

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        arrows: false
    };

    return (
        <>
            <Navbar />
            <Slider {...settings} className="w-[100vw] h-[100vh]">
                {images.map((image, index) => (
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
