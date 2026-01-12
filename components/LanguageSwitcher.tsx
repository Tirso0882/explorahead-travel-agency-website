"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/lib/i18n/routing";
import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Check } from "lucide-react";

type Locale = 'en' | 'pl';

const languages = [
  { code: 'en' as Locale, name: 'English', flag: '🇬🇧' },
  { code: 'pl' as Locale, name: 'Polski', flag: '🇵🇱' },
];

export function LanguageSwitcher() {
  const t = useTranslations('languages');
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (newLocale: Locale) => {
    if (newLocale === locale) {
      setIsOpen(false);
      return;
    }

    setIsOpen(false);

    // For static export, we need to construct the path manually from the current URL
    // because middleware doesn't run in static export
    const currentUrl = typeof window !== 'undefined' ? window.location.pathname : pathname;
    
    // Remove any existing locale prefix from the current path
    let cleanPath = currentUrl;
    if (cleanPath.startsWith('/pl/')) {
      cleanPath = cleanPath.substring(3); // Remove '/pl'
    } else if (cleanPath === '/pl') {
      cleanPath = '/';
    }
    // If path starts with /en/, remove it (though this shouldn't happen with 'as-needed')
    if (cleanPath.startsWith('/en/')) {
      cleanPath = cleanPath.substring(3);
    } else if (cleanPath === '/en') {
      cleanPath = '/';
    }
    
    // Ensure path starts with /
    if (!cleanPath.startsWith('/')) {
      cleanPath = '/' + cleanPath;
    }
    
    // Build the new path with correct locale prefix
    // With 'as-needed': en (default) has no prefix, pl has /pl prefix
    let targetPath: string;
    if (newLocale === 'pl') {
      // Add /pl prefix for Polish
      targetPath = cleanPath === '/' ? '/pl' : `/pl${cleanPath}`;
    } else {
      // English is default, no prefix needed
      targetPath = cleanPath;
    }
    
    // Use window.location.href to force full page load for static export
    // This ensures the correct locale HTML file is loaded
    window.location.href = targetPath;
  };

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-sand-light transition-colors"
        aria-label="Change language"
        disabled={isPending}
      >
        <Globe size={18} className="text-gray" />
        <span className="text-sm font-medium text-ocean hidden sm:inline">
          {currentLanguage.flag} {currentLanguage.name}
        </span>
        <span className="text-sm font-medium text-ocean sm:hidden">
          {currentLanguage.flag}
        </span>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 top-12 w-52 bg-white rounded-xl shadow-xl border border-gray-lighter z-50"
              style={{ padding: '8px' }}
            >
              <div>
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => switchLanguage(language.code)}
                    disabled={isPending}
                    className={`
                      w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg
                      transition-colors text-left
                      ${locale === language.code
                        ? 'bg-sand text-ocean font-medium'
                        : 'text-gray-dark hover:bg-sand-light'
                      }
                      ${isPending ? 'opacity-50 cursor-not-allowed' : ''}
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{language.flag}</span>
                      <span>{t(language.code)}</span>
                    </div>
                    {locale === language.code && (
                      <Check size={16} className="text-gold" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LanguageSwitcher;


