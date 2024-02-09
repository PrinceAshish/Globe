import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperComponent = (props:any) => {
    const {images,width,height,className} = props;
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      modules={[Navigation, Pagination, A11y]}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {images.map((imageUrl:any, index:any) => (
        <SwiperSlide key={index}>
          <img src={imageUrl} alt={`Slide ${index + 1}`} className={className}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;