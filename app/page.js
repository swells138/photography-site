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
              <Image src={'https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-38b4-61f7-abb6-1ddc14bef79c/raw?se=2025-07-23T23%3A14%3A12Z&sp=r&sv=2024-08-04&sr=b&scid=4ad68d55-175e-551d-a8b7-26f6c0715201&skoid=c953efd6-2ae8-41b4-a6d6-34b1475ac07c&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-23T22%3A13%3A50Z&ske=2025-07-24T22%3A13%3A50Z&sks=b&skv=2024-08-04&sig=mrurxtUC2Bd/9zyoORzWoGrA1cxj6ocKO2hF9AoFhns%3D'} alt="Work 1" fill className="object-cover" />
            </div>
            <div key={'2'} className="relative aspect-square overflow-hidden rounded-lg shadow-md">
              <Image src={'https://sdmntprwestus2.oaiusercontent.com/files/00000000-f3f4-61f8-b475-c43981b62696/raw?se=2025-07-23T23%3A53%3A11Z&sp=r&sv=2024-08-04&sr=b&scid=959ef826-0965-576c-ba78-786ae65e31de&skoid=732f244e-db13-47c3-bcc7-7ee02a9397bc&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-23T19%3A46%3A41Z&ske=2025-07-24T19%3A46%3A41Z&sks=b&skv=2024-08-04&sig=uBgegE7hV9o473VyWlEjHQ%2BjRM7pk2c4/76r%2BCWsn3g%3D'} alt={`Work ${2 + 1}`} fill className="object-cover" />
            </div>
            <div key={'3'} className="relative aspect-square overflow-hidden rounded-lg shadow-md">
              <Image src={'https://sdmntprwestus2.oaiusercontent.com/files/00000000-d820-61f8-a55b-a179457da056/raw?se=2025-07-23T23%3A56%3A20Z&sp=r&sv=2024-08-04&sr=b&scid=eeb581b5-aea3-5c9e-aae5-6e00324dc231&skoid=732f244e-db13-47c3-bcc7-7ee02a9397bc&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-23T19%3A46%3A50Z&ske=2025-07-24T19%3A46%3A50Z&sks=b&skv=2024-08-04&sig=iMraqSLPnles7%2Bgt393Br9%2Bmiu2yO8iguAikBf4JVLE%3D'} alt={`Work ${3 + 1}`} fill className="object-cover" />
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
