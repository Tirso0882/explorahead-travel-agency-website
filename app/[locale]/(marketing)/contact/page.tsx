"use client";

import { Button } from "@/components/ui/Button";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const t = useTranslations("contact");
  const tFooter = useTranslations("footer");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      labelKey: "info.email",
      value: tFooter("contact.email"),
      href: `mailto:${tFooter("contact.email")}`,
    },
    {
      icon: Phone,
      labelKey: "info.phone",
      value: tFooter("contact.phone"),
      href: `tel:${tFooter("contact.phone").replace(/\s/g, "")}`,
    },
    {
      icon: MapPin,
      labelKey: "info.address",
      value: tFooter("contact.address").replace(/\n/g, ", "),
      href: null,
    },
    {
      icon: Clock,
      labelKey: "info.hours",
      value: t("info.hoursValue"),
      href: null,
    },
  ];

  const requestTypes = [
    { value: "", label: t("form.requestTypes.select") },
    { value: "GENERAL", label: t("form.requestTypes.general") },
    { value: "SUPPORT", label: t("form.requestTypes.support") },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target as HTMLFormElement);

      // Use Formspree for form submission (free tier)
      // Replace YOUR_FORM_ID with your actual Formspree form ID
      // Sign up at https://formspree.io and create a form to get your ID
      const FORMSPREE_ENDPOINT =
        process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/YOUR_FORM_ID";

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
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
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=2070&auto=format&fit=crop"
            alt="Travel planning"
            fill
            className="object-cover"
            priority
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
            className="mx-auto max-w-2xl text-lg text-white/80 md:text-xl"
          >
            {t("hero.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={sectionRef} className="section">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-ocean mb-2">{t("form.title")}</h2>
              <p className="text-gray-dark mb-8">{t("form.subtitle")}</p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-forest/10 rounded-2xl p-8 text-center"
                >
                  <CheckCircle size={48} className="text-forest mx-auto mb-4" />
                  <h3 className="font-heading text-ocean mb-2 text-xl">{t("form.successTitle")}</h3>
                  <p className="text-gray-dark">{t("form.successMessage")}</p>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <Select
                    label={t("form.typeOfRequest")}
                    name="requestType"
                    options={requestTypes}
                    required
                  />

                  <Input
                    label={t("form.companyName")}
                    name="companyName"
                    placeholder={t("form.companyPlaceholder")}
                  />

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Input
                      label={t("form.firstName")}
                      name="firstName"
                      placeholder={t("form.firstNamePlaceholder")}
                      required
                    />
                    <Input
                      label={t("form.lastName")}
                      name="lastName"
                      placeholder={t("form.lastNamePlaceholder")}
                      required
                    />
                  </div>

                  <Input
                    label={t("form.email")}
                    name="email"
                    type="email"
                    placeholder={t("form.emailPlaceholder")}
                    required
                  />

                  <Input
                    label={t("form.phone")}
                    name="phone"
                    type="tel"
                    placeholder={t("form.phonePlaceholder")}
                  />

                  <Textarea
                    label={t("form.message")}
                    name="message"
                    placeholder={t("form.messagePlaceholder")}
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
                    {t("form.sendButton")}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-ocean mb-2">{t("info.title")}</h2>
              <p className="text-gray-dark mb-8">{t("info.subtitle")}</p>

              <div style={{ marginBottom: "4rem" }}>
                {contactInfo.map((info, index) => (
                  <div
                    key={info.labelKey}
                    className="flex items-center gap-4"
                    style={{ marginBottom: index < contactInfo.length - 1 ? "1rem" : "0" }}
                  >
                    <div className="bg-sand flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl">
                      <info.icon size={24} className="text-ocean" />
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-ocean hover:text-gold text-lg font-medium transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-charcoal text-lg font-medium">{info.value}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div style={{ marginTop: "2rem", marginBottom: "4rem" }}>
                <h3 className="font-heading text-ocean mb-4">{t("info.followUs")}</h3>
                <SocialIcons variant="contact" iconSize={20} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
