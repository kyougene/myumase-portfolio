import { useState } from "react";
import Navbar from "./Navbar";
import Modal from 'react-modal';
import "../background.css";
import { flower, others, characters } from "../data/gallery";
import Footer from "./Footer";

Modal.setAppElement('#root'); // Set the root element for accessibility

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState('flower'); // Default tab is 'flower'

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const images = activeTab === 'flower' ? flower : activeTab === 'characters' ? characters : others;


  return (
    <>
      <Navbar />
      <div className="container lg:w-[80vw] mx-auto px-4 pt-24 pb-8">
        <h1 className="text-4xl font-bold mb-8 text-center" style={{
          "fontFamily":  'Katibeh, serif' 
        }}>GALLERY</h1>
        <div className="flex justify-center mb-8">
          <button
            className={`px-4 py-2 mx-2 rounded ${activeTab === 'flower' ? 'bg-blue-500 text-white' : 'bg-transparent'}`}
            onClick={() => setActiveTab('flower')} style={{
              "fontFamily":  'Katibeh, serif' 
            }}
          >
            FLOWERS
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded ${activeTab === 'characters' ? 'bg-blue-500 text-white' : 'bg-transparent'}`}
            onClick={() => setActiveTab('characters')} style={{
              "fontFamily":  'Katibeh, serif' 
            }}
          >
            CHARACTERS
          </button> <button
            className={`px-4 py-2 mx-2 rounded ${activeTab === 'others' ? 'bg-blue-500 text-white' : 'bg-transparent'}`}
            onClick={() => setActiveTab('others')} style={{
              "fontFamily":  'Katibeh, serif' 
            }}
          >
            OTHERS
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {images.map((item, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openModal(item)}  // Open modal with selected image
            >
              <img 
                src={item} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
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
            className="absolute top-4 right-4 z-20 text-white text-3xl font-bold"  // Use z-20 to ensure it’s above the image
          >
            &times;
          </button>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected"
              className="object-contain w-full max-h-[75vh]"  // Ensures image fits within modal
            />
          )}
        </div>
      </Modal>
      <Footer />
    </>
  );
};

export default Gallery;
