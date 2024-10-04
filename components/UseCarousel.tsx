'use client'
import { urlForImage } from '@/lib/sanity';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const UseCarousel = ({ data }: { data: any }) => {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);

  // Array of hero images for each image
  const heroImages1 = [
    urlForImage(data.heroimage).url(),
    urlForImage(data.heroimage1).url(),
    urlForImage(data.heroimage2).url(),
  ];

  const heroImages2 = [
    urlForImage(data.heroimage3).url(),
    urlForImage(data.heroimage4).url(),
    urlForImage(data.heroimage5).url(),
  ];

  // Effect for changing the first carousel images
  useEffect(() => {
    const intervalId1 = setInterval(() => {
      setCurrentIndex1((prevIndex) => (prevIndex + 1) % heroImages1.length);
    }, 300); // Change image every 5 seconds

    return () => clearInterval(intervalId1); // Clean up interval on component unmount
  }, [heroImages1.length]);

  // Effect for changing the second carousel images
  useEffect(() => {
    const intervalId2 = setInterval(() => {
      setCurrentIndex2((prevIndex) => (prevIndex + 1) % heroImages2.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId2); // Clean up interval on component unmount
  }, [heroImages2.length]);

  return (
    <div className='overflow-hidden'>
      <div className='flex flex-col gap-y-3 lg:flex-row px-10 max-w-7xl pb-10 mx-auto'>
        {/* First Image */}
        <div className='flex-shrink-0 w-[600px] h-[400px] relative'>
          <Image
            src={heroImages1[currentIndex1]}
            alt={`hero image 1 - ${currentIndex1 + 1}`}
            className='object-cover rounded-xl lg:rounded-r-none'
            layout="fill" // Makes the image take the full width and height of the container
            sizes="(max-width: 600px) 100vw, 600px" // Responsive sizes for the image
          />
        </div>

        {/* Second Image */}
        <div className='flex-shrink-0 w-[600px] h-[400px] relative'>
          <Image
            src={heroImages2[currentIndex2]}
            alt={`hero image 2 - ${currentIndex2 + 1}`}
            className='object-cover rounded-xl lg:rounded-l-none'
            layout="fill" // Makes the image take the full width and height of the container
            sizes="(max-width: 600px) 100vw, 600px" // Responsive sizes for the image
          />
        </div>
      </div>
    </div>
  );
};

export default UseCarousel;
