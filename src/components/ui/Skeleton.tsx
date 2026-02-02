import { cn } from '@/lib/utils/cn';

export interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse bg-neutral-200 rounded-lg',
        className
      )}
    />
  );
}

export function SkeletonText({ className }: SkeletonProps) {
  return <Skeleton className={cn('h-4 w-full', className)} />;
}

export function SkeletonCircle({ className }: SkeletonProps) {
  return <Skeleton className={cn('h-12 w-12 rounded-full', className)} />;
}

export function SkeletonCard({ className }: SkeletonProps) {
  return (
    <div className={cn('space-y-4', className)}>
      <Skeleton className="h-48 w-full" />
      <div className="space-y-2 p-4">
        <SkeletonText className="w-3/4" />
        <SkeletonText className="w-1/2" />
      </div>
    </div>
  );
}
