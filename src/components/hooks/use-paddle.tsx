'use client';
import { initializePaddle, InitializePaddleOptions, Paddle, PaddleEventData } from '@paddle/paddle-js';
import { useEffect, useState } from 'react';
import { mutate } from 'swr';

export default function usePaddle(setDisableCheckout: (disable: boolean) => void) {
  const [paddle, setPaddle] = useState<Paddle>();

  useEffect(() => {
    initializePaddle({
      environment: process.env.NEXT_PUBLIC_PADDLE_ENV,
      token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN,
      eventCallback: (event: PaddleEventData) => {
        if (event.name === 'checkout.completed') {
          setDisableCheckout(true);
        }

        if (event.name === 'checkout.closed') {
          mutate((key) => typeof key === 'string' && key.startsWith('/auth/session/validate'));
        }
      },
    } as unknown as InitializePaddleOptions).then((paddleInstance: Paddle | undefined) => {
      if (paddleInstance) {
        setPaddle(paddleInstance);
      }
    });
  }, [setDisableCheckout]);

  return paddle;
}
