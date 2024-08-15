import  { useState, useEffect } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // 3 soniya (3000 millisekund) har bir slayd o'zgaradi

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden ">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, youtube_video_id, index) => (
          <div key={index} className="flex-shrink-0 w-full">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full object-cover h-[450px]"
              />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 w-96 h-96 transform -translate-y-1/2 bg-[#fff0]   p-2 "
        onClick={handlePrevClick}
      ></button>
      <button
        className="absolute top-1/2 h-96 w-96  right-0 transform -translate-y-1/2 bg-[#fff0]  p-2  "
        onClick={handleNextClick}
      ></button>
    </div>
  );
};

export default Carousel;
