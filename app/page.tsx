"use client"

import { motion } from "framer-motion"
import { Check, Zap, Star, Shield, Headphones, RefreshCw, Edit3, PlusCircle, Wrench, Phone, ArrowRight, Globe, Share2, MapPin, Users } from "lucide-react"

// PLACEHOLDER - Twój numer telefonu
const PHONE_NUMBER = "+48 XXX XXX XXX"
const PHONE_NUMBER_HREF = "tel:+48XXXXXXXXX"

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

export default function BillboardPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px]" />
      </div>

      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 lg:py-40">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 text-sm text-muted-foreground backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Oferta przygotowana specjalnie dla Ciebie
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance"
          >
            <span className="text-foreground">Cześć, </span>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              [Imię Klienta]
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground/90 mb-4"
          >
            Przygotowaliśmy dla Ciebie plan na rozwój Twojego biznesu billboardowego
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Sprawdź, jak możemy pomóc Ci pozyskiwać więcej klientów i budować rozpoznawalność marki
          </motion.p>

          {/* Decorative line */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 flex items-center justify-center gap-4"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* Process Section - Jak to działa */}
      <section className="relative px-6 py-16 md:py-24">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Jak zbudujemy Twój system pozyskiwania klientów?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Krok po kroku stworzymy maszynę, która będzie generować dla Ciebie zapytania od nowych klientów
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <motion.div variants={fadeInUp} className="relative">
                <div className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                      1
                    </div>
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Strona internetowa</h3>
                  <p className="text-sm text-muted-foreground">
                    Tworzymy profesjonalną stronę - Twoje centrum dowodzenia, gdzie kierujemy cały ruch i zbieramy zapytania
                  </p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="text-xs text-primary font-medium">Fundament całego systemu</span>
                  </div>
                </div>
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div variants={fadeInUp} className="relative">
                <div className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/80 flex items-center justify-center text-primary-foreground font-bold">
                      2
                    </div>
                    <Share2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Social Media</h3>
                  <p className="text-sm text-muted-foreground">
                    Wdrażamy profile w mediach społecznościowych, które budują zasięg i kierują ruch na Twoją stronę
                  </p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="text-xs text-primary font-medium">Budowanie zasięgu</span>
                  </div>
                </div>
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div variants={fadeInUp} className="relative">
                <div className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/60 flex items-center justify-center text-primary-foreground font-bold">
                      3
                    </div>
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Wizytówka Google</h3>
                  <p className="text-sm text-muted-foreground">
                    Optymalizujemy wizytówkę Google, żeby klienci szukający billboardów w Twojej okolicy trafiali do Ciebie
                  </p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="text-xs text-primary font-medium">Lokalne wyszukiwania</span>
                  </div>
                </div>
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div variants={fadeInUp} className="relative">
                <div className="p-6 rounded-2xl border border-primary/50 bg-gradient-to-br from-primary/10 to-card/50 backdrop-blur-sm h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                      4
                    </div>
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Twoja baza klientów</h3>
                  <p className="text-sm text-muted-foreground">
                    Wszystkie kanały generują zapytania, które trafiają do Twojej bazy - budujesz relacje i sprzedajesz więcej
                  </p>
                  <div className="mt-4 pt-4 border-t border-primary/30">
                    <span className="text-xs text-primary font-medium">Efekt: więcej klientów</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div variants={fadeInUp} className="mt-12 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Bez strony internetowej nie masz gdzie kierować ruchu z reklam, social media ani wizytówki Google. 
              <span className="text-foreground font-medium"> Strona to pierwszy i najważniejszy krok.</span>
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="relative px-6 py-16 md:py-24">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Wybierz pakiet dla siebie</h2>
            <p className="text-muted-foreground text-lg">Zaczynamy od strony - wybierz wariant, który najbardziej Ci odpowiada</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* START Card */}
            <motion.div
              variants={fadeInUp}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/70">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-secondary text-secondary-foreground">
                    START
                  </span>
                </div>

                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-bold">3 500</span>
                  <span className="text-xl text-muted-foreground ml-2">zł</span>
                </div>

                <div className="flex items-center gap-2 mb-8 text-muted-foreground">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>14 dni</span>
                </div>

                <ul className="space-y-4">
                  {[
                    "Nowoczesna, responsywna strona (mobile + desktop)",
                    "Podstawowe animacje i przejścia",
                    "Prosta interaktywność (formularz kontaktowy, przyciski)",
                    "Przejrzysta struktura i szybkie działanie",
                    "Wdrożenie gotowej strony"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* ROZWÓJ Card - Highlighted */}
            <motion.div
              variants={fadeInUp}
              className="group relative md:-mt-4 md:mb-[-16px]"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-primary via-primary/50 to-accent opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative h-full p-8 rounded-2xl border-2 border-primary bg-card backdrop-blur-sm">
                <div className="mb-6 flex flex-wrap items-center gap-2">
                  <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-primary text-primary-foreground">
                    ROZWÓJ
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 text-sm font-semibold rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 border border-amber-500/30">
                    <Star className="w-4 h-4 fill-current" />
                    REKOMENDOWANA
                  </span>
                </div>

                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-bold">5 000</span>
                  <span className="text-xl text-muted-foreground ml-2">zł</span>
                </div>

                <div className="flex items-center gap-2 mb-8 text-primary">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">7 dni</span>
                </div>

                <ul className="space-y-4">
                  {[
                    "Indywidualny projekt graficzny dopasowany do marki",
                    "Zaawansowane animacje zwiększające zaangażowanie",
                    "Pełna interaktywność strony",
                    "Rozbudowane formularze + automatyzacje (szybkie zapytania, system leadów)",
                    "Optymalizacja pod pozyskiwanie klientów (większa konwersja)",
                    "Nowoczesne rozwiązania technologiczne i wysoka wydajność"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/90">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-center text-muted-foreground italic">
                    Największa wartość w stosunku do ceny
                  </p>
                </div>
              </div>
            </motion.div>

            {/* EXPRESS Card */}
            <motion.div
              variants={fadeInUp}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:bg-card/70">
                <div className="mb-6 flex flex-wrap items-center gap-2">
                  <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-secondary text-secondary-foreground">
                    EXPRESS
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 text-sm font-semibold rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30">
                    <Zap className="w-4 h-4 fill-current" />
                    PRIORYTET
                  </span>
                </div>

                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-bold">6 000</span>
                  <span className="text-xl text-muted-foreground ml-2">zł</span>
                </div>

                <div className="flex items-center gap-2 mb-8 text-cyan-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="font-medium">do 72 godzin</span>
                </div>

                <ul className="space-y-4">
                  {[
                    "Wszystkie elementy z opcji ROZWÓJ",
                    "Priorytetowa realizacja",
                    "Interaktywna mapa z ponad 500 lokalizacjami billboardów (pineski, kliknięcia, podgląd lokalizacji)",
                    "Czytelna prezentacja całej sieci nośników reklamowych"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Maintenance Section */}
      <section className="relative px-6 py-16 md:py-24">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card/80 to-card/60 backdrop-blur-sm"
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl" />

            <div className="relative p-8 md:p-12">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">
                      Utrzymanie i obsługa strony
                    </h3>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mt-8">
                    {[
                      { icon: Headphones, text: "Stały kontakt i szybka reakcja" },
                      { icon: RefreshCw, text: "Bieżące aktualizacje strony" },
                      { icon: Edit3, text: "Edycja treści (oferty, zdjęcia, teksty)" },
                      { icon: PlusCircle, text: "Dodawanie nowych elementów" },
                      { icon: Wrench, text: "Pełna opieka techniczna" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-foreground/80">
                        <item.icon className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <p className="mt-8 text-sm text-muted-foreground italic">
                    Cała obsługa jest po naszej stronie
                  </p>
                </div>

                <div className="lg:text-right">
                  <div className="inline-flex flex-col items-center lg:items-end p-6 rounded-2xl bg-secondary/50 border border-border">
                    <span className="text-sm text-muted-foreground mb-2">miesięcznie</span>
                    <div>
                      <span className="text-4xl md:text-5xl font-bold">450</span>
                      <span className="text-xl text-muted-foreground ml-2">zł</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section - Contact */}
      <section className="relative px-6 py-16 md:py-24">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp}>
            <div className="p-8 md:p-12 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-accent/10 backdrop-blur-sm relative overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-primary/20 blur-3xl rounded-full" />
              
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Masz pytania? Chcesz pogadać o szczegółach?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Zadzwoń lub napisz - chętnie odpowiem na wszystkie pytania i pomogę wybrać najlepszą opcję dla Twojego biznesu
                </p>

                <a 
                  href={PHONE_NUMBER_HREF}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                >
                  <Phone className="w-5 h-5" />
                  {PHONE_NUMBER}
                </a>

                <p className="mt-6 text-sm text-muted-foreground">
                  Możesz też napisać SMS lub na WhatsApp
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8">
            <p className="text-sm text-muted-foreground">
              Oferta ważna do <span className="text-foreground font-medium">[data]</span> - potem ceny mogą wzrosnąć
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative px-6 py-8 border-t border-border">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto text-center"
        >
          <p className="text-sm text-muted-foreground">
            Oferta przygotowana przez <span className="text-foreground font-medium">Billboard</span> - agencję tworzenia stron internetowych
          </p>
        </motion.div>
      </footer>
    </div>
  )
}
