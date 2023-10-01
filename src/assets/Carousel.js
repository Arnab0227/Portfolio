import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { GoGrabber } from 'react-icons/go';

import Capture1 from '../photos/Capture1.jpg';
import Capture2 from '../photos/Capture2.jpg';
import Capture3 from '../photos/Capture3.jpg';
import Capture4 from '../photos/Capture4.jpg';
import Capture5 from '../photos/Capture5.jpg';
import Capture6 from '../photos/Capture6.jpg';
import Capture7 from '../photos/Capture7.jpg';
import Capture8 from '../photos/Capture8.jpg';

export default function Carousel() {
  const [imageSet, setImageSet] = useState(0);

  const images = useMemo(() => [
    Capture1, Capture2, Capture3, Capture4, Capture5, Capture6, Capture7, Capture8
  ], []);

  const goToNext = useCallback(() => {
    setImageSet((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images]);

  const goToPrevious = useCallback(() => {
    setImageSet((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images]);

  useEffect(() => {
    const interval = setInterval(goToNext, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [goToNext]);

  return (
    <div>
      <div className="lg:flex justify-between pt-5 hidden">
        <button onClick={goToPrevious} className="text-8xl text-gray-400">
          <GoGrabber />
        </button>
        <img
          src={images[imageSet]}
          alt="images"
          className="border-20 shadow-lg border-transparent border-white elevation-10 outline-0"
        />
        <button onClick={goToNext} className="text-8xl text-gray-400">
          <GoGrabber />
        </button>
      </div>
      <div className="lg:hidden flex justify-center items-center pt-5 mx-1">
        <img
          src={images[imageSet]}
          alt="images"
          className="w-full h-full border-20 shadow-lg border-transparent border-white elevation-10 outline-0"
        />
      </div>
    </div>
  );
}
