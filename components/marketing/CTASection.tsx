"use client";

import { Button } from "@/components/ui/Button";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRef } from "react";

export function CTASection() {
  const t = useTranslations("marketing.cta");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop"
          alt="Mountain lake landscape"
          className="h-full w-full object-cover"
        />
        <div className="from-forest/90 via-forest/80 to-forest/70 absolute inset-0 bg-gradient-to-r" />
      </div>

      {/* Decorative Elements - Neon lime accents */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="border-lime/20 absolute -top-1/4 -right-1/4 h-1/2 w-1/2 rounded-full border-2"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
          className="border-lime/20 absolute -bottom-1/4 -left-1/4 h-3/4 w-3/4 rounded-full border-2"
        />
      </div>

      <div className="relative z-20 container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-lime text-forest mb-8 inline-flex items-center gap-2 rounded-full border-2 border-black px-6 py-2.5 shadow-sticker"
          >
            <Sparkles size={18} className="text-forest" />
            <span className="text-sm font-bold uppercase tracking-wide">{t("badge")}</span>
          </motion.div>

          <h2 className="font-heading mb-6 text-4xl text-white md:text-5xl lg:text-6xl uppercase">
            {t("title")} <span className="text-lime text-glow-lime">{t("titleHighlight")}</span>
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80 md:text-xl">
            {t("subtitle")}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href="/contact">
              <Button
                variant="gold"
                size="lg"
                leftIcon={<Sparkles size={20} />}
                rightIcon={<ArrowRight size={20} />}
              >
                {t("requestAccess")}
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="hover:text-forest border-2 border-white bg-white/10 text-white shadow-sticker backdrop-blur-sm hover:bg-lime hover:border-black"
              >
                {t("talkToExpert")}
              </Button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 border-t border-lime/20 pt-12"
          >
            <p className="mb-4 text-sm text-white/50 uppercase tracking-wide">{t("trustIndicator")}</p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {["TripAdvisor", "Trustpilot", "Google", "Forbes Travel"].map((brand) => (
                <span key={brand} className="text-lg font-bold tracking-wide text-white/40">
                  {brand}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;
