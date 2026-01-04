import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../background.css";
import { hero } from "../data/hero";
import { flower } from "../data/gallery";
import works from "../data/work.json";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LazyImage = ({ src, alt, className }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={`${className} bg-gray-200`}>
            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            />
        </div>
    );
};

const featuredWorks = works.slice(0, 3);

const featuredGallery = flower.slice(0, 6);

const Home = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        const img = new Image();
        img.src = hero[0];
        img.onload = () => setIsLoaded(true);
    }, []);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        arrows: false
    };

    return (
        <div className="min-h-screen">
            <Navbar />
            <section className="h-[60vh] bg-black">
                <div className={`h-full transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    <Slider {...settings} className="h-full">
                        {hero.map((image, index) => (
                            <div key={index} className="h-[60vh]">
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{ backgroundImage: `url(${image})` }}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
            <section className="py-10 px-4">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
                    <img
                        src="/hero/profile.JPG"
                        alt="MYUMASE"
                        className="w-96 h-80 object-cover rounded-lg shadow-lg"
                    />
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                            MYUMASE
                        </h2>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Based in Tokyo, Japan. Using plants and nature as my main motifs,
                            I create works with precise lines and vivid colors.
                        </p>
                        <Link
                            to="/about"
                            className="inline-block px-6 py-2 border-2 border-sky-400 bg-transparent text-black hover:bg-sky-100 transition-colors"
                            style={{ fontFamily: 'Katibeh, serif' }}
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>
            <section className="py-10 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                        WORKS
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {featuredWorks.map((work, index) => (
                            <div key={index} className="group">
                                <LazyImage
                                    src={work.images[0]}
                                    alt={work.title}
                                    className="w-full aspect-square rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow"
                                />
                                <h3 className="mt-3 text-center text-lg font-medium">{work.title}</h3>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link
                            to="/work"
                            className="inline-block px-6 py-2 border-2 border-sky-400 bg-transparent text-black hover:bg-sky-100 transition-colors"
                            style={{ fontFamily: 'Katibeh, serif' }}
                        >
                            View All Works
                        </Link>
                    </div>
                </div>
            </section>
            <section className="py-10 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                        GALLERY
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {featuredGallery.map((image, index) => (
                            <LazyImage
                                key={index}
                                src={image}
                                alt={`Gallery ${index + 1}`}
                                className="w-full aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                            />
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link
                            to="/gallery"
                            className="inline-block px-6 py-2 border-2 border-sky-400 bg-transparent text-black hover:bg-sky-100 transition-colors"
                            style={{ fontFamily: 'Katibeh, serif' }}
                        >
                            View Full Gallery
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
