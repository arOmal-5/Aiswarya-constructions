import React from 'react';
import Image from 'next/image';
import './Products.css';

import estimationImage from '../../public/Assets/estimation.jpg';
import constructionImage from '../../public/Assets/construction.jpg';
import realestateImage from '../../public/Assets/realestate.jpg';
import surveyImage from '../../public/Assets/survey.jpg';

const Products = () => {
  const images = [
    { src: constructionImage, alt: 'Construction' },
    { src: estimationImage, alt: 'Estimation' },
    { src: realestateImage, alt: 'Real Estate' },
    { src: surveyImage, alt: 'Site Survey' },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      {images.map((image, index) => (
        <div key={index} className="card column max-w-sm bg-white rounded-lg dark:border-gray-700 ">
          <div className="card-image w-full h-full">
            <Image src={image.src} width={300} height={400} alt={image.alt} className="rounded-t-lg " />
            <div className="image-overlay">
              <h2 className="card-heading">{image.alt}</h2>
            </div>
          </div>
          <div className="p-5">
            {/* Add content here */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;