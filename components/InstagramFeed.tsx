'use client';

import { useEffect } from 'react';

export default function InstagramFeed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full flex justify-center items-center">
      <div
        className="elfsight-app-46f7021a-ea7a-4b8b-8984-e5cdba000abd"
        data-elfsight-app-lazy
      />
    </div>
  );
}