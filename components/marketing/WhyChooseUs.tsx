"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { Shield, Compass, HeartHandshake, User } from "lucide-react";

export function WhyChooseUs() {
  const t = useTranslations("marketing.whyChooseUs");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Shield,
      titleKey: "items.zeroStress.title",
      descriptionKey: "items.zeroStress.description",
      color: "bg-forest",
    },
    {
      icon: Compass,
      titleKey: "items.authenticity.title",
      descriptionKey: "items.authenticity.description",
      color: "bg-lime",
    },
    {
      icon: HeartHandshake,
      titleKey: "items.supportReturn.title",
      descriptionKey: "items.supportReturn.description",
      color: "bg-forest-light",
    },
    {
      icon: User,
      titleKey: "items.personalized.title",
      descriptionKey: "items.personalized.description",
      color: "bg-terracotta",
    },
  ];

  return (
    <section ref={sectionRef} className="section bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
          style={{
            maxWidth: "64rem",
            marginBottom: "4rem",
          }} /* max-w-5xl to match grid below, mb-16 */
        >
          <h2 className="text-forest font-heading mb-6 text-4xl md:text-5xl">{t("title")}</h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.titleKey}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex gap-6"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div
                    className={`h-14 w-14 rounded-xl ${benefit.color} flex items-center justify-center shadow-sticker transition-transform duration-300 group-hover:scale-110 border-2 border-black`}
                  >
                    <benefit.icon size={28} className={benefit.color === 'bg-lime' ? 'text-forest' : 'text-white'} strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="font-heading text-forest group-hover:text-lime-dark mb-2 text-xl transition-colors uppercase">
                    {t(benefit.titleKey)}
                  </h3>
                  <p className="text-gray-dark leading-relaxed">{t(benefit.descriptionKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
