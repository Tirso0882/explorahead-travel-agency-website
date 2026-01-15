"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { Plane, Home, Calendar, Sparkles, Phone, Heart } from "lucide-react";

export function ServicesPreview() {
  const t = useTranslations("marketing.servicesPreview");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Calendar,
      titleKey: "items.dailyPlanning.title",
      descriptionKey: "items.dailyPlanning.description",
      color: "bg-forest",
    },
    {
      icon: Plane,
      titleKey: "items.transport.title",
      descriptionKey: "items.transport.description",
      color: "bg-ocean",
    },
    {
      icon: Home,
      titleKey: "items.accommodation.title",
      descriptionKey: "items.accommodation.description",
      color: "bg-gold",
    },
    {
      icon: Heart,
      titleKey: "items.experiences.title",
      descriptionKey: "items.experiences.description",
      color: "bg-terracotta",
    },
    {
      icon: Phone,
      titleKey: "items.support.title",
      descriptionKey: "items.support.description",
      color: "bg-ocean-light",
    },
  ];

  return (
    <section ref={sectionRef} className="section to-sand-light/30 bg-gradient-to-b from-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="text-ocean font-heading mb-6 text-4xl md:text-5xl">{t("title")}</h2>
          <p className="text-gray-dark text-lg leading-relaxed md:text-xl">{t("subtitle")}</p>
        </motion.div>

        {/* Services Grid */}
        <div className="mx-auto max-w-6xl">
          {/* First Row - 3 items */}
          <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.titleKey}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div
                  className="border-sand-dark/10 hover:border-ocean/20 h-full rounded-2xl border bg-white p-8 transition-all duration-300 hover:shadow-2xl"
                  style={{ padding: "20px" }}
                >
                  {/* Icon */}
                  <div
                    className={`h-16 w-16 rounded-2xl ${service.color} mb-6 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105`}
                  >
                    <service.icon size={32} className="text-white" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-ocean group-hover:text-gold mb-4 text-2xl transition-colors">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-gray-dark text-base leading-relaxed">
                    {t(service.descriptionKey)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second Row - 2 items centered */}
          <div className="flex flex-col items-stretch justify-center gap-6 md:flex-row lg:flex-row">
            {services.slice(3).map((service, index) => (
              <motion.div
                key={service.titleKey}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                className="group w-full md:max-w-[calc(50%-0.75rem)] lg:max-w-[calc(33.333%-1rem)]"
              >
                <div
                  className="border-sand-dark/10 hover:border-ocean/20 h-full rounded-2xl border bg-white p-8 transition-all duration-300 hover:shadow-2xl"
                  style={{ padding: "20px" }}
                >
                  {/* Icon */}
                  <div
                    className={`h-16 w-16 rounded-2xl ${service.color} mb-6 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105`}
                  >
                    <service.icon size={32} className="text-white" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-ocean group-hover:text-gold mb-4 text-2xl transition-colors">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-gray-dark text-base leading-relaxed">
                    {t(service.descriptionKey)}
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

export default ServicesPreview;
