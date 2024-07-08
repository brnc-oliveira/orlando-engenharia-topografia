import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules"

import { banners } from "../constants/home.constants";

export default function Slider() {
    return (
        <Swiper
            style={{
                '--swiper-navigation-color': '#153E5E',
                '--swiper-pagination-color': '#153E5E',
                '--swiper-pagination-bullet-size': '8px',
                '--swiper-navigation-size': '40px',
            } as React.CSSProperties}
            modules={[Autoplay, Pagination, EffectFade, Navigation]}
            effect="fade"
            navigation
            slidesPerView={1}
            pagination={{
                clickable: true,
            }}
            speed={1000}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
        >
            {banners.map((banner, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={banner.url}
                        alt={banner.alt}
                        className="w-[100%] h-[180px] md:h-[330px] lg:h-[600px]"
                    />
                </SwiperSlide>

            ))}
        </Swiper>
    );
}