"use client";

import { Button } from "@/components/ui/Button";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import {
    ArrowRight,
    Award,
    Compass,
    Globe,
    Heart,
    Shield,
    Sparkles,
    Users,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { isFeatureEnabled } from "@/config/features";

export default function AboutPage() {
  const t = useTranslations('about');
  const storyRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
  const teamRef = useRef<HTMLElement>(null);
  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" });
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const isTeamInView = useInView(teamRef, { once: true, margin: "-100px" });
  
  const values = [
    {
      icon: Heart,
      titleKey: "values.items.passion.title",
      descriptionKey: "values.items.passion.description",
    },
    {
      icon: Globe,
      titleKey: "values.items.expertise.title",
      descriptionKey: "values.items.expertise.description",
    },
    {
      icon: Users,
      titleKey: "values.items.personal.title",
      descriptionKey: "values.items.personal.description",
    },
    {
      icon: Shield,
      titleKey: "values.items.trust.title",
      descriptionKey: "values.items.trust.description",
    },
    {
      icon: Sparkles,
      titleKey: "values.items.innovation.title",
      descriptionKey: "values.items.innovation.description",
    },
    {
      icon: Award,
      titleKey: "values.items.excellence.title",
      descriptionKey: "values.items.excellence.description",
    },
  ];

  const getStats = () => {
    const baseStats = [
      { value: "50K+", labelKey: "stats.happyTravelers" },
      { value: "98%", labelKey: "stats.satisfactionRate" },
    ];
    
    if (isFeatureEnabled("destinations")) {
      baseStats.splice(2, 0, { value: "100+", labelKey: "stats.destinations" });
    }
    
    return baseStats;
  };

  const team = [
    {
      nameKey: "team.members.alexandra.name",
      roleKey: "team.members.alexandra.role",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
      bioKey: "team.members.alexandra.bio",
    },
    {
      nameKey: "team.members.marcus.name",
      roleKey: "team.members.marcus.role",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
      bioKey: "team.members.marcus.bio",
    },
    {
      nameKey: "team.members.sofia.name",
      roleKey: "team.members.sofia.role",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
      bioKey: "team.members.sofia.bio",
    },
    {
      nameKey: "team.members.james.name",
      roleKey: "team.members.james.role",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      bioKey: "team.members.james.bio",
    },
  ];
  
  const stats = getStats();

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
            alt="Road trip through mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-ocean/80" />
        </div>

        <div className="relative z-10 container text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-2.5 mb-6 text-sm font-medium tracking-wider uppercase bg-gold/20 backdrop-blur-sm rounded-full border border-gold/30 text-gold"
          >
            {t('hero.badge')}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-heading mb-6"
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto"
          >
            {t('hero.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-tiny text-gold font-semibold mb-2 block">
                {t('story.badge')}
              </span>
              <h2 className="text-ocean mb-6">
                {t('story.title')}
              </h2>
              <div className="space-y-4 text-gray-dark leading-relaxed">
                <p>
                  {t('story.paragraph1')}
                </p>
                <p>
                  {t('story.paragraph2')}
                </p>
                <p>
                  {t('story.paragraph3')}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop"
                  alt="Beautiful travel destination"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              {/* Stats Overlay */}
              <div className="absolute -bottom-8 -left-8 right-8 bg-white rounded-xl shadow-xl p-6">
                <div className={`grid gap-4 ${stats.length === 4 ? "grid-cols-2" : "grid-cols-3"}`}>
                  {stats.map((stat) => (
                    <div key={stat.labelKey} className="text-center">
                      <div className="text-2xl md:text-3xl font-heading text-gold">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray">{t(stat.labelKey)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="section bg-sand-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-tiny text-gold font-semibold mb-2 block">
              {t('values.badge')}
            </span>
            <h2 className="text-ocean mb-4">{t('values.title')}</h2>
            <p className="text-gray-dark text-lg max-w-2xl mx-auto">
              {t('values.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.titleKey}
                initial={{ opacity: 0, y: 30 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow"
                style={{ padding: '20px' }}
              >
                <div className="w-14 h-14 rounded-xl bg-ocean flex items-center justify-center mb-6">
                  <value.icon size={28} className="text-gold" />
                </div>
                <h3 className="text-xl font-heading text-ocean mb-3">
                  {t(value.titleKey)}
                </h3>
                <p className="text-gray-dark">{t(value.descriptionKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-tiny text-gold font-semibold mb-2 block">
              {t('team.badge')}
            </span>
            <h2 className="text-ocean mb-4">{t('team.title')}</h2>
            <p className="text-gray-dark text-lg max-w-2xl mx-auto">
              {t('team.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.nameKey}
                initial={{ opacity: 0, y: 30 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={t(member.nameKey)}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-heading text-ocean">{t(member.nameKey)}</h3>
                <p className="text-gold font-medium mb-2">{t(member.roleKey)}</p>
                <p className="text-gray-dark text-sm">{t(member.bioKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-sm bg-sand-light">
        <div className="container">
          <p className="text-center text-gray mb-8">
            {t('partners.text')}
          </p>
          <div className="flex items-center justify-center gap-12 flex-wrap opacity-50">
            {["IATA", "ASTA", "Virtuoso", "Condé Nast", "Travel + Leisure"].map(
              (partner) => (
                <span
                  key={partner}
                  className="text-xl font-medium text-ocean tracking-wide"
                >
                  {partner}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-ocean">
        <div className="container text-center">
          <Compass size={48} className="text-gold mx-auto mb-6" />
          <h2 className="text-white mb-4">{t('cta.title')}</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/chat">
              <Button variant="gold" size="lg" rightIcon={<ArrowRight size={20} />}>
                {t('cta.startPlanning')}
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-ocean bg-white/10 backdrop-blur-sm shadow-lg hover:bg-white/20"
              >
                {t('cta.contactUs')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

