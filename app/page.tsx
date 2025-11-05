"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-[#F2E8DC] text-[#0A1D35] font-[var(--font-outfit)] overflow-x-hidden">


      {/* HERO SECTION */}
      <section className="bg-[#D9C9B4] text-center py-20 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-[#0A1D35] mb-6 leading-tight"
        >
          Être soi, c’est non négociable.
        </motion.h2>
        <p className="text-lg md:text-xl text-[#0A1D35]/80 max-w-2xl mx-auto mb-8">
          Coaching individuel et collectif pour libérer votre potentiel, renforcer votre leadership et retrouver un équilibre durable.
        </p>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            href="/contact"
            className="inline-block bg-[#0A1D35] text-[#F2E8DC] px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#112a4f] transition"
          >
            Prendre rendez-vous
          </Link>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="bg-[#D0E7F5] py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/accompagnement.jpg"
              alt="Portrait de Melik"
              width={500}
              height={500}
              className="rounded-2xl shadow-lg object-cover w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-3xl font-bold mb-4">Je suis là pour vous accompagner</h3>
            <p className="text-lg text-[#0A1D35]/80 leading-relaxed">
              Mon parcours, enrichi par des années de pratique et une formation continue, me permet de proposer des solutions adaptées à vos besoins spécifiques, qu’il s’agisse de surmonter des difficultés émotionnelles, de gérer des périodes de crise ou de travailler sur votre développement personnel. Dans un cadre confidentiel et respectueux, je m’engage à vous offrir un espace où vous pourrez explorer vos pensées et émotions en toute sécurité, avec pour objectif de retrouver équilibre et sérénité.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="bg-[#F2E8DC] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Mes accompagnements</h3>
          <p className="text-[#0A1D35]/70 max-w-2xl mx-auto">
            Que ce soit en entreprise ou à titre personnel, découvrez les axes d’accompagnement que je propose pour favoriser la croissance, la sérénité et la performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Gestion du stress",
              image: "/stress.png",
              text: "Apprenez à réguler vos émotions et à retrouver votre calme intérieur face aux défis quotidiens.",
            },
            {
              title: "Leadership conscient",
              image: "/leadership.png",
              text: "Développez un leadership inspirant, bienveillant et aligné avec vos valeurs profondes.",
            },
            {
              title: "Prévention du burn-out",
              image: "/burnout.png",
              text: "Identifiez les signaux d’alerte et construisez des stratégies concrètes pour préserver votre énergie.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#D9C9B4] rounded-2xl shadow-md hover:shadow-xl transition-all p-6 flex flex-col items-center text-center"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={350}
                height={250}
                className="rounded-xl mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-[#0A1D35]/80">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <footer
        id="contact"
        className="bg-[#0A1D35] text-[#F2E8DC] text-center py-16 px-4"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold mb-4"
        >
          Prêt·e à franchir le pas ?
        </motion.h3>
        <p className="text-[#D0E7F5] mb-6">
          Contactez-moi pour planifier un premier échange ou une séance découverte.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#F2E8DC] text-[#0A1D35] px-6 py-3 rounded-full font-semibold hover:bg-[#D9C9B4] transition"
        >
          Me contacter
        </Link>
      </footer>
    </main>
  );
}
