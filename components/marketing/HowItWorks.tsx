"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { MessageCircle, Map, Luggage, Phone } from "lucide-react";
import { contact } from "@/config/contact";

export function HowItWorks() {
  const t = useTranslations("marketing.howItWorks");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // WhatsApp link: https://wa.me/[country code][number without + or spaces]
  const whatsappNumber = contact.phone.replace(/[\s+]/g, "");
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const steps = [
    {
      icon: MessageCircle,
      stepNumber: 1,
      titleKey: "steps.connect.title",
      descriptionKey: "steps.connect.description",
      tags: ["Response in minutes", "Choose your preferred way"],
    },
    {
      icon: Map,
      stepNumber: 2,
      titleKey: "steps.plan.title",
      descriptionKey: "steps.plan.description",
      tags: ["Flights • Hotels • Activities", "Hidden gems"],
    },
    {
      icon: Luggage,
      stepNumber: 3,
      titleKey: "steps.travel.title",
      descriptionKey: "steps.travel.description",
      tags: ["24/7 support • Zero stress", "Pure adventure"],
    },
  ];

  const trustItems = [
    { key: "trust.noObligation" },
    { key: "trust.freeConsultation" },
    { key: "trust.instantResponse" },
  ];

  return (
    <section ref={sectionRef} className="section bg-sand-light">
      <div className="container mx-auto max-w-7xl px-5 py-20">
        {/* Section Header - Explicitly centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-center justify-center"
        >
          <span className="text-gold mb-6 inline-block px-6 py-2.5 text-center text-sm font-medium tracking-wider uppercase">
            {t("badge")}
          </span>
          <h2 className="text-ocean font-heading mb-8 max-w-3xl text-center text-4xl md:text-5xl">
            {t("title")}
          </h2>
          {/* Subtitle - Centered horizontally and vertically balanced with title, one line */}
          <p className="text-gray-dark text-center text-sm leading-relaxed whitespace-nowrap sm:text-base md:text-lg lg:text-xl">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-ocean/5 rounded-2xl px-6 py-4"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {trustItems.map((item) => (
              <div key={item.key} className="flex items-center gap-2">
                <span className="bg-gold h-2 w-2 rounded-full" />
                <span className="text-ocean text-sm font-medium md:text-base">{t(item.key)}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Spacer - Icon extends 40px above card, so need 40px + breathing room */}
        <div style={{ height: "80px" }} />

        {/* Step Cards - With icons peeking from top edge */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.titleKey}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="relative flex flex-col items-center"
            >
              {/* Card Container - Icon center is at card top edge (0px). Icon is 80px tall, so:
                  - Icon top: -40px (above card)
                  - Icon bottom: 40px (inside card, 40px overlap)
                  - Card padding-top: 72px (40px overlap + 32px clear space) */}
              <div
                className="w-full min-w-0 rounded-2xl bg-white px-4 pb-8 text-center shadow-md"
                style={{ paddingTop: "72px" }}
              >
                {/* Title - with clear spacing below icon, no overlap */}
                <h3 className="font-heading text-ocean mb-4 font-semibold">{t(step.titleKey)}</h3>

                {/* Description */}
                <p className="text-gray-dark mb-5 text-base leading-relaxed">
                  {t(step.descriptionKey)}
                </p>

                {/* Tags */}
                <div className="text-gold space-y-1 text-sm">
                  {step.tags.map((tag, tagIndex) => (
                    <p key={tagIndex} className="font-medium">
                      {tag}
                    </p>
                  ))}
                </div>
              </div>

              {/* Icon - positioned so center aligns with card top edge (half in, half out) */}
              <div className="absolute top-0 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="bg-ocean flex h-20 w-20 items-center justify-center rounded-full shadow-lg">
                    <step.icon size={36} className="text-white" strokeWidth={1.5} />
                  </div>
                  {/* Step Number Badge */}
                  <div className="bg-gold absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full shadow-md">
                    <span className="text-sm font-bold text-white">{step.stepNumber}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Spacer - Clear separation between cards and CTA */}
        <div className="h-16 md:h-20" />

        {/* CTA Section - With clear vertical spacing and consistent padding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="from-ocean via-ocean to-ocean-dark rounded-3xl bg-gradient-to-br text-center text-white shadow-2xl"
          style={{ padding: "20px 40px" }}
        >
          {/* Title - Centered */}
          <h3 className="font-heading text-gold mb-6 text-center text-3xl md:text-4xl">
            {t("cta.title")}
          </h3>

          {/* Subtitle - Centered with respect to title */}
          <div className="mb-12 flex justify-center">
            <p className="max-w-xl text-center text-lg text-white/80">{t("cta.subtitle")}</p>
          </div>

          {/* Buttons - Centered with spacing */}
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
              <svg viewBox="0 0 24 24" className="h-10 w-10" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t("cta.chatNow")}
            </a>

            {/* Book a Quick Call Button */}
            <a
              href={`tel:${contact.phone.replace(/\s+/g, "")}`}
              className="bg-ocean-light hover:bg-ocean-dark inline-flex w-full items-center justify-center gap-4 rounded-full border-2 border-white/30 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 sm:w-auto lg:text-xl"
              style={{ padding: "16px 48px" }}
            >
              <Phone size={40} />
              {t("cta.bookCall")}
            </a>
          </div>

          {/* Social Proof - Equidistant from buttons and bottom border */}
          <p
            className="text-center text-sm text-white/60"
            style={{ marginTop: "20px", marginBottom: "0" }}
          >
            {t("cta.socialProof")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default HowItWorks;
