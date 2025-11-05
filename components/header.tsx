"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-[var(--color-text)] text-[var(--color-bg-light)] shadow-md"
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Synego
        </Link>

        <ul className="flex gap-6 text-[var(--color-accent)] font-medium">
          <li>
            <Link href="/services" className="hover:text-[var(--color-bg-light)] transition">
              Services
            </Link>
          </li>
          <li>
            <Link href="/calendrier" className="hover:text-[var(--color-bg-light)] transition">
              Rendez-vous
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-[var(--color-bg-light)] transition">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/insta-Account" className="hover:text-[var(--color-bg-light)] transition">
              Instagram
            </Link>
          </li>
          <li>
            <Link href="/entreprise" className="hover:text-[var(--color-bg-light)] transition">
              Entreprise
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-[var(--color-bg-light)] transition">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
