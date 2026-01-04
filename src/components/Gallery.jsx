import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "../background.css";
import { flower, others, characters } from "../data/gallery";
import Footer from "./Footer";

const LazyImage = ({ src, alt, className, onClick }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`${className} bg-gray-200`} onClick={onClick}>
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

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('flower');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const images = activeTab === 'flower' ? flower : activeTab === 'characters' ? characters : others;
  const slides = images.map(src => ({ src }));

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "GALLERY | MYUMASE";
  }, []);

  return (
    <>
      <Navbar />
      <div className="container lg:w-[80vw] mx-auto px-4 pt-40 pb-8 min-h-screen">
        <h1 className="text-4xl font-bold mb-8 text-center" style={{
          fontFamily: "'Libre Baskerville', serif"
        }}>GALLERY</h1>
        <div className="flex justify-center mb-8">
          <button
            className={`px-4 py-2 mx-2 rounded ${activeTab === 'flower' ? 'bg-blue-500 text-white' : 'bg-transparent'}`}
            onClick={() => handleTabChange('flower')}
            style={{ fontFamily: 'Katibeh, serif' }}
          >
            FLOWERS
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded ${activeTab === 'characters' ? 'bg-blue-500 text-white' : 'bg-transparent'}`}
            onClick={() => handleTabChange('characters')}
            style={{ fontFamily: 'Katibeh, serif' }}
          >
            CHARACTERS
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded ${activeTab === 'others' ? 'bg-blue-500 text-white' : 'bg-transparent'}`}
            onClick={() => handleTabChange('others')}
            style={{ fontFamily: 'Katibeh, serif' }}
          >
            OTHERS
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {images.map((item, index) => (
            <LazyImage
              key={`${activeTab}-${index}`}
              src={item}
              alt={`Gallery image ${index + 1}`}
              className="overflow-hidden rounded-lg cursor-pointer aspect-square"
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.6)", backdropFilter: "blur(8px)" },
        }}
      />

      <Footer />
    </>
  );
};

export default Gallery;
