import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Staff from "./components/sections/Staff";
import About from "./components/sections/About";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import BottomBar from "./components/layout/BottomBar";
import Footer from "./components/layout/Footer";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

/**
 * Prashant Heart Hospital - Main Application Entry
 * Professional codebase structure for North Bihar's leading cardiology center.
 */
export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Prevent scroll position restoration on reload for a fresh entry
    window.history.scrollRestoration = 'manual';

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 1000);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brand selection:text-white bg-white antialiased overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <BottomBar />
        <Services />
        <Staff />
        <Testimonials />
        <About />
        <Contact />
      </main>

      <Footer />

      {/* Floating Action Button: Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 z-[100] w-14 h-14 bg-slate-900 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:bg-slate-800 transition-colors border border-white/10 active:scale-90 md:flex hidden"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
      
      {/* Mobile Floating Action is handled in the bottom nav if it exists, 
          but for this theme we focus on clean scrolling. */}
    </div>
  );
}
