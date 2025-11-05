"use client";

import React from "react";
import Image from "next/image";
import youceftahri from "@/public/youceftahri.jpg";

export default function PresentationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#D9C9B4]">
      <main className="flex-grow flex flex-col items-center justify-center p-8 space-y-12">
        {/* Slogan */}
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center italic">
          “Chez Synego, révélez votre potentiel, cultivez votre bien-être.”
        </h1>

        {/* Section de présentation */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 bg-[#f1f4f8] rounded-2xl shadow-lg p-10 max-w-6xl w-full">
          {/* Photo */}
          <div className="flex-shrink-0">
            <Image
              src={youceftahri}
              alt="Youcef Tahri, thérapeute Synego"
              width={350}
              height={350}
              className="rounded-2xl shadow-md object-cover"
            />
          </div>

          {/* Texte */}
          <div className="flex flex-col space-y-6 text-gray-800">
            <h2 className="text-2xl font-bold">Ultimate Melik, thérapeute</h2>
            <p className="text-lg leading-relaxed">
              <strong>Et si votre transformation commençait aujourd'hui ?</strong>  
              Chez <span className="font-semibold">Synego</span>, chaque séance est une invitation à révéler votre plein potentiel.  
              Diplômé et passionné, je puise dans la richesse de l’acupuncture, du shiatsu, des ventouses et de l’hypnothérapie pour créer un parcours sur-mesure.  
              Ensemble, construisons votre meilleure version.
            </p>

            <p className="text-base leading-relaxed">
              Mon approche repose sur une compréhension profonde — parfois au-delà des mots — et une adaptabilité constante.  
              Bienveillance, écoute et pertinence guident chaque séance, afin de répondre à votre singularité.  
              Grâce à une pratique polyvalente et à une palette de thérapies complémentaires, je vous accompagne avec magnanimité vers un mieux-être durable.
            </p>

            {/* Diplômes */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Certifications</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Certification MBTI® (Myers-Briggs Type Indicator)</li>
                <li>Formation en Acupuncture Traditionnelle</li>
                <li>Praticien Shiatsu et Ventouses Thérapeutiques</li>
                <li>Hypnothérapeute certifié</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
