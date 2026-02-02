'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { CaretLeft, CaretRight, Quotes } from '@phosphor-icons/react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { TESTIMONIALS } from '@/lib/constants/navigation';
import { cn } from '@/lib/utils/cn';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export function Testimonials() {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);

  return (
    <section className="py-20 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Success Stories"
          title="What Our Alumni Say"
          description="Hear from our graduates who have gone on to achieve great success in their careers."
        />

        <div className="relative mt-12">
          {/* Swiper Carousel */}
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: '.testimonials-pagination',
              bulletClass: 'testimonial-bullet',
              bulletActiveClass: 'testimonial-bullet-active',
            }}
            navigation={{
              prevEl: '.testimonials-prev',
              nextEl: '.testimonials-next',
            }}
            loop={true}
            onSwiper={setSwiperRef}
            className="pb-12"
          >
            {TESTIMONIALS.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-soft border border-neutral-100 h-full flex flex-col hover:shadow-medium transition-shadow duration-300">
                  {/* Quotes Icon */}
                  <Quotes className="h-8 w-8 text-primary-600 mb-6" />

                  {/* Quotes Text */}
                  <blockquote className="text-neutral-700 leading-relaxed flex-1 mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-neutral-100">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-secondary-400 ring-offset-2">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-900">{testimonial.name}</h4>
                      <p className="text-sm text-neutral-500">
                        {testimonial.role} at <span className="text-secondary-600 font-medium">{testimonial.company}</span>
                      </p>
                      <p className="text-xs text-neutral-400">Batch of {testimonial.batch}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="testimonials-pagination flex justify-center gap-2 mt-8" />

          {/* Navigation Buttons */}
          <button
            className={cn(
              'testimonials-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10',
              'w-12 h-12 rounded-full bg-white shadow-medium flex items-center justify-center',
              'text-primary-600 hover:bg-primary-50 hover:text-primary-700 transition-colors',
              'hidden lg:flex disabled:opacity-50 disabled:cursor-not-allowed'
            )}
            aria-label="Previous testimonial"
          >
            <CaretLeft className="h-6 w-6" />
          </button>
          <button
            className={cn(
              'testimonials-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10',
              'w-12 h-12 rounded-full bg-white shadow-medium flex items-center justify-center',
              'text-primary-600 hover:bg-primary-50 hover:text-primary-700 transition-colors',
              'hidden lg:flex disabled:opacity-50 disabled:cursor-not-allowed'
            )}
            aria-label="Next testimonial"
          >
            <CaretRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .testimonial-bullet {
          width: 10px;
          height: 10px;
          background: #CBD5E1;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .testimonial-bullet:hover {
          background: #94A3B8;
        }

        .testimonial-bullet-active {
          width: 28px;
          background: var(--secondary-500, #D69E2E);
        }
      `}</style>
    </section>
  );
}
