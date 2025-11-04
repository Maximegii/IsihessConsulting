"use client";

import React from "react";

export default function ReservationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#D9C9B4]">
      
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Réservation
        </h1>
        
        <div className="w-full max-w-4xl bg-white/80 rounded-2xl shadow-lg overflow-hidden">
          <iframe
            src="https://calendar.app.google/FFjFUdWVsz7BbS1G9"
            style={{ border: 0 }}
            width="100%"
            height="700"
            frameBorder="0"
            loading="lazy"
          ></iframe>
        </div>
      </main>
    </div>
  );
}
