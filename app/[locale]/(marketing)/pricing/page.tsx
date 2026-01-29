"use client";

import { contact } from "@/config/contact";
import { getWhatsAppLink, getWhatsAppLinkWithMessage } from "@/lib/whatsapp";
import { motion, useInView } from "framer-motion";
import {
  CheckCircle,
  FileText,
  HeadphonesIcon,
  Hotel,
  Mail,
  MapPin,
  MessageCircle,
  Plane,
  RefreshCw,
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

  const tripSupportFeatures = [
    { icon: HeadphonesIcon, key: "tripSupport.features.whatsapp" },
    { icon: RefreshCw, key: "tripSupport.features.changes" },
    { icon: MapPin, key: "tripSupport.features.recommendations" },
    { icon: Zap, key: "tripSupport.features.emergencies" },
    { icon: FileText, key: "tripSupport.features.basicPlan" },
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
            className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl"
            style={{ color: "#d4a574" }}
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-8 max-w-2xl text-lg whitespace-pre-line text-white/90 md:text-xl"
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

          <div className="pricing-grid">
            {/* Dream Finder Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 }}
              className={`pricing-card group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 ${
                hoveredPlan === "finder" ? "scale-105 shadow-2xl" : "hover:shadow-xl"
              }`}
              onMouseEnter={() => setHoveredPlan("finder")}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Badge Container */}
              <div className="pricing-badge-container from-ocean via-ocean-dark to-ocean bg-gradient-to-br">
                <span className="pricing-badge bg-gradient-to-r from-lime-400 to-green-400 text-slate-800">
                  NEW
                </span>
              </div>

              {/* Header */}
              <div className="pricing-header from-ocean via-ocean-dark to-ocean bg-gradient-to-br">
                <h3 className="font-heading text-gold mb-2 text-2xl">{t("dreamFinder.title")}</h3>
                <p className="text-sm text-white">{t("dreamFinder.subtitle")}</p>
              </div>

              {/* Features */}
              <div className="pricing-features flex flex-1 flex-col">
                <ul className="mb-auto flex-1 space-y-3">
                  {dreamFinderFeatures.map((key, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-gold mt-0.5 h-5 w-5 flex-shrink-0" />
                      <span className="text-gray-dark text-sm">{t(key)}</span>
                    </li>
                  ))}
                </ul>

                {/* Price - Fixed Height Section */}
                <div className="mt-6 border-t border-gray-200 pt-6">
                  <div className="mb-4 text-center">
                    <p className="text-gold text-4xl font-bold">149 PLN</p>
                  </div>
                  <div className="pricing-info-box border-gold/30 bg-gold/10 border">
                    <p className="text-gold-dark mb-1 font-semibold">💡 Bonus</p>
                    <p className="text-gray-dark">{t("dreamFinder.bonusText")}</p>
                  </div>
                  <a
                    href={getWhatsAppLinkWithMessage(
                      contact.phone,
                      "Hi! I'm interested in the Dream Finder package (149 PLN). Please provide more information about how to proceed. Thank you!"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pricing-book-btn bg-ocean text-gold hover:bg-ocean-dark"
                  >
                    {t("common.bookNow")}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Journey Concierge Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`pricing-card group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 ${
                hoveredPlan === "companion" ? "scale-105 shadow-2xl" : "hover:shadow-xl"
              }`}
              onMouseEnter={() => setHoveredPlan("companion")}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Badge Container */}
              <div className="pricing-badge-container from-ocean via-ocean-dark to-ocean bg-gradient-to-br">
                <span className="pricing-badge bg-gradient-to-r from-yellow-400 to-amber-400 text-slate-800">
                  POPULAR
                </span>
              </div>

              {/* Header */}
              <div className="pricing-header from-ocean via-ocean-dark to-ocean bg-gradient-to-br">
                <h3 className="font-heading text-gold mb-2 text-2xl">{t("tripSupport.title")}</h3>
                <p className="text-sm text-white">{t("tripSupport.subtitle")}</p>
              </div>

              {/* Features */}
              <div className="pricing-features flex flex-1 flex-col">
                <ul className="mb-auto flex-1 space-y-3">
                  {tripSupportFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-gold mt-0.5 h-5 w-5 flex-shrink-0" />
                      <span className="text-gray-dark text-sm">{t(feature.key)}</span>
                    </li>
                  ))}
                </ul>

                {/* Price - Fixed Height Section */}
                <div className="mt-6 border-t border-gray-200 pt-6">
                  <div className="mb-4 text-center">
                    <p className="text-gold text-4xl font-bold">199 PLN</p>
                  </div>
                  <p className="pricing-legend">{t("tripSupport.duration")}</p>
                  <div className="pricing-info-box border-gold/30 bg-gold/10 border">
                    <p className="text-gold-dark font-medium">⭐ {t("tripSupport.payOnce")}</p>
                  </div>
                  <a
                    href={getWhatsAppLinkWithMessage(
                      contact.phone,
                      "Hi! I'm interested in the Trip Support package (199 PLN) for real-time travel support. Please provide more information about how to proceed. Thank you!"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pricing-book-btn bg-ocean text-gold hover:bg-ocean-dark"
                  >
                    {t("common.bookNow")}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Dream Plan Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`pricing-card group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 ${
                hoveredPlan === "dream" ? "scale-105 shadow-2xl" : "hover:shadow-xl"
              }`}
              onMouseEnter={() => setHoveredPlan("dream")}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Badge Container - invisible placeholder for consistent spacing */}
              <div className="pricing-badge-container from-ocean via-ocean-dark to-ocean bg-gradient-to-br">
                <span className="pricing-badge opacity-0">PLACEHOLDER</span>
              </div>

              {/* Header */}
              <div className="pricing-header from-ocean via-ocean-dark to-ocean bg-gradient-to-br">
                <h3 className="font-heading text-gold mb-2 text-2xl">{t("dreamPlan.title")}</h3>
                <p className="text-sm text-white">{t("dreamPlan.subtitle")}</p>
              </div>

              {/* Features */}
              <div className="pricing-features flex flex-1 flex-col">
                <ul className="mb-auto flex-1 space-y-3">
                  {dreamPlanFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-gold mt-0.5 h-5 w-5 flex-shrink-0" />
                      <span className="text-gray-dark text-sm">{t(feature.key)}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing Tiers - Fixed Height Section */}
                <div className="mt-6 border-t border-gray-200 pt-6">
                  <div className="mb-4">
                    <div className="space-y-1.5">
                      {pricingTiers.map((tier, index) => (
                        <div
                          key={index}
                          className="bg-sand-light flex items-center justify-between rounded-lg px-3 py-1.5"
                        >
                          <span className="text-gray-dark text-xs">{tier.duration} days:</span>
                          <span className="text-gold text-lg font-bold">{tier.price} PLN</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pricing-info-box border-gold/30 bg-gold/10 border">
                    <p className="text-gold-dark font-medium">{t("dreamPlan.longerTrips")}</p>
                  </div>
                  <a
                    href={getWhatsAppLinkWithMessage(
                      contact.phone,
                      "Hi! I'm interested in the Dream Plan package. Please provide more information about how to proceed. Thank you!"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pricing-book-btn bg-ocean text-gold hover:bg-ocean-dark"
                  >
                    {t("common.bookNow")}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Express Service Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`pricing-card group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 ${
                hoveredPlan === "express" ? "scale-105 shadow-2xl" : "hover:shadow-xl"
              }`}
              onMouseEnter={() => setHoveredPlan("express")}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Badge Container */}
              <div className="pricing-badge-container from-ocean via-ocean-dark to-ocean bg-gradient-to-br">
                <span className="pricing-badge bg-gradient-to-r from-red-500 to-orange-500 text-white">
                  URGENT
                </span>
              </div>

              {/* Header */}
              <div className="pricing-header from-ocean via-ocean-dark to-ocean bg-gradient-to-br">
                <h3 className="font-heading text-gold mb-2 text-2xl">{t("express.title")}</h3>
                <p className="text-sm text-white">{t("express.subtitle")}</p>
              </div>

              {/* Features */}
              <div className="pricing-features flex flex-1 flex-col">
                <ul className="mb-auto flex-1 space-y-3">
                  {expressFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-gold mt-0.5 h-5 w-5 flex-shrink-0" />
                      <span className="text-gray-dark text-sm">{t(feature.key)}</span>
                    </li>
                  ))}
                </ul>

                {/* Price - Fixed Height Section */}
                <div className="mt-6 border-t border-gray-200 pt-6">
                  <div className="mb-4 text-center">
                    <p className="text-gold text-4xl font-bold">299 PLN</p>
                  </div>
                  <p className="pricing-legend"></p>
                  <a
                    href={getWhatsAppLinkWithMessage(
                      contact.phone,
                      "Hi! I need URGENT help with my travel plans! I'm interested in the Express Service package (299 PLN) for quick 24-48h assistance. Please respond as soon as possible. Thank you!"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pricing-book-btn bg-ocean text-gold hover:bg-ocean-dark"
                  >
                    {t("common.bookNow")}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Premium Package Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`pricing-card group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 ${
                hoveredPlan === "premium" ? "scale-105 shadow-2xl" : "hover:shadow-xl"
              }`}
              onMouseEnter={() => setHoveredPlan("premium")}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Badge Container */}
              <div className="pricing-badge-container from-gold via-gold-dark to-terracotta bg-gradient-to-br">
                <span className="pricing-badge bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                  BEST VALUE
                </span>
              </div>

              {/* Header */}
              <div className="pricing-header from-gold via-gold-dark to-terracotta bg-gradient-to-br">
                <p className="text-ocean mb-1 text-xs font-semibold">
                  {t("premiumPackage.combination")}
                </p>
                <h3 className="font-heading text-ocean mb-2 text-2xl">
                  {t("premiumPackage.title")}
                </h3>
                <p className="text-sm text-white/90">{t("premiumPackage.subtitle")}</p>
              </div>

              {/* Features */}
              <div className="pricing-features flex flex-1 flex-col">
                <ul className="mb-auto flex-1 space-y-3">
                  {premiumFeatures.map((key, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-gold mt-0.5 h-5 w-5 flex-shrink-0" />
                      <span className="text-gray-dark text-sm">{t(key)}</span>
                    </li>
                  ))}
                </ul>

                {/* Price - Fixed Height Section */}
                <div className="mt-6 border-t border-gray-200 pt-6">
                  <div className="mb-2 text-center">
                    <p className="text-sm text-slate-400 line-through">598 PLN</p>
                    <p className="text-gold text-4xl font-bold">499 PLN</p>
                  </div>
                  <p className="pricing-legend">{t("premiumPackage.packagePrice")}</p>
                  <div className="pricing-info-box border-gold/30 bg-gold/10 border">
                    <p className="text-gold-dark font-semibold">🎉 {t("premiumPackage.savings")}</p>
                  </div>
                  <a
                    href={getWhatsAppLinkWithMessage(
                      contact.phone,
                      "Hi! I'm interested in the Premium Package (499 PLN) which includes Dream Plan + Trip Support for 5-10 days. Please provide more information about how to proceed. Thank you!"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pricing-book-btn bg-gold hover:bg-gold-dark text-white"
                  >
                    {t("common.bookNow")}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
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
