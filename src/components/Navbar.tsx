import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import { CTA_BUTTON_TEXT } from "@/constants";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      <div className={`hidden md:block bg-primary text-primary-foreground text-xs font-body transition-all duration-500 ${scrolled ? "max-h-0 overflow-hidden opacity-0" : "max-h-10 opacity-100"}`}>
        <div className="container-narrow flex items-center justify-between px-6 lg:px-12 py-2">
          <div className="flex items-center gap-6">
            <a href="tel:+918690720859" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
              <Phone size={12} /> +91 86907 20859
            </a>
            <a href="mailto:info@eventsauditor.com" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
              <Mail size={12} /> info@eventsauditor.com
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-primary-foreground/70">
            <MapPin size={12} /> 58/2, Nakshtra Empire, Nehru Nagar, Ajmer Road, Jaipur, Rajasthan, 302021
          </div>
        </div>
      </div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-card/95 backdrop-blur-lg shadow-lg border-b border-border/50"
            : "bg-transparent mt-[36px]"
        }`}
      >
      <div className="container-narrow flex items-center justify-between py-4 px-6 lg:px-12">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Events Auditor AJCO" className="h-12 md:h-14" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative font-body font-medium text-sm tracking-wide transition-colors duration-300 ${
                location.pathname === item.path
                  ? "text-secondary"
                  : scrolled
                  ? "text-foreground hover:text-secondary"
                  : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              {item.label}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary rounded-full"
                />
              )}
            </Link>
          ))}
          <a
            href="tel:+918690720859"
            className="flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg font-body font-semibold text-sm hover-lift"
          >
            <Phone size={16} />
            {CTA_BUTTON_TEXT}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 rounded-lg ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-md border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`py-3 px-4 rounded-lg font-body font-medium transition-colors ${
                    location.pathname === item.path
                      ? "bg-secondary text-secondary-foreground"
                      : "text-white hover:bg-secondary/20"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:+918690720859"
                className="mt-2 flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-5 py-3 rounded-lg font-body font-semibold"
              >
                <Phone size={16} />
                {CTA_BUTTON_TEXT}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
    </>
  );
};

export default Navbar;
