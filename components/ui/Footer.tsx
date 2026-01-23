"use client";

import { getFooterPages } from "@/config/pages";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Logo } from "./Logo";
import { SocialIcons } from "./SocialIcons";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("navigation");
  const tCommon = useTranslations("common");
  const currentYear = new Date().getFullYear();

  // Get published footer pages from config
  const publishedFooterPages = getFooterPages();

  // Separate main pages from legal pages
  const mainPages = publishedFooterPages.filter(
    (p) => !["privacy", "terms", "cookies"].includes(p.slug) && p.slug !== ""
  );
  const legalPages = publishedFooterPages.filter((p) =>
    ["privacy", "terms", "cookies"].includes(p.slug)
  );

  const footerLinks = {
    explore: mainPages.map((page) => ({
      href: `/${page.slug}`,
      label: page.slug === "about" ? t("links.aboutUs") : tNav(page.slug),
    })),
    legal: legalPages.map((page) => ({
      href: `/${page.slug}`,
      label: t(`links.${page.slug}`),
    })),
  };

  return (
    <footer className="from-forest to-forest-dark bg-gradient-to-b text-white">
      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="group mb-6 inline-flex items-start">
              <Logo
                width={240}
                height={60}
                variant="white"
                className="transition-opacity group-hover:opacity-80"
              />
            </Link>
            <p className="mb-8 max-w-md text-lg leading-relaxed text-white">{t("tagline")}</p>

            {/* Social Media */}
            <div>
              <h4
                className="font-heading mb-8 text-2xl font-bold tracking-tight uppercase"
                style={{ color: "#BFFF00" }}
              >
                {t("social.title")}
              </h4>
              <SocialIcons variant="footer" iconSize={24} />
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-heading mb-6 text-xl font-bold uppercase" style={{ color: "#BFFF00" }}>
              {t("explore")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:!text-lime inline-block !text-white text-white transition-all hover:translate-x-1 font-medium"
                    style={{ color: "#ffffff" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading mb-6 text-xl font-bold uppercase" style={{ color: "#BFFF00" }}>
              {t("contactUs")}
            </h4>
            <ul className="space-y-5">
              <li>
                <a
                  href={`mailto:${t("contact.email")}`}
                  className="group hover:text-lime flex items-center gap-3 transition-colors"
                  style={{ color: "#ffffff" }}
                >
                  <Mail
                    size={16}
                    className="group-hover:text-lime flex-shrink-0 text-white transition-colors"
                  />
                  <span className="break-all text-white">{t("contact.email")}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${t("contact.phone")}`}
                  className="group hover:text-lime flex items-center gap-3 transition-colors"
                  style={{ color: "#ffffff" }}
                >
                  <Phone
                    size={16}
                    className="group-hover:text-lime flex-shrink-0 text-white transition-colors"
                  />
                  <span className="text-white">{t("contact.phone")}</span>
                </a>
              </li>
              <li>
                <div
                  className="group hover:text-lime flex items-center gap-3 transition-colors"
                  style={{ color: "#ffffff" }}
                >
                  <MapPin
                    size={16}
                    className="group-hover:text-lime flex-shrink-0 text-white transition-colors"
                  />
                  <span style={{ whiteSpace: "pre-line", color: "#ffffff" }}>
                    {t("contact.address")}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-lime/20">
        <div className="container-wide py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-col items-baseline gap-2 sm:flex-row sm:gap-4">
              <p className="text-sm text-white/80">
                © {currentYear} {tCommon("appName")}. {t("rights")}
              </p>
              <span className="hidden text-sm text-white/40 sm:inline">|</span>
              <p className="text-sm text-white/60">
                {t("developedBy")}{" "}
                <a
                  href="https://redkraken.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lime font-bold transition-colors hover:text-white"
                >
                  RedKraken
                </a>
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-lime text-sm text-white/80 transition-colors"
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
