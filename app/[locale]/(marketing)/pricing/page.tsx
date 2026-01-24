"use client";

import { Button } from "@/components/ui/Button";
import { contact } from "@/config/contact";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  CheckCircle,
  Clock,
  Compass,
  FileText,
  HeadphonesIcon,
  Hotel,
  Mail,
  MapPin,
  MessageCircle,
  Plane,
  RefreshCw,
  Sparkles,
  Zap,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRef, useState } from "react";

export default function PricingPage() {
  const t = useTranslations("pricing");
  const pricingRef = useRef<HTMLElement>(null);
  const isPricingInView = useInView(pricingRef, { once: true, margin: "-100px" });
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  const whatsappLink = getWhatsAppLink(contact.phone);

  const dreamFinderFeatures = [
    "dreamFinder.features.consultation",
    "dreamFinder.features.conversation",
    "dreamFinder.features.recommendations",
    "dreamFinder.features.descriptions",
    "dreamFinder.features.selection",
    "dreamFinder.features.summary",
  ];

  const premiumFeatures = [
    "premiumPackage.features.dreamPlan",
    "premiumPackage.features.companion",
    "premiumPackage.features.priority",
  ];

  const dreamPlanFeatures = [
    { icon: FileText, key: "dreamPlan.features.itinerary" },
    { icon: Plane, key: "dreamPlan.features.flights" },
    { icon: RefreshCw, key: "dreamPlan.features.revisions" },
    { icon: Mail, key: "dreamPlan.features.emailSupport" },
  ];

  const travelCompanionFeatures = [
    { icon: HeadphonesIcon, key: "travelCompanion.features.whatsapp" },
    { icon: RefreshCw, key: "travelCompanion.features.changes" },
    { icon: MapPin, key: "travelCompanion.features.recommendations" },
    { icon: Zap, key: "travelCompanion.features.emergencies" },
    { icon: FileText, key: "travelCompanion.features.basicPlan" },
  ];

  const expressFeatures = [
    { icon: Zap, key: "express.features.quickPlan" },
    { icon: Hotel, key: "express.features.recommendations" },
    { icon: MessageCircle, key: "express.features.support" },
  ];

  const pricingTiers = [
    { duration: "1-4", label: "dreamPlan.tiers.short", price: "249" },
    { duration: "5-10", label: "dreamPlan.tiers.standard", price: "399" },
    { duration: "11-14", label: "dreamPlan.tiers.long", price: "549" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-40 pb-16 md:pt-48 md:pb-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop"
            alt="Travel planning and destinations"
            className="h-full w-full object-cover"
          />
          <div className="bg-ocean/80 absolute inset-0" />
        </div>

        <div className="relative z-10 container text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gold/20 border-gold/30 text-gold mb-6 inline-block rounded-full border px-6 py-2.5 text-sm font-medium tracking-wider uppercase backdrop-blur-sm"
          >
            {t("hero.badge")}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading mb-6 text-4xl text-white md:text-5xl lg:text-6xl"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-8 max-w-2xl text-lg text-white/90 md:text-xl whitespace-pre-line"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 text-white"
          >
            <div className="flex items-center gap-2">
              <Plane className="text-gold h-6 w-6" />
              <span>{t("hero.icons.flights")}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-gold h-6 w-6" />
              <span>{t("hero.icons.hotels")}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-gold h-6 w-6" />
              <span>{t("hero.icons.attractions")}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section bg-sand-light">
        <div className="container flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl text-center"
          >
            <h2 className="font-heading text-ocean mb-6 text-3xl md:text-4xl">
              {t("valueProposition.title")}
            </h2>
            <p className="text-gray-dark text-lg leading-relaxed">
              {t("valueProposition.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section ref={pricingRef} className="section bg-cream">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-header"
          >
            <span className="bg-gold/10 text-gold mb-4 inline-block rounded-full px-4 py-1.5 text-sm font-medium">
              {t("packages.badge")}
            </span>
            <h2 className="font-heading text-ocean text-3xl md:text-4xl">{t("packages.title")}</h2>
          </motion.div>

          <div className="mx-auto grid gap-6 md:gap-8 lg:grid-cols-5 max-w-[1600px]">
            {/* Dream Finder Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 }}
              className={`group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 ${
                hoveredPlan === "finder" ? "scale-105 shadow-2xl" : "hover:shadow-xl"
              }`}
              onMouseEnter={() => setHoveredPlan("finder")}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* New Badge */}
              <div className="absolute top-4 right-4 z-10 rounded-full bg-gradient-to-r from-lime-400 to-green-400 px-3 py-1 text-xs font-bold text-slate-800">
                NEW
              </div>

              {/* Header */}
              <div className="bg-gradient-to-br from-gold via-gold-dark to-terracotta p-8 text-center text-white">
                <Compass className="mx-auto mb-4 h-12 w-12 opacity-90" />
                <h3 className="font-heading mb-2 text-2xl">{t("dreamFinder.title")}</h3>
                <p className="text-sm text-white/90">{t("dreamFinder.subtitle")}</p>
              </div>

              {/* Features */}
              <div className="flex flex-1 flex-col p-8">
                <ul className="mb-auto space-y-3 flex-1">
                  {dreamFinderFeatures.map((key, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                      <span className="text-gray-dark text-sm">{t(key)}</span>
                    </li>
                  ))}
                </ul>

                {/* Price - Fixed Height Section */}
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <div className="mb-4 text-center h-24 flex flex-col justify-center">
                    <p className="mb-2 text-xs uppercase tracking-wide text-slate-500">Price</p>
                    <p className="text-4xl font-bold text-gold">149 PLN</p>
                  </div>
                  <button className="w-full rounded-lg bg-gold py-3.5 text-sm font-semibold text-white transition-all hover:bg-gold-dark">
                    Book Now
                  </button>
                  <div className="mt-4 rounded-lg border border-gold/30 bg-gold/10 p-3">
                    <p className="mb-1 text-xs font-semibold text-gold-dark">
                      💡 Bonus
                    </p>
                    <p className="text-xs text-gray-dark">{t("dreamFinder.bonusText")}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Dream Plan Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 ${
                hoveredPlan === "dream" ? "scale-105 shadow-2xl" : "hover:shadow-xl"
              }`}
              onMouseEnter={() => setHoveredPlan("dream")}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-ocean via-ocean-light to-ocean-dark p-8 text-center text-white">
                <Calendar className="mx-auto mb-4 h-12 w-12 opacity-90" />
                <h3 className="font-heading mb-2 text-2xl">{t("dreamPlan.title")}</h3>
                <p className="text-sm text-white/90">{t("dreamPlan.subtitle")}</p>
              </div>

              {/* Features */}
              <div className="flex flex-1 flex-col p-8">
                <ul className="mb-auto space-y-3 flex-1">
                  {dreamPlanFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-ocean" />
                      <span className="text-gray-dark text-sm">{t(feature.key)}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing Tiers - Fixed Height Section */}
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <div className="mb-4 h-24 flex flex-col justify-center">
                    <h4 className="text-ocean mb-3 text-center text-xs font-semibold uppercase tracking-wide">
                      Price (up to 4 people)
                    </h4>
                    <div className="space-y-1.5">
                      {pricingTiers.map((tier, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg bg-sand-light px-3 py-1.5"
                        >
                          <span className="text-gray-dark text-xs">
                            {tier.duration} days:
                          </span>
                          <span className="text-lg font-bold text-ocean">{tier.price} PLN</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button className="w-full rounded-lg bg-ocean py-3.5 text-sm font-semibold text-white transition-all hover:bg-ocean-dark">
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Travel Companion Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 ${
                hoveredPlan === "companion" ? "scale-105 shadow-2xl" : "hover:shadow-xl"
              }`}
              onMouseEnter={() => setHoveredPlan("companion")}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Popular Badge */}
              <div className="absolute top-4 right-4 z-10 rounded-full bg-gradient-to-r from-yellow-400 to-amber-400 px-3 py-1 text-xs font-bold text-slate-800">
                POPULAR
              </div>

              {/* Header */}
              <div className="bg-gradient-to-br from-terracotta via-terracotta-light to-gold p-8 text-center text-white">
                <HeadphonesIcon className="mx-auto mb-4 h-12 w-12 opacity-90" />
                <h3 className="font-heading mb-2 text-2xl">{t("travelCompanion.title")}</h3>
                <p className="text-sm text-white/90">{t("travelCompanion.subtitle")}</p>
              </div>

              {/* Features */}
              <div className="flex flex-1 flex-col p-8">
                <ul className="mb-auto space-y-3 flex-1">
                  {travelCompanionFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-terracotta" />
                      <span className="text-gray-dark text-sm">{t(feature.key)}</span>
                    </li>
                  ))}
                </ul>

                {/* Price - Fixed Height Section */}
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <div className="mb-4 text-center h-24 flex flex-col justify-center">
                    <p className="mb-2 text-xs uppercase tracking-wide text-slate-500">Package Price</p>
                    <p className="mb-1 text-4xl font-bold text-terracotta">199 PLN</p>
                    <p className="text-xs text-slate-500">Support up to 14 days</p>
                  </div>
                  <button className="w-full rounded-lg bg-terracotta py-3.5 text-sm font-semibold text-white transition-all hover:bg-terracotta-light">
                    Book Now
                  </button>
                  <div className="mt-4 rounded-lg border border-terracotta/30 bg-terracotta/10 p-3">
                    <p className="text-center text-xs font-medium text-terracotta">
                      ⭐ Pay once, ask unlimited questions
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Express Service Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 ${
                hoveredPlan === "express" ? "scale-105 shadow-2xl" : "hover:shadow-xl"
              }`}
              onMouseEnter={() => setHoveredPlan("express")}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Urgent Badge */}
              <div className="absolute top-4 right-4 z-10 rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-3 py-1 text-xs font-bold text-white">
                URGENT
              </div>

              {/* Header */}
              <div className="bg-gradient-to-br from-ocean-dark via-ocean to-ocean-light p-8 text-center text-white">
                <Clock className="mx-auto mb-4 h-12 w-12 opacity-90" />
                <h3 className="font-heading mb-2 text-2xl">{t("express.title")}</h3>
                <p className="text-sm text-white/90">{t("express.subtitle")}</p>
              </div>

              {/* Features */}
              <div className="flex flex-1 flex-col p-8">
                <ul className="mb-auto space-y-3 flex-1">
                  {expressFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-ocean" />
                      <span className="text-gray-dark text-sm">{t(feature.key)}</span>
                    </li>
                  ))}
                </ul>

                {/* Price - Fixed Height Section */}
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <div className="mb-4 text-center h-24 flex flex-col justify-center">
                    <p className="mb-2 text-xs uppercase tracking-wide text-slate-500">Price</p>
                    <p className="text-4xl font-bold text-ocean">299 PLN</p>
                  </div>
                  <button className="w-full rounded-lg bg-ocean py-3.5 text-sm font-semibold text-white transition-all hover:bg-ocean-dark">
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Premium Package Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 ${
                hoveredPlan === "premium" ? "scale-105 shadow-2xl" : "hover:shadow-xl"
              }`}
              onMouseEnter={() => setHoveredPlan("premium")}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Best Value Badge */}
              <div className="absolute top-4 right-4 z-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-3 py-1 text-xs font-bold text-white">
                BEST VALUE
              </div>

              {/* Header */}
              <div className="bg-gradient-to-br from-forest via-forest-light to-gold p-8 text-center text-white">
                <Sparkles className="mx-auto mb-4 h-12 w-12 opacity-90" />
                <h3 className="font-heading mb-2 text-2xl">{t("premiumPackage.title")}</h3>
                <p className="text-sm text-white/90">{t("premiumPackage.subtitle")}</p>
              </div>

              {/* Features */}
              <div className="flex flex-1 flex-col p-8">
                <ul className="mb-auto space-y-3 flex-1">
                  {premiumFeatures.map((key, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-forest" />
                      <span className="text-gray-dark text-sm">{t(key)}</span>
                    </li>
                  ))}
                </ul>

                {/* Price - Fixed Height Section */}
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <div className="mb-4 text-center h-24 flex flex-col justify-center">
                    <p className="mb-2 text-xs uppercase tracking-wide text-slate-500">
                      Package Price (5-10 days)
                    </p>
                    <p className="mb-1 text-sm text-slate-400 line-through">598 PLN</p>
                    <p className="text-4xl font-bold text-forest">499 PLN</p>
                  </div>
                  <div className="mb-4 rounded-lg border border-forest/30 bg-forest/10 p-2 text-center">
                    <p className="text-xs font-semibold text-forest">
                      🎉 Save 99 PLN!
                    </p>
                  </div>
                  <button className="w-full rounded-lg bg-forest py-3.5 text-sm font-semibold text-white transition-all hover:bg-forest-light">
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section-sm bg-sand">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl rounded-xl bg-white p-6 text-center shadow-md md:p-8"
          >
            <HeadphonesIcon className="text-ocean mx-auto mb-4 h-10 w-10" />
            <p className="text-gray-dark text-lg leading-relaxed">{t("disclaimer.text")}</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-sand-light">
        <div className="container mx-auto max-w-7xl px-5 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="from-ocean via-ocean to-ocean-dark rounded-3xl bg-gradient-to-br text-center text-white shadow-2xl"
            style={{ padding: "20px 40px" }}
          >
            {/* Title */}
            <h2 className="font-heading mb-6 text-center text-3xl text-white md:text-4xl lg:text-5xl">
              {t("cta.title")}
            </h2>

            {/* Subtitle */}
            <div className="mb-12 flex justify-center">
              <p className="max-w-xl text-center text-lg text-white/80">{t("cta.subtitle")}</p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
              {/* WhatsApp Button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-4 rounded-full text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 sm:w-auto lg:text-xl"
                style={{
                  backgroundColor: "#25D366",
                  color: "white",
                  padding: "16px 48px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#20BA5A";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#25D366";
                }}
              >
                <MessageCircle className="h-10 w-10" />
                {t("cta.whatsapp")}
              </a>

              {/* Contact Button */}
              <Link
                href="/contact"
                className="bg-ocean-light hover:bg-ocean-dark inline-flex w-full items-center justify-center gap-4 rounded-full border-2 border-white/30 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 sm:w-auto lg:text-xl"
                style={{ padding: "16px 48px" }}
              >
                <Mail className="h-10 w-10" />
                {t("cta.contact")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
