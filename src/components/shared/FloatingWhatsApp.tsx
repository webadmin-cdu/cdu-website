'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatCircle, X, PaperPlaneTilt } from '@phosphor-icons/react';
import { cn } from '@/lib/utils/cn';
import { SITE_CONFIG } from '@/lib/constants/siteConfig';

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use reception number from siteConfig (production: 8367764444)
  const whatsappNumber = `91${SITE_CONFIG.contact.phones.reception}`;
  const defaultMessage = encodeURIComponent(
    'Hello! I am interested in learning more about Chaitanya University. Could you please provide more information about admissions and programs?'
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <AnimatePresence>
      {showButton && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-6 left-6 z-50"
        >
          {/* Chat Popup */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-20 left-0 w-80 bg-white rounded-2xl shadow-strong overflow-hidden"
              >
                {/* Header */}
                <div className="bg-green-500 p-4 text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <ChatCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Chaitanya University</h4>
                      <p className="text-sm text-green-100">Typically replies within minutes</p>
                    </div>
                  </div>
                </div>

                {/* Chat Body */}
                <div className="p-4 bg-[#e5ddd5]">
                  <div className="bg-white rounded-xl p-3 shadow-sm relative">
                    {/* Chat bubble tail */}
                    <div className="absolute -left-2 top-3 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-white border-b-8 border-b-transparent" />
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      Hi there! 👋 Welcome to Chaitanya University. How can we help you today?
                    </p>
                    <p className="text-sm text-neutral-700 leading-relaxed mt-2">
                      Ask us about:
                    </p>
                    <ul className="text-sm text-neutral-600 mt-1 space-y-1">
                      <li>• Admission process</li>
                      <li>• Programs & courses</li>
                      <li>• Fee structure</li>
                      <li>• Campus facilities</li>
                    </ul>
                    <span className="text-xs text-neutral-400 mt-2 block text-right">Now</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="p-4 bg-white border-t border-neutral-100">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-medium transition-colors"
                  >
                    <PaperPlaneTilt className="h-4 w-4" />
                    Start Chat on WhatsApp
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              'w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300',
              isOpen
                ? 'bg-neutral-600 hover:bg-neutral-700'
                : 'bg-green-500 hover:bg-green-600'
            )}
            aria-label={isOpen ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <ChatCircle className="h-6 w-6 text-white" />
              )}
            </motion.div>
          </button>

          {/* Pulse animation when closed */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
