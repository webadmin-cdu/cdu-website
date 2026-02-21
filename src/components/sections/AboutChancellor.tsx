'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react';
import { Button } from '@/components/ui/Button';
import { SUPABASE_IMAGES } from '@/lib/constants/supabaseImages';

export function AboutChancellor() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Image */}
          <div className="relative order-1 lg:order-1">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Decorative frame */}
              <div className="absolute -inset-3 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl -z-10" />
              <div className="absolute -inset-1.5 bg-white rounded-xl -z-10" />

              <Image
                src={SUPABASE_IMAGES.leadership.chancellor}
                alt="Dr. Ch.V. Purushotham Reddy - Chancellor"
                fill
                className="object-cover object-top rounded-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-2">
            <p className="text-sm font-semibold tracking-widest uppercase text-secondary-600 mb-3">
              Leadership
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary-800 mb-2">
              Chancellor&apos;s Message
            </h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-primary-700 mb-1">
                Dr. Ch.V. Purushotham Reddy
              </h3>
              <p className="text-secondary-600 font-medium">
                B.Ed., M.Sc., Ph.D — Founder, President & Chancellor
              </p>
            </div>

            <div className="space-y-4 text-gray-600 text-[17px] leading-relaxed mb-8">
              <p>
                A university stands for reason, humanism, tolerance, adventure of ideas and the quest for truth. It should be a place of light, liberty and learning. We believe in it. As a young university aiming to be at the pinnacle of transforming education to the youth of today, Chaitanya imparts quality education with academic excellence for creating a knowledge based society with enlightenment.
              </p>
              <p>
                We are committed and dedicated to our vision and mission and constantly evolve ourselves to the future needs and impart education that makes the world a better place to live in.
              </p>
              <p>
                Our collaboration with international universities makes it seamless for our students to gain international exposure in various disciplines. The plethora of programs offered by Chaitanya is convenient for the students to select courses of their choice under one roof.
              </p>
            </div>

            <Link href="/chancellor">
              <Button size="lg" className="group">
                Read More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
