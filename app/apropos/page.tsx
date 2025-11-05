"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";


import youceftahri from "@/public/youceftahri.jpg";
import diploma1 from "@/public/diploma1.jpg";
import diploma2 from "@/public/diploma2.jpg";
import diploma3 from "@/public/diploma3.jpg";
import diploma4 from "@/public/diploma4.jpg";
import cabinet1 from "@/public/cabinet1.jpg";
import cabinet2 from "@/public/cabinet2.jpg";
import vibe1 from "@/public/vibe1.jpg";
import vibe2 from "@/public/vibe2.jpg";

export default function AproposPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#D9C9B4]">
      <main className="flex-grow flex flex-col items-center justify-center p-8 space-y-20">
       
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-semibold text-gray-800 text-center italic"
        >
          “Chez Synego, révélez votre potentiel, cultivez votre bien-être.”
        </motion.h1>

       
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col lg:flex-row items-center justify-center gap-10 bg-[#f1f4f8] rounded-2xl shadow-xl p-10 max-w-6xl w-full"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex-shrink-0"
          >
            <Image
              src={youceftahri}
              alt="Youcef Tahri, thérapeute Synego"
              width={350}
              height={350}
              className="rounded-2xl shadow-md object-cover"
            />
          </motion.div>

          <div className="flex flex-col space-y-6 text-gray-800 max-w-xl">
            <h2 className="text-2xl font-bold">Ultimate Melik, thérapeute</h2>
            <p className="text-lg leading-relaxed">
              <strong>Et si votre transformation commençait aujourd'hui ?</strong><br /><br />  
              Chez <span className="font-semibold">Synego</span>, chaque séance est une invitation à révéler votre plein potentiel.  
            </p>
            <p className="text-base leading-relaxed">
              Mon approche repose sur une compréhension profonde — parfois au-delà des mots — et une adaptabilité constante.  
              Bienveillance, écoute et pertinence guident chaque séance, afin de répondre à votre singularité.  
              Grâce à une pratique polyvalente et à une palette de thérapies complémentaires, je vous accompagne avec magnanimité vers un mieux-être durable.
            </p>
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
        </motion.section>

      
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl w-full text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">
            Mes certifications et diplômes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {[diploma1, diploma2, diploma3, diploma4].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="rounded-xl overflow-hidden bg-white shadow-md"
              >
                <Image
                  src={img}
                  alt={`Diplôme ${index + 1}`}
                  width={250}
                  height={180}
                  className="object-cover w-full h-48"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

       
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl w-full text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">
            Découvrez le cabinet Synego
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {[cabinet1, cabinet2].map((img, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={img}
                  alt={`Cabinet ${index + 1}`}
                  width={500}
                  height={350}
                  className="object-cover w-full h-72"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

      
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl w-full text-center pb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">
            L’univers Synego — Inspiration & développement personnel
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
            {[vibe1, vibe2].map((img, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={img}
                  alt={`Ambiance ${index + 1}`}
                  width={500}
                  height={350}
                  className="object-cover w-full h-72"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
