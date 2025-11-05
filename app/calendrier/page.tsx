"use client";

import React from "react";

export default function ReservationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#D9C9B4]">
      <main className="flex-grow flex flex-col items-center justify-center p-8 space-y-10">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Réservation
        </h1>

        <div
          className="w-full max-w-4xl rounded-2xl shadow-lg overflow-hidden flex justify-center"
          style={{ backgroundColor: "#f1f4f8" }}
        >
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FParis&showPrint=0&mode=WEEK&showTabs=0&src=cmVuZGV6dm91cy5zeW5lZ29AZ21haWwuY29t&color=%23039be5"
            style={{ borderWidth: 0 }}
            width="800"
            height="600"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>

        <div
          className="w-full max-w-4xl rounded-2xl shadow-lg overflow-hidden flex flex-col items-center space-y-4 p-6"
          style={{ backgroundColor: "#f1f4f8" }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Localisation du cabinet
          </h2>
          <p className="text-gray-700 text-center">
            10 Allée des Champs Élysées, 91042 Évry-Courcouronnes
          </p>
          <iframe
            src="https://www.google.com/maps?q=10+Allée+des+Champs+Élysées,+91042+Évry-Courcouronnes&output=embed"
            width="800"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>
    </div>
  );
}
