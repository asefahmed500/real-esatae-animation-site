"use client";

import useAnimation from "@/hooks/useAnimation";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineArrowUp } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";

const Work = () => {
  const leftRef = useAnimation("left", 1, 0.25);
  const rightRef = useAnimation("right", 1, 0.25);
  const [showSigns, setShowSigns] = useState({}); // Object to manage the state of each card

  const toggleSign = (id) => {
    setShowSigns((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the visibility for the clicked card
    }));
  };

  const cards = [
    { id: 1, title: "Web Development", image: "/cardone.png", position: "bottom" },
    { id: 2, title: "SEO", image: "/cardtwo.png", position: "top" },
    { id: 3, title: "Dev OPS", image: "/cardone.png", position: "bottom" },
    { id: 4, title: "Marketing", image: "/cardtwo.png", position: "top" },
  ];

  return (
    <div className="px-4 md:px-10 lg:px-20">
      {/* Header Section */}
      <div className="mt-10">
        <div ref={leftRef} className="space-y-6">
          <h1 className="text-5xl font-bold text-black uppercase">What</h1>
          <h1
            style={{
              textShadow:
                "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
            }}
            className="text-6xl font-bold text-white uppercase"
          >
            We Can
          </h1>
          <h3 className="text-2xl font-bold text-black uppercase">Do For You</h3>
        </div>
      </div>

      {/* Description Section */}
      <div ref={rightRef} className="mt-20 flex justify-end">
        <div className="space-y-6 w-full md:w-[50%]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus
            lectus, faucibus vitae nulla vitae, pharetra volutpat metus.
            Pellentesque in risus interdum, pellentesque tortor eu, tincidunt
            elit. Maecenas ac diam ipsum. Sed at dolor ut lectus vestibulum
            semper. Proin facilisis eleifend leo lobortis feugiat. Duis mattis
            volutpat tellus a pulvinar. Suspendisse potenti.
          </p>
        </div>
      </div>

      {/* Swiper Section */}
      <section className="flex items-center justify-center mt-20">
        <div className="w-full max-w-4xl mt-2 ">
          <Swiper
            className=" h-[400px]  "
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 2, spaceBetween: 40 },
            }}
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="card bg-base-100 w-full  max-w-md mx-auto shadow-xl mt-6 relative">
                  {/* Card Content */}
                  <div>
                    <figure className="px-10 pt-10">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="rounded-xl h-[220px] w-full object-cover"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <p className="text-xl font-semibold">{card.title}</p>
                    </div>
                  </div>

                  {/* Toggle Button */}
                  <div
                    className={`absolute ${card.position === "bottom"
                        ? "bottom-[-20px] left-1/2 transform -translate-x-1/2"
                        : "top-[-20px] left-1/2 transform -translate-x-1/2"
                      }`}
                  >
                    <button
                      className="btn rounded-full bg-white border-2 border-gray-300 text-black text-xl shadow-md w-12 h-12 flex items-center justify-center"
                      onClick={() => toggleSign(card.id)}
                    >
                      {showSigns[card.id] ? (
                        <AiOutlineArrowUp className="text-2xl" />
                      ) : (
                        card.id
                      )}
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Work;
