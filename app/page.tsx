"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion"
import { Check, Zap, Star, Shield, Headphones, RefreshCw, Edit3, PlusCircle, Wrench, Phone, ArrowRight, Globe, Share2, MapPin, Users, ArrowDown, Database, Handshake, X, ChevronUp, ChevronDown, Menu } from "lucide-react"

const CLIENT_NAME = "Artur"
const CONTACTS = [
  { name: "Leon", phone: "728 561 373", href: "tel:+48728561373" },
  { name: "Kamil", phone: "501 747 490", href: "tel:+48501747490" },
]

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
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  const navItems = [
    { label: "System", id: "system" },
    { label: "Pakiety", id: "pakiety" },
    { label: "Utrzymanie", id: "utrzymanie" },
    { label: "Kontakt", id: "kontakt" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-accent to-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Sticky Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg shadow-background/50"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            KT & LB
          </span>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("kontakt")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:scale-105 transition-transform cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              Zadzwoń
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
            >
              <div className="px-6 py-4 space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-2 cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px]" />
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative px-6 py-24 md:py-32 lg:py-40">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance"
          >
            <span className="text-foreground">Cześć, </span>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_200%] animate-[gradient-shift_4s_ease_infinite]">
              {CLIENT_NAME}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground/90 mb-4"
          >
            Przygotowaliśmy dla Ciebie plan na rozwój Twojego biznesu billboardowego.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Sprawdź, jak możemy pomóc Ci pozyskiwać więcej klientów i budować rozpoznawalność marki.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={fadeInUp} className="mt-10">
            <button
              onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              <Phone className="w-5 h-5" />
              Porozmawiajmy
            </button>
          </motion.div>

          {/* Scroll down arrow */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 flex flex-col items-center gap-2"
          >
            <span className="text-xs text-muted-foreground">Przewiń w dół</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-6 h-6 text-primary/60" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Process Section - System Graph */}
      <section id="system" className="relative px-6 py-16 md:py-24">
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
              Zobacz, jak wszystkie elementy współpracują, żeby generować dla Ciebie nowych klientów.
            </p>
          </motion.div>

          {/* Modern Pipeline Layout */}
          <div className="relative max-w-3xl mx-auto py-12">
            {/* Main connecting spine - thicker with glow */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[3px] md:-translate-x-1/2 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/60 via-red-500/60 to-emerald-500/60 rounded-full" />
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/30 via-red-500/30 to-emerald-500/30 rounded-full blur-md" />
            </div>

            {/* Step 1: Default sources (Have) */}
            <motion.div variants={fadeInUp} className="relative z-10 flex flex-col md:flex-row items-center mb-12 md:mb-20">
              <div className="w-full md:w-1/2 pl-[60px] md:pl-0 pr-0 md:pr-12 text-left md:text-right order-2 md:order-1 mt-4 md:mt-0">
                <div className="flex items-center gap-2 mb-2 md:justify-end">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                    <Check className="w-3 h-3" /> Masz
                  </span>
                </div>
                <h3 className="text-xl font-bold text-emerald-400 mb-2">Stare bazy klientów</h3>
                <div className="p-4 rounded-xl bg-card/60 border border-emerald-500/20 backdrop-blur-md transition-all duration-300 hover:bg-card/80 hover:border-emerald-500/35 hover:shadow-[0_4px_20px_rgba(16,185,129,0.08)] hover:-translate-y-0.5">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Działasz na poleceniach i opierasz się na starych kontaktach. Dzwonisz lub piszesz do firm, które znają już Twoje nośniki i realizowały z Tobą zlecenia w ubiegłym roku. To stabilny, ale wolno rosnący kanał.
                  </p>
                </div>
              </div>
              <div className="absolute left-[4px] md:left-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border-[3px] border-emerald-500 flex items-center justify-center md:-translate-x-1/2 shadow-[0_0_20px_rgba(16,185,129,0.35)] z-20 backdrop-blur-sm">
                <Users className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="w-full md:w-1/2 md:pl-12 order-3" />
            </motion.div>

            {/* Step 2: Social Media (Missing) */}
            <motion.div variants={fadeInUp} className="relative z-10 flex flex-col md:flex-row items-center mb-12 md:mb-20">
              <div className="w-full md:w-1/2 pr-12 order-1 hidden md:block" />
              <div className="absolute left-[4px] md:left-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/10 border-[3px] border-red-500 flex items-center justify-center md:-translate-x-1/2 shadow-[0_0_20px_rgba(239,68,68,0.35)] z-20 backdrop-blur-sm">
                <Share2 className="w-5 h-5 text-red-400" />
              </div>
              <div className="w-full md:w-1/2 pl-[60px] md:pl-12 order-2 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-red-500/15 text-red-400 border border-red-500/25">
                    <X className="w-3 h-3" /> Brak
                  </span>
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-2">Social Media</h3>
                <div className="p-4 rounded-xl bg-card/60 border border-red-500/20 border-dashed backdrop-blur-md transition-all duration-300 hover:bg-card/80 hover:border-red-500/35 hover:shadow-[0_4px_20px_rgba(239,68,68,0.08)] hover:-translate-y-0.5">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Tracisz ogromny potencjał darmowego ruchu. Na platformach takich jak Facebook, Instagram czy TikTok mógłbyś budować rozpoznawalność marki i przypominać o sobie firmom.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Animated connector */}
            <div className="hidden md:flex justify-center mb-10 mt-[-10px] relative z-10">
              <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                <ArrowDown className="w-5 h-5 text-red-500/70" />
              </motion.div>
            </div>

            {/* Step 3: Google (Missing) */}
            <motion.div variants={fadeInUp} className="relative z-10 flex flex-col md:flex-row items-center mb-12 md:mb-20">
              <div className="w-full md:w-1/2 pl-[60px] md:pl-0 pr-0 md:pr-12 text-left md:text-right order-2 md:order-1 mt-4 md:mt-0">
                <div className="flex items-center gap-2 mb-2 md:justify-end">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-red-500/15 text-red-400 border border-red-500/25">
                    <X className="w-3 h-3" /> Brak
                  </span>
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-2">Wizytówka Google &amp; SEO</h3>
                <div className="p-4 rounded-xl bg-card/60 border border-red-500/20 border-dashed backdrop-blur-md transition-all duration-300 hover:bg-card/80 hover:border-red-500/35 hover:shadow-[0_4px_20px_rgba(239,68,68,0.08)] hover:-translate-y-0.5">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Znaczna większość nowych firm wpisuje w wyszukiwarkę "wynajem billboardu [miasto]". Bez optymalizacji, ten ruch trafia do Twojej konkurencji.
                  </p>
                </div>
              </div>
              <div className="absolute left-[4px] md:left-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/10 border-[3px] border-red-500 flex items-center justify-center md:-translate-x-1/2 shadow-[0_0_20px_rgba(239,68,68,0.35)] z-20 backdrop-blur-sm">
                <MapPin className="w-5 h-5 text-red-400" />
              </div>
              <div className="w-full md:w-1/2 md:pl-12 order-3" />
            </motion.div>

            {/* Animated connector to website */}
            <div className="hidden md:flex justify-center mb-10 mt-[-10px] relative z-10">
              <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}>
                <ArrowDown className="w-5 h-5 text-red-500/70" />
              </motion.div>
            </div>

            {/* Step: Website (Critical Missing Hub) */}
            <motion.div variants={fadeInUp} className="relative z-10 flex flex-col md:flex-row items-center mb-16 md:mb-24">
              <div className="w-full md:w-1/2 pl-[60px] md:pl-0 pr-0 md:pr-12 text-left md:text-right order-2 md:order-1 mt-6 md:mt-0 relative">
                {/* Visual connector to spine */}
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-24 h-[2px] bg-gradient-to-l from-red-500/70 to-transparent" />

                <div className="inline-block px-4 py-1.5 mb-3 text-[10px] font-bold rounded-full bg-red-500/20 text-red-400 border border-red-500/50 animate-pulse uppercase tracking-widest relative top-[-10px]">
                  Brakujące ogniwo - kluczowy element
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3 tracking-tight">Strona Internetowa</h3>
                <div className="p-5 rounded-xl bg-gradient-to-br from-red-500/10 to-red-500/5 border-2 border-red-500/30 backdrop-blur-md shadow-[0_0_35px_rgba(239,68,68,0.1)] transition-all duration-300 hover:border-red-500/50 hover:shadow-[0_0_50px_rgba(239,68,68,0.15)]">
                  <p className="text-base text-foreground leading-relaxed">
                    <strong>Bezwzględne centrum dowodzenia.</strong> To tutaj starzy klienci wchodzą sprawdzić nowe lokalizacje billboardów, a zupełnie nowy ruch z wyszukiwarki zmienia się w gorące zapytania (leady) wysyłane wprost na Twój telefon.
                  </p>
                </div>
              </div>
              <div className="absolute left-0 md:left-1/2 w-14 h-14 md:w-20 md:h-20 rounded-full md:-translate-x-1/2 z-20">
                {/* Outer ring with glow */}
                <div className="absolute inset-0 rounded-full border-[3px] border-red-500/40 animate-ping" style={{ animationDuration: '2.5s' }} />
                <div className="absolute -inset-1 rounded-full bg-red-500/15 blur-md" />
                {/* Main circle */}
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-red-500/25 to-red-600/15 border-[4px] border-red-500 flex items-center justify-center shadow-[0_0_40px_rgba(239,68,68,0.5)] backdrop-blur-sm overflow-hidden">
                  <Globe className="w-6 h-6 md:w-9 md:h-9 text-red-500 relative z-10" />
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pl-12 order-3" />
            </motion.div>

            {/* Step: Baza klientów (Have) */}
            <motion.div variants={fadeInUp} className="relative z-10 flex flex-col md:flex-row items-center mb-12 md:mb-20">
              <div className="w-full md:w-1/2 pl-[60px] md:pl-0 pr-0 md:pr-12 text-left md:text-right order-2 md:order-1 mt-4 md:mt-0">
                <div className="flex items-center gap-2 mb-2 md:justify-end">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                    <Check className="w-3 h-3" /> Masz
                  </span>
                </div>
                <h3 className="text-xl font-bold text-emerald-400 mb-2">Baza klientów</h3>
                <div className="p-4 rounded-xl bg-card/60 border border-emerald-500/20 backdrop-blur-md transition-all duration-300 hover:bg-card/80 hover:border-emerald-500/35 hover:shadow-[0_4px_20px_rgba(16,185,129,0.08)] hover:-translate-y-0.5">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Zapytania ze strony trafiają wprost do Ciebie (na maila i telefon), łącząc się z Twoją istniejącą wiedzą o obsłudze klienta.
                  </p>
                </div>
              </div>
              <div className="absolute left-[4px] md:left-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border-[3px] border-emerald-500 flex items-center justify-center md:-translate-x-1/2 shadow-[0_0_20px_rgba(16,185,129,0.35)] z-20 backdrop-blur-sm">
                <Database className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="w-full md:w-1/2 md:pl-12 order-3" />
            </motion.div>

            {/* Step: Negocjacje (Have) */}
            <motion.div variants={fadeInUp} className="relative z-10 flex flex-col md:flex-row items-center mb-12 md:mb-20">
              <div className="w-full md:w-1/2 pr-12 order-1 hidden md:block" />
              <div className="absolute left-[4px] md:left-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border-[3px] border-emerald-500 flex items-center justify-center md:-translate-x-1/2 shadow-[0_0_20px_rgba(16,185,129,0.35)] z-20 backdrop-blur-sm">
                <Users className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="w-full md:w-1/2 pl-[60px] md:pl-12 order-2 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                    <Check className="w-3 h-3" /> Masz
                  </span>
                </div>
                <h3 className="text-xl font-bold text-emerald-400 mb-2">Negocjacje</h3>
                <div className="p-4 rounded-xl bg-card/60 border border-emerald-500/20 backdrop-blur-md transition-all duration-300 hover:bg-card/80 hover:border-emerald-500/35 hover:shadow-[0_4px_20px_rgba(16,185,129,0.08)] hover:-translate-y-0.5">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Korzystasz z wypracowanych procesów. Oceniasz leady, wyceniasz kampanie i domykasz sprzedaż.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step: Realizacja (Have) */}
            <motion.div variants={fadeInUp} className="relative z-10 flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 pl-[60px] md:pl-0 pr-0 md:pr-12 text-left md:text-right order-2 md:order-1 mt-4 md:mt-0">
                <div className="flex items-center gap-2 mb-2 md:justify-end">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                    <Check className="w-3 h-3" /> Masz
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-emerald-400 mb-2">Realizacja!</h3>
                <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/25 backdrop-blur-md transition-all duration-300 hover:bg-emerald-500/10 hover:border-emerald-500/40 hover:shadow-[0_4px_20px_rgba(16,185,129,0.1)] hover:-translate-y-0.5">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Biznes rośnie. Wynajmujesz kolejne powierzchnie, bo masz ciągły dopływ nowych kontaktów, o który dba nowa strona.
                  </p>
                </div>
              </div>
              <div className="absolute left-[2px] md:left-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-emerald-500/25 to-emerald-600/15 border-[3px] border-emerald-500 flex items-center justify-center md:-translate-x-1/2 shadow-[0_0_30px_rgba(16,185,129,0.45)] z-20 backdrop-blur-sm">
                <Handshake className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="w-full md:w-1/2 md:pl-12 order-3" />
            </motion.div>
          </div>

          {/* Summary */}
          <motion.div variants={fadeInUp} className="mt-12 p-6 rounded-2xl border border-primary/30 bg-card/50 backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3">Strona to brakujące ogniwo</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
                Masz doświadczenie, procesy i umiejętności do obsługi klientów. Brakuje Ci miejsca, gdzie możesz ich zbierać.
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
      <section id="pakiety" className="relative px-6 py-16 md:py-24">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Wybierz pakiet dla siebie</h2>
            <p className="text-muted-foreground text-lg">Zaczynamy od strony - wybierz wariant, który najbardziej Ci odpowiada.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* START Card */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group relative cursor-pointer"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-border/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]" />
              <div className="relative h-full p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/50 group-hover:bg-card/80 group-hover:shadow-[0_16px_48px_rgba(0,0,0,0.25)]">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-secondary text-secondary-foreground">
                    PODSTAWOWY
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
                    "Podstawowy formularz kontaktowy (na e-mail)",
                    "Przejrzysty i optymalny układ treści",
                    "Wdrożenie pod klucz na Twój hosting"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* ROZWÓJ Card */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group relative cursor-pointer"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/40 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]" />
              <div className="relative h-full p-8 rounded-2xl border border-primary/50 bg-card/50 backdrop-blur-sm transition-all duration-300 group-hover:border-primary group-hover:bg-card/80 group-hover:shadow-[0_16px_48px_rgba(100,100,255,0.12)]">
                <div className="mb-6 flex flex-wrap items-center gap-2">
                  <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-primary/20 text-primary border border-primary/30">
                    ROZWÓJ
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 text-sm font-semibold rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 border border-amber-500/30">
                    <Star className="w-4 h-4 fill-current" />
                    POPULARNA
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
                  <span className="font-medium">10 dni</span>
                </div>

                <ul className="space-y-4">
                  {[
                    "Profesjonalny projekt z zaawansowanymi animacjami",
                    "Copywriting sprzedażowy skrojony pod profil klienta",
                    "System skutecznego łowienia leadów B2B",
                    "Błyskawiczne powiadomienia na telefon o nowym zapytaniu",
                    "Optymalizacja UX/UI gwarantująca wysoką konwersję (tzw. lejek)",
                    "Klarowna prezentacja zalet Twoich kluczowych lokalizacji"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/90 font-medium">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* NAJLEPSZY Card */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group relative cursor-pointer"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-accent/40 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]" />
              <div className="relative h-full p-8 rounded-2xl border border-accent/50 bg-card/50 backdrop-blur-sm transition-all duration-300 group-hover:border-accent group-hover:bg-card/80 group-hover:shadow-[0_16px_48px_rgba(0,200,255,0.1)]">
                <div className="mb-6 flex flex-wrap items-center gap-2">
                  <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-accent/20 text-accent border border-accent/30">
                    NAJLEPSZY
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 text-sm font-semibold rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30">
                    <Zap className="w-4 h-4 fill-current" />
                    PRIORYTET
                  </span>
                </div>

                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-bold">7 000</span>
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

          {/* Setup Table Comparison */}
          <motion.div variants={fadeInUp} className="mt-20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-3">Porównanie pakietów</h3>
            <p className="text-muted-foreground text-center mb-8">Sprawdź, co dokładnie zyskujesz w każdym wariancie.</p>
            {/* Desktop table */}
            <div className="hidden md:block rounded-2xl border border-border bg-card/40 backdrop-blur-sm">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="px-6 py-5 font-medium text-xs text-muted-foreground uppercase tracking-wider">Funkcjonalność</th>
                    <th className="px-6 py-5 text-center">
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-secondary text-secondary-foreground">PODSTAWOWY</span>
                    </th>
                    <th className="px-6 py-5 text-center">
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary border border-primary/30">ROZWÓJ</span>
                    </th>
                    <th className="px-6 py-5 text-center">
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-accent/20 text-accent border border-accent/30">NAJLEPSZY</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Category: Podstawa */}
                  <tr className="bg-card/30">
                    <td colSpan={4} className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">🔧 Podstawa</td>
                  </tr>
                  <tr className="hover:bg-card/60 transition-colors border-b border-border/50">
                    <td className="px-6 py-4 text-foreground/90">Responsywna strona (mobile + desktop)</td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                  </tr>
                  <tr className="hover:bg-card/60 transition-colors border-b border-border/50">
                    <td className="px-6 py-4 text-foreground/90">Wdrożenie i optymalizacja hostingu</td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                  </tr>
                  {/* Category: Marketing i sprzedaż */}
                  <tr className="bg-card/30">
                    <td colSpan={4} className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">📈 Marketing i sprzedaż</td>
                  </tr>
                  <tr className="hover:bg-card/60 transition-colors border-b border-border/50">
                    <td className="px-6 py-4 text-foreground/90">Angażujący copywriting dla branży OOH</td>
                    <td className="px-6 py-4 text-center"><X className="w-4 h-4 mx-auto text-muted-foreground/40" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                  </tr>
                  <tr className="hover:bg-card/60 transition-colors border-b border-border/50">
                    <td className="px-6 py-4 text-foreground/90">Zaawansowany lejek sprzedażowy</td>
                    <td className="px-6 py-4 text-center"><X className="w-4 h-4 mx-auto text-muted-foreground/40" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                  </tr>
                  <tr className="hover:bg-card/60 transition-colors border-b border-border/50">
                    <td className="px-6 py-4 text-foreground/90">Powiadomienia o leadach na telefon</td>
                    <td className="px-6 py-4 text-center"><X className="w-4 h-4 mx-auto text-muted-foreground/40" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                  </tr>
                  {/* Category: Ekskluzywne */}
                  <tr className="bg-card/30">
                    <td colSpan={4} className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">⭐ Tylko w Najlepszym</td>
                  </tr>
                  <tr className="hover:bg-card/60 transition-colors border-b border-border/50">
                    <td className="px-6 py-4 text-foreground/90">Interaktywna mapa 500+ lokalizacji</td>
                    <td className="px-6 py-4 text-center"><X className="w-4 h-4 mx-auto text-muted-foreground/40" /></td>
                    <td className="px-6 py-4 text-center"><X className="w-4 h-4 mx-auto text-muted-foreground/40" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                  </tr>
                  <tr className="hover:bg-card/60 transition-colors border-b border-border/50">
                    <td className="px-6 py-4 text-foreground/90">Prezentacja całej sieci nośników</td>
                    <td className="px-6 py-4 text-center"><X className="w-4 h-4 mx-auto text-muted-foreground/40" /></td>
                    <td className="px-6 py-4 text-center"><X className="w-4 h-4 mx-auto text-muted-foreground/40" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                  </tr>
                  <tr className="hover:bg-card/60 transition-colors border-b border-border/50">
                    <td className="px-6 py-4 text-foreground/90">Priorytetowa realizacja</td>
                    <td className="px-6 py-4 text-center"><X className="w-4 h-4 mx-auto text-muted-foreground/40" /></td>
                    <td className="px-6 py-4 text-center"><X className="w-4 h-4 mx-auto text-muted-foreground/40" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                  </tr>
                  {/* Summary row */}
                  <tr className="bg-gradient-to-r from-card/40 via-card/60 to-card/40">
                    <td className="px-6 py-5 font-semibold text-foreground">Szybkość wdrożenia</td>
                    <td className="px-6 py-5 text-center text-muted-foreground font-semibold">14 dni</td>
                    <td className="px-6 py-5 text-center text-primary font-semibold">10 dni</td>
                    <td className="px-6 py-5 text-center text-cyan-400 font-semibold">do 72h ⚡</td>
                  </tr>
                  <tr className="bg-gradient-to-r from-card/40 via-card/60 to-card/40 border-t border-border/50">
                    <td className="px-6 py-5 font-semibold text-foreground">Cena</td>
                    <td className="px-6 py-5 text-center text-muted-foreground font-bold text-lg">3 500 zł</td>
                    <td className="px-6 py-5 text-center text-primary font-bold text-lg">5 000 zł</td>
                    <td className="px-6 py-5 text-center text-cyan-400 font-bold text-lg">7 000 zł</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile stacked comparison */}
            <div className="md:hidden space-y-3">
              {[
                { feature: "Responsywna strona", p: true, r: true, n: true },
                { feature: "Wdrożenie hostingu", p: true, r: true, n: true },
                { feature: "Copywriting OOH", p: false, r: true, n: true },
                { feature: "Lejek sprzedażowy", p: false, r: true, n: true },
                { feature: "Powiadomienia o leadach", p: false, r: true, n: true },
                { feature: "Mapa 500+ lokalizacji", p: false, r: false, n: true },
                { feature: "Prezentacja sieci nośników", p: false, r: false, n: true },
                { feature: "Priorytetowa realizacja", p: false, r: false, n: true },
              ].map((row, i) => (
                <div key={i} className="p-4 rounded-xl bg-card/40 border border-border/50">
                  <p className="text-sm font-medium text-foreground mb-3">{row.feature}</p>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-[10px] text-muted-foreground uppercase">Podst.</span>
                      {row.p ? <Check className="w-4 h-4 text-emerald-500" /> : <X className="w-4 h-4 text-muted-foreground/30" />}
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-[10px] text-primary uppercase">Rozwój</span>
                      {row.r ? <Check className="w-4 h-4 text-emerald-500" /> : <X className="w-4 h-4 text-muted-foreground/30" />}
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-[10px] text-accent uppercase">Najlep.</span>
                      {row.n ? <Check className="w-4 h-4 text-emerald-500" /> : <X className="w-4 h-4 text-muted-foreground/30" />}
                    </div>
                  </div>
                </div>
              ))}
              {/* Summary cards */}
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="p-3 rounded-xl bg-card/40 border border-border/50 text-center">
                  <span className="text-[10px] text-muted-foreground uppercase block">Podst.</span>
                  <span className="text-lg font-bold text-foreground">3 500 zł</span>
                  <span className="text-xs text-muted-foreground block">14 dni</span>
                </div>
                <div className="p-3 rounded-xl bg-card/40 border border-primary/30 text-center">
                  <span className="text-[10px] text-primary uppercase block">Rozwój</span>
                  <span className="text-lg font-bold text-primary">5 000 zł</span>
                  <span className="text-xs text-primary/70 block">10 dni</span>
                </div>
                <div className="p-3 rounded-xl bg-card/40 border border-accent/30 text-center">
                  <span className="text-[10px] text-accent uppercase block">Najlep.</span>
                  <span className="text-lg font-bold text-cyan-400">7 000 zł</span>
                  <span className="text-xs text-cyan-400/70 block">do 72h ⚡</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Maintenance Section */}
      <section id="utrzymanie" className="relative px-6 py-16 md:py-24">
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
                  <p className="text-sm text-muted-foreground mb-8">Pakiet miesięczny - wszystko w jednej cenie.</p>
                </div>

                {/* Features grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { icon: Headphones, title: "Stały kontakt", desc: "Szybka reakcja na Twoje potrzeby." },
                    { icon: RefreshCw, title: "Aktualizacje", desc: "Bieżące zmiany i ulepszenia." },
                    { icon: Edit3, title: "Edycja treści", desc: "Oferty, zdjęcia, teksty." },
                    { icon: PlusCircle, title: "Nowe elementy", desc: "Rozbudowa funkcjonalności." },
                    { icon: Wrench, title: "Opieka techniczna", desc: "Hosting, domena, certyfikat SSL." },
                    { icon: Shield, title: "Bezpieczeństwo", desc: "Kopie zapasowe i monitoring." }
                  ].map((item, i) => (
                    <div key={i} className="group/maint flex items-start gap-3 p-3 rounded-xl bg-card/50 border border-border/50 transition-all duration-300 hover:bg-card/80 hover:border-primary/30 hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover/maint:bg-primary/20 group-hover/maint:border-primary/40">
                        <item.icon className="w-5 h-5 text-primary transition-transform duration-300 group-hover/maint:scale-110" />
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
                    <span className="text-foreground font-medium">Zero stresu</span> — Ty zajmujesz się klientami, my stroną.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section - Contact */}
      <section id="kontakt" className="relative px-6 py-16 md:py-24">
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
                  Zadzwoń — chętnie odpowiemy na wszystkie pytania i pomożemy wybrać najlepszą opcję dla Twojego biznesu.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {CONTACTS.map((contact) => (
                    <a
                      key={contact.name}
                      href={contact.href}
                      className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                    >
                      <Phone className="w-5 h-5" />
                      {contact.phone}
                      <span className="text-primary-foreground/70 font-normal">— {contact.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
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
            Oferta przygotowana przez <span className="text-foreground font-medium">Kamila Tańskiego</span> i <span className="text-foreground font-medium">Leona Bednarskiego</span>.
          </p>
        </motion.div>
      </footer>
      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/25 hover:scale-110 transition-transform cursor-pointer"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
