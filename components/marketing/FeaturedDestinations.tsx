"use client";

import { Button } from "@/components/ui/Button";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const destinations = [
  {
    id: 1,
    name: "Santorini",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=1935&auto=format&fit=crop",
    price: "From $2,499",
    tag: "Romantic",
  },
  {
    id: 2,
    name: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1938&auto=format&fit=crop",
    price: "From $1,899",
    tag: "Adventure",
  },
  {
    id: 3,
    name: "Maldives",
    country: "South Asia",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1965&auto=format&fit=crop",
    price: "From $3,299",
    tag: "Luxury",
  },
  {
    id: 4,
    name: "Kyoto",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop",
    price: "From $2,199",
    tag: "Cultural",
  },
  {
    id: 5,
    name: "Amalfi Coast",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?q=80&w=2070&auto=format&fit=crop",
    price: "From $2,799",
    tag: "Scenic",
  },
  {
    id: 6,
    name: "Marrakech",
    country: "Morocco",
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=1974&auto=format&fit=crop",
    price: "From $1,599",
    tag: "Exotic",
  },
];

export function FeaturedDestinations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 400;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section ref={sectionRef} className="section bg-sand-light overflow-hidden">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="text-tiny text-gold font-semibold mb-2 block">
              Featured Destinations
            </span>
            <h2 className="text-ocean mb-4">
              Explore Our Top Picks
            </h2>
            <p className="text-gray-dark max-w-xl">
              Hand-selected destinations that promise unforgettable experiences.
              From tropical paradises to cultural treasures.
            </p>
          </div>
          <div className="flex gap-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-ocean hover:text-white transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-ocean hover:text-white transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>

        {/* Destinations Carousel */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory -mx-4 px-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex-shrink-0 w-[320px] md:w-[380px] snap-start"
            >
              <Link href={`/destinations/${destination.id}`} className="group block">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean/80 via-ocean/20 to-transparent" />
                  
                  {/* Tag */}
                  <div className="absolute top-6 left-6">
                    <span className="px-6 py-2.5 bg-gold text-ocean-dark text-sm font-medium rounded-full">
                      {destination.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-6 right-2 pl-8 pr-6 pb-10 pt-6">
                    <p className="text-white/70 text-sm mb-1">{destination.country}</p>
                    <h3 className="text-white text-2xl font-heading mb-2">
                      {destination.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="px-5 py-2.5 bg-gold/20 text-gold font-semibold rounded-full text-sm">{destination.price}</span>
                      <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-gold group-hover:text-ocean transition-all">
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10"
        >
          <Link href="/destinations">
            <Button variant="outline" rightIcon={<ArrowRight size={18} />}>
              View All Destinations
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturedDestinations;

