// components/Loading.js
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingProps {
    onLoadingComplete: () => void; // Explicitly define the type of onLoadingComplete
  }

const Loading = ({ onLoadingComplete }: LoadingProps) => {
  const [progress, setProgress] = useState(0);

  // Simulate page loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onLoadingComplete(); // Trigger the completion callback
          return 100;
        }
        return prev + 10; // Increment progress by 10% every 200ms
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  // Map progress to rotation and scale
  const rotate = useTransform(() => `${progress * 3.6}deg`); // 360deg at 100%
  const scale = useTransform(() => 1 + progress / 100); // Scale up to 2x at 100%

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <motion.img
        src="/logo.png"
        alt="Loading Logo"
        className="w-24 h-24"
        style={{ rotate, scale }}
      />
    </div>
  );
};

export default Loading;