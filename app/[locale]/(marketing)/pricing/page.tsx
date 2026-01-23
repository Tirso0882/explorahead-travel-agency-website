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
  Star,
  Trophy,
  Zap,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRef, useState } from "react";

// Sticker Badge Component - TripAdvisor style
const StickerBadge = ({
  children,
  variant = "lime",
  className = "",
  rotate = 0,
}: {
  children: React.ReactNode;
  variant?: "lime" | "dark" | "white";
  className?: string;
  rotate?: number;
}) => {
  const variants = {
    lime: "bg-[#BFFF00] text-slate-900 border-slate-900",
    dark: "bg-slate-900 text-[#BFFF00] border-[#BFFF00]",
    white: "bg-white text-slate-900 border-slate-900",
  };

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-2xl border-[3px] px-4 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${variants[variant]} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </div>
  );
};

// Wavy Badge for special offers
const WavyBadge = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`relative inline-flex items-center justify-center ${className}`}
    style={{
      background: "#BFFF00",
      padding: "12px 20px",
      borderRadius: "50%",
      clipPath:
        "polygon(50% 0%, 61% 11%, 75% 5%, 80% 20%, 95% 25%, 88% 39%, 100% 50%, 88% 61%, 95% 75%, 80% 80%, 75% 95%, 61% 89%, 50% 100%, 39% 89%, 25% 95%, 20% 80%, 5% 75%, 12% 61%, 0% 50%, 12% 39%, 5% 25%, 20% 20%, 25% 5%, 39% 11%)",
    }}
  >
    <span className="font-black text-slate-900 text-sm">{children}</span>
  </div>
);

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
      {/* Hero Section - Bold, Energetic, Gen-Z Style */}
      <section className="relative overflow-hidden bg-[#BFFF00] pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Floating Sticker Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-[10%] hidden md:block"
          >
            <StickerBadge variant="dark" rotate={-8}>
              <Trophy className="h-5 w-5" />
              <span>TOP RATED</span>
            </StickerBadge>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-32 right-[8%] hidden md:block"
          >
            <StickerBadge variant="white" rotate={12}>
              <Star className="h-5 w-5 fill-current" />
              <span>5-STAR</span>
            </StickerBadge>
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-32 left-[15%] hidden lg:block"
          >
            <WavyBadge>SAVE BIG</WavyBadge>
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-20 right-[12%] hidden lg:block"
          >
            <StickerBadge variant="dark" rotate={-5}>
              <Zap className="h-5 w-5" />
              <span>INSTANT</span>
            </StickerBadge>
          </motion.div>
        </div>

        <div className="relative z-10 container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="mb-8 inline-block"
          >
            <StickerBadge variant="dark" className="text-lg">
              <Sparkles className="h-6 w-6" />
              {t("hero.badge")}
            </StickerBadge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-5xl font-black tracking-tight text-slate-900 md:text-7xl lg:text-8xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-xl font-medium text-slate-800 md:text-2xl"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <StickerBadge variant="white" rotate={-2}>
              <Plane className="h-5 w-5" />
              <span className="text-sm font-bold">{t("hero.icons.flights")}</span>
            </StickerBadge>
            <StickerBadge variant="dark" rotate={3}>
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-bold">{t("hero.icons.hotels")}</span>
            </StickerBadge>
            <StickerBadge variant="white" rotate={-1}>
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm font-bold">{t("hero.icons.attractions")}</span>
            </StickerBadge>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition - Dynamic Style */}
      <section className="bg-slate-900 py-16 md:py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-[#BFFF00] rounded-full" />
          <div className="absolute bottom-10 right-10 w-24 h-24 border-4 border-[#BFFF00] rotate-45" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#BFFF00] rounded-full blur-xl" />
        </div>

        <div className="container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <h2
              className="mb-6 text-4xl font-black tracking-tight text-white md:text-5xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {t("valueProposition.title")}
            </h2>
            <p className="text-xl leading-relaxed text-slate-300 font-medium">
              {t("valueProposition.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards Section - Vibrant Gen-Z Style */}
      <section ref={pricingRef} className="bg-white py-20 md:py-28 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={isPricingInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.5, type: "spring" }}
              className="mb-6 inline-block"
            >
              <StickerBadge variant="lime" rotate={-3}>
                <Trophy className="h-5 w-5" />
                {t("packages.badge")}
              </StickerBadge>
            </motion.div>
            <h2
              className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl lg:text-6xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {t("packages.title")}
            </h2>
          </motion.div>

          <div className="mx-auto grid gap-6 lg:grid-cols-5">
            {/* Dream Finder Card - Sticker Style */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              animate={isPricingInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 }}
              className={`group relative overflow-hidden rounded-3xl border-4 border-slate-900 bg-white transition-all duration-300 ${
                hoveredPlan === "finder"
                  ? "scale-105 shadow-[8px_8px_0px_0px_#BFFF00]"
                  : "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_#BFFF00]"
              }`}
              onMouseEnter={() => setHoveredPlan("finder")}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-amber-400 via-orange-400 to-pink-500 p-6 text-center relative">
                <div className="absolute -top-2 -right-2 rotate-12">
                  <WavyBadge>NEW</WavyBadge>
                </div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl border-2 border-white/30 mb-4">
                  <Compass className="h-8 w-8 text-white" />
                </div>
                <h3
                  className="mb-2 text-2xl font-black text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {t("dreamFinder.title")}
                </h3>
                <p className="text-sm font-medium text-white/90">{t("dreamFinder.subtitle")}</p>
              </div>

              {/* Features */}
              <div className="p-6">
                <h4 className="text-slate-900 mb-4 text-sm font-black uppercase tracking-wider">
                  {t("dreamFinder.whatYouGet")}
                </h4>
                <ul className="mb-6 space-y-3">
                  {dreamFinderFeatures.map((key, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0 w-5 h-5 bg-[#BFFF00] rounded-full flex items-center justify-center border-2 border-slate-900">
                        <CheckCircle className="h-3 w-3 text-slate-900" />
                      </div>
                      <span className="text-slate-700 text-sm font-medium">{t(key)}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="border-t-2 border-dashed border-slate-200 pt-4">
                  <div className="mb-3 rounded-2xl bg-gradient-to-r from-amber-100 to-orange-100 p-4 text-center border-2 border-slate-900">
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-600">
                      {t("dreamFinder.priceLabel")}
                    </p>
                    <p
                      className="text-4xl font-black text-slate-900"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      149 PLN
                    </p>
                  </div>
                  <div className="rounded-xl bg-[#BFFF00] p-3 border-2 border-slate-900">
                    <p className="mb-1 text-xs font-black text-slate-900">
                      🎁 {t("dreamFinder.bonusLabel")}
                    </p>
                    <p className="text-xs font-medium text-slate-800">{t("dreamFinder.bonusText")}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Dream Plan Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 1 }}
              animate={isPricingInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border-4 border-slate-900 bg-white transition-all duration-300 ${
                hoveredPlan === "dream"
                  ? "scale-105 shadow-[8px_8px_0px_0px_#BFFF00]"
                  : "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_#BFFF00]"
              }`}
              onMouseEnter={() => setHoveredPlan("dream")}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-teal-400 to-cyan-600 p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl border-2 border-white/30 mb-4">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3
                  className="mb-2 text-2xl font-black text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {t("dreamPlan.title")}
                </h3>
                <p className="text-sm font-medium text-white/90">{t("dreamPlan.subtitle")}</p>
              </div>

              {/* Features */}
              <div className="p-6">
                <h4 className="text-slate-900 mb-4 text-sm font-black uppercase tracking-wider">
                  {t("dreamPlan.whatYouGet")}
                </h4>
                <ul className="mb-6 space-y-3">
                  {dreamPlanFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0 w-5 h-5 bg-teal-400 rounded-full flex items-center justify-center border-2 border-slate-900">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-slate-700 text-sm font-medium">{t(feature.key)}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing Tiers */}
                <div className="border-t-2 border-dashed border-slate-200 pt-4">
                  <h4 className="text-slate-900 mb-3 text-center text-xs font-black uppercase tracking-wider">
                    {t("dreamPlan.priceFor4")}
                  </h4>
                  <div className="space-y-2">
                    {pricingTiers.map((tier, index) => (
                      <div
                        key={index}
                        className="bg-slate-100 flex items-center justify-between rounded-xl px-3 py-2 border-2 border-slate-200"
                      >
                        <span className="text-slate-700 text-xs font-bold">
                          {tier.duration} {t("common.days")}:
                        </span>
                        <span
                          className="text-xl font-black text-teal-600"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {tier.price} PLN
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-slate-500 mt-3 text-center text-xs font-medium">
                    {t("dreamPlan.longerTrips")}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Travel Companion Card - FEATURED */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isPricingInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`group relative overflow-hidden rounded-3xl border-4 border-[#BFFF00] bg-white transition-all duration-300 ${
                hoveredPlan === "companion"
                  ? "scale-105 shadow-[8px_8px_0px_0px_#BFFF00]"
                  : "shadow-[6px_6px_0px_0px_#BFFF00] hover:shadow-[10px_10px_0px_0px_#BFFF00]"
              }`}
              onMouseEnter={() => setHoveredPlan("companion")}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Popular Badge */}
              <div className="absolute -top-1 -right-1 z-10">
                <div
                  className="bg-[#BFFF00] text-slate-900 px-4 py-2 font-black text-xs uppercase tracking-wider rounded-bl-2xl border-l-4 border-b-4 border-slate-900"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  🔥 {t("travelCompanion.popularBadge")}
                </div>
              </div>

              {/* Header */}
              <div className="bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl border-2 border-white/30 mb-4">
                  <HeadphonesIcon className="h-8 w-8 text-white" />
                </div>
                <h3
                  className="mb-2 text-2xl font-black text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {t("travelCompanion.title")}
                </h3>
                <p className="text-sm font-medium text-white/90">{t("travelCompanion.subtitle")}</p>
              </div>

              {/* Message */}
              <div className="border-b-2 border-dashed border-purple-200 bg-gradient-to-r from-purple-50 to-fuchsia-50 px-6 py-3">
                <p className="text-center text-sm font-bold text-purple-800">
                  {t("travelCompanion.tagline")}
                </p>
              </div>

              {/* Features */}
              <div className="p-6">
                <h4 className="text-slate-900 mb-4 text-sm font-black uppercase tracking-wider">
                  {t("travelCompanion.whatYouGet")}
                </h4>
                <ul className="mb-6 space-y-3">
                  {travelCompanionFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center border-2 border-slate-900">
                        <feature.icon className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-slate-700 text-sm font-medium">{t(feature.key)}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="border-t-2 border-dashed border-slate-200 pt-4">
                  <div className="mb-3 rounded-2xl bg-gradient-to-r from-purple-100 to-fuchsia-100 p-4 text-center border-2 border-slate-900">
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-600">
                      {t("travelCompanion.priceLabel")}
                    </p>
                    <p
                      className="mb-1 text-4xl font-black text-slate-900"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      199 PLN
                    </p>
                    <p className="text-xs font-medium text-slate-600">
                      {t("travelCompanion.duration")}
                    </p>
                  </div>
                  <div className="rounded-xl bg-[#BFFF00] p-3 border-2 border-slate-900">
                    <p className="mb-1 text-xs font-black text-slate-900">
                      ✓ {t("travelCompanion.payOnce")}
                    </p>
                    <p className="text-xs font-medium text-slate-800">
                      {t("travelCompanion.noLimits")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Express Service Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -1 }}
              animate={isPricingInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`group relative overflow-hidden rounded-3xl border-4 border-slate-900 bg-white transition-all duration-300 ${
                hoveredPlan === "express"
                  ? "scale-105 shadow-[8px_8px_0px_0px_#BFFF00]"
                  : "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_#BFFF00]"
              }`}
              onMouseEnter={() => setHoveredPlan("express")}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Urgent Badge */}
              <div className="absolute -top-1 -right-1 z-10">
                <div
                  className="bg-red-500 text-white px-4 py-2 font-black text-xs uppercase tracking-wider rounded-bl-2xl border-l-4 border-b-4 border-slate-900"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  ⚡ {t("express.urgentBadge")}
                </div>
              </div>

              {/* Header */}
              <div className="bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600 p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl border-2 border-white/30 mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3
                  className="mb-2 text-2xl font-black text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {t("express.title")}
                </h3>
                <p className="text-sm font-medium text-white/90">{t("express.subtitle")}</p>
              </div>

              {/* Message */}
              <div className="border-b-2 border-dashed border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-3">
                <p className="text-center text-sm font-bold text-blue-800">
                  {t("express.urgentMessage")}
                </p>
              </div>

              {/* Features */}
              <div className="p-6">
                <h4 className="text-slate-900 mb-4 text-sm font-black uppercase tracking-wider">
                  {t("express.whatYouGet")}
                </h4>
                <ul className="mb-6 space-y-3">
                  {expressFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center border-2 border-slate-900">
                        <feature.icon className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-slate-700 text-sm font-medium">{t(feature.key)}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="border-t-2 border-dashed border-slate-200 pt-4">
                  <div className="rounded-2xl bg-gradient-to-r from-blue-100 to-indigo-100 p-4 text-center border-2 border-slate-900">
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-600">
                      {t("express.priceLabel")}
                    </p>
                    <p
                      className="text-4xl font-black text-slate-900"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      299 PLN
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Premium Package Card - BEST VALUE */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 2 }}
              animate={isPricingInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`group relative overflow-hidden rounded-3xl border-4 border-slate-900 bg-slate-900 transition-all duration-300 ${
                hoveredPlan === "premium"
                  ? "scale-105 shadow-[8px_8px_0px_0px_#BFFF00]"
                  : "shadow-[6px_6px_0px_0px_#BFFF00] hover:shadow-[10px_10px_0px_0px_#BFFF00]"
              }`}
              onMouseEnter={() => setHoveredPlan("premium")}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Best Value Badge */}
              <div className="absolute -top-2 -right-2 z-10 rotate-12">
                <WavyBadge className="scale-110">BEST VALUE</WavyBadge>
              </div>

              {/* Header */}
              <div className="bg-gradient-to-br from-[#BFFF00] via-lime-400 to-emerald-400 p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900/20 backdrop-blur-sm rounded-2xl border-2 border-slate-900/30 mb-4">
                  <Sparkles className="h-8 w-8 text-slate-900" />
                </div>
                <h3
                  className="mb-2 text-2xl font-black text-slate-900"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {t("premiumPackage.title")}
                </h3>
                <p className="text-sm font-medium text-slate-800">{t("premiumPackage.subtitle")}</p>
              </div>

              {/* Features */}
              <div className="p-6">
                <h4 className="text-[#BFFF00] mb-4 text-sm font-black uppercase tracking-wider">
                  {t("premiumPackage.whatYouGet")}
                </h4>
                <ul className="mb-6 space-y-3">
                  {premiumFeatures.map((key, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0 w-5 h-5 bg-[#BFFF00] rounded-full flex items-center justify-center border-2 border-[#BFFF00]">
                        <CheckCircle className="h-3 w-3 text-slate-900" />
                      </div>
                      <span className="text-slate-300 text-sm font-medium">{t(key)}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="border-t-2 border-dashed border-slate-700 pt-4">
                  <div className="mb-3 rounded-2xl bg-slate-800 p-4 text-center border-2 border-[#BFFF00]">
                    <p className="mb-1 text-lg text-slate-500 line-through font-bold">598 PLN</p>
                    <p
                      className="text-4xl font-black text-[#BFFF00]"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      499 PLN
                    </p>
                    <p className="mt-1 text-xs font-medium text-slate-400">
                      {t("premiumPackage.packagePrice")}
                    </p>
                  </div>
                  <div className="rounded-xl bg-[#BFFF00] p-3 text-center border-2 border-slate-900">
                    <p
                      className="text-sm font-black text-slate-900"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      🎉 {t("premiumPackage.savings")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Disclaimer - Modern Style */}
      <section className="bg-slate-100 py-12 relative overflow-hidden">
        {/* Decorative dots */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-4 left-8 w-3 h-3 bg-[#BFFF00] rounded-full" />
          <div className="absolute top-12 left-20 w-2 h-2 bg-slate-400 rounded-full" />
          <div className="absolute bottom-8 right-12 w-4 h-4 bg-[#BFFF00] rounded-full" />
          <div className="absolute bottom-4 right-32 w-2 h-2 bg-slate-400 rounded-full" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl rounded-3xl bg-white p-6 text-center border-4 border-slate-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:p-8"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#BFFF00] rounded-2xl border-3 border-slate-900 mb-4">
              <HeadphonesIcon className="text-slate-900 h-8 w-8" />
            </div>
            <p className="text-slate-700 text-lg leading-relaxed font-medium">
              {t("disclaimer.text")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Bold & Energetic */}
      <section className="bg-slate-900 py-20 md:py-28 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -top-32 -left-32 w-64 h-64 border-4 border-[#BFFF00]/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -right-20 w-48 h-48 border-4 border-[#BFFF00]/20 rounded-full"
          />
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#BFFF00]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -15 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="mb-8 inline-block"
            >
              <StickerBadge variant="lime" rotate={-3}>
                <Sparkles className="h-5 w-5" />
                LET&apos;S GO!
              </StickerBadge>
            </motion.div>

            <h2
              className="mb-6 text-4xl font-black text-white md:text-5xl lg:text-6xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {t("cta.title")}
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-slate-300 font-medium">
              {t("cta.subtitle")}
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="gap-2 bg-[#BFFF00] text-slate-900 hover:bg-[#d4ff4d] font-black text-lg px-8 py-6 rounded-2xl border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    <MessageCircle className="h-6 w-6" />
                    {t("cta.whatsapp")}
                  </Button>
                </motion.div>
              </Link>
              <Link href="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="gap-2 bg-transparent text-white hover:bg-white/10 font-black text-lg px-8 py-6 rounded-2xl border-4 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] transition-all"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    <Mail className="h-6 w-6" />
                    {t("cta.contact")}
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
