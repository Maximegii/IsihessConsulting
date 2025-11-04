import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Header from "../components/header";
import Footer from "../components/footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ultimate Melik | Synego",
  description: "Révélez votre potentiel, cultivez votre bien-être.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={outfit.variable}>
      <body
        className="min-h-screen flex flex-col font-[var(--font-outfit)] bg-[var(--color-bg)] text-[var(--color-text)]"
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
