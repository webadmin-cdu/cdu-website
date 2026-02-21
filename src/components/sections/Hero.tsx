'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { Button } from '@/components/ui/Button';
import { CAMPUS_IMAGES } from '@/lib/constants/navigation';
import { CaretDown, CaretLeft, CaretRight, ArrowRight, Play } from '@phosphor-icons/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Hero slides configuration
const heroSlides = [
  {
    image: CAMPUS_IMAGES.hero[0],
    title: 'Chaitanya',
    subtitle: 'Deemed to be University',
    tagline: 'Academic Excellence Creates Knowledge Society',
    cta: { text: 'Apply for Admission 2026', href: '/admissions/how-to-apply' },
    secondaryCta: { text: 'Explore Programs', href: '/academics/programs' },
  },
  {
    image: CAMPUS_IMAGES.hero[1],
    title: 'Shape Your Future',
    subtitle: '57+ Programs Across 8 Schools',
    tagline: 'Engineering • Pharmacy • Management • Sciences • Commerce',
    cta: { text: 'View All Programs', href: '/academics/programs' },
    secondaryCta: { text: 'Virtual Tour', href: '/campus-life/gallery' },
  },
  {
    image: CAMPUS_IMAGES.hero[2],
    title: '95% Placement Rate',
    subtitle: 'Join 150+ Recruiting Companies',
    tagline: 'TCS • Infosys • Wipro • Amazon • Microsoft & More',
    cta: { text: 'Placement Statistics', href: '/placements/statistics' },
    secondaryCta: { text: 'Our Recruiters', href: '/placements/recruiters' },
  },
];

// Animation variants
const contentVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.4 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  },
};

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.85,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative h-[85vh] min-h-[550px] overflow-hidden">
      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        speed={1200}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          el: '.hero-pagination',
          bulletClass: 'hero-bullet',
          bulletActiveClass: 'hero-bullet-active',
        }}
        navigation={{
          prevEl: '.hero-prev',
          nextEl: '.hero-next',
        }}
        loop={true}
        onSwiper={setSwiperRef}
        onSlideChange={handleSlideChange}
        className="h-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              {/* Background Image with Ken Burns */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  unoptimized
                />
              </div>

              {/* Navy Overlay - Professional dark overlay */}
              <div className="absolute inset-0 bg-secondary-900/85" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Red accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-primary-600 z-20" aria-hidden="true" />

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            {/* Dynamic Content based on active slide */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-white"
              >
                {/* Main Heading */}
                <motion.h1
                  variants={staggerItem}
                  className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
                >
                  {heroSlides[activeIndex].title}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  variants={staggerItem}
                  className="text-accent-400 text-2xl md:text-3xl lg:text-4xl font-medium mb-3"
                >
                  {heroSlides[activeIndex].subtitle}
                </motion.p>

                {/* Tagline */}
                <motion.p
                  variants={staggerItem}
                  className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl"
                >
                  {heroSlides[activeIndex].tagline}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  variants={staggerItem}
                  className="flex flex-col sm:flex-row items-start gap-4"
                >
                  <Link href={heroSlides[activeIndex].cta.href}>
                    <Button
                      size="lg"
                      className="bg-primary-600 hover:bg-primary-700 text-white font-semibold shadow-lg shadow-primary-600/30 px-8"
                    >
                      {heroSlides[activeIndex].cta.text}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  {heroSlides[activeIndex].secondaryCta && (
                    <Link href={heroSlides[activeIndex].secondaryCta.href}>
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8"
                      >
                        {heroSlides[activeIndex].secondaryCta.text}
                      </Button>
                    </Link>
                  )}
                </motion.div>

                {/* Video Button - Only on first slide */}
                {activeIndex === 0 && (
                  <motion.div variants={staggerItem} className="mt-8">
                    <button className="group inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                      <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/30 group-hover:border-accent-400 group-hover:bg-accent-400/10 transition-all">
                        <Play className="h-4 w-4 ml-0.5" />
                      </span>
                      <span className="text-sm font-medium">Watch Campus Tour</span>
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="hero-prev absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <CaretLeft className="h-6 w-6" />
      </button>
      <button
        className="hero-next absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <CaretRight className="h-6 w-6" />
      </button>

      {/* Custom Pagination */}
      <div className="hero-pagination absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2" />

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={scrollToContent}
        className="absolute bottom-8 left-8 z-30 text-white/60 hover:text-white transition-colors hidden md:block"
        aria-label="Scroll to content"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <CaretDown className="h-5 w-5 animate-bounce" />
        </div>
      </motion.button>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .hero-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .hero-bullet:hover {
          background: rgba(255, 255, 255, 0.7);
        }

        .hero-bullet-active {
          width: 32px;
          background: var(--accent-500, #D4A528);
        }

        .swiper-slide {
          opacity: 0 !important;
        }

        .swiper-slide-active {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
