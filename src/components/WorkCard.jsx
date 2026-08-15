import { useRef, useState } from 'react';
import slick from 'react-slick';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../carousel.css';
import '../background.css';

// react-slick is CommonJS with no `exports` map, and Vite's dep optimizer hands
// back the module's `exports` object instead of unwrapping `.default`. Normalize
// it here rather than relying on bundler interop.
const Slider = slick.default ?? slick;

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
  // Slick starts dragging on mousedown, so a swipe still ends in a click event.
  // Remember where the pointer went down and ignore clicks that moved far
  // enough to count as a drag.
  const dragOrigin = useRef(null);

  // Convert images to lightbox format
  const slides = images.map(src => ({ src }));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleMouseDown = (e) => {
    dragOrigin.current = { x: e.clientX, y: e.clientY };
  };

  const openLightbox = (index) => (e) => {
    const origin = dragOrigin.current;
    if (origin && Math.hypot(e.clientX - origin.x, e.clientY - origin.y) > 5) return;
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="w-full md:w-auto max-w-[95%] mx-auto rounded-sm overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            onMouseDown={handleMouseDown}
            onClick={openLightbox(index)}
            className='w-full cursor-pointer'
          >
            <LazyImage
              src={image}
              alt={`${title} ${index + 1}`}
              className="w-full h-72"
            />
          </div>
        ))}
      </Slider>
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
