import Image from "next/image";
import Link from "next/link";
import ReviewSection from "./components/ReviewSection";
import ServicesSection from "./components/ServicesSection";

const work = [
  { src: "/images/camera.png", alt: "Mirrorless camera close-up", title: "Studio Product Shot" },
  { src: "/images/laptop.png", alt: "Editing landscape photo on laptop", title: "Landscape Edit Session" },
  { src: "/images/tripod.png", alt: "Camera on tripod outdoors", title: "On-Location Setup" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 font-sans scroll-smooth">
      {/* Skip link for accessibility */}
      <a
        href="#portfolio"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 z-50 rounded bg-white px-3 py-2 text-black"
      >
        Skip to portfolio
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-gray-900/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-indigo-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              PixelCraft Studio
            </span>
          </Link>
          <nav className="hidden gap-6 sm:flex">
            <Link href="#portfolio" className="text-gray-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">Portfolio</Link>
            <Link href="#reviews" className="text-gray-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">Reviews</Link>
            <Link href="#services" className="text-gray-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">Services</Link>
            <Link href="#about" className="text-gray-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">About</Link>
            <Link href="#contact" className="text-gray-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(99,102,241,0.25),transparent)]" />
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Capture the Moment, <span className="text-sky-300">Design the Future</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Photography &amp; Graphic Design by Sydney Wells
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="#portfolio"
              className="rounded-lg bg-white px-6 py-3 font-medium text-black shadow hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              View Portfolio
            </Link>
            <Link
              href="#contact"
              className="rounded-lg px-6 py-3 font-medium text-gray-200 ring-1 ring-white/20 hover:text-white hover:ring-sky-400/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="mx-auto max-w-6xl px-6 py-16">
        <h3 className="text-3xl font-semibold tracking-tight">Featured Work</h3>
        <p className="mt-2 text-gray-300/80">
          A mix of product, lifestyle, and post-production work.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {work.map((w, i) => (
            <figure
              key={w.src}
              className="group relative overflow-hidden rounded-xl ring-1 ring-white/10 shadow-md transition hover:scale-[1.01] hover:ring-sky-400/40 focus-within:ring-sky-400/60"
            >
              <div className="relative aspect-square">
                <Image
                  src={w.src}
                  alt={w.alt}
                  fill
                  priority={i === 0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition will-change-transform group-hover:scale-[1.02]"
                />
              </div>
              <figcaption className="flex items-center justify-between px-4 py-3">
                <span className="text-sm text-gray-200">{w.title}</span>
                <Link
                  href="#contact"
                  className="rounded-md bg-sky-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                >
                  Work with me
                </Link>
              </figcaption>

              {/* hover overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 transition group-hover:opacity-100" />
            </figure>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-gray-800/60">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h3 className="text-3xl font-semibold tracking-tight">Reviews</h3>
          <p className="mt-2 text-gray-300/80">What clients say about working together.</p>
          <div className="mt-8">
            <ReviewSection />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-16">
        <h3 className="text-3xl font-semibold tracking-tight">Services</h3>
        <p className="mt-2 text-gray-300/80">Flexible packages for shoots and design projects.</p>
        <div className="mt-8">
          <ServicesSection />
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-semibold tracking-tight">About Me</h3>
            <p className="mt-4 text-gray-300">
              I&apos;m Sydney, a photographer and graphic designer with a passion for capturing
              life&apos;s most meaningful moments. Over the past few years I&apos;ve worked on
              everything from weddings to pet portraits, building a portfolio that reflects both
              technical skill and creativity.
            </p>
            <p className="mt-3 text-gray-300">
              Friends describe me as upbeat and detail-oriented—qualities that help me connect with
              clients and deliver photos that feel authentic and fun.
            </p>
            <div className="mt-6">
              <Link
                href="#contact"
                className="inline-block rounded-lg bg-sky-500 px-5 py-3 font-medium text-white hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
              >
                Book a Session
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10">
              {/* Swap to a portrait/studio shot if you have one */}
              <Image
                src="/images/laptop.png"
                alt="Sydney editing photos at the studio desk"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-800">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h3 className="text-3xl font-semibold tracking-tight">Let’s Work Together</h3>
          <p className="mt-2 text-gray-300">Got a project? Hit me up!</p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="mailto:hello@example.com"
              className="rounded-lg bg-white px-6 py-3 font-medium text-black hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              Contact Me
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-6 py-3 font-medium text-gray-200 ring-1 ring-white/20 hover:text-white hover:ring-sky-400/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              Instagram
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} PixelCraft Studio. All rights reserved.
      </footer>
    </main>
  );
}
