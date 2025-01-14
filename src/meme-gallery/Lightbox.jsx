import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const Lightbox = ({ image, onClose, images }) => {

  const [memeImage,setMemeImage] = useState(image);
  const [currentIndex,setCurrentIndex] = useState(images.findIndex((img) => img.id === image.id));
  const handlePrev = () => {
    if (currentIndex > 0) {
      const prevImage = images[currentIndex - 1];
      if (prevImage) {
        setCurrentIndex(c=>c-1);
        setMemeImage(prevImage);
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      const nextImage = images[currentIndex + 1];
      if (nextImage) {
        setCurrentIndex(c=>c+1);
        setMemeImage(nextImage);
      }
    }
  };

  // Close on 'Escape' key press
  useEffect(() => {
    const handleKeyBoardMovement = (e) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyBoardMovement);
    return () => window.removeEventListener('keydown', handleKeyBoardMovement);
  }, [onClose,memeImage,currentIndex]);



  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 animate-fade-in">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
      >
        <X size={32} />
      </button>

      {/* Previous Button */}
      {currentIndex > 0 && (
        <button
          onClick={handlePrev}
          className="absolute z-50 left-4 bottom-8 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-700 transition-colors"
        >
          <ChevronLeft size={40} />
        </button>
      )}

      {/* Lightbox Content */}
      <div className="relative max-w-7xl mx-auto px-4 animate-scale-in">
        <img
          src={memeImage.url}
          // alt={image.title}
          className="max-h-[100vh] max-w-full object-contain rounded-lg"
        />
        {/* <h2 className="text-white text-xl font-semibold mt-4 text-center">
          {image.title}
        </h2> */}
      </div>

      {/* Next Button */}
      {currentIndex < images.length - 1 && (
        <button
          onClick={handleNext}
          className="absolute z-50 right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-700 transition-colors"
        >
          <ChevronRight size={40} />
        </button>
      )}
    </div>
  );
};
