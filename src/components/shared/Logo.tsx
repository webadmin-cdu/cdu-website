'use client';

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils/cn';
import ChaitanyaLogo from './ChaitanyaLogo';

interface LogoProps {
  variant?: 'default' | 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export function Logo({
  variant = 'default',
  size = 'md',
  showText = true,
  className,
}: LogoProps) {
  const sizes = {
    sm: { logo: 'h-14 w-14', svgWidth: 140, svgHeight: 25, subtitle: 'text-[10px]', gap: 'gap-2' },
    md: { logo: 'h-20 w-20', svgWidth: 200, svgHeight: 36, subtitle: 'text-xs', gap: 'gap-3' },
    lg: { logo: 'h-24 w-24', svgWidth: 260, svgHeight: 46, subtitle: 'text-sm', gap: 'gap-4' },
  };

  const currentSize = sizes[size];

  return (
    <Link href="/" className={cn('flex items-center group', currentSize.gap, className)}>
      {/* Logo Image */}
      <div className={cn(currentSize.logo, 'relative flex-shrink-0')}>
        <Image
          src="/logo-nobg.png"
          alt="Chaitanya University"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Text */}
      {showText && (
        <div className="hidden sm:flex flex-col justify-center">
          {/* Main Title - SVG Logo */}
          <ChaitanyaLogo width={currentSize.svgWidth} height={currentSize.svgHeight} />
          {/* Subtitle */}
          <span
            className={cn(
              'tracking-[0.25em] uppercase text-secondary-900',
              currentSize.subtitle
            )}
            style={{
              fontFamily: "var(--font-cinzel), 'Cinzel', 'Trajan Pro', Georgia, serif",
              fontWeight: 600,
            }}
          >
            Deemed to be University
          </span>
        </div>
      )}
    </Link>
  );
}

// Standalone Logo Image for use in other contexts
export function LogoImage({
  size = 48,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div className={cn('relative', className)} style={{ width: size, height: size }}>
      <Image
        src="/logo-nobg.png"
        alt="Chaitanya University"
        fill
        className="object-contain"
      />
    </div>
  );
}
