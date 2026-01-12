"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { isFeatureEnabled } from "@/config/features";

export function Navigation() {
  const t = useTranslations('navigation');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const prevPathnameRef = useRef(pathname);
  
  const navLinks = [
    { href: "/", label: t('home') },
    { href: "/destinations", label: t('destinations'), featureFlag: "destinations" as const },
    { href: "/about", label: t('about') },
    { href: "/contact", label: t('contact') },
  ].filter((link) => !link.featureFlag || isFeatureEnabled(link.featureFlag));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes - this is an intentional response to
  // navigation events (user clicking a link), not an unnecessary effect
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: responding to route change
    setIsMobileMenuOpen(false);
      prevPathnameRef.current = pathname;
    }
  }, [pathname]);

  const isHomePage = pathname === "/";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`
          fixed top-0 left-0 right-0 z-[var(--z-sticky)]
          transition-all duration-300
          ${
            isScrolled || !isHomePage
              ? "bg-white/95 backdrop-blur-md shadow-md"
              : "bg-transparent"
          }
        `}
      >
        <nav className="container-wide">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Logo
                width={180}
                height={40}
                variant={isScrolled || !isHomePage ? "default" : "white"}
                className="transition-opacity group-hover:opacity-80"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative font-medium transition-colors
                    ${
                      isScrolled || !isHomePage
                        ? "text-ocean hover:text-gold"
                        : "text-white/90 hover:text-white"
                    }
                    ${pathname === link.href ? "font-semibold" : ""}
                  `}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeNav"
                      className={`
                        absolute -bottom-1 left-0 right-0 h-0.5 rounded-full
                        ${isScrolled || !isHomePage ? "bg-gold" : "bg-white"}
                      `}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Language Switcher */}
            <div className="hidden md:flex items-center gap-2">
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`
                md:hidden p-2 rounded-lg transition-colors
                ${
                  isScrolled || !isHomePage
                    ? "text-ocean hover:bg-sand-light"
                    : "text-white hover:bg-white/10"
                }
              `}
              aria-label={t('toggleMenu')}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 z-[var(--z-dropdown)] md:hidden"
          >
            <div className="bg-white shadow-xl border-t border-gray-lighter">
              <div className="container py-6">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`
                        py-3 px-4 rounded-lg font-medium transition-colors
                        ${
                          pathname === link.href
                            ? "bg-sand text-ocean"
                            : "text-ocean hover:bg-sand-light"
                        }
                      `}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <hr className="border-gray-lighter my-2" />
                  <div>
                    <LanguageSwitcher />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navigation;

