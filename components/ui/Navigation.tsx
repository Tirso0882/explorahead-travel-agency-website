"use client";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getNavPages } from "@/config/pages";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";

export function Navigation() {
  const t = useTranslations("navigation");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const prevPathnameRef = useRef(pathname);

  // Get published navigation pages from config
  const publishedNavPages = getNavPages();

  // Map page config to nav links with translations
  const navLinks = publishedNavPages.map((page) => ({
    href: page.slug === "" ? "/" : `/${page.slug}`,
    label: t(page.slug === "" ? "home" : page.slug),
  }));

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
        className={`fixed top-0 right-0 left-0 z-[var(--z-sticky)] transition-all duration-300 ${
          isScrolled || !isHomePage ? "bg-white/95 shadow-md backdrop-blur-md border-b-2 border-forest/10" : "bg-transparent"
        } `}
      >
        <nav className="container-wide">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center">
              <Logo
                width={180}
                height={40}
                variant={isScrolled || !isHomePage ? "default" : "white"}
                className="transition-opacity group-hover:opacity-80"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-bold uppercase tracking-wide text-sm transition-colors ${
                    isScrolled || !isHomePage
                      ? "text-forest hover:text-lime-dark"
                      : "text-white/90 hover:text-lime"
                  } ${pathname === link.href ? "font-extrabold" : ""} `}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeNav"
                      className={`absolute right-0 -bottom-1 left-0 h-1 rounded-full ${isScrolled || !isHomePage ? "bg-lime" : "bg-lime"} `}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Language Switcher */}
            <div className="hidden items-center gap-2 md:flex">
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`rounded-lg p-2 transition-colors md:hidden ${
                isScrolled || !isHomePage
                  ? "text-forest hover:bg-lime/20"
                  : "text-white hover:bg-white/10"
              } `}
              aria-label={t("toggleMenu")}
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
            <div className="border-forest/10 border-t-2 bg-white shadow-xl">
              <div className="container py-6">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`rounded-lg px-4 py-3 font-bold uppercase tracking-wide text-sm transition-colors ${
                        pathname === link.href
                          ? "bg-lime text-forest"
                          : "text-forest hover:bg-lime/20"
                      } `}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <hr className="border-forest/10 my-2" />
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
