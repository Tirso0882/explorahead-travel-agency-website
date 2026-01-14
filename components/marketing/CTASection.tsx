"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function CTASection() {
  const t = useTranslations('marketing.cta');

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop"
          alt="Mountain lake landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean/90 via-ocean/80 to-ocean/70" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 border border-gold/10 rounded-full"
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
          className="absolute -left-1/4 -bottom-1/4 w-3/4 h-3/4 border border-gold/10 rounded-full"
        />
      </div>

      <div className="relative z-20 container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 mb-8 bg-gold/20 rounded-full border border-gold/30"
          >
            <Sparkles size={18} className="text-gold" />
            <span className="text-gold text-sm font-medium">{t('badge')}</span>
          </motion.div>

          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-heading mb-6">
            {t('title')}{" "}
            <span className="text-gold">{t('titleHighlight')}</span>
          </h2>

          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact">
              <Button
                variant="gold"
                size="lg"
                leftIcon={<Sparkles size={20} />}
                rightIcon={<ArrowRight size={20} />}
              >
                {t('requestAccess')}
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-ocean bg-white/10 backdrop-blur-sm shadow-lg hover:bg-white/20"
              >
                {t('talkToExpert')}
              </Button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 pt-12 border-t border-white/10"
          >
            <p className="text-white/50 text-sm mb-4">{t('trustIndicator')}</p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {["TripAdvisor", "Trustpilot", "Google", "Forbes Travel"].map((brand) => (
                <span
                  key={brand}
                  className="text-white/40 font-medium text-lg tracking-wide"
                >
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

