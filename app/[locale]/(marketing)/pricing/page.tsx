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
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
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
            className="mx-auto mb-8 max-w-2xl text-lg text-white/90 md:text-xl"
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
      <section className="bg-sand-light py-16 md:py-20">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
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
      <section ref={pricingRef} className="bg-cream py-20 md:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <span className="bg-gold/10 text-gold mb-4 inline-block rounded-full px-4 py-1.5 text-sm font-medium">
              {t("packages.badge")}
            </span>
            <h2 className="font-heading text-ocean text-3xl md:text-4xl">{t("packages.title")}</h2>
          </motion.div>

          <div className="mx-auto grid gap-6 lg:grid-cols-5">
            {/* Dream Finder Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 }}
              className={`group relative overflow-hidden rounded-2xl border-2 border-amber-300 bg-white shadow-lg transition-all duration-300 ${
                hoveredPlan === "finder" ? "scale-105 shadow-2xl" : "hover:shadow-xl"
              }`}
              onMouseEnter={() => setHoveredPlan("finder")}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-amber-400 via-orange-400 to-pink-400 p-6 text-center text-white">
                <Compass className="mx-auto mb-4 h-12 w-12 opacity-90" />
                <h3 className="font-heading mb-2 text-2xl">{t("dreamFinder.title")}</h3>
                <p className="text-sm text-amber-100">{t("dreamFinder.subtitle")}</p>
              </div>

              {/* Features */}
              <div className="p-6">
                <h4 className="text-ocean mb-4 text-lg font-semibold">
                  {t("dreamFinder.whatYouGet")}
                </h4>
                <ul className="mb-6 space-y-3">
                  {dreamFinderFeatures.map((key, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
                      <span className="text-gray-dark text-sm">{t(key)}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="mb-3 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 p-4 text-center">
                    <p className="mb-1 text-xs text-slate-600">{t("dreamFinder.priceLabel")}</p>
                    <p className="text-3xl font-bold text-amber-600">149 PLN</p>
                  </div>
                  <div className="rounded-lg border border-green-200 bg-green-50 p-3">
                    <p className="mb-1 text-xs font-semibold text-green-800">
                      🎁 {t("dreamFinder.bonusLabel")}
                    </p>
                    <p className="text-xs text-green-700">{t("dreamFinder.bonusText")}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Dream Plan Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 ${
                hoveredPlan === "dream" ? "scale-105 shadow-2xl" : "hover:shadow-xl"
              }`}
              onMouseEnter={() => setHoveredPlan("dream")}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-teal-400 to-teal-600 p-6 text-center text-white">
                <Calendar className="mx-auto mb-4 h-12 w-12 opacity-90" />
                <h3 className="font-heading mb-2 text-2xl">{t("dreamPlan.title")}</h3>
                <p className="text-sm text-teal-100">{t("dreamPlan.subtitle")}</p>
              </div>

              {/* Features */}
              <div className="p-6">
                <h4 className="text-ocean mb-4 text-lg font-semibold">
                  {t("dreamPlan.whatYouGet")}
                </h4>
                <ul className="mb-6 space-y-3">
                  {dreamPlanFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-500" />
                      <span className="text-gray-dark text-sm">{t(feature.key)}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing Tiers */}
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-ocean mb-3 text-center text-sm font-semibold">
                    {t("dreamPlan.priceFor4")}
                  </h4>
                  <div className="space-y-2">
                    {pricingTiers.map((tier, index) => (
                      <div
                        key={index}
                        className="bg-sand-light flex items-center justify-between rounded-lg px-3 py-2"
                      >
                        <span className="text-gray-dark text-xs">
                          {tier.duration} {t("common.days")}:
                        </span>
                        <span className="text-xl font-bold text-teal-600">{tier.price} PLN</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray mt-3 text-center text-xs">{t("dreamPlan.longerTrips")}</p>
                </div>
              </div>
            </motion.div>

            {/* Travel Companion Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 ${
                hoveredPlan === "companion" ? "scale-105 shadow-2xl" : "hover:shadow-xl"
              }`}
              onMouseEnter={() => setHoveredPlan("companion")}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Popular Badge */}
              <div className="absolute top-4 right-4 z-10 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-slate-800">
                {t("travelCompanion.popularBadge")}
              </div>

              {/* Header */}
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-6 text-center text-white">
                <HeadphonesIcon className="mx-auto mb-4 h-12 w-12 opacity-90" />
                <h3 className="font-heading mb-2 text-2xl">{t("travelCompanion.title")}</h3>
                <p className="text-sm text-purple-100">{t("travelCompanion.subtitle")}</p>
              </div>

              {/* Message */}
              <div className="border-b border-purple-100 bg-purple-50 px-6 py-3">
                <p className="text-center text-sm font-medium text-purple-800">
                  {t("travelCompanion.tagline")}
                </p>
              </div>

              {/* Features */}
              <div className="p-6">
                <h4 className="text-ocean mb-4 text-lg font-semibold">
                  {t("travelCompanion.whatYouGet")}
                </h4>
                <ul className="mb-6 space-y-3">
                  {travelCompanionFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <feature.icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-500" />
                      <span className="text-gray-dark text-sm">{t(feature.key)}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="mb-3 rounded-xl bg-gradient-to-r from-purple-50 to-purple-100 p-4 text-center">
                    <p className="mb-1 text-xs text-slate-600">{t("travelCompanion.priceLabel")}</p>
                    <p className="mb-1 text-3xl font-bold text-purple-600">199 PLN</p>
                    <p className="text-xs text-slate-500">{t("travelCompanion.duration")}</p>
                  </div>
                  <div className="rounded-lg border border-green-200 bg-green-50 p-3">
                    <p className="mb-1 text-xs font-semibold text-green-800">
                      ✓ {t("travelCompanion.payOnce")}
                    </p>
                    <p className="text-xs text-green-700">{t("travelCompanion.noLimits")}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Express Service Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 ${
                hoveredPlan === "express" ? "scale-105 shadow-2xl" : "hover:shadow-xl"
              }`}
              onMouseEnter={() => setHoveredPlan("express")}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Urgent Badge */}
              <div className="bg-terracotta absolute top-4 right-4 z-10 rounded-full px-3 py-1 text-xs font-semibold text-white">
                {t("express.urgentBadge")}
              </div>

              {/* Header */}
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-6 text-center text-white">
                <Clock className="mx-auto mb-4 h-12 w-12 opacity-90" />
                <h3 className="font-heading mb-2 text-2xl">{t("express.title")}</h3>
                <p className="text-sm text-blue-100">{t("express.subtitle")}</p>
              </div>

              {/* Message */}
              <div className="border-b border-blue-100 bg-blue-50 px-6 py-3">
                <p className="text-center text-sm font-medium text-blue-800">
                  {t("express.urgentMessage")}
                </p>
              </div>

              {/* Features */}
              <div className="p-6">
                <h4 className="text-ocean mb-4 text-lg font-semibold">{t("express.whatYouGet")}</h4>
                <ul className="mb-6 space-y-3">
                  {expressFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <feature.icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500" />
                      <span className="text-gray-dark text-sm">{t(feature.key)}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 p-4 text-center">
                    <p className="mb-1 text-xs text-slate-600">{t("express.priceLabel")}</p>
                    <p className="text-3xl font-bold text-blue-600">299 PLN</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Premium Package Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`group relative overflow-hidden rounded-2xl border-2 border-indigo-300 bg-white shadow-lg transition-all duration-300 ${
                hoveredPlan === "premium" ? "scale-105 shadow-2xl" : "hover:shadow-xl"
              }`}
              onMouseEnter={() => setHoveredPlan("premium")}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Best Value Badge */}
              <div className="absolute top-4 right-4 z-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-3 py-1 text-xs font-bold text-white">
                {t("premiumPackage.bestValueBadge")}
              </div>

              {/* Header */}
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 text-center text-white">
                <Sparkles className="mx-auto mb-4 h-12 w-12 opacity-90" />
                <h3 className="font-heading mb-2 text-2xl">{t("premiumPackage.title")}</h3>
                <p className="text-sm text-indigo-100">{t("premiumPackage.subtitle")}</p>
              </div>

              {/* Features */}
              <div className="p-6">
                <h4 className="text-ocean mb-4 text-lg font-semibold">
                  {t("premiumPackage.whatYouGet")}
                </h4>
                <ul className="mb-6 space-y-3">
                  {premiumFeatures.map((key, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-500" />
                      <span className="text-gray-dark text-sm">{t(key)}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="mb-3 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 p-4 text-center">
                    <p className="mb-1 text-sm text-slate-400 line-through">598 PLN</p>
                    <p className="text-3xl font-bold text-indigo-600">499 PLN</p>
                    <p className="mt-1 text-xs text-slate-500">
                      {t("premiumPackage.packagePrice")}
                    </p>
                  </div>
                  <div className="rounded-lg border border-green-200 bg-green-50 p-3 text-center">
                    <p className="text-sm font-semibold text-green-700">
                      {t("premiumPackage.savings")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-sand py-12">
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
      <section className="bg-ocean py-20 md:py-28">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading mb-6 text-3xl text-white md:text-4xl lg:text-5xl">
              {t("cta.title")}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">{t("cta.subtitle")}</p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="gap-2">
                  <MessageCircle className="h-5 w-5" />
                  {t("cta.whatsapp")}
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  {t("cta.contact")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
