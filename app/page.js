// src/app/page.js
import Image from "next/image";
import Link from "next/link";
import ReviewSection from "./components/ReviewSection";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-700 shadow-sm">
        <h1 className="text-2xl font-bold">PixelCraft Studio</h1>
        <nav className="space-x-4">
          <Link href="#portfolio" className="hover:underline">Portfolio</Link>
          <Link href="#reviews" className="hover:underline">Reviews</Link>
          <Link href="#services" className="hover:underline">Services</Link>
          <Link href="#about" className="hover:underline">About</Link>
          <Link href="#contact" className="hover:underline">Contact</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-20 bg-gray-800">
        <h2 className="text-4xl font-bold mb-4">Capture the Moment, Design the Future</h2>
        <p className="text-gray-300">Photography & Graphic Design by Sydney Wells</p>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold mb-8">Featured Work</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
       
            <div key={'1'} className="relative aspect-square overflow-hidden rounded-lg shadow-md">
              <Image src={'/images/camera.png'} alt="Work 1" fill className="object-cover" />
            </div>
            <div key={'2'} className="relative aspect-square overflow-hidden rounded-lg shadow-md">
              <Image src={'/images/laptop.png'} alt={`Work ${2 + 1}`} fill className="object-cover" />
            </div>
            <div key={'3'} className="relative aspect-square overflow-hidden rounded-lg shadow-md">
              <Image src={'/images/tripod.png'} alt={`Work ${3 + 1}`} fill className="object-cover" />
            </div>
         
        </div>
      </section>

      {/* Reviews */}
      <ReviewSection />

      {/* Services */}
      <ServicesSection />

      {/* About */}
      <section id="about" className="py-16 px-6 bg-gray-800 text-center">
        <h3 className="text-3xl font-semibold mb-4">About Me</h3>
        <p className="text-gray-300 mb-4">
          I&apos;m Sydney, a photographer and graphic designer with a passion for capturing
          life&apos;s most meaningful moments. Over the past few years I&apos;ve worked on
          everything from weddings to pet portraits, building a portfolio that
          reflects both technical skill and creativity.
        </p>
        <p className="text-gray-300">
          Friends describe me as upbeat and detail oriented&mdash;qualities that help me
          connect with clients and deliver photos that feel authentic and fun.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-gray-800 text-center">
        <h3 className="text-3xl font-semibold mb-4">Let’s Work Together</h3>
        <p className="text-gray-300 mb-6">Got a project? Hit me up!</p>
        <Link href="mailto:hello@example.com" className="inline-block px-6 py-3 bg-white text-black rounded hover:bg-gray-200 transition">
          Contact Me
        </Link>
      </section>

      <footer className="py-6 text-center text-gray-400 text-sm border-t border-gray-700">
        &copy; {new Date().getFullYear()} PixelCraft Studio. All rights reserved.
      </footer>
    </main>
  );
}
