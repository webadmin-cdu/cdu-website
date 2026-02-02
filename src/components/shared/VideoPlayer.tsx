'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

interface VideoPlayerProps {
  src?: string;
  youtubeId?: string;
  vimeoId?: string;
  poster?: string;
  title?: string;
  className?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1';
  autoPlay?: boolean;
}

export function VideoPlayer({
  src,
  youtubeId,
  vimeoId,
  poster,
  title = 'Video',
  className,
  aspectRatio = '16/9',
  autoPlay = false,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (youtubeId || vimeoId) {
      setIsModalOpen(true);
    } else {
      setIsPlaying(true);
      videoRef.current?.play();
    }
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const getEmbedUrl = () => {
    if (youtubeId) {
      return `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;
    }
    if (vimeoId) {
      return `https://player.vimeo.com/video/${vimeoId}?autoplay=1`;
    }
    return '';
  };

  const aspectRatioClass = {
    '16/9': 'aspect-video',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
  };

  // For YouTube/Vimeo videos with modal
  if (youtubeId || vimeoId) {
    return (
      <>
        <div
          className={cn(
            'relative overflow-hidden rounded-2xl cursor-pointer group',
            aspectRatioClass[aspectRatio],
            className
          )}
          onClick={handlePlay}
        >
          {poster && (
            <Image
              src={poster}
              alt={title}
              fill
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-secondary-700/30 group-hover:bg-secondary-700/40 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="h-20 w-20 rounded-full bg-white/90 flex items-center justify-center shadow-strong"
            >
              <Play className="h-8 w-8 text-primary-600 ml-1" />
            </motion.div>
          </div>
          {title && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-6">
              <p className="text-white font-medium">{title}</p>
            </div>
          )}
        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
              onClick={handleClose}
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-50 h-12 w-12 flex items-center justify-center text-white/80 hover:text-white transition-colors"
                aria-label="Close video"
              >
                <X className="h-8 w-8" />
              </button>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-full max-w-5xl aspect-video"
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  src={getEmbedUrl()}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full rounded-xl"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  // For self-hosted videos
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl bg-charcoal-900',
        aspectRatioClass[aspectRatio],
        className
      )}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls={isPlaying}
        className="absolute inset-0 w-full h-full object-cover"
        onEnded={() => setIsPlaying(false)}
      />

      {!isPlaying && (
        <div
          className="absolute inset-0 flex items-center justify-center cursor-pointer group"
          onClick={handlePlay}
        >
          {poster && (
            <Image
              src={poster}
              alt={title}
              fill
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-secondary-700/30 group-hover:bg-secondary-700/40 transition-colors" />
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative h-20 w-20 rounded-full bg-white/90 flex items-center justify-center shadow-strong"
          >
            <Play className="h-8 w-8 text-primary-600 ml-1" />
          </motion.div>
        </div>
      )}
    </div>
  );
}
