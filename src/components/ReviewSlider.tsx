"use client";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface AboutSectionProps {
  name: string;
}

const reviews = [
  {
    name: "Aarav Mehta",
    avatar: "/avatars/user1.jpg",
    foodImage: "/menu/pizza.jpg",
    comment: "The best pizza I've had in ages! Crispy crust and cheesy delight.",
    rating: 5,
  },
  {
    name: "Sneha Kapoor",
    avatar: "/avatars/user2.jpg",
    foodImage: "/menu/dessert.jpg",
    comment: "The dessert was a dream! Melts in your mouth.",
    rating: 4,
  },
  {
    name: "Rahul Singh",
    avatar: "/avatars/user3.jpg",
    foodImage: "/menu/burger.jpg",
    comment: "Juicy burger with amazing flavors. Highly recommended!",
    rating: 5,
  },
];

export default function ReviewSlider({ name }: AboutSectionProps) {
  return (
    <section id="reviews" className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides
          loop
          navigation
          pagination={{ clickable: true }}
          className="w-full"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-100 p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:scale-105">
                <img
                  src={review.foodImage}
                  alt="Food"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <div className="flex flex-col items-center mb-2">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400"
                  />
                  <h3 className="mt-2 text-lg font-semibold">{review.name}</h3>
                </div>
                <p className="text-gray-700 text-sm mb-2">"{review.comment}"</p>
                <div className="flex justify-center space-x-1 text-yellow-400 text-lg">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                  {review.rating < 5 &&
                    Array.from({ length: 5 - review.rating }).map((_, i) => (
                      <span key={i}>☆</span>
                    ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {name=="review"?(
            <div>
                Helooo
            </div>
        ):""}
    </section>
  );
}