"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const mediaItems = [
  { type: "image", src: "/bg.jpg" },
  { type: "video", src: "/media/video1.mp4" },
  { type: "image", src: "/media/slide2.jpg" },
];

export default function MediaSlider() {
  return (
    <div className="lg:h-96 w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        loop
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {mediaItems.map((item, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            {item.type === "image" ? (
              <img src={item.src} alt={`Slide ${index + 1}`} className="h-full w-full object-cover" />
            ) : (
              <video
                src={item.src}
                controls
                muted
                autoPlay
                loop
                className="h-full w-full object-cover"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}