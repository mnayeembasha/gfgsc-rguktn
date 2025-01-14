import React from 'react';

export const GalleryItem = ({ image, onClick }) => {
  return (
    <div
      className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
      onClick={onClick}
    >
      <img
        src={image.url}
        className="w-full md:h-[22rem] object-cover md:object-contain"
        loading="lazy"
      />
      {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300">
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <h3 className="text-white text-xl font-semibold px-4 text-center">
            {image.title}
          </h3>
        </div>
      </div> */}
    </div>
  );
};