"use client";

import { contact, getMailtoLink, getTelLink } from "@/config/contact";
import { motion } from "framer-motion";
import { Database, Eye, FileText, Lock, Mail, Phone, Shield, UserCheck } from "lucide-react";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  const locale = useLocale();
  const isEnglish = locale === "en";

  const content = isEnglish
    ? {
        hero: {
          title: "Privacy Policy",
          subtitle:
            "We respect your privacy and protect your personal data in accordance with GDPR",
        },
        intro: `This Privacy Policy sets out the rules for processing and protecting personal data of users of the website explorahead.com. The document has been prepared in accordance with the requirements of Regulation (EU) 2016/679 (GDPR) and applicable Polish law.`,
        sections: [
          {
            icon: Database,
            title: "1. Data Controller",
            content: `The controller of personal data collected through the website is:

ExplorAhead
[ADDRESS TO BE COMPLETED]
Tax ID (NIP): [TO BE COMPLETED]
Business ID (REGON): [TO BE COMPLETED]
Email: ${contact.email}
Phone: ${contact.phone}

For matters regarding personal data protection, you can contact the Controller via email: ${contact.email}`,
          },
          {
            icon: FileText,
            title: "2. Legal Basis for Processing",
            content: `Personal data processing is carried out on the basis of:

• Art. 6(1)(a) GDPR – consent of the data subject
• Art. 6(1)(b) GDPR – necessity for the performance of a contract
• Art. 6(1)(c) GDPR – legal obligation incumbent on the controller
• Art. 6(1)(f) GDPR – legitimate interest of the controller

In the case of consent to personal data processing, you have the right to withdraw your consent at any time without affecting the lawfulness of processing based on consent before its withdrawal.`,
          },
          {
            icon: Lock,
            title: "3. Purposes and Scope of Data Processing",
            content: `Personal data is processed for the following purposes:

a) Handling inquiries and providing travel services
Data: first name, last name, email address, phone number, travel information
Legal basis: contract performance, legitimate interest

b) Marketing and newsletter
Data: first name, email address
Legal basis: consent (can be withdrawn at any time)

c) Booking and purchase of services
Data: first name, last name, address, contact details, identity document data (for flight/hotel bookings)
Legal basis: contract performance, legal obligation

d) Security and fraud prevention
Data: IP address, system logs
Legal basis: legitimate interest

e) Legal obligations (accounting, tax)
Data: data from invoices and contracts
Legal basis: legal obligation`,
          },
          {
            icon: UserCheck,
            title: "4. Data Recipients",
            content: `Personal data may be transferred to the following categories of recipients:

• IT and hosting service providers
• Booking systems and travel aggregators (Amadeus, Booking.com, etc.)
• Carriers and hotels for booking fulfillment
• Payment service providers
• State authorities in cases provided for by law
• Website traffic analysis tool providers (in accordance with Cookie Policy)

All recipients operate under data processing agreements and are obliged to ensure appropriate security measures.`,
          },
          {
            icon: Eye,
            title: "5. Data Retention Period",
            content: `Personal data is stored for the following periods:

• Contract-related data: for the duration of the contract and for the period required by law (e.g., accounting obligations – 5 years)
• Marketing data: until consent is withdrawn or objection is raised
• Complaint-related data: for the limitation period of claims
• System logs: maximum 12 months`,
          },
          {
            icon: Shield,
            title: "6. Rights of Data Subjects",
            content: `In accordance with GDPR, you have the following rights:

• Right of access to data – confirmation of whether we process data and obtaining a copy
• Right to rectification – correction of incorrect or completion of incomplete data
• Right to erasure ("right to be forgotten") – in specific cases
• Right to restriction of processing – in specific cases
• Right to data portability – receiving data in a structured, commonly used format
• Right to object to processing
• Right to withdraw consent at any time (if processing is based on consent)

To exercise the above rights, please contact: ${contact.email}

You also have the right to lodge a complaint with the supervisory authority:
Personal Data Protection Office
ul. Stawki 2, 00-193 Warsaw, Poland
www.uodo.gov.pl`,
          },
          {
            icon: Lock,
            title: "7. Data Security",
            content: `The Controller applies appropriate technical and organizational measures to ensure the protection of processed personal data, in particular:

• Connection encryption (SSL/TLS)
• Server and database security
• Access control to data
• Regular backups
• Staff training in personal data protection

Personal data is not processed in an automated manner (including profiling) in a way that produces legal effects or similarly significantly affects your situation.`,
          },
          {
            icon: Mail,
            title: "8. Contact",
            content: `If you have questions regarding personal data processing or wish to exercise your rights, please contact:

Email: ${contact.email}
Phone: ${contact.phone}

Last updated: January 2025`,
          },
        ],
        cta: {
          title: "Have questions about data protection?",
          subtitle: "Contact us – we'll be happy to answer all your questions",
        },
        backLink: "← Back to homepage",
      }
    : {
        hero: {
          title: "Polityka Prywatności",
          subtitle: "Szanujemy Twoją prywatność i chronimy Twoje dane osobowe zgodnie z RODO",
        },
        intro: `Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych użytkowników strony internetowej explorahead.com. Dokument został przygotowany zgodnie z wymogami Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO) oraz obowiązującymi przepisami prawa polskiego.`,
        sections: [
          {
            icon: Database,
            title: "1. Administrator danych osobowych",
            content: `Administratorem danych osobowych zbieranych za pośrednictwem strony internetowej jest:

ExplorAhead
[ADRES DO UZUPEŁNIENIA]
NIP: [DO UZUPEŁNIENIA]
REGON: [DO UZUPEŁNIENIA]
E-mail: ${contact.email}
Telefon: ${contact.phone}

W sprawach dotyczących ochrony danych osobowych można kontaktować się z Administratorem za pośrednictwem e-mail: ${contact.email}`,
          },
          {
            icon: FileText,
            title: "2. Podstawy prawne przetwarzania",
            content: `Przetwarzanie danych osobowych odbywa się na podstawie:
      
• Art. 6 ust. 1 lit. a RODO – zgoda osoby, której dane dotyczą
• Art. 6 ust. 1 lit. b RODO – niezbędność do wykonania umowy
• Art. 6 ust. 1 lit. c RODO – obowiązek prawny ciążący na administratorze
• Art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes administratora

W przypadku wyrażenia zgody na przetwarzanie danych osobowych, przysługuje Państwu prawo do cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem.`,
          },
          {
            icon: Lock,
            title: "3. Cele i zakres przetwarzania danych",
            content: `Dane osobowe przetwarzane są w następujących celach:

a) Obsługa zapytań i świadczenie usług turystycznych
Dane: imię, nazwisko, adres e-mail, numer telefonu, informacje o podróży
Podstawa prawna: wykonanie umowy, prawnie uzasadniony interes

b) Marketing i newsletter
Dane: imię, adres e-mail
Podstawa prawna: zgoda (można ją w każdej chwili wycofać)

c) Realizacja rezerwacji i zakupu usług
Dane: imię, nazwisko, adres, dane kontaktowe, dane dokumentów tożsamości (w przypadku rezerwacji lotów/hoteli)
Podstawa prawna: wykonanie umowy, obowiązek prawny

d) Zapewnienie bezpieczeństwa i ochrona przed nadużyciami
Dane: adres IP, logi systemowe
Podstawa prawna: prawnie uzasadniony interes

e) Realizacja obowiązków prawnych (księgowość, podatkowe)
Dane: dane z faktur i umów
Podstawa prawna: obowiązek prawny`,
          },
          {
            icon: UserCheck,
            title: "4. Odbiorcy danych",
            content: `Dane osobowe mogą być przekazywane następującym kategoriom odbiorców:

• Dostawcy usług IT i hostingowych
• Systemy rezerwacyjne i agregatory turystyczne (Amadeus, Booking.com, itp.)
• Przewoźnicy i hotele w celu realizacji rezerwacji
• Dostawcy usług płatniczych
• Organy państwowe w przypadkach przewidzianych prawem
• Dostawcy narzędzi do analizy ruchu na stronie (zgodnie z Polityką Cookies)

Wszyscy odbiorcy działają na podstawie umów powierzenia przetwarzania danych i są zobowiązani do zapewnienia odpowiednich środków bezpieczeństwa.`,
          },
          {
            icon: Eye,
            title: "5. Okres przechowywania danych",
            content: `Dane osobowe przechowywane są przez okres:

• Dane związane z umową: przez czas trwania umowy oraz przez okres wymagany przepisami prawa (np. obowiązki rachunkowe – 5 lat)
• Dane marketingowe: do momentu wycofania zgody lub wniesienia sprzeciwu
• Dane dotyczące reklamacji: przez okres przedawnienia roszczeń
• Logi systemowe: maksymalnie 12 miesięcy`,
          },
          {
            icon: Shield,
            title: "6. Prawa osób, których dane dotyczą",
            content: `Zgodnie z RODO, przysługują Państwu następujące prawa:

• Prawo dostępu do danych – potwierdzenie, czy przetwarzamy dane oraz uzyskanie ich kopii
• Prawo do sprostowania danych – poprawienie nieprawidłowych lub uzupełnienie niekompletnych danych
• Prawo do usunięcia danych („prawo do bycia zapomnianym") – w określonych przypadkach
• Prawo do ograniczenia przetwarzania – w określonych przypadkach
• Prawo do przenoszenia danych – otrzymanie danych w ustrukturyzowanym, powszechnie używanym formacie
• Prawo do sprzeciwu wobec przetwarzania danych
• Prawo do cofnięcia zgody w dowolnym momencie (jeśli przetwarzanie odbywa się na podstawie zgody)

W celu skorzystania z powyższych praw, prosimy o kontakt: ${contact.email}

Przysługuje również prawo do wniesienia skargi do organu nadzorczego:
Urząd Ochrony Danych Osobowych
ul. Stawki 2, 00-193 Warszawa
www.uodo.gov.pl`,
          },
          {
            icon: Lock,
            title: "7. Bezpieczeństwo danych",
            content: `Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające ochronę przetwarzanych danych osobowych, w szczególności:

• Szyfrowanie połączeń (SSL/TLS)
• Zabezpieczenia serwerów i baz danych
• Kontrola dostępu do danych
• Regularne kopie zapasowe
• Szkolenia pracowników w zakresie ochrony danych osobowych

Dane osobowe nie są przetwarzane w sposób zautomatyzowany (w tym poprzez profilowanie) w sposób wywołujący wobec Państwa skutki prawne lub w podobny sposób istotnie wpływający na Państwa sytuację.`,
          },
          {
            icon: Mail,
            title: "8. Kontakt",
            content: `W razie pytań dotyczących przetwarzania danych osobowych lub chęci skorzystania z przysługujących praw, prosimy o kontakt:

E-mail: ${contact.email}
Telefon: +48 690 946 046

Data ostatniej aktualizacji: Styczeń 2025`,
          },
        ],
        cta: {
          title: "Masz pytania dotyczące ochrony danych?",
          subtitle: "Skontaktuj się z nami – chętnie odpowiemy na wszystkie pytania",
        },
        backLink: "← Powrót do strony głównej",
      };

  return (
    <>
      {/* Hero Section */}
      <section className="from-ocean via-ocean-dark to-ocean relative bg-gradient-to-br pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gold/20 mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl backdrop-blur-sm"
          >
            <Shield size={40} className="text-gold" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading mb-6 text-4xl text-white md:text-5xl lg:text-6xl"
          >
            {content.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-3xl text-lg text-white/80 md:text-xl"
          >
            {content.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container max-w-4xl">
          <div className="bg-sand-light/30 mb-12 rounded-2xl p-8">
            <p className="text-gray-dark leading-relaxed">{content.intro}</p>
          </div>

          <div className="space-y-12">
            {content.sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-2xl bg-white shadow-md transition-shadow hover:shadow-lg"
                style={{ padding: "3rem" }}
              >
                <div className="flex items-start gap-4" style={{ marginBottom: "2rem" }}>
                  <div className="bg-ocean flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl">
                    <section.icon size={24} className="text-gold" />
                  </div>
                  <h2 className="font-heading text-ocean mt-1 text-2xl">{section.title}</h2>
                </div>
                <div
                  className="text-gray-dark whitespace-pre-line"
                  style={{ marginLeft: "4rem", paddingRight: "2rem", lineHeight: "1.8" }}
                >
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="from-ocean to-ocean-dark mt-16 rounded-2xl bg-gradient-to-br p-8 text-center text-white"
          >
            <h3 className="font-heading mb-4 text-2xl">{content.cta.title}</h3>
            <p className="mb-6 text-white/80">{content.cta.subtitle}</p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={getMailtoLink()}
                className="bg-gold hover:bg-gold-dark text-ocean inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold transition-colors"
              >
                <Mail size={20} />
                {contact.email}
              </a>
              <a
                href={getTelLink()}
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
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
              className="text-ocean hover:text-gold inline-flex items-center gap-2 font-medium transition-colors"
            >
              {content.backLink}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
