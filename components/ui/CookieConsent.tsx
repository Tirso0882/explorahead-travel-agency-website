"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Cookie, Settings, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

type ConsentStatus = "pending" | "accepted" | "declined" | "customized";

interface CookiePreferences {
  necessary: boolean; // Always true, cannot be disabled
  analytics: boolean;
  marketing: boolean;
}

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

/**
 * GDPR-compliant Cookie Consent Banner
 * Handles user consent for different cookie categories
 */
export function CookieConsent() {
  const t = useTranslations("cookies.consent");
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  // Check for existing consent on mount
  useEffect(() => {
    const consentStatus = localStorage.getItem("cookie-consent");
    if (!consentStatus) {
      // Small delay for better UX - don't show immediately on page load
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }

    // Load saved preferences
    const savedPreferences = localStorage.getItem("cookie-preferences");
    if (savedPreferences) {
      try {
        setPreferences(JSON.parse(savedPreferences));
      } catch {
        // Invalid JSON, use defaults
      }
    }
  }, []);

  const saveConsent = (status: ConsentStatus, prefs: CookiePreferences) => {
    localStorage.setItem("cookie-consent", status);
    localStorage.setItem("cookie-preferences", JSON.stringify(prefs));
    setPreferences(prefs);
    setIsVisible(false);

    // Dispatch event for analytics components to react
    window.dispatchEvent(new CustomEvent("cookie-consent-change"));
  };

  const handleAcceptAll = () => {
    saveConsent("accepted", {
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const handleDeclineAll = () => {
    saveConsent("declined", {
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const handleSavePreferences = () => {
    saveConsent("customized", preferences);
    setShowPreferences(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        role="dialog"
        aria-labelledby="cookie-consent-title"
        aria-describedby="cookie-consent-description"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sticker border-2 border-black overflow-hidden">
            {/* Main Banner */}
            {!showPreferences && (
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-lime rounded-xl flex items-center justify-center border-2 border-black">
                    <Cookie className="w-6 h-6 text-forest" />
                  </div>
                  <div className="flex-1">
                    <h2
                      id="cookie-consent-title"
                      className="text-lg font-heading font-bold text-forest mb-2 uppercase"
                    >
                      {t("title")}
                    </h2>
                    <p
                      id="cookie-consent-description"
                      className="text-gray-dark text-sm md:text-base mb-4"
                    >
                      {t("description")}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={handleAcceptAll}
                        className="px-6 py-2.5 bg-lime text-forest rounded-full font-bold uppercase tracking-wide border-2 border-black shadow-sticker hover:shadow-sticker-lime transition-all focus:outline-none focus:ring-2 focus:ring-lime focus:ring-offset-2"
                      >
                        {t("acceptAll")}
                      </button>
                      <button
                        onClick={handleDeclineAll}
                        className="px-6 py-2.5 bg-white text-forest rounded-full font-bold uppercase tracking-wide border-2 border-forest hover:bg-forest hover:text-lime transition-all focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2"
                      >
                        {t("declineAll")}
                      </button>
                      <button
                        onClick={() => setShowPreferences(true)}
                        className="px-6 py-2.5 text-forest hover:text-lime-dark font-bold uppercase tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-lime focus:ring-offset-2 rounded-full flex items-center gap-2"
                      >
                        <Settings className="w-4 h-4" />
                        {t("customize")}
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={handleDeclineAll}
                    className="flex-shrink-0 p-2 text-sand-400 hover:text-sand-600 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-sand-400"
                    aria-label={t("close")}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Preferences Panel */}
            {showPreferences && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="p-6 md:p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-heading font-semibold text-ocean">
                    {t("preferences.title")}
                  </h3>
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="p-2 text-sand-400 hover:text-sand-600 transition-colors rounded-lg"
                    aria-label={t("back")}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Necessary Cookies - Always enabled */}
                  <CookieToggle
                    id="necessary"
                    title={t("preferences.necessary.title")}
                    description={t("preferences.necessary.description")}
                    enabled={true}
                    disabled={true}
                    onChange={() => {}}
                  />

                  {/* Analytics Cookies */}
                  <CookieToggle
                    id="analytics"
                    title={t("preferences.analytics.title")}
                    description={t("preferences.analytics.description")}
                    enabled={preferences.analytics}
                    onChange={(enabled) =>
                      setPreferences((prev) => ({ ...prev, analytics: enabled }))
                    }
                  />

                  {/* Marketing Cookies */}
                  <CookieToggle
                    id="marketing"
                    title={t("preferences.marketing.title")}
                    description={t("preferences.marketing.description")}
                    enabled={preferences.marketing}
                    onChange={(enabled) =>
                      setPreferences((prev) => ({ ...prev, marketing: enabled }))
                    }
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleSavePreferences}
                    className="px-6 py-2.5 bg-ocean text-white rounded-lg font-medium hover:bg-ocean-600 transition-colors focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2 flex items-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    {t("savePreferences")}
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-6 py-2.5 bg-sand-100 text-sand-700 rounded-lg font-medium hover:bg-sand-200 transition-colors focus:outline-none focus:ring-2 focus:ring-sand-400 focus:ring-offset-2"
                  >
                    {t("acceptAll")}
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

interface CookieToggleProps {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
  disabled?: boolean;
  onChange: (enabled: boolean) => void;
}

function CookieToggle({
  id,
  title,
  description,
  enabled,
  disabled = false,
  onChange,
}: CookieToggleProps) {
  return (
    <div className="flex items-start gap-4 p-4 bg-sand-50 rounded-xl">
      <div className="flex-1">
        <label
          htmlFor={`cookie-${id}`}
          className="font-medium text-ocean cursor-pointer"
        >
          {title}
        </label>
        <p className="text-sm text-sand-600 mt-1">{description}</p>
      </div>
      <button
        id={`cookie-${id}`}
        role="switch"
        aria-checked={enabled}
        disabled={disabled}
        onClick={() => !disabled && onChange(!enabled)}
        className={`
          relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent 
          transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2
          ${enabled ? "bg-ocean" : "bg-sand-300"}
          ${disabled ? "opacity-70 cursor-not-allowed" : ""}
        `}
      >
        <span
          className={`
            pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 
            transition duration-200 ease-in-out
            ${enabled ? "translate-x-5" : "translate-x-0"}
          `}
        />
      </button>
    </div>
  );
}

/**
 * Hook to manage cookie consent
 */
export function useCookieConsent() {
  const [consent, setConsent] = useState<ConsentStatus>("pending");
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const status = localStorage.getItem("cookie-consent") as ConsentStatus | null;
    const savedPrefs = localStorage.getItem("cookie-preferences");

    if (status) {
      setConsent(status);
    }

    if (savedPrefs) {
      try {
        setPreferences(JSON.parse(savedPrefs));
      } catch {
        // Invalid JSON
      }
    }

    const handleChange = () => {
      const newStatus = localStorage.getItem("cookie-consent") as ConsentStatus | null;
      const newPrefs = localStorage.getItem("cookie-preferences");

      if (newStatus) setConsent(newStatus);
      if (newPrefs) {
        try {
          setPreferences(JSON.parse(newPrefs));
        } catch {
          // Invalid JSON
        }
      }
    };

    window.addEventListener("cookie-consent-change", handleChange);
    return () => window.removeEventListener("cookie-consent-change", handleChange);
  }, []);

  return { consent, preferences };
}
