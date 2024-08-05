import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Page/Landing/Navbar";
import Footer from "@/components/Page/Landing/Footer";
import 'bootstrap/dist/css/bootstrap.css';
import 'boxicons/css/boxicons.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import "@/styles/landing.css";

export const metadata: Metadata = {
  title: "landing page",
  description: "Page de découverte avant l'inscription de l'utilisateur",
};

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Navbar />
        <div>{children}</div>
        <Footer />
    </>
  );
}
