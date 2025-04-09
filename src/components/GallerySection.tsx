"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

interface AboutSectionProps {
  name: string;
}

const galleryItems = [
  {
    image: "/unnamed (1).jpg",
    text: "Elegant Interior",
  },
  {
    image: "/unnamed (2).jpg",
    text: "Cozy Dining Experience",
  },
  {
    image: "/unnamed (3).jpg",
    text: "Our Master Chef",
  },
  {
    image: "/unnamed (1).jpg",
    text: "Private Events",
  },
];

export default function GallerySection({ name }: AboutSectionProps) {
  return (
    <section id="gallery" className="py-12 bg-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation
          autoplay={{ delay: 3000 }}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {galleryItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-100 transition duration-500">
                  <p className="text-white text-lg font-semibold text-center px-4">
                    {item.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-end py-4">
        <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
          Click Here
        </button>
      </div>

      {name === "gallery" && (
        <div>
          Helooo
        </div>
      )}
    </section>
  );
}
