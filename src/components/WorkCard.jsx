import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Modal from 'react-modal';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel CSS
import '../carousel.css';

Modal.setAppElement('#root'); // Set the root element for accessibility

const WorkCard = ({ images, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // State to track the clicked image

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <div className="w-full md:w-auto max-w-[95%] mx-auto rounded overflow-hidden"> {/* Ensure full width on mobile */}
      <Carousel showThumbs={false} showStatus={false}>
        {images.map((image, index) => (
          <div key={index} onClick={() => openModal(index)} className='w-full cursor-pointer'>
            <img
              className="w-full h-72 object-cover"
              src={image}
              alt={`${title} ${index + 1}`}
            />
          </div>
        ))}
      </Carousel>
      <div className="px-6 py-4">
        <div className="text-center text-xl mb-2">{title}</div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="w-full max-w-4xl flex justify-center mx-auto mt-20 p-0 rounded-lg bg-transparent"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      >
        <div className="relative w-full max-w-[90vw] max-h-[90vh] flex justify-center items-center p-4">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-20 text-white text-3xl font-bold" 
          >
            &times;
          </button>
          <Carousel
            selectedItem={selectedImageIndex}
            showThumbs={false}
            showStatus={false}
            className="w-full h-full"
          >
            {images.map((image, index) => (
              <div key={index} className="w-full h-[60vh] flex justify-center items-center">
                <img
                  className="object-contain w-full max-h-[75vh]"
                  src={image}
                  alt={`${title} ${index + 1}`}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </Modal>
    </div>
  );
};

export default WorkCard;
