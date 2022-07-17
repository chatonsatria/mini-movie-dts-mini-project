import React from "react";
import Carousel from "better-react-carousel";

const Original = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <p className="font-medium text-2xl px-8">Original</p>
      {/* list */}
      <div className="relative flex w-full">
        <div className="absolute z-[103] bg-gradient-to-l from-[#141414] opacity-80 w-full h-full"></div>
        <Carousel
          scrollSnap={true}
          cols={5}
          rows={1}
          gap={5}
          containerClassName="flex w-full h-[575px] px-3"
          arrowLeft={
            <div className="absolute flex flex-col items-center px-1 justify-center z-[104] cursor-pointer h-full left-8 rounded-l-sm bg-slate-800 bg-opacity-80">
              <svg
                className="rotate-180"
                width="20"
                height="34"
                viewBox="0 0 20 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.41423 0L0.641113 1.76728L15.8243 17L0.641113 32.2327L2.41423 34L19.3589 17L2.41423 0Z"
                  fill="white"
                />
              </svg>
            </div>
          }
          arrowRight={
            <div className="absolute flex flex-col items-center px-1 justify-center z-[104] cursor-pointer h-full right-8 rounded-r-sm bg-slate-800 bg-opacity-30">
              <svg
                width="20"
                height="34"
                viewBox="0 0 20 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.41423 0L0.641113 1.76728L15.8243 17L0.641113 32.2327L2.41423 34L19.3589 17L2.41423 0Z"
                  fill="white"
                />
              </svg>
            </div>
          }
        >
          {/* loop here */}
          <Carousel.Item>
            <img
              src="https://picsum.photos/800/600?random=1"
              alt=""
              className="w-[285px] h-[575px] object-cover"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://picsum.photos/800/600?random=2"
              alt=""
              className="w-[285px] h-[575px] object-cover"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://picsum.photos/800/600?random=3"
              alt=""
              className="w-[285px] h-[575px] object-cover"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://picsum.photos/800/600?random=3"
              alt=""
              className="w-[285px] h-[575px] object-cover"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://picsum.photos/800/600?random=3"
              alt=""
              className="w-[285px] h-[575px] object-cover"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://picsum.photos/800/600?random=3"
              alt=""
              className="w-[285px] h-[575px] object-cover"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://picsum.photos/800/600?random=3"
              alt=""
              className="w-[285px] h-[575px] object-cover"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://picsum.photos/800/600?random=3"
              alt=""
              className="w-[285px] h-[575px] object-cover"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://picsum.photos/800/600?random=3"
              alt=""
              className="w-[285px] h-[575px] object-cover"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://picsum.photos/800/600?random=3"
              alt=""
              className="w-[285px] h-[575px] object-cover"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://picsum.photos/800/600?random=3"
              alt=""
              className="w-[285px] h-[575px] object-cover"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Original;
