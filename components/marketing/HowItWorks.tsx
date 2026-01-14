"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { MessageCircle, Map, Luggage, Phone } from "lucide-react";
import { contact } from "@/config/contact";

export function HowItWorks() {
  const t = useTranslations('marketing.howItWorks');

  // WhatsApp link: https://wa.me/[country code][number without + or spaces]
  const whatsappNumber = contact.phone.replace(/[\s+]/g, '');
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
    <section className="section bg-sand-light">
      <div className="container max-w-7xl mx-auto px-5 py-20">
        {/* Section Header - Explicitly centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center mb-12"
        >
          <span className="inline-block px-6 py-2.5 mb-6 text-sm font-medium tracking-wider uppercase text-gold text-center">
            {t('badge')}
          </span>
          <h2 className="text-ocean mb-8 text-4xl md:text-5xl font-heading text-center max-w-3xl">
            {t('title')}
          </h2>
          {/* Subtitle - Centered horizontally and vertically balanced with title, one line */}
          <p className="text-gray-dark text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-center whitespace-nowrap">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-ocean/5 rounded-2xl py-4 px-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {trustItems.map((item) => (
              <div key={item.key} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold" />
                <span className="text-ocean font-medium text-sm md:text-base">
                  {t(item.key)}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Spacer - Icon extends 40px above card, so need 40px + breathing room */}
        <div style={{ height: '80px' }} />

        {/* Step Cards - With icons peeking from top edge */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="relative flex flex-col items-center"
            >
              {/* Card Container - Icon center is at card top edge (0px). Icon is 80px tall, so:
                  - Icon top: -40px (above card)
                  - Icon bottom: 40px (inside card, 40px overlap)
                  - Card padding-top: 72px (40px overlap + 32px clear space) */}
              <div className="bg-white rounded-2xl shadow-md w-full text-center pb-8 px-4 min-w-0" style={{ paddingTop: '72px' }}>
                {/* Title - with clear spacing below icon, no overlap */}
                <h3 className="font-heading text-ocean mb-4 font-semibold">
                  {t(step.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-gray-dark mb-5 leading-relaxed text-base">
                  {t(step.descriptionKey)}
                </p>

                {/* Tags */}
                <div className="text-gold text-sm space-y-1">
                  {step.tags.map((tag, tagIndex) => (
                    <p key={tagIndex} className="font-medium">
                      {tag}
                    </p>
                  ))}
                </div>
              </div>

              {/* Icon - positioned so center aligns with card top edge (half in, half out) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-ocean flex items-center justify-center shadow-lg">
                    <step.icon size={36} className="text-white" strokeWidth={1.5} />
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-gold flex items-center justify-center shadow-md">
                    <span className="text-white text-sm font-bold">{step.stepNumber}</span>
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gradient-to-br from-ocean via-ocean to-ocean-dark rounded-3xl shadow-2xl text-white text-center"
          style={{ padding: '20px 40px' }}
        >
          {/* Title - Centered */}
          <h3 className="text-3xl md:text-4xl font-heading mb-6 text-gold text-center">
            {t('cta.title')}
          </h3>
          
          {/* Subtitle - Centered with respect to title */}
          <div className="flex justify-center mb-12">
            <p className="text-white/80 text-lg max-w-xl text-center">
              {t('cta.subtitle')}
            </p>
          </div>
          
          {/* Buttons - Centered with spacing */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            {/* WhatsApp Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-4 text-white font-semibold text-lg lg:text-xl rounded-full hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto"
              style={{ 
                backgroundColor: '#25D366',
                color: 'white',
                padding: '16px 48px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#20BA5A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#25D366';
              }}
            >
              <svg 
                viewBox="0 0 24 24" 
                className="w-10 h-10"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t('cta.chatNow')}
            </a>
            
            {/* Book a Quick Call Button */}
            <a
              href={`tel:${contact.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center justify-center gap-4 bg-ocean-light border-2 border-white/30 text-white font-semibold text-lg lg:text-xl rounded-full hover:bg-ocean-dark hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto"
              style={{ padding: '16px 48px' }}
            >
              <Phone size={40} />
              {t('cta.bookCall')}
            </a>
          </div>

          {/* Social Proof - Equidistant from buttons and bottom border */}
          <p className="text-white/60 text-sm text-center" style={{ marginTop: '20px', marginBottom: '0' }}>
            {t('cta.socialProof')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default HowItWorks;
