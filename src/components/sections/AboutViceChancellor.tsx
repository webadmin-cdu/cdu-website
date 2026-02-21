'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react';
import { Button } from '@/components/ui/Button';
import { SUPABASE_IMAGES } from '@/lib/constants/supabaseImages';

export function AboutViceChancellor() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Content — Left */}
          <div className="order-2 lg:order-1">
            <p className="text-sm font-semibold tracking-widest uppercase text-secondary-600 mb-3">
              Leadership
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary-800 mb-2">
              Vice Chancellor&apos;s Message
            </h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-primary-700 mb-1">
                Prof. G. Shankar Lingam
              </h3>
              <p className="text-secondary-600 font-medium">
                Ph.D., D.Litt. — Vice Chancellor
              </p>
            </div>

            <div className="space-y-4 text-gray-600 text-[17px] leading-relaxed mb-8">
              <p>
                Relentlessly surging ahead on its chosen path has been the hallmark of Chaitanya. The academic liberty it has permits us to introduce various new and job-oriented courses resulting in excellent campus placements year after year. Driven by our founding philosophy of &apos;Academic Excellence&apos; for a knowledge society, we strongly believe in building a community of perpetual learners.
              </p>
              <p>
                Chaitanya is well-known for its offerings of a variety of courses after recruiting the qualified staff and providing necessary infrastructure facilities. It upholds the highest values in all its activities and programs, acting as a catalyst to transform the lives of thousands through excellence in teaching, learning, research, service and community development.
              </p>
              <p>
                I welcome you all to our vibrant Chaitanya where we shape your future with values, wisdom and knowledge.
              </p>
            </div>

            <Link href="/vice-chancellor">
              <Button size="lg" className="group">
                Read More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Image — Right */}
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:ml-auto lg:mr-0">
              {/* Decorative frame */}
              <div className="absolute -inset-3 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl -z-10" />
              <div className="absolute -inset-1.5 bg-white rounded-xl -z-10" />

              <Image
                src={SUPABASE_IMAGES.leadership.viceChancellor}
                alt="Prof. G. Shankar Lingam - Vice Chancellor"
                fill
                className="object-cover object-top rounded-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
