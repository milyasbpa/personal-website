'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/core/lib/cn';

export interface ProfileAvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  showStatusBadge?: boolean;
  className?: string;
}

export function ProfileAvatar({
  src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=144&h=144&fit=crop&auto=format',
  alt = 'Ilyas Bashirah',
  size = 'md',
  showStatusBadge = true,
  className,
}: ProfileAvatarProps) {
  const sizeStyles = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
  };

  const badgeSizeStyles = {
    sm: 'w-2.5 h-2.5',
    md: 'w-3.5 h-3.5',
    lg: 'w-4 h-4',
  };

  return (
    <div className={cn('relative inline-flex flex-shrink-0', sizeStyles[size], className)}>
      <div className="w-full h-full rounded-full overflow-hidden border-2 border-[var(--accent-border)] bg-[var(--bg-card)]">
        <Image
          src={src}
          alt={alt}
          width={144}
          height={144}
          unoptimized={true}
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
          priority
        />
      </div>
      {showStatusBadge && (
        <span
          className={cn(
            'absolute bottom-0 right-0 flex items-center justify-center',
            badgeSizeStyles[size]
          )}
          aria-label="Available for Work"
        >
          <span className="animate-ping absolute inline-flex w-full h-full rounded-full opacity-60 bg-[var(--accent)]" />
          <span
            className={cn(
              'relative inline-flex rounded-full bg-[var(--accent)] border-2 border-[var(--bg)]',
              badgeSizeStyles[size]
            )}
          />
        </span>
      )}
    </div>
  );
}
