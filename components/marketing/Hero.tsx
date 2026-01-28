"use client";

import { Button } from "@/components/ui/Button";
import { isFeatureEnabled } from "@/config/features";
import { media } from "@/config/media";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

// Pre-defined particle positions for deterministic rendering
const particlePositions = [
  { left: 12, top: 23, duration: 3.5, delay: 0.2 },
  { left: 45, top: 67, duration: 4.2, delay: 1.1 },
  { left: 78, top: 34, duration: 3.8, delay: 0.5 },
  { left: 23, top: 89, duration: 4.5, delay: 1.8 },
  { left: 56, top: 12, duration: 3.2, delay: 0.8 },
  { left: 89, top: 56, duration: 4.0, delay: 1.5 },
  { left: 34, top: 45, duration: 3.6, delay: 0.3 },
  { left: 67, top: 78, duration: 4.3, delay: 1.2 },
  { left: 8, top: 54, duration: 3.9, delay: 0.7 },
  { left: 91, top: 21, duration: 4.1, delay: 1.9 },
  { left: 43, top: 32, duration: 3.4, delay: 0.4 },
  { left: 76, top: 65, duration: 4.4, delay: 1.4 },
  { left: 19, top: 87, duration: 3.7, delay: 0.9 },
  { left: 52, top: 43, duration: 4.6, delay: 1.6 },
  { left: 85, top: 8, duration: 3.3, delay: 0.1 },
  { left: 28, top: 76, duration: 4.7, delay: 1.7 },
  { left: 61, top: 29, duration: 3.1, delay: 0.6 },
  { left: 94, top: 62, duration: 4.8, delay: 1.3 },
  { left: 37, top: 91, duration: 3.0, delay: 1.0 },
  { left: 70, top: 15, duration: 4.9, delay: 0.0 },
];

export function Hero() {
  const t = useTranslations("hero");
  const tCommon = useTranslations("common");

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        {media.hero.video ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
            poster={media.hero.default}
          >
            <source src={media.hero.video} type="video/mp4" />
            {/* Fallback image if video fails to load */}
            <Image
              src={media.hero.default}
              alt="Tropical beach paradise"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </video>
        ) : (
          <Image
            src={media.hero.default}
            alt="Tropical beach paradise"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMH/8QAIhAAAgEDAwUBAAAAAAAAAAAAAQIDAAQRBRIhBgcTMUFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQADAQEBAAAAAAAAAAAAAAABAgMAETH/2gAMAwEAAhEDEEA/AM2x"
          />
        )}
        <div className="gradient-hero-overlay absolute inset-0" />
      </div>
      {/* Animated Particles/Dots */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        {particlePositions.map((particle, i) => (
          <motion.div
            key={i}
            className="bg-gold/30 absolute h-1 w-1 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 container text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-gold/20 border-gold/30 mb-6 inline-block rounded-full border px-6 py-2.5 text-sm font-medium tracking-wider uppercase backdrop-blur-sm">
            {t("badge")}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-display mx-auto mb-6 max-w-4xl px-4 text-center"
        >
          {t("title")} <span className="text-gold italic">{t("titleHighlight")}</span>
        </motion.h1>

        <div className="mb-10 flex w-full justify-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl text-center text-lg leading-relaxed text-white/80 sm:text-xl md:text-2xl"
          >
            {t("subtitle")} {t("subtitleLine2")}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link href="/contact">
            <Button variant="gold" size="lg" rightIcon={<ArrowRight size={20} />}>
              {t("ctaPrimary")}
            </Button>
          </Link>
          {isFeatureEnabled("destinations") && (
            <Link href="/destinations">
              <Button
                variant="outline"
                size="lg"
                className="hover:text-ocean border-white bg-white/10 text-white shadow-lg backdrop-blur-sm hover:bg-white hover:bg-white/20"
              >
                {t("ctaSecondary")}
              </Button>
            </Link>
          )}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-8 md:grid-cols-4"
        >
          {[
            ...(isFeatureEnabled("destinations")
              ? [{ value: "50+", label: t("stats.destinations") }]
              : []),
            { value: "5+", label: t("stats.experience") },
            { value: "24/7", label: t("stats.support") },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-heading text-gold mb-1 text-3xl md:text-4xl">{stat.value}</div>
              <div className="text-sm tracking-wider text-white/60 uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="bg-gold h-1.5 w-1.5 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
