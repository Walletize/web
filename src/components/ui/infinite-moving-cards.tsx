'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Avatar, AvatarFallback } from './avatar';
import { Card, CardContent, CardTitle } from './card';

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = false,
  className,
}: {
  items: {
    icon: string;
    color: string;
    name: string;
    amount: string;
    image: string;
    diff: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  });
  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty('--animation-direction', 'forwards');
      } else {
        containerRef.current.style.setProperty('--animation-direction', 'reverse');
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '120s');
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {items.map((item, idx) => (
          <Card x-chunk="dashboard-01-chunk-0" key={idx}>
            <CardContent className="!p-0">
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <Avatar className="mb-2 flex h-10 w-10 items-center justify-center">
                    <AvatarFallback style={{ backgroundColor: item.color }}>
                      <div className="flex h-6 w-6 items-center justify-center">
                        <Image
                          src={'/icons/' + item.icon}
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: 'auto', height: 'auto' }}
                          alt="Account icon"
                          className="invert"
                        />
                      </div>
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-sm font-medium text-muted-foreground">{item.name}</CardTitle>
                    <div className="flex items-center gap-1 text-2xl font-bold">
                      <span className="text-sm text-muted-foreground">$</span>
                      {item.amount}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-positive">{item.diff}</span> vs last month
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-36 w-96">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  src={`/images/${item.image}-dark.png`}
                  alt="Chart image"
                  className="hidden dark:block"
                />
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  src={`/images/${item.image}-light.png`}
                  alt="Chart image"
                  className="block dark:hidden"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </ul>
    </div>
  );
};
