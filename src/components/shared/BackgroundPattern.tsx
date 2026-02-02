'use client';

import { cn } from '@/lib/utils/cn';

type PatternType =
  | 'dots'
  | 'dots-sm'
  | 'dots-lg'
  | 'grid'
  | 'grid-sm'
  | 'diagonal'
  | 'diagonal-thick'
  | 'cross'
  | 'hexagon'
  | 'wave'
  | 'circuit'
  | 'topography'
  | 'shapes'
  | 'moroccan'
  | 'noise';

type GradientType =
  | 'mesh'
  | 'orbs'
  | 'animated'
  | 'radial'
  | 'linear'
  | 'none';

interface BackgroundPatternProps {
  pattern?: PatternType;
  gradient?: GradientType;
  patternColor?: string;
  patternOpacity?: number;
  className?: string;
  children?: React.ReactNode;
  showBlobs?: boolean;
  blobColors?: [string, string, string];
}

const patternClasses: Record<PatternType, string> = {
  dots: 'pattern-dots',
  'dots-sm': 'pattern-dots-sm',
  'dots-lg': 'pattern-dots-lg',
  grid: 'pattern-grid',
  'grid-sm': 'pattern-grid-sm',
  diagonal: 'pattern-diagonal',
  'diagonal-thick': 'pattern-diagonal-thick',
  cross: 'pattern-cross',
  hexagon: 'pattern-hexagon',
  wave: 'pattern-wave',
  circuit: 'pattern-circuit',
  topography: 'pattern-topography',
  shapes: 'pattern-shapes',
  moroccan: 'pattern-moroccan',
  noise: 'pattern-noise',
};

const gradientClasses: Record<GradientType, string> = {
  mesh: 'bg-gradient-mesh',
  orbs: 'bg-gradient-orbs',
  animated: 'bg-gradient-animated',
  radial: 'bg-gradient-to-br from-white via-primary-50 to-white',
  linear: 'bg-gradient-to-b from-charcoal-50 to-white',
  none: '',
};

export function BackgroundPattern({
  pattern,
  gradient = 'none',
  patternColor = 'rgba(211, 62, 66, 0.1)',
  patternOpacity = 1,
  className,
  children,
  showBlobs = false,
  blobColors = ['rgba(211, 62, 66, 0.1)', 'rgba(39, 1, 20, 0.08)', 'rgba(211, 62, 66, 0.06)'],
}: BackgroundPatternProps) {
  return (
    <div className={cn('relative overflow-hidden', gradientClasses[gradient], className)}>
      {/* Pattern Overlay */}
      {pattern && (
        <div
          className={cn('absolute inset-0 pointer-events-none', patternClasses[pattern])}
          style={{
            color: patternColor,
            opacity: patternOpacity,
          }}
          aria-hidden="true"
        />
      )}

      {/* Floating Blobs */}
      {showBlobs && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div
            className="blob-1 absolute -top-20 -left-20 w-72 h-72 rounded-full blur-3xl"
            style={{ backgroundColor: blobColors[0] }}
          />
          <div
            className="blob-2 absolute top-1/2 -right-20 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: blobColors[1] }}
          />
          <div
            className="blob-3 absolute -bottom-20 left-1/3 w-80 h-80 rounded-full blur-3xl"
            style={{ backgroundColor: blobColors[2] }}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// Decorative corner accents
export function CornerAccent({
  position = 'top-right',
  color = 'primary',
  size = 'md',
  className,
}: {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  color?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
  };

  const colorClasses = {
    primary: 'from-primary-500/20 to-transparent',
    secondary: 'from-secondary-500/20 to-transparent',
    accent: 'from-accent-500/20 to-transparent',
  };

  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64',
  };

  const rotationClasses = {
    'top-left': '-rotate-90',
    'top-right': 'rotate-0',
    'bottom-left': 'rotate-180',
    'bottom-right': 'rotate-90',
  };

  return (
    <div
      className={cn(
        'absolute pointer-events-none',
        positionClasses[position],
        sizeClasses[size],
        className
      )}
      aria-hidden="true"
    >
      <div
        className={cn(
          'w-full h-full bg-gradient-to-br',
          colorClasses[color],
          rotationClasses[position]
        )}
      />
    </div>
  );
}

// Decorative wave divider
export function WaveDivider({
  position = 'bottom',
  color = '#ffffff',
  className,
}: {
  position?: 'top' | 'bottom';
  color?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'absolute left-0 w-full overflow-hidden pointer-events-none',
        position === 'top' ? 'top-0 rotate-180' : 'bottom-0',
        className
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-12 md:h-16 lg:h-20"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          fill={color}
          opacity=".25"
        />
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          fill={color}
          opacity=".5"
        />
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,googl172.46-45.71,248.8-84.81V0Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

// Geometric shape decorations
export function GeometricAccent({
  variant = 'circles',
  position = 'right',
  className,
}: {
  variant?: 'circles' | 'squares' | 'triangles';
  position?: 'left' | 'right';
  className?: string;
}) {
  const positionClasses = {
    left: 'left-0 -translate-x-1/2',
    right: 'right-0 translate-x-1/2',
  };

  return (
    <div
      className={cn(
        'absolute top-1/2 -translate-y-1/2 pointer-events-none opacity-10',
        positionClasses[position],
        className
      )}
      aria-hidden="true"
    >
      {variant === 'circles' && (
        <svg width="200" height="400" viewBox="0 0 200 400" fill="none">
          <circle cx="100" cy="50" r="40" stroke="currentColor" strokeWidth="2" className="text-primary-600" />
          <circle cx="100" cy="150" r="60" stroke="currentColor" strokeWidth="2" className="text-primary-600" />
          <circle cx="100" cy="280" r="80" stroke="currentColor" strokeWidth="2" className="text-primary-600" />
          <circle cx="100" cy="50" r="20" fill="currentColor" className="text-primary-600" fillOpacity="0.3" />
          <circle cx="100" cy="150" r="30" fill="currentColor" className="text-primary-600" fillOpacity="0.2" />
        </svg>
      )}
      {variant === 'squares' && (
        <svg width="200" height="400" viewBox="0 0 200 400" fill="none">
          <rect x="60" y="10" width="80" height="80" stroke="currentColor" strokeWidth="2" className="text-primary-600" transform="rotate(15 100 50)" />
          <rect x="40" y="120" width="120" height="120" stroke="currentColor" strokeWidth="2" className="text-primary-600" transform="rotate(-10 100 180)" />
          <rect x="20" y="270" width="160" height="100" stroke="currentColor" strokeWidth="2" className="text-primary-600" transform="rotate(5 100 320)" />
        </svg>
      )}
      {variant === 'triangles' && (
        <svg width="200" height="400" viewBox="0 0 200 400" fill="none">
          <polygon points="100,10 140,90 60,90" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary-600" />
          <polygon points="100,120 160,220 40,220" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" className="text-primary-600" />
          <polygon points="100,250 180,380 20,380" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary-600" />
        </svg>
      )}
    </div>
  );
}

// Gradient line accent
export function GradientLine({
  direction = 'horizontal',
  className,
}: {
  direction?: 'horizontal' | 'vertical';
  className?: string;
}) {
  return (
    <div
      className={cn(
        'bg-gradient-to-r from-transparent via-primary-500 to-transparent',
        direction === 'horizontal' ? 'h-px w-full' : 'w-px h-full bg-gradient-to-b',
        className
      )}
      aria-hidden="true"
    />
  );
}
