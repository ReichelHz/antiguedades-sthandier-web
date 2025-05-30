import React from 'react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import './ProductCarousel.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination, A11y]);

export default function ProductCarousel({ products }) {
  if (!products || products.length === 0) return null;

  return (
    <div className="carousel-container">
      <Swiper
        spaceBetween={15}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        a11y={{ enabled: true }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={product.id || index}>
            <img
              src={product.imagen}
              alt={product.nombre}
              className="carousel-image"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
