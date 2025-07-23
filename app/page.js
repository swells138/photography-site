// src/app/page.js
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b shadow-sm">
        <h1 className="text-2xl font-bold">PixelCraft Studio</h1>
        <nav className="space-x-4">
          <Link href="#portfolio" className="hover:underline">Portfolio</Link>
          <Link href="#services" className="hover:underline">Services</Link>
          <Link href="#about" className="hover:underline">About</Link>
          <Link href="#contact" className="hover:underline">Contact</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-20 bg-gray-100">
        <h2 className="text-4xl font-bold mb-4">Capture the Moment, Design the Future</h2>
        <p className="text-gray-600">Photography & Graphic Design by Sydney Wells</p>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold mb-8">Featured Work</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-38b4-61f7-abb6-1ddc14bef79c/raw?se=2025-07-23T23%3A14%3A12Z&sp=r&sv=2024-08-04&sr=b&scid=4ad68d55-175e-551d-a8b7-26f6c0715201&skoid=c953efd6-2ae8-41b4-a6d6-34b1475ac07c&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-23T22%3A13%3A50Z&ske=2025-07-24T22%3A13%3A50Z&sks=b&skv=2024-08-04&sig=mrurxtUC2Bd/9zyoORzWoGrA1cxj6ocKO2hF9AoFhns%3D", 
          "https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-d114-61f7-97f5-20efaa88f04c/raw?se=2025-07-23T22%3A28%3A52Z&sp=r&sv=2024-08-04&sr=b&scid=93e34f05-a3c4-5548-9a09-fed305707854&skoid=c953efd6-2ae8-41b4-a6d6-34b1475ac07c&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-23T19%3A52%3A03Z&ske=2025-07-24T19%3A52%3A03Z&sks=b&skv=2024-08-04&sig=WYih1uATnWqwftevXmx8uUXwVQfseMRv7YlrxjEej2U%3D", 
          "https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-b8b0-622f-888a-3b6d4b3a4a70/raw?se=2025-07-23T22%3A25%3A42Z&sp=r&sv=2024-08-04&sr=b&scid=fd914222-bd7c-5457-81d4-a3758749d82d&skoid=c953efd6-2ae8-41b4-a6d6-34b1475ac07c&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-23T19%3A50%3A45Z&ske=2025-07-24T19%3A50%3A45Z&sks=b&skv=2024-08-04&sig=%2BVboUOQFYZWrLRVrEywYcwrl0doYBXgZAtTL%2BVjKgDo%3D"].map((src, idx) => (
            <div key={idx} className="relative aspect-square overflow-hidden rounded-lg shadow-md">
              <Image src={src} alt={`Work ${idx + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-gray-100 text-center">
        <h3 className="text-3xl font-semibold mb-4">Let’s Work Together</h3>
        <p className="text-gray-600 mb-6">Got a project? Hit me up!</p>
        <Link href="mailto:hello@example.com" className="inline-block px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition">
          Contact Me
        </Link>
      </section>

      <footer className="py-6 text-center text-gray-500 text-sm border-t">
        &copy; {new Date().getFullYear()} PixelCraft Studio. All rights reserved.
      </footer>
    </main>
  );
}
