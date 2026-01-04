import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../carousel.css';
import '../background.css';

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

const WorkCard = ({ images, title }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Convert images to lightbox format
  const slides = images.map(src => ({ src }));

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="w-full md:w-auto max-w-[95%] mx-auto rounded overflow-hidden">
      <Carousel showThumbs={false} showStatus={false}>
        {images.map((image, index) => (
          <div key={index} onClick={() => openLightbox(index)} className='w-full cursor-pointer'>
            <LazyImage
              src={image}
              alt={`${title} ${index + 1}`}
              className="w-full h-72"
            />
          </div>
        ))}
      </Carousel>
      <div className="px-6 py-4">
        <div className="text-center text-xl mb-2">{title}</div>
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
    </div>
  );
};

export default WorkCard;
