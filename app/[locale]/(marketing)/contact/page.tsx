"use client";

import { Button } from "@/components/ui/Button";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
    CheckCircle,
    Clock,
    Facebook,
    Instagram,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Send,
    Twitter,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const t = useTranslations('contact');
  const tFooter = useTranslations('footer');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const contactInfo = [
    {
      icon: Mail,
      labelKey: "info.email",
      value: tFooter('contact.email'),
      href: `mailto:${tFooter('contact.email')}`,
    },
    {
      icon: Phone,
      labelKey: "info.phone",
      value: tFooter('contact.phone'),
      href: `tel:${tFooter('contact.phone').replace(/\s/g, '')}`,
    },
    {
      icon: MapPin,
      labelKey: "info.address",
      value: tFooter('contact.address').replace(/\n/g, ', '),
      href: null,
    },
    {
      icon: Clock,
      labelKey: "info.hours",
      value: t('info.hoursValue'),
      href: null,
    },
  ];

  const requestTypes = [
    { value: "", label: t('form.requestTypes.select') },
    { value: "GENERAL", label: t('form.requestTypes.general') },
    { value: "SUPPORT", label: t('form.requestTypes.support') },
    { value: "PARTNERSHIP", label: t('form.requestTypes.partnership') },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      
      // Use Formspree for form submission (free tier)
      // Replace YOUR_FORM_ID with your actual Formspree form ID
      // Sign up at https://formspree.io and create a form to get your ID
      const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 
                                 "https://formspree.io/f/YOUR_FORM_ID";
      
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSubmitted(true);
      toast.success("Message sent successfully! We'll be in touch soon.");

      // Reset form
      if (formRef.current) {
        formRef.current.reset();
      }

      // Reset success state after delay
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=2070&auto=format&fit=crop"
            alt="Travel planning"
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

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-ocean mb-2">{t('form.title')}</h2>
              <p className="text-gray-dark mb-8">
                {t('form.subtitle')}
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-forest/10 rounded-2xl p-8 text-center"
                >
                  <CheckCircle size={48} className="text-forest mx-auto mb-4" />
                  <h3 className="text-xl font-heading text-ocean mb-2">
                    {t('form.successTitle')}
                  </h3>
                  <p className="text-gray-dark">
                    {t('form.successMessage')}
                  </p>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <Select
                    label={t('form.typeOfRequest')}
                    name="requestType"
                    options={requestTypes}
                    required
                  />

                  <Input
                    label={t('form.companyName')}
                    name="companyName"
                    placeholder={t('form.companyPlaceholder')}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label={t('form.firstName')}
                      name="firstName"
                      placeholder={t('form.firstNamePlaceholder')}
                      required
                    />
                    <Input
                      label={t('form.lastName')}
                      name="lastName"
                      placeholder={t('form.lastNamePlaceholder')}
                      required
                    />
                  </div>

                  <Input
                    label={t('form.email')}
                    name="email"
                    type="email"
                    placeholder={t('form.emailPlaceholder')}
                    required
                  />

                  <Input
                    label={t('form.phone')}
                    name="phone"
                    type="tel"
                    placeholder={t('form.phonePlaceholder')}
                  />

                  <Textarea
                    label={t('form.message')}
                    name="message"
                    placeholder={t('form.messagePlaceholder')}
                    required
                  />

                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    fullWidth
                    isLoading={isSubmitting}
                    rightIcon={<Send size={18} />}
                  >
                    {t('form.sendButton')}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-ocean mb-2">{t('info.title')}</h2>
              <p className="text-gray-dark mb-8">
                {t('info.subtitle')}
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info) => (
                  <div key={info.labelKey} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-sand flex items-center justify-center flex-shrink-0">
                      <info.icon size={24} className="text-ocean" />
                    </div>
                    <div>
                      <p className="text-sm text-gray font-medium">{t(info.labelKey)}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-ocean hover:text-gold transition-colors font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-charcoal">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mb-16">
                <h3 className="font-heading text-ocean mb-4">{t('info.followUs')}</h3>
                <div className="flex gap-4">
                  {[
                    { icon: Instagram, href: "#", labelKey: "info.socialLabels.instagram" },
                    { icon: Facebook, href: "#", labelKey: "info.socialLabels.facebook" },
                    { icon: Twitter, href: "#", labelKey: "info.socialLabels.twitter" },
                  ].map((social) => (
                    <a
                      key={social.labelKey}
                      href={social.href}
                      className="w-12 h-12 rounded-xl bg-ocean flex items-center justify-center hover:bg-gold transition-colors group"
                      aria-label={t(social.labelKey)}
                    >
                      <social.icon
                        size={20}
                        className="text-white group-hover:text-ocean"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-96 bg-sand-light relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={48} className="text-ocean mx-auto mb-4 opacity-50" />
            <p className="text-gray">
              {t('map.placeholder')}
            </p>
          </div>
        </div>
        {/* You would integrate Google Maps or Mapbox here */}
      </section>

      {/* FAQ Teaser */}
      <section className="section bg-ocean">
        <div className="container text-center">
          <h2 className="text-white mb-4">{t('faq.title')}</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            {t('faq.subtitle')}
          </p>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-ocean bg-white/10 backdrop-blur-sm shadow-lg hover:bg-white/20"
          >
            {t('faq.button')}
          </Button>
        </div>
      </section>
    </>
  );
}

