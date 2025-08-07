// components/BannerCarousel.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';

// 批量导入图片的函数
const importAll = (r: ReturnType<typeof require.context>): string[] =>
  r.keys().sort().map((key) => r(key));

const images = importAll(require.context('../asset/img/banners', false, /\.(png|jpe?g|webp)$/));

const BannerCarousel: React.FC = () => {
  return (
    <div className="swiper-wrapper-container">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        className="custom-swiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`banner-${index}`} className="banner-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerCarousel;