import React, { useState } from 'react';
import { GalleryItem } from './GalleryItem';
import { Lightbox } from './Lightbox';

import memeImages from '../data/memes';

export const Gallery = () => {
  // const [images, setImages] = useState(memeImages);
  const [selectedImage, setSelectedImage] = useState(null);
  // const [loading, setLoading] = useState(false);

  // const loadMore = () => {
  //   setLoading(true);
  //   // Simulate loading more images
  //   setTimeout(() => {
  //     const newImages = [
  //       {
  //         id: images.length + 1,
  //         url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
  //         title: "White Robot"
  //       },
  //       {
  //         id: images.length + 2,
  //         url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
  //         title: "Matrix Code"
  //       }
  //     ];
  //     setImages([...images, ...newImages]);
  //     setLoading(false);
  //   }, 1000);
  // };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> */}
      <div className="md:flex md:flex-wrap md:justify-center md:px-[1%] grid grid-cols-1  md:gap-x-4 gap-y-5 mb-5">
        {memeImages.map((image) => (
          <GalleryItem
            key={image.id}
            image={image}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

        {/*Load More Button*/}
      {/* <div className="mt-8 text-center">
        <Button
          onClick={loadMore}
          disabled={loading}
          className="bg-primary hover:bg-primary/90"
        >
          {loading ? "Loading..." : "Load More"}
        </Button>
      </div> */}

{selectedImage && (
  <Lightbox
    image={selectedImage}
    onClose={() => setSelectedImage(null)}
    images={memeImages}
  />
)}
    </div>
  );
};
