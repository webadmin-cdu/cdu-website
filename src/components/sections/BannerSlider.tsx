'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const bannerSlides = [
  {
    image: 'http://www.chaitanya.edu.in/wp-content/uploads/2025/02/Red-Minimalist-Company-Profile-Presentation-1.jpg',
    alt: 'Chaitanya University - Company Profile',
  },
  {
    image: 'http://www.chaitanya.edu.in/wp-content/uploads/2024/04/Purple-Modern-Thank-You-For-Watching-YouTube-Outro-Video-1.png',
    alt: 'Chaitanya University - Programs',
  },
  {
    image: 'http://www.chaitanya.edu.in/wp-content/uploads/2024/04/2.png',
    alt: 'Chaitanya University - Campus',
  },
  {
    image: 'http://www.chaitanya.edu.in/wp-content/uploads/2024/04/pharmacy.png',
    alt: 'Chaitanya University - Pharmacy',
  },
  {
    image: 'http://www.chaitanya.edu.in/wp-content/uploads/2024/04/agri.png',
    alt: 'Chaitanya University - Agriculture',
  },
  {
    image: 'http://www.chaitanya.edu.in/wp-content/uploads/2024/04/Blue-and-Yellow-Gradient-Modern-Desktop-Wallpaper.jpg',
    alt: 'Chaitanya University - Highlights',
  },
  {
    image: 'http://www.chaitanya.edu.in/wp-content/uploads/2023/08/Screenshot-2023-08-24-150559.png',
    alt: 'Chaitanya University - Achievements',
  },
];

export function BannerSlider() {
  return (
    <section className="relative max-w-5xl mx-auto overflow-hidden py-8 px-4">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        speed={800}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          el: '.banner-pagination',
          bulletClass: 'banner-bullet',
          bulletActiveClass: 'banner-bullet-active',
        }}
        navigation={{
          prevEl: '.banner-prev',
          nextEl: '.banner-next',
        }}
        loop={true}
        className="w-full"
      >
        {bannerSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full bg-white">
              <Image
                src={slide.image}
                alt={slide.alt}
                width={1920}
                height={1080}
                className="w-full h-auto"
                priority={index === 0}
                unoptimized
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <button
        className="banner-prev absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-10 md:h-10 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 border border-gray-200"
        aria-label="Previous slide"
      >
        <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" weight="bold" />
      </button>
      <button
        className="banner-next absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-10 md:h-10 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 border border-gray-200"
        aria-label="Next slide"
      >
        <ArrowRight className="h-4 w-4 md:h-5 md:w-5" weight="bold" />
      </button>

      {/* Pagination Dots */}
      <div className="banner-pagination absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2" />

      <style jsx global>{`
        .banner-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .banner-bullet:hover {
          background: rgba(255, 255, 255, 0.8);
        }
        .banner-bullet-active {
          width: 28px;
          background: var(--primary-600, #C80E13);
        }
      `}</style>
    </section>
  );
}
