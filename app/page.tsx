"use client"

import { motion } from "framer-motion"
import { Check, Zap, Star, Shield, Headphones, RefreshCw, Edit3, PlusCircle, Wrench, Phone, ArrowRight, Globe, Share2, MapPin, Users, ArrowDown, Database, Handshake, X } from "lucide-react"

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

      {/* Process Section - System Graph */}
      <section className="relative px-6 py-16 md:py-24">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Twój system pozyskiwania klientów</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Zobacz, jak wszystkie elementy współpracują, żeby generować dla Ciebie nowych klientów
            </p>
          </motion.div>

          {/* Legend */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-red-500/80" />
              <span className="text-sm text-muted-foreground">Brakuje - do wdrożenia</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-emerald-500/80" />
              <span className="text-sm text-muted-foreground">Masz - Twoje procesy</span>
            </div>
          </motion.div>

          {/* Graph Layout */}
          <div className="relative">
            {/* Row 1: Traffic Sources - RED (missing) */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6 mb-4">
              {/* Social Media */}
              <div className="relative p-5 rounded-2xl border-2 border-red-500/50 bg-red-500/5 backdrop-blur-sm">
                <div className="absolute -top-3 left-4">
                  <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-red-500 text-white">BRAKUJE</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                    <Share2 className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-400">Social Media</h3>
                    <p className="text-xs text-muted-foreground">Klienci z social media</p>
                  </div>
                </div>
              </div>

              {/* Empty center for alignment */}
              <div className="hidden md:block" />

              {/* Google Business */}
              <div className="relative p-5 rounded-2xl border-2 border-red-500/50 bg-red-500/5 backdrop-blur-sm">
                <div className="absolute -top-3 left-4">
                  <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-red-500 text-white">BRAKUJE</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-400">Wizytówka Google</h3>
                    <p className="text-xs text-muted-foreground">Klienci z wyszukiwarki</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Arrows from sources to website */}
            <motion.div variants={fadeInUp} className="flex justify-center items-center gap-4 my-4">
              <div className="hidden md:flex items-center">
                <div className="w-24 h-0.5 bg-gradient-to-r from-red-500/50 to-red-500/80" />
                <ArrowDown className="w-5 h-5 text-red-500 rotate-[-45deg]" />
              </div>
              <div className="flex flex-col items-center">
                <ArrowDown className="w-6 h-6 text-red-500" />
                <span className="text-xs text-red-400 mt-1">ruch trafia na</span>
              </div>
              <div className="hidden md:flex items-center">
                <ArrowDown className="w-5 h-5 text-red-500 rotate-[45deg]" />
                <div className="w-24 h-0.5 bg-gradient-to-l from-red-500/50 to-red-500/80" />
              </div>
            </motion.div>

            {/* Row 2: Website - CENTER, RED (missing) */}
            <motion.div variants={fadeInUp} className="flex justify-center mb-4">
              <div className="relative w-full max-w-lg">
                {/* Glow effect for importance */}
                <div className="absolute -inset-2 rounded-3xl bg-red-500/20 blur-xl" />
                <div className="relative p-6 rounded-2xl border-2 border-red-500 bg-gradient-to-br from-red-500/10 via-card to-red-500/5 backdrop-blur-sm">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-red-500 text-white">KLUCZOWY ELEMENT - BRAKUJE</span>
                  </div>
                  <div className="flex flex-col items-center text-center pt-2">
                    <div className="w-16 h-16 rounded-2xl bg-red-500/20 border-2 border-red-500/50 flex items-center justify-center mb-4">
                      <Globe className="w-8 h-8 text-red-400" />
                    </div>
                    <h3 className="text-xl font-bold text-red-400 mb-2">Strona internetowa</h3>
                    <p className="text-sm text-muted-foreground max-w-sm">
                      Centrum dowodzenia - tu trafia cały ruch i tu zbierasz zapytania od potencjalnych klientów
                    </p>
                    <div className="mt-4 pt-4 border-t border-red-500/30 w-full">
                      <div className="flex items-center justify-center gap-2 text-red-400">
                        <X className="w-4 h-4" />
                        <span className="text-sm font-medium">Bez strony nie masz gdzie kierować ruchu!</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Arrow from website to database */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center my-4">
              <ArrowDown className="w-6 h-6 text-primary" />
              <span className="text-xs text-primary mt-1">zapytania trafiają do</span>
            </motion.div>

            {/* Row 3: Client's Database - GREEN (has it) */}
            <motion.div variants={fadeInUp} className="flex justify-center mb-4">
              <div className="relative p-5 rounded-2xl border-2 border-emerald-500/50 bg-emerald-500/5 backdrop-blur-sm w-full max-w-md">
                <div className="absolute -top-3 left-4">
                  <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-emerald-500 text-white">MASZ</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                    <Database className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-emerald-400">Twoja baza klientów</h3>
                    <p className="text-xs text-muted-foreground">Kontakty i zapytania do obsługi</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Arrow from database to processes */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center my-4">
              <ArrowDown className="w-6 h-6 text-emerald-500" />
              <span className="text-xs text-emerald-400 mt-1">obsługujesz przez</span>
            </motion.div>

            {/* Row 4: Client's Processes - GREEN (has it) */}
            <motion.div variants={fadeInUp} className="flex justify-center mb-4">
              <div className="relative p-5 rounded-2xl border-2 border-emerald-500/50 bg-emerald-500/5 backdrop-blur-sm w-full max-w-md">
                <div className="absolute -top-3 left-4">
                  <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-emerald-500 text-white">MASZ</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                    <Users className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-emerald-400">Twoje procesy sprzedaży</h3>
                    <p className="text-xs text-muted-foreground">Kontakt, wycena, negocjacje</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Arrow from processes to deal */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center my-4">
              <ArrowDown className="w-6 h-6 text-emerald-500" />
              <span className="text-xs text-emerald-400 mt-1">i finalizujesz</span>
            </motion.div>

            {/* Row 5: Realization - GREEN (has it) */}
            <motion.div variants={fadeInUp} className="flex justify-center">
              <div className="relative p-5 rounded-2xl border-2 border-emerald-500 bg-gradient-to-br from-emerald-500/10 via-card to-emerald-500/5 backdrop-blur-sm w-full max-w-md">
                <div className="absolute -top-3 left-4">
                  <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-emerald-500 text-white">MASZ</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border-2 border-emerald-500/50 flex items-center justify-center">
                    <Handshake className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-emerald-400">Realizacja zlecenia</h3>
                    <p className="text-xs text-muted-foreground">Klient wynajmuje billboard - zarabiasz</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Summary */}
          <motion.div variants={fadeInUp} className="mt-12 p-6 rounded-2xl border border-primary/30 bg-card/50 backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3">Strona to brakujące ogniwo</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
                Masz doświadczenie, procesy i umiejętności do obsługi klientów. Brakuje Ci tylko miejsca, gdzie możesz ich zbierać. 
                <span className="text-foreground font-medium"> Strona internetowa to fundament - bez niej social media i wizytówka Google nie mają sensu.</span>
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                <ArrowRight className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Zaczniemy od strony. Jak będzie gotowa - wdrożymy resztę systemu.</span>
              </div>
            </div>
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
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Po wdrożeniu - stała opieka</h2>
            <p className="text-muted-foreground text-lg">Nie zostawiamy Cię samego. Zajmujemy się wszystkim.</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative">
            {/* Main card */}
            <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/5 via-card to-accent/5 backdrop-blur-sm">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

              <div className="relative p-8 md:p-10">
                {/* Price badge - floating */}
                <div className="absolute -top-1 right-6 md:right-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/30 blur-lg rounded-2xl" />
                    <div className="relative px-6 py-4 rounded-b-2xl bg-gradient-to-b from-primary to-accent">
                      <span className="text-xs text-primary-foreground/80 block text-center">miesięcznie</span>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-3xl md:text-4xl font-bold text-primary-foreground">450</span>
                        <span className="text-lg text-primary-foreground/80">zł</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pr-28 md:pr-0">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Utrzymanie i obsługa strony</h3>
                  <p className="text-sm text-muted-foreground mb-8">Pakiet miesięczny - wszystko w jednej cenie</p>
                </div>

                {/* Features grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { icon: Headphones, title: "Stały kontakt", desc: "Szybka reakcja na Twoje potrzeby" },
                    { icon: RefreshCw, title: "Aktualizacje", desc: "Bieżące zmiany i ulepszenia" },
                    { icon: Edit3, title: "Edycja treści", desc: "Oferty, zdjęcia, teksty" },
                    { icon: PlusCircle, title: "Nowe elementy", desc: "Rozbudowa funkcjonalności" },
                    { icon: Wrench, title: "Opieka techniczna", desc: "Hosting, domena, certyfikat SSL" },
                    { icon: Shield, title: "Bezpieczeństwo", desc: "Kopie zapasowe i monitoring" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-card/50 border border-border/50">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-foreground">{item.title}</span>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border/50 text-center">
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Zero stresu</span> - Ty zajmujesz się klientami, my stroną
                  </p>
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
