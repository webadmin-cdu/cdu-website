'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CaretLeft, CaretRight, MagnifyingGlassPlus } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  className?: string;
  columns?: 2 | 3 | 4;
  aspectRatio?: 'square' | 'landscape' | 'portrait' | 'auto';
  gap?: 'sm' | 'md' | 'lg';
}

export function ImageGallery({
  images,
  className,
  columns = 3,
  aspectRatio = 'landscape',
  gap = 'md',
}: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, goToPrevious, goToNext]);

  const aspectRatioClass = {
    square: 'aspect-square',
    landscape: 'aspect-[4/3]',
    portrait: 'aspect-[3/4]',
    auto: '',
  };

  const gapClass = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
  };

  const columnsClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
  };

  return (
    <>
      <div className={cn('grid', columnsClass[columns], gapClass[gap], className)}>
        {images.map((image, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            onClick={() => openLightbox(index)}
            className={cn(
              'relative overflow-hidden rounded-xl group cursor-pointer',
              aspectRatioClass[aspectRatio]
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-secondary-700/0 group-hover:bg-secondary-700/40 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="h-12 w-12 rounded-full bg-white/90 flex items-center justify-center">
                <MagnifyingGlassPlus className="h-5 w-5 text-charcoal-700" />
              </div>
            </div>
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm">{image.caption}</p>
              </div>
            )}
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 h-12 w-12 flex items-center justify-center text-white/80 hover:text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 z-50 h-12 w-12 flex items-center justify-center text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <CaretLeft className="h-8 w-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 z-50 h-12 w-12 flex items-center justify-center text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Next image"
            >
              <CaretRight className="h-8 w-8" />
            </button>

            {/* Image */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl max-h-[85vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                width={1200}
                height={800}
                className="object-contain w-full h-full max-h-[85vh]"
              />
              {images[currentIndex].caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-6">
                  <p className="text-white text-center">{images[currentIndex].caption}</p>
                </div>
              )}
            </motion.div>

            {/* Thumbnails */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                  }}
                  className={cn(
                    'h-2 w-2 rounded-full transition-all',
                    index === currentIndex
                      ? 'w-6 bg-white'
                      : 'bg-white/40 hover:bg-white/60'
                  )}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="absolute top-4 left-4 text-white/80 text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
