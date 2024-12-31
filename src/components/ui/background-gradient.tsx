'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: '0 50%',
    },
    animate: {
      backgroundPosition: ['0, 50%', '100% 50%', '0 50%'],
    },
  };
  return (
    <div className={cn('group relative p-[2px]', containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? '400% 400%' : undefined,
        }}
        className={cn(
          'absolute inset-0 z-[1] rounded-lg opacity-60 blur-xl transition duration-500 will-change-transform group-hover:opacity-100',
          'dark:bg-[radial-gradient(circle_farthest-side_at_0_100%,black,transparent),radial-gradient(circle_farthest-side_at_100%_0,#46bb7f,transparent),radial-gradient(circle_farthest-side_at_100%_100%,black,transparent),radial-gradient(circle_farthest-side_at_0_0,#46bb7f,black)]',
          'bg-[radial-gradient(circle_farthest-side_at_0_100%,white,transparent),radial-gradient(circle_farthest-side_at_100%_0,#46bb7f,transparent),radial-gradient(circle_farthest-side_at_100%_100%,white,transparent),radial-gradient(circle_farthest-side_at_0_0,#46bb7f,white)]',
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? '400% 400%' : undefined,
        }}
        className={cn(
          'absolute inset-0 z-[1] rounded-lg will-change-transform',
          'dark:bg-[radial-gradient(circle_farthest-side_at_0_100%,black,transparent),radial-gradient(circle_farthest-side_at_100%_0,#46bb7f,transparent),radial-gradient(circle_farthest-side_at_100%_100%,black,transparent),radial-gradient(circle_farthest-side_at_0_0,#46bb7f,black)]',
          'bg-[radial-gradient(circle_farthest-side_at_0_100%,white,transparent),radial-gradient(circle_farthest-side_at_100%_0,#46bb7f,transparent),radial-gradient(circle_farthest-side_at_100%_100%,white,transparent),radial-gradient(circle_farthest-side_at_0_0,#46bb7f,white)]',
        )}
      />
      <div className={cn('relative z-10 h-full', className)}>{children}</div>
    </div>
  );
};
