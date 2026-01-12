"use client";

import { motion } from "framer-motion";
import { FileText, Mail, Phone, AlertCircle, CheckCircle, XCircle, Scale, Plane, CreditCard } from "lucide-react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { contact, getMailtoLink, getTelLink } from "@/config/contact";

export default function TermsOfServicePage() {
  const locale = useLocale();
  const isEnglish = locale === 'en';

  const content = isEnglish ? {
    hero: {
      title: "Terms of Service",
      subtitle: "Terms and conditions for travel services, bookings, and trip organization"
    },
    intro: `These Terms of Service set out the rules and conditions for providing travel services by ExplorAhead, including organizing travel packages, intermediation in the sale of airline tickets, hotel reservations, and other tourism-related services. The Terms have been prepared in accordance with the Act on Travel Services and related tourism services and the provisions of the Civil Code.`,
    sections: [
      {
        icon: FileText,
        title: "1. General Provisions",
        content: `These Terms set out the rules for providing travel services by:

ExplorAhead
[ADDRESS TO BE COMPLETED]
Tax ID (NIP): [TO BE COMPLETED]
Business ID (REGON): [TO BE COMPLETED]
Email: ${contact.email}
Phone: ${contact.phone}

hereinafter referred to as the "Organizer" or "Agency".

The Terms define the rights and obligations of the Organizer and Clients using the services offered by the Agency, including bookings, trip organization, travel packages, and intermediation services in the sale of airline tickets, accommodation, and other tourism-related services.

Use of the Agency's services constitutes acceptance of these Terms.`
      },
      {
        icon: CheckCircle,
        title: "2. Definitions",
        content: `Terms used in these Terms mean:

• Organizer/Agency – ExplorAhead, entity providing travel services
• Client/Participant – natural person, legal person, or organizational unit without legal personality that purchases or intends to purchase a travel service
• Travel package – combination of at least two types of travel services (transport, accommodation, vehicle rental, other services) for the same trip
• Travel service – single service (airline ticket, accommodation, transfer, etc.)
• Booking – Client's declaration of intent to participate in a package or purchase a service
• Contract – contract concluded between the Organizer and the Client regarding the provision of travel services`
      },
      {
        icon: Plane,
        title: "3. Booking and Contract Conclusion",
        content: `3.1. Booking can be made:
• Online via the form on www.explorahead.com
• By email to: ${contact.email}
• By phone: ${contact.phone}
• Via AI chat on the website

3.2. Booking is confirmed after:
• Receiving all required Client data
• Checking service availability
• Payment of deposit (if applicable)

3.3. The contract is concluded upon the Client receiving booking confirmation at the provided email address.

3.4. The Organizer reserves the right to refuse a booking in justified cases (no availability, incomplete data, etc.).

3.5. After contract conclusion, the Client receives:
• Booking confirmation
• Travel package program (if applicable)
• Payment information
• Travel documents (tickets, vouchers) – before departure`
      },
      {
        icon: CreditCard,
        title: "4. Prices and Payments",
        content: `4.1. Service prices are quoted in Polish zlotys (PLN) and include VAT.

4.2. The price may change before contract conclusion due to changes in:
• Exchange rates affecting the package price
• Fuel prices or other transport costs
• Airport, port, tourist fees
• Taxes

4.3. After contract conclusion, the price may be increased (maximum 8%) only in cases specified in clause 4.2, no later than 20 days before the start of the package.

4.4. Payment is made by bank transfer to the Agency's account:
[BANK ACCOUNT NUMBER TO BE COMPLETED]

4.5. Payment terms:
• Deposit: usually 30% of value – within 3 days of booking confirmation
• Final payment: remaining amount – 30 days before package start
(terms may vary depending on service type)

4.6. Failure to pay on time entitles the Organizer to withdraw from the contract and charge cancellation fees.`
      },
      {
        icon: XCircle,
        title: "5. Cancellation and Withdrawal",
        content: `5.1. Cancellation by Client:
The Client may withdraw from the contract at any time before the start of the package, incurring the following withdrawal costs:

• More than 60 days before departure: 10% of package price
• 60-45 days before departure: 25% of package price
• 44-30 days before departure: 50% of package price
• 29-14 days before departure: 75% of package price
• Less than 14 days before departure: 100% of package price

5.2. For airline tickets, accommodation, and other single services – the terms of the service providers apply.

5.3. The Organizer may withdraw from the contract in case of:
• Client's failure to pay required amounts on time
• Insufficient number of participants (minimum will be specified in the offer)
• Force majeure preventing package fulfillment

5.4. In case of withdrawal by the Organizer for reasons beyond the Client's control, the Client receives a full refund of paid amounts.

5.5. Withdrawal from the contract requires written form (email: ${contact.email}).`
      },
      {
        icon: AlertCircle,
        title: "6. Booking Changes",
        content: `6.1. The Client may make changes to the booking (e.g., change of date, participant substitution) for a fee of 200 PLN + any costs related to changes on the part of service providers.

6.2. The Organizer may make changes to the package program in case of:
• Force majeure circumstances
• Changes introduced by service providers
• Other important reasons

6.3. The Client will be immediately informed of any significant changes.

6.4. In case of significant changes lowering the package standard, the Client has the right to:
• Price reduction corresponding to the difference in standard
• Proposal of a replacement package
• Withdrawal from the contract with refund of paid amounts (without contractual penalties)`
      },
      {
        icon: Scale,
        title: "7. Organizer's Liability",
        content: `7.1. The Organizer is liable for proper contract performance in accordance with applicable law (Act on Travel Services and related tourism services).

7.2. The Organizer is responsible for the performance of travel services covered by the contract, regardless of whether these services are to be performed by it or by other providers.

7.3. The Organizer is not liable for:
• Delays and changes in schedules/flights introduced by carriers
• Refusal to issue a visa by appropriate services
• Damage resulting from the Client's non-compliance with customs, sanitary, immigration regulations
• Force majeure circumstances (wars, strikes, natural disasters, epidemics, etc.)

7.4. The Organizer acts as an intermediary in the sale of single travel services (airline tickets, accommodation) – in such cases, the terms of the service providers apply.

7.5. The Organizer's liability is limited to three times the package price, excluding personal injury.`
      },
      {
        icon: FileText,
        title: "8. Complaints",
        content: `8.1. Complaints should be submitted:
• During the package – immediately on-site to the Organizer's representative or directly to the service provider
• After package completion – in writing (email: ${contact.email}) within 30 days of package completion

8.2. The complaint should contain:
• Client data and booking number
• Detailed description of the problem
• Client's request
• Any evidence (photos, documents)

8.3. The Organizer considers the complaint within 30 days of receipt.

8.4. Failure to submit a complaint during the package may limit the possibility of effectively pursuing claims.`
      },
      {
        icon: CheckCircle,
        title: "9. Client Obligations",
        content: `9.1. The Client is obliged to:
• Possess valid travel documents (passport, ID card, visas)
• Possess appropriate travel insurance
• Comply with customs, sanitary, immigration regulations
• Provide complete and correct personal data
• Make payments on time
• Familiarize with the package program and provided information

9.2. The Client bears full responsibility for damage caused to the Organizer or other persons through their fault.

9.3. The Client is responsible for providing false data that may result in refusal of entry to the destination country.

9.4. We recommend purchasing cancellation insurance.`
      },
      {
        icon: Scale,
        title: "10. Personal Data Protection",
        content: `Detailed information on personal data processing is available in the Privacy Policy at: www.explorahead.com/privacy

Data Controller: ExplorAhead
Email: ${contact.email}

Personal data is processed in accordance with GDPR for contract performance and marketing purposes (with consent).`
      },
      {
        icon: FileText,
        title: "11. Final Provisions",
        content: `11.1. Matters not regulated in these Terms are governed by:
• Act on Travel Services and related tourism services
• Civil Code
• Other applicable provisions of Polish law

11.2. Disputes will be resolved amicably, and in case of lack of agreement – by the competent court under the Code of Civil Procedure.

11.3. The Organizer reserves the right to change these Terms. Changes take effect upon publication on the website and apply to contracts concluded after the effective date of changes.

11.4. The current Terms are available at: www.explorahead.com/terms

Effective date: January 2025`
      }
    ],
    notice: {
      title: "Important Information",
      content: `Use of ExplorAhead services constitutes acceptance of these Terms. Please read them carefully before making a booking. If you have any questions, we are at your disposal.`
    },
    cta: {
      title: "Questions about the Terms?",
      subtitle: "Contact us – we'll be happy to clarify any doubts"
    },
    backLink: "← Back to homepage"
  } : {
    hero: {
      title: "Regulamin świadczenia usług",
      subtitle: "Warunki świadczenia usług turystycznych, rezerwacji i organizacji podróży"
    },
    intro: `Niniejszy Regulamin określa zasady i warunki świadczenia usług turystycznych przez ExplorAhead, w tym organizacji imprez turystycznych, pośrednictwa w sprzedaży biletów lotniczych, rezerwacji noclegów oraz innych usług związanych z turystyką. Regulamin został przygotowany zgodnie z ustawą o imprezach turystycznych i powiązanych usługach turystycznych oraz przepisami Kodeksu cywilnego.`,
    sections: [
      {
        icon: FileText,
        title: "1. Postanowienia ogólne",
        content: `Niniejszy Regulamin określa zasady świadczenia usług turystycznych przez:

ExplorAhead
[ADRES DO UZUPEŁNIENIA]
NIP: [DO UZUPEŁNIENIA]
REGON: [DO UZUPEŁNIENIA]
E-mail: ${contact.email}
Telefon: ${contact.phone}

zwany dalej „Organizatorem" lub „Biurem".

Regulamin określa prawa i obowiązki Organizatora oraz Klientów korzystających z usług oferowanych przez Biuro, w tym rezerwacji, organizacji podróży, imprez turystycznych oraz usług pośrednictwa w sprzedaży biletów lotniczych, noclegów i innych świadczeń związanych z turystyką.

Korzystanie z usług Biura oznacza akceptację niniejszego Regulaminu.`
      },
      {
        icon: CheckCircle,
        title: "2. Definicje",
        content: `Użyte w Regulaminie pojęcia oznaczają:

• Organizator/Biuro – ExplorAhead, podmiot świadczący usługi turystyczne
• Klient/Uczestnik – osoba fizyczna, prawna lub jednostka organizacyjna nieposiadająca osobowości prawnej, która nabywa lub zamierza nabyć usługę turystyczną
• Impreza turystyczna – kombinacja co najmniej dwóch rodzajów usług turystycznych (transport, zakwaterowanie, wynajem pojazdu, inne usługi) na rzecz tej samej podróży
• Usługa turystyczna – pojedyncza usługa (bilet lotniczy, nocleg, transfer, itp.)
• Rezerwacja – zgłoszenie przez Klienta zamiaru uczestnictwa w imprezie lub zakupu usługi
• Umowa – umowa zawarta między Organizatorem a Klientem dotycząca świadczenia usług turystycznych`
      },
      {
        icon: Plane,
        title: "3. Rezerwacja i zawarcie umowy",
        content: `3.1. Rezerwacja może być dokonana:
• Online poprzez formularz na stronie www.explorahead.com
• E-mailem na adres: ${contact.email}
• Telefonicznie: ${contact.phone}
• Poprzez czat AI na stronie internetowej

3.2. Rezerwacja zostaje potwierdzona po:
• Otrzymaniu wszystkich wymaganych danych Klienta
• Sprawdzeniu dostępności usług
• Wpłacie zaliczki (jeśli dotyczy)

3.3. Umowa zostaje zawarta z chwilą otrzymania przez Klienta potwierdzenia rezerwacji na podany adres e-mail.

3.4. Organizator zastrzega sobie prawo do odmowy przyjęcia rezerwacji w uzasadnionych przypadkach (brak miejsc, niepełne dane, etc.).

3.5. Po zawarciu umowy Klient otrzymuje:
• Potwierdzenie rezerwacji
• Program imprezy turystycznej (jeśli dotyczy)
• Informacje o płatnościach
• Dokumenty podróży (bilety, vouchery) – przed wyjazdem`
      },
      {
        icon: CreditCard,
        title: "4. Ceny i płatności",
        content: `4.1. Ceny usług podawane są w złotych polskich (PLN) i zawierają podatek VAT.

4.2. Cena może ulec zmianie przed zawarciem umowy ze względu na zmiany:
• Kursu walut wpływających na cenę imprezy
• Cen paliwa lub innych kosztów przewozu
• Opłat lotniskowych, portowych, turystycznych
• Podatków

4.3. Po zawarciu umowy cena może zostać zwiększona (maksymalnie o 8%) tylko w przypadkach określonych w ust. 4.2, nie później niż 20 dni przed rozpoczęciem imprezy.

4.4. Płatność następuje przelewem na rachunek bankowy Biura:
[NUMER KONTA DO UZUPEŁNIENIA]

4.5. Terminy płatności:
• Zaliczka: zazwyczaj 30% wartości – w ciągu 3 dni od potwierdzenia rezerwacji
• Dopłata: pozostała kwota – na 30 dni przed rozpoczęciem imprezy
(terminy mogą się różnić w zależności od rodzaju usługi)

4.6. Brak wpłaty w terminie uprawnia Organizatora do odstąpienia od umowy i naliczenia opłat rezygnacyjnych.`
      },
      {
        icon: XCircle,
        title: "5. Rezygnacja i odstąpienie od umowy",
        content: `5.1. Rezygnacja przez Klienta:
Klient może odstąpić od umowy w każdym czasie przed rozpoczęciem imprezy, ponosząc następujące koszty odstąpienia:

• Powyżej 60 dni przed wyjazdem: 10% ceny imprezy
• 60-45 dni przed wyjazdem: 25% ceny imprezy
• 44-30 dni przed wyjazdem: 50% ceny imprezy
• 29-14 dni przed wyjazdem: 75% ceny imprezy
• Poniżej 14 dni przed wyjazdem: 100% ceny imprezy

5.2. W przypadku rezerwacji biletów lotniczych, noclegów i innych usług pojedynczych – obowiązują regulaminy dostawców tych usług.

5.3. Organizator może odstąpić od umowy w przypadku:
• Niewpłacenia przez Klienta wymaganych należności w terminie
• Zbyt małej liczby uczestników (minimum zostanie określone w ofercie)
• Siły wyższej uniemożliwiającej realizację imprezy

5.4. W przypadku odstąpienia przez Organizatora z przyczyn niezależnych od Klienta, Klient otrzymuje pełny zwrot wpłaconych środków.

5.5. Odstąpienie od umowy wymaga formy pisemnej (e-mail: ${contact.email}).`
      },
      {
        icon: AlertCircle,
        title: "6. Zmiana rezerwacji",
        content: `6.1. Klient może dokonać zmian w rezerwacji (np. zmiana terminu, zamiast uczestnika) za opłatą 200 PLN + ewentualne koszty związane ze zmianą po stronie dostawców usług.

6.2. Organizator może dokonać zmian w programie imprezy w przypadku:
• Okoliczności siły wyższej
• Zmian wprowadzonych przez dostawców usług
• Innych ważnych przyczyn

6.3. Klient zostanie niezwłocznie poinformowany o wszelkich istotnych zmianach.

6.4. W przypadku istotnych zmian obniżających standard imprezy, Klient ma prawo do:
• Obniżki ceny odpowiadającej różnicy w standardzie
• Zaproponowania imprezy zastępczej
• Odstąpienia od umowy ze zwrotem wpłaconych środków (bez kar umownych)`
      },
      {
        icon: Scale,
        title: "7. Odpowiedzialność Organizatora",
        content: `7.1. Organizator odpowiada za należyte wykonanie umowy zgodnie z obowiązującymi przepisami prawa (ustawa o imprezach turystycznych i powiązanych usługach turystycznych).

7.2. Organizator jest odpowiedzialny za wykonanie usług turystycznych objętych umową, niezależnie od tego, czy usługi te mają być wykonane przez niego, czy przez innych dostawców.

7.3. Organizator nie ponosi odpowiedzialności za:
• Opóźnienia i zmiany w rozkładach jazdy/lotów wprowadzone przez przewoźników
• Odmowę wydania wizy przez odpowiednie służby
• Szkody wynikłe z nieprzestrzegania przez Klienta przepisów celnych, sanitarnych, imigracyjnych
• Okoliczności siły wyższej (wojny, strajki, klęski żywiołowe, epidemie, etc.)

7.4. Organizator działa jako pośrednik przy sprzedaży pojedynczych usług turystycznych (bilety lotnicze, noclegi) – w takim przypadku obowiązują regulaminy dostawców tych usług.

7.5. Odpowiedzialność Organizatora jest ograniczona do trzykrotności ceny imprezy, z wyłączeniem szkód na osobie.`
      },
      {
        icon: FileText,
        title: "8. Reklamacje",
        content: `8.1. Reklamacje należy składać:
• W trakcie imprezy – niezwłocznie na miejscu do przedstawiciela Organizatora lub bezpośrednio do dostawcy usługi
• Po zakończeniu imprezy – w formie pisemnej (e-mail: ${contact.email}) w ciągu 30 dni od zakończenia imprezy

8.2. Reklamacja powinna zawierać:
• Dane Klienta i numer rezerwacji
• Dokładny opis problemu
• Żądanie Klienta
• Ewentualne dowody (zdjęcia, dokumenty)

8.3. Organizator rozpatruje reklamację w ciągu 30 dni od jej otrzymania.

8.4. Niestawienie reklamacji w trakcie trwania imprezy może ograniczyć możliwość skutecznego dochodzenia roszczeń.`
      },
      {
        icon: CheckCircle,
        title: "9. Obowiązki Klienta",
        content: `9.1. Klient zobowiązany jest do:
• Posiadania ważnych dokumentów podróży (paszport, dowód osobisty, wizy)
• Posiadania odpowiedniego ubezpieczenia podróżnego
• Przestrzegania przepisów celnych, sanitarnych, imigracyjnych
• Dostarczenia pełnych i prawidłowych danych osobowych
• Terminowego dokonywania płatności
• Zapoznania się z programem imprezy i przekazanymi informacjami

9.2. Klient ponosi pełną odpowiedzialność za szkody wyrządzone Organizatorowi lub innym osobom z własnej winy.

9.3. Klient ponosi odpowiedzialność za podanie nieprawdziwych danych, które mogą skutkować odmową wjazdu do kraju docelowego.

9.4. Zalecamy wykupienie ubezpieczenia od kosztów rezygnacji z imprezy.`
      },
      {
        icon: Scale,
        title: "10. Ochrona danych osobowych",
        content: `Szczegółowe informacje dotyczące przetwarzania danych osobowych znajdują się w Polityce Prywatności dostępnej na stronie: www.explorahead.com/privacy

Administrator danych: ExplorAhead
E-mail: ${contact.email}

Dane osobowe przetwarzane są zgodnie z RODO w celu realizacji umowy oraz w celach marketingowych (za zgodą).`
      },
      {
        icon: FileText,
        title: "11. Postanowienia końcowe",
        content: `11.1. W sprawach nieuregulowanych w niniejszym Regulaminie mają zastosowanie przepisy:
• Ustawy o imprezach turystycznych i powiązanych usługach turystycznych
• Kodeksu cywilnego
• Innych obowiązujących przepisów prawa polskiego

11.2. Spory będą rozwiązywane polubownie, a w przypadku braku porozumienia – przez sąd właściwy według przepisów Kodeksu postępowania cywilnego.

11.3. Organizator zastrzega sobie prawo do zmiany Regulaminu. Zmiany wchodzą w życie z chwilą opublikowania na stronie internetowej i obowiązują wobec umów zawartych po dacie wejścia w życie zmian.

11.4. Aktualny Regulamin jest dostępny na stronie: www.explorahead.com/terms

Data wejścia w życie: Styczeń 2025`
      }
    ],
    notice: {
      title: "Ważna informacja",
      content: `Korzystanie z usług ExplorAhead oznacza akceptację niniejszego Regulaminu. Prosimy o uważne zapoznanie się z jego treścią przed dokonaniem rezerwacji. W razie pytań jesteśmy do Państwa dyspozycji.`
    },
    cta: {
      title: "Pytania dotyczące Regulaminu?",
      subtitle: "Skontaktuj się z nami – chętnie wyjaśnimy wszelkie wątpliwości"
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
            <Scale size={40} className="text-gold" />
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

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 bg-gold/10 border-l-4 border-gold rounded-xl p-6"
          >
            <div className="flex items-start gap-3">
              <AlertCircle size={24} className="text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-heading text-ocean mb-2">{content.notice.title}</h3>
                <p className="text-gray-dark">
                  {content.notice.content}
                </p>
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
