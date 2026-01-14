"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Shield,
  Compass,
  HeartHandshake,
  User,
} from "lucide-react";

export function WhyChooseUs() {
  const t = useTranslations('marketing.whyChooseUs');

  const benefits = [
    {
      icon: Shield,
      titleKey: "items.zeroStress.title",
      descriptionKey: "items.zeroStress.description",
      color: "bg-ocean",
    },
    {
      icon: Compass,
      titleKey: "items.authenticity.title",
      descriptionKey: "items.authenticity.description",
      color: "bg-gold",
    },
    {
      icon: HeartHandshake,
      titleKey: "items.supportReturn.title",
      descriptionKey: "items.supportReturn.description",
      color: "bg-forest",
    },
    {
      icon: User,
      titleKey: "items.personalized.title",
      descriptionKey: "items.personalized.description",
      color: "bg-terracotta",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-header"
          style={{ maxWidth: '64rem', marginBottom: '4rem' }} /* max-w-5xl to match grid below, mb-16 */
        >
          <h2 className="text-ocean mb-6 text-4xl md:text-5xl font-heading">
            {t('title')}
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex gap-6"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div
                    className={`w-14 h-14 rounded-xl ${benefit.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <benefit.icon size={28} className="text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-heading text-ocean mb-2 group-hover:text-gold transition-colors">
                    {t(benefit.titleKey)}
                  </h3>
                  <p className="text-gray-dark leading-relaxed">
                    {t(benefit.descriptionKey)}
                  </p>
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

