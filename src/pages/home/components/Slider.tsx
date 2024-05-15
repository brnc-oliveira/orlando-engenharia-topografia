import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, EffectFade } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react";

import { banners } from "../constants/home.constants";

export default function Slider() {
    return (
        <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            slidesPerView={1}
            pagination={{
                clickable: true,
            }}
            speed={1000}
            loop={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
        >
            {banners.map((banner) => {
                return (
                    <SwiperSlide>
                        <img
                            key={banner.name}
                            src={banner.url}
                            alt={banner.alt}
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}