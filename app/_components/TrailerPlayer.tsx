'use client';

import { useState, useEffect } from 'react';

interface TrailerPlayerProps {
  url: string;
}

export default function TrailerPlayer({ url }: TrailerPlayerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      setProgress(100);
      return;
    }

    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 90) {
          clearInterval(interval);
          return oldProgress;
        }
        return oldProgress + 5;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [isLoading]);

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  if (!url) {
    return (
      <div className="flex items-center justify-center aspect-video rounded-lg bg-gray-800 text-gray-400">
        لینک تریلر موجود نیست.
      </div>
    );
  }

  return (
    <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-800 shadow-lg ring-1 ring-white/10">
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <svg
            className="w-24 h-24"
            viewBox="0 0 100 100"
          >
            <circle
              className="text-gray-700"
              strokeWidth="8"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="50"
              cy="50"
            />
            <circle
              className="text-red-500"
              strokeWidth="8"
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="50"
              cy="50"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{ transition: 'stroke-dashoffset 0.3s ease' }}
            />
          </svg>
        </div>
      )}

      <iframe
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        src={url}
        title="تریلر فیلم"
        onLoad={() => setIsLoading(false)}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
