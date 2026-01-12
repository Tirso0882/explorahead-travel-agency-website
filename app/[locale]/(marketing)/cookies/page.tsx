"use client";

import { motion } from "framer-motion";
import { Cookie, Mail, Phone, Settings, BarChart, Shield, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { contact, getMailtoLink, getTelLink } from "@/config/contact";

export default function CookiePolicyPage() {
  const locale = useLocale();
  const isEnglish = locale === 'en';

  const content = isEnglish ? {
    hero: {
      title: "Cookie Policy",
      subtitle: "Learn how we use cookies on our website"
    },
    intro: `This Cookie Policy explains what cookies are, how we use them on explorahead.com, and how you can manage your cookie preferences. The document has been prepared in accordance with GDPR requirements and the Act on Electronic Services.`,
    sections: [
      {
        icon: Cookie,
        title: "1. What are cookies?",
        content: `Cookies are small text files stored on your device (computer, tablet, smartphone) when browsing websites. Cookies enable device recognition and customization of website content to individual user preferences.

Cookies do not damage your device or allow identification of a specific person – they mainly serve to improve website quality and analyze traffic.`
      },
      {
        icon: Settings,
        title: "2. What cookies do we use?",
        content: `On explorahead.com we use the following types of cookies:

a) Essential cookies (technical)
Necessary for proper website functioning. They enable navigation and use of basic functions (e.g., session memory, language preferences).
Storage period: session / up to 12 months
Legal basis: legitimate interest of the controller (Art. 6(1)(f) GDPR)

b) Functional cookies
Enable remembering user choices (e.g., language, region, preferred currency). They improve website comfort.
Storage period: up to 12 months
Legal basis: user consent (Art. 6(1)(a) GDPR)

c) Analytical cookies
Serve to analyze website usage (e.g., number of visits, traffic sources, popular pages). They allow website optimization. We use tools such as Google Analytics.
Storage period: up to 24 months
Legal basis: user consent (Art. 6(1)(a) GDPR)

d) Marketing cookies
Serve to display personalized ads and measure advertising campaign effectiveness. They may be used by advertising partners (e.g., Google Ads, Meta Pixel).
Storage period: up to 24 months
Legal basis: user consent (Art. 6(1)(a) GDPR)`
      },
      {
        icon: BarChart,
        title: "3. Third-party providers",
        content: `Within our website, we use services of third parties that may also use cookies:

• Google Analytics – website traffic analysis
  Privacy Policy: https://policies.google.com/privacy

• Google Ads – advertising campaigns
  Privacy Policy: https://policies.google.com/privacy

• Meta Pixel (Facebook/Instagram) – remarketing and analysis
  Privacy Policy: https://www.facebook.com/privacy/policy

• YouTube – video content display
  Privacy Policy: https://policies.google.com/privacy

Data collected by third-party providers is processed in accordance with their privacy policies. We recommend familiarizing yourself with the documents of the mentioned providers.`
      },
      {
        icon: Shield,
        title: "4. Cookie management",
        content: `4.1. Consent to cookies
During your first visit to the website, a banner is displayed informing about cookie use. The user can:
• Accept all cookies
• Choose only specific cookie categories (via settings)
• Reject all optional cookies

4.2. Withdrawal of consent
Consent to cookie use can be withdrawn at any time by:
• Changing cookie settings in the banner (available in the footer)
• Deleting cookies from the browser
• Changing browser settings (see below)

4.3. Browser settings
Most browsers accept cookies by default. However, you can change settings to:
• Block all cookies
• Block third-party cookies
• Receive notification before saving cookies
• Delete all saved cookies

Instructions for popular browsers:
• Google Chrome: Settings > Privacy and security > Cookies
• Mozilla Firefox: Options > Privacy and security > Cookies
• Safari: Preferences > Privacy > Cookies
• Microsoft Edge: Settings > Privacy and services > Cookies

NOTE: Blocking cookies may affect website functionality – some features may not work properly.`
      },
      {
        icon: ExternalLink,
        title: "5. Tracking technologies",
        content: `In addition to cookies, our website may use other tracking technologies:

• Local Storage and Session Storage – locally stored data in the browser
• Web Beacons (tracking pixels) – invisible images tracking user interactions
• Fingerprinting – device identification based on its configuration

These technologies serve to improve website functionality and analyze traffic, and their operation is subject to the same rules as cookies.`
      },
      {
        icon: Settings,
        title: "6. Third-party cookies",
        content: `Our website may contain embedded content from external partners (e.g., YouTube videos, Google maps, social media plugins). Providers of this content may set their own cookies, over which we have no control.

To learn more about third-party cookies, please familiarize yourself with the privacy policies of individual providers (links in section 3).`
      },
      {
        icon: Shield,
        title: "7. Personal data protection",
        content: `Data collected through cookies may be considered personal data under GDPR. We process it in accordance with our Privacy Policy, available here: www.explorahead.com/privacy

Data Controller:
ExplorAhead
[ADDRESS TO BE COMPLETED]
Tax ID (NIP): [TO BE COMPLETED]
Business ID (REGON): [TO BE COMPLETED]
Email: ${contact.email}

Users have rights specified in GDPR, including the right to access, rectify, delete data, and object to processing.`
      },
      {
        icon: Mail,
        title: "8. Changes to Cookie Policy",
        content: `We reserve the right to make changes to this Cookie Policy to adapt it to changes in law or website operation.

Users will be informed of any significant changes via a message on the website.

The current version of the Cookie Policy is always available at: www.explorahead.com/cookies`
      },
      {
        icon: Phone,
        title: "9. Contact",
        content: `If you have questions regarding cookie use on our website, please contact:

Email: ${contact.email}
Phone: ${contact.phone}

Last updated: January 2025`
      }
    ],
    table: {
      title: "Overview of cookies used",
      headers: ["Category", "Example cookies", "Purpose", "Duration", "Provider"],
      rows: [
        {
          category: "Essential cookies",
          examples: "session_id, language_pref, CONSENT",
          purpose: "Session handling, language preferences, website functionality",
          duration: "Session / up to 12 months",
          provider: "ExplorAhead"
        },
        {
          category: "Functional cookies",
          examples: "currency_pref, theme_mode",
          purpose: "Remembering user settings (currency, dark mode)",
          duration: "Up to 12 months",
          provider: "ExplorAhead"
        },
        {
          category: "Analytical cookies",
          examples: "_ga, _gid, _gat",
          purpose: "Website traffic analysis (Google Analytics)",
          duration: "Up to 24 months",
          provider: "Google"
        },
        {
          category: "Marketing cookies",
          examples: "_fbp, IDE, test_cookie",
          purpose: "Remarketing, advertising campaigns",
          duration: "Up to 24 months",
          provider: "Google, Meta"
        }
      ]
    },
    settings: {
      title: "Manage cookie settings",
      description: "You can change your cookie preferences at any time. Choose which cookie categories you want to accept.",
      button: "Open cookie settings",
      alert: "Cookie management panel will be added soon"
    },
    cta: {
      title: "Questions about cookies?",
      subtitle: "Contact us – we'll be happy to answer all your questions"
    },
    backLink: "← Back to homepage"
  } : {
    hero: {
      title: "Polityka plików cookies",
      subtitle: "Dowiedz się, jak wykorzystujemy pliki cookies na naszej stronie"
    },
    intro: `Niniejsza Polityka Cookies wyjaśnia, czym są pliki cookies, w jaki sposób ich używamy na stronie explorahead.com oraz jak możesz zarządzać swoimi preferencjami dotyczącymi cookies. Dokument został przygotowany zgodnie z wymogami RODO oraz ustawy o świadczeniu usług drogą elektroniczną.`,
    sections: [
      {
        icon: Cookie,
        title: "1. Czym są pliki cookies?",
        content: `Pliki cookies (ciasteczka) to małe pliki tekstowe zapisywane na urządzeniu użytkownika (komputer, tablet, smartfon) podczas przeglądania stron internetowych. Cookies umożliwiają rozpoznanie urządzenia oraz dostosowanie zawartości strony do indywidualnych preferencji użytkownika.

Pliki cookies nie uszkadzają urządzenia ani nie pozwalają na identyfikację konkretnej osoby – służą głównie do poprawy jakości korzystania ze strony oraz analizy ruchu.`
      },
      {
        icon: Settings,
        title: "2. Jakie pliki cookies używamy?",
        content: `Na stronie explorahead.com wykorzystujemy następujące rodzaje plików cookies:

a) Cookies niezbędne (techniczne)
Niezbędne do prawidłowego funkcjonowania strony. Umożliwiają poruszanie się po stronie i korzystanie z jej podstawowych funkcji (np. zapamiętanie sesji, preferencji językowych).
Czas przechowywania: sesja / do 12 miesięcy
Podstawa prawna: prawnie uzasadniony interes administratora (art. 6 ust. 1 lit. f RODO)

b) Cookies funkcjonalne
Umożliwiają zapamiętanie wyborów użytkownika (np. język, region, preferowana waluta). Poprawiają komfort korzystania ze strony.
Czas przechowywania: do 12 miesięcy
Podstawa prawna: zgoda użytkownika (art. 6 ust. 1 lit. a RODO)

c) Cookies analityczne
Służą do analizy sposobu korzystania ze strony (np. liczba odwiedzin, źródła ruchu, popularne podstrony). Pozwalają na optymalizację działania witryny. Wykorzystujemy narzędzia takie jak Google Analytics.
Czas przechowywania: do 24 miesięcy
Podstawa prawna: zgoda użytkownika (art. 6 ust. 1 lit. a RODO)

d) Cookies marketingowe
Służą do wyświetlania spersonalizowanych reklam oraz mierzenia skuteczności kampanii reklamowych. Mogą być wykorzystywane przez partnerów reklamowych (np. Google Ads, Meta Pixel).
Czas przechowywania: do 24 miesięcy
Podstawa prawna: zgoda użytkownika (art. 6 ust. 1 lit. a RODO)`
      },
      {
        icon: BarChart,
        title: "3. Dostawcy zewnętrzni",
        content: `W ramach naszej strony korzystamy z usług podmiotów trzecich, które również mogą wykorzystywać pliki cookies:

• Google Analytics – analiza ruchu na stronie
  Polityka prywatności: https://policies.google.com/privacy

• Google Ads – kampanie reklamowe
  Polityka prywatności: https://policies.google.com/privacy

• Meta Pixel (Facebook/Instagram) – remarketing i analiza
  Polityka prywatności: https://www.facebook.com/privacy/policy

• YouTube – wyświetlanie materiałów wideo
  Polityka prywatności: https://policies.google.com/privacy

Dane zbierane przez dostawców zewnętrznych są przetwarzane zgodnie z ich politykami prywatności. Zalecamy zapoznanie się z dokumentami wymienionych dostawców.`
      },
      {
        icon: Shield,
        title: "4. Zarządzanie plikami cookies",
        content: `4.1. Zgoda na pliki cookies
Podczas pierwszej wizyty na stronie wyświetlany jest banner informujący o wykorzystaniu plików cookies. Użytkownik może:
• Zaakceptować wszystkie pliki cookies
• Wybrać tylko określone kategorie cookies (poprzez ustawienia)
• Odrzucić wszystkie opcjonalne pliki cookies

4.2. Cofnięcie zgody
Zgodę na wykorzystanie plików cookies można w każdej chwili cofnąć poprzez:
• Zmianę ustawień cookies w bannerze (dostępnym w stopce strony)
• Usunięcie plików cookies z przeglądarki
• Zmianę ustawień przeglądarki (patrz poniżej)

4.3. Ustawienia przeglądarki
Większość przeglądarek domyślnie akceptuje pliki cookies. Możesz jednak zmienić ustawienia, aby:
• Blokować wszystkie cookies
• Blokować cookies stron trzecich
• Otrzymywać powiadomienie przed zapisaniem cookies
• Usunąć wszystkie zapisane cookies

Instrukcje dla popularnych przeglądarek:
• Google Chrome: Ustawienia > Prywatność i bezpieczeństwo > Pliki cookie
• Mozilla Firefox: Opcje > Prywatność i bezpieczeństwo > Ciasteczka
• Safari: Preferencje > Prywatność > Ciasteczka
• Microsoft Edge: Ustawienia > Prywatność i usługi > Pliki cookie

UWAGA: Zablokowanie plików cookies może wpłynąć na funkcjonalność strony – niektóre funkcje mogą nie działać prawidłowo.`
      },
      {
        icon: ExternalLink,
        title: "5. Technologie śledzenia",
        content: `Oprócz plików cookies, nasza strona może wykorzystywać inne technologie śledzenia:

• Local Storage i Session Storage – lokalnie przechowywane dane w przeglądarce
• Web Beacons (piksele śledzące) – niewidoczne obrazki śledzące interakcje użytkowników
• Fingerprinting – identyfikacja urządzenia na podstawie jego konfiguracji

Technologie te służą do poprawy funkcjonalności strony oraz analizy ruchu, a ich działanie podlega takim samym zasadom jak pliki cookies.`
      },
      {
        icon: Settings,
        title: "6. Cookies stron trzecich (Third-Party Cookies)",
        content: `Nasza strona może zawierać treści osadzone od partnerów zewnętrznych (np. filmy z YouTube, mapy Google, wtyczki mediów społecznościowych). Dostawcy tych treści mogą ustawiać własne pliki cookies, nad którymi nie mamy kontroli.

Aby dowiedzieć się więcej o cookies stron trzecich, prosimy o zapoznanie się z politykami prywatności poszczególnych dostawców (linki w sekcji 3).`
      },
      {
        icon: Shield,
        title: "7. Ochrona danych osobowych",
        content: `Dane zbierane za pomocą plików cookies mogą być uznane za dane osobowe w rozumieniu RODO. Przetwarzamy je zgodnie z naszą Polityką Prywatności, dostępną tutaj: www.explorahead.com/privacy

Administrator danych:
ExplorAhead
[ADRES DO UZUPEŁNIENIA]
NIP: [DO UZUPEŁNIENIA]
REGON: [DO UZUPEŁNIENIA]
E-mail: ${contact.email}

Użytkownikom przysługują prawa określone w RODO, w tym prawo dostępu do danych, ich sprostowania, usunięcia oraz wniesienia sprzeciwu wobec przetwarzania.`
      },
      {
        icon: Mail,
        title: "8. Zmiany w Polityce Cookies",
        content: `Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce Cookies w celu dostosowania jej do zmian przepisów prawa lub sposobu działania strony.

O wszelkich istotnych zmianach użytkownicy zostaną poinformowani poprzez komunikat na stronie internetowej.

Aktualna wersja Polityki Cookies jest zawsze dostępna pod adresem: www.explorahead.com/cookies`
      },
      {
        icon: Phone,
        title: "9. Kontakt",
        content: `W razie pytań dotyczących wykorzystania plików cookies na naszej stronie, prosimy o kontakt:

E-mail: ${contact.email}
Telefon: ${contact.phone}

Data ostatniej aktualizacji: Styczeń 2025`
      }
    ],
    table: {
      title: "Przegląd wykorzystywanych plików cookies",
      headers: ["Kategoria", "Przykładowe cookies", "Cel", "Czas", "Dostawca"],
      rows: [
        {
          category: "Cookies niezbędne",
          examples: "session_id, language_pref, CONSENT",
          purpose: "Obsługa sesji, preferencje językowe, funkcjonalność strony",
          duration: "Sesja / do 12 miesięcy",
          provider: "ExplorAhead"
        },
        {
          category: "Cookies funkcjonalne",
          examples: "currency_pref, theme_mode",
          purpose: "Zapamiętanie ustawień użytkownika (waluta, tryb ciemny)",
          duration: "Do 12 miesięcy",
          provider: "ExplorAhead"
        },
        {
          category: "Cookies analityczne",
          examples: "_ga, _gid, _gat",
          purpose: "Analiza ruchu na stronie (Google Analytics)",
          duration: "Do 24 miesięcy",
          provider: "Google"
        },
        {
          category: "Cookies marketingowe",
          examples: "_fbp, IDE, test_cookie",
          purpose: "Remarketing, kampanie reklamowe",
          duration: "Do 24 miesięcy",
          provider: "Google, Meta"
        }
      ]
    },
    settings: {
      title: "Zarządzaj ustawieniami cookies",
      description: "W każdej chwili możesz zmienić swoje preferencje dotyczące plików cookies. Wybierz, które kategorie cookies chcesz zaakceptować.",
      button: "Otwórz ustawienia cookies",
      alert: "Panel zarządzania cookies zostanie wkrótce dodany"
    },
    cta: {
      title: "Pytania dotyczące plików cookies?",
      subtitle: "Skontaktuj się z nami – chętnie odpowiemy na wszystkie pytania"
    },
    backLink: "← Powrót do strony głównej"
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-ocean via-ocean-dark to-ocean">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gold/20 backdrop-blur-sm mb-6"
          >
            <Cookie size={40} className="text-gold" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-heading mb-6"
          >
            {content.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto"
          >
            {content.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container max-w-4xl">
          <div className="bg-sand-light/30 rounded-2xl p-8 mb-12">
            <p className="text-gray-dark leading-relaxed">
              {content.intro}
            </p>
          </div>

          <div className="space-y-12">
            {content.sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow"
                style={{ padding: '3rem' }}
              >
                <div className="flex items-start gap-4" style={{ marginBottom: '2rem' }}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-ocean flex items-center justify-center">
                    <section.icon size={24} className="text-gold" />
                  </div>
                  <h2 className="text-2xl font-heading text-ocean mt-1">
                    {section.title}
                  </h2>
                </div>
                <div className="text-gray-dark whitespace-pre-line" style={{ marginLeft: '4rem', paddingRight: '2rem', lineHeight: '1.8' }}>
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Cookie Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-heading text-ocean mb-6">{content.table.title}</h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
                <thead className="bg-ocean text-white">
                  <tr>
                    {content.table.headers.map((header, index) => (
                      <th key={index} className="px-6 py-4 text-left font-semibold">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content.table.rows.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-sand-light/30" : ""}>
                      <td className="px-6 py-4 font-medium text-ocean">{row.category}</td>
                      <td className="px-6 py-4 text-sm text-gray-dark font-mono">{row.examples}</td>
                      <td className="px-6 py-4 text-sm text-gray-dark">{row.purpose}</td>
                      <td className="px-6 py-4 text-sm text-gray-dark">{row.duration}</td>
                      <td className="px-6 py-4 text-sm text-gray-dark">{row.provider}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Cookie Settings CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 bg-gold/10 border-l-4 border-gold rounded-xl p-6"
          >
            <div className="flex items-start gap-3">
              <Settings size={24} className="text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-heading text-ocean mb-2">{content.settings.title}</h3>
                <p className="text-gray-dark mb-4">
                  {content.settings.description}
                </p>
                <button
                  onClick={() => {
                    alert(content.settings.alert);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-ocean hover:bg-ocean-dark text-white font-semibold rounded-xl transition-colors"
                >
                  <Settings size={18} />
                  {content.settings.button}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 bg-gradient-to-br from-ocean to-ocean-dark rounded-2xl p-8 text-center text-white"
          >
            <h3 className="text-2xl font-heading mb-4">{content.cta.title}</h3>
            <p className="text-white/80 mb-6">
              {content.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getMailtoLink()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold hover:bg-gold-dark text-ocean font-semibold rounded-xl transition-colors"
              >
                <Mail size={20} />
                {contact.email}
              </a>
              <a
                href={getTelLink()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl transition-colors"
              >
                <Phone size={20} />
                {contact.phone}
              </a>
            </div>
          </motion.div>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-ocean hover:text-gold transition-colors font-medium"
            >
              {content.backLink}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
