import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

export default function LoadingDots({ className = '', dot = '•', duration = 300 }) {
  const [dots, setDots] = useState(dot);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length >= 3 ? dot : prevDots + dot));
    }, duration);

    return () => clearInterval(interval);
  }, []);

  return <div className={cn('shrink-0 px-0.5', className)}>{dots}</div>;
}
