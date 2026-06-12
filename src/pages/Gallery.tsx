import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/Layout";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const projectPhotos = [
  {
    src: "/images/Van Ess Farm upgrader 20230715.jpg",
    alt: "RNG Upgrader Facility",
    caption: "RNG Upgrader — Van Ess Farm",
    category: "RNG & Anaerobic Digestion",
  },
  {
    src: "/images/Van Ess Farm 20230715.jpg",
    alt: "RNG Facility with Wind Turbines",
    caption: "RNG Facility — Van Ess Farm",
    category: "RNG & Anaerobic Digestion",
  },
  {
    src: "/images/Roorda farm 20230715.jpg",
    alt: "Aerial View of Anaerobic Digester",
    caption: "Anaerobic Digester — Roorda Farm",
    category: "RNG & Anaerobic Digestion",
  },
  {
    src: "/images/Black Soil Farm 20230715.jpg",
    alt: "Black Soil Farm Project",
    caption: "RNG Project — Black Soil Farm",
    category: "RNG & Anaerobic Digestion",
  },
  {
    src: "/images/Kirkman Farm 20230715.jpg",
    alt: "Kirkman Farm RNG Project",
    caption: "RNG Project — Kirkman Farm",
    category: "RNG & Anaerobic Digestion",
  },
  {
    src: "/images/dual belt dryer.jpg",
    alt: "Dual Belt Dryer System",
    caption: "Dual Belt Dryer System",
    category: "Wood Pellet",
  },
  {
    src: "/images/enviva.jpg",
    alt: "Enviva Wood Pellet Facility",
    caption: "Wood Pellet Facility — Enviva",
    category: "Wood Pellet",
  },
  {
    src: "/images/enviva 2.jpg",
    alt: "Enviva Conveyor & Storage System",
    caption: "Conveyor & Storage — Enviva",
    category: "Wood Pellet",
  },
  {
    src: "/images/overland.jpg",
    alt: "Overland Conveyor System",
    caption: "Overland Conveyor Infrastructure",
    category: "Wood Pellet",
  },
  {
    src: "/images/posco.jpeg",
    alt: "POSCO Industrial Project",
    caption: "Industrial Project — POSCO",
    category: "Heavy Industrial",
  },
  {
    src: "/images/Port.jpeg",
    alt: "Port Infrastructure Project",
    caption: "Port Infrastructure",
    category: "Heavy Industrial",
  },
  {
    src: "/images/power.jpg",
    alt: "Power Facility Project",
    caption: "Power Facility",
    category: "Heavy Industrial",
  },
  {
    src: "/images/P6240057.jpg",
    alt: "Industrial Project Site",
    caption: "Industrial Project Site",
    category: "Heavy Industrial",
  },
  {
    src: "/images/Papas.jpg",
    alt: "Industrial Facility",
    caption: "Industrial Facility",
    category: "Heavy Industrial",
  },
  {
    src: "/images/005.jpg",
    alt: "Project Site",
    caption: "Project Site",
    category: "Heavy Industrial",
  },
  {
    src: "/images/IMGP5532.jpg",
    alt: "Industrial Project",
    caption: "Industrial Project",
    category: "Heavy Industrial",
  },
  {
    src: "/images/IMGP5106 (DESKTOP-IC1G6H9's conflicted copy 2018-01-07).jpg",
    alt: "Project Site",
    caption: "Project Site",
    category: "Heavy Industrial",
  },
  {
    src: "/images/20190814_132136.jpg",
    alt: "Industrial Facility Construction",
    caption: "Industrial Facility Construction",
    category: "Heavy Industrial",
  },
];

const categories = ["All", "RNG & Anaerobic Digestion", "Wood Pellet", "Heavy Industrial"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? projectPhotos
    : projectPhotos.filter((p) => p.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  };

  const nextPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative bg-foreground py-24 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-background mb-6">
                Project Gallery
              </h1>
              <p className="text-xl md:text-2xl text-background/80 font-mono">
                Real projects. Real facilities. Delivered.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-10 border-b border-border bg-background sticky top-0 z-10">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3"
            >
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  variants={staggerItem}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-muted-foreground border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Photo Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {filtered.map((photo, index) => (
                <motion.div
                  key={photo.src}
                  variants={staggerItem}
                  className="group relative overflow-hidden rounded-lg cursor-pointer bg-muted aspect-[4/3]"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-300 flex items-end p-4">
                    <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-xs font-mono text-primary uppercase tracking-widest">
                        {photo.category}
                      </span>
                      <p className="text-background font-semibold text-sm mt-1">
                        {photo.caption}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted/30 border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your Project Could Be Next
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Every photo represents a real facility delivered safely and on schedule. Let's talk about yours.
              </p>
              <a
                href="#/appointments"
                className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-md hover:bg-primary/90 transition-colors text-lg"
              >
                Schedule a Free Consultation →
              </a>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white z-50 p-2"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white z-50 p-2"
              onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="max-w-5xl max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                className="max-h-[75vh] max-w-full object-contain rounded-lg"
              />
              <div className="mt-4 text-center">
                <span className="text-xs font-mono text-primary uppercase tracking-widest">
                  {filtered[lightboxIndex].category}
                </span>
                <p className="text-white font-semibold mt-1">
                  {filtered[lightboxIndex].caption}
                </p>
                <p className="text-white/50 text-sm mt-1">
                  {lightboxIndex + 1} / {filtered.length}
                </p>
              </div>
            </motion.div>

            {/* Next */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white z-50 p-2"
              onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
