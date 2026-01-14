"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Honeymoon Trip",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    rating: 5,
    text: "Our honeymoon to the Maldives was absolutely perfect. Every detail was taken care of, from the private sunset dinner on the beach to the spa treatments. ExplorAhead made our dream come true!",
    destination: "Maldives",
  },
  {
    id: 2,
    name: "James & Emily Cooper",
    role: "Family Vacation",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    rating: 5,
    text: "Traveling with three kids seemed daunting, but the team made it seamless. The itinerary was perfectly balanced between adventure and relaxation. Can't wait to book our next trip!",
    destination: "Costa Rica",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Solo Adventure",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    rating: 5,
    text: "As a solo traveler, safety and unique experiences were my priorities. The AI assistant helped me discover hidden gems in Japan that I would have never found on my own. Truly exceptional service!",
    destination: "Japan",
  },
  {
    id: 4,
    name: "Alexandra Petrova",
    role: "Luxury Getaway",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    rating: 5,
    text: "The attention to detail was impeccable. From the private villa in Santorini to the yacht excursion, every moment felt like a scene from a movie. Worth every penny!",
    destination: "Greece",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section bg-ocean overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-tiny text-gold font-semibold mb-2 block">
            Testimonials
          </span>
          <h2 className="text-white mb-4">
            Stories From Our Travelers
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 -left-4 md:-left-8 opacity-20">
              <Quote size={80} className="text-gold" />
            </div>

            {/* Testimonial Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-ocean-light/50 backdrop-blur-sm rounded-3xl p-8 md:p-12"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-gold fill-gold" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-white/90 text-xl md:text-2xl leading-relaxed mb-8 font-light italic">
                  &ldquo;{currentTestimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gold"
                  />
                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-white/60">
                      {currentTestimonial.role} • {currentTestimonial.destination}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-3 rounded-full bg-white/10 hover:bg-gold hover:text-ocean text-white transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-8 bg-gold"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full bg-white/10 hover:bg-gold hover:text-ocean text-white transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;

