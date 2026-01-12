"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { isFeatureEnabled } from "@/config/features";

// TikTok icon component (custom SVG)
const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const socialLinks = [
  { 
    href: "https://www.instagram.com/explorahead?igsh=MWJ0c3Z3OWsxODJyaQ%3D%3D&utm_source=qr", 
    icon: Instagram, 
    label: "Instagram",
    handle: "@explorahead"
  },
  { 
    href: "https://www.facebook.com/share/16ZTZYYuyR/?mibextid=wwXIfr", 
    icon: Facebook, 
    label: "Facebook",
    handle: "ExplorAhead"
  },
  { 
    href: "https://www.tiktok.com/@explorahead", 
    icon: TikTokIcon, 
    label: "TikTok",
    handle: "@explorahead"
  },
];

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('navigation');
  const tCommon = useTranslations('common');
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    explore: [
      { href: "/destinations", label: tNav('destinations'), featureFlag: "destinations" as const },
      { href: "/about", label: t('links.aboutUs') },
      { href: "/contact", label: tNav('contact') },
    ].filter((link) => !link.featureFlag || isFeatureEnabled(link.featureFlag)),
    legal: [
      { href: "/privacy", label: t('links.privacy') },
      { href: "/terms", label: t('links.terms') },
      { href: "/cookies", label: t('links.cookies') },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-ocean to-ocean-dark text-white">
      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-start mb-6 group">
              <Logo
                width={240}
                height={60}
                variant="white"
                className="transition-opacity group-hover:opacity-80"
              />
            </Link>
            <p className="text-white mb-8 leading-relaxed text-lg max-w-md">
              {t('tagline')}
            </p>
            
            {/* Social Media */}
            <div>
              <h4 className="font-heading text-2xl mb-8 font-bold tracking-tight" style={{ color: '#D4A574' }}>{t('social.title')}</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 hover:bg-gold hover:text-ocean transition-all duration-300 hover:scale-110 shadow-lg"
                    aria-label={social.label}
                  >
                    <social.icon size={24} className="text-white group-hover:text-ocean" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-heading text-xl mb-6 font-semibold" style={{ color: '#D4A574' }}>{t('explore')}</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white !text-white hover:!text-gold hover:translate-x-1 transition-all inline-block"
                    style={{ color: '#ffffff' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-xl mb-6 font-semibold" style={{ color: '#D4A574' }}>{t('contactUs')}</h4>
            <ul className="space-y-5">
              <li>
                <a
                  href={`mailto:${t('contact.email')}`}
                  className="group flex items-center gap-3 hover:text-gold transition-colors"
                  style={{ color: '#ffffff' }}
                >
                  <Mail size={16} className="flex-shrink-0 text-white group-hover:text-gold transition-colors" />
                  <span className="break-all text-white">{t('contact.email')}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${t('contact.phone')}`}
                  className="group flex items-center gap-3 hover:text-gold transition-colors"
                  style={{ color: '#ffffff' }}
                >
                  <Phone size={16} className="flex-shrink-0 text-white group-hover:text-gold transition-colors" />
                  <span className="text-white">{t('contact.phone')}</span>
                </a>
              </li>
              <li>
                <div className="group flex items-center gap-3 hover:text-gold transition-colors" style={{ color: '#ffffff' }}>
                  <MapPin size={16} className="flex-shrink-0 text-white group-hover:text-gold transition-colors" />
                  <span style={{ whiteSpace: 'pre-line', color: '#ffffff' }}>
                    {t('contact.address')}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/80 text-sm">
              © {currentYear} {tCommon('appName')}. {t('rights')}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 text-sm hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

