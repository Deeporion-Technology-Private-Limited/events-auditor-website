import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-narrow section-padding pb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <img src={logo} alt="Events Auditor" className="h-14 mb-4 brightness-200" />
          <p className="text-primary-foreground/70 font-body text-sm leading-relaxed">
            Team consists of multiple professionals, including Chartered Accountants, Company Secretary, CMA, MBA, Event Managers, Engineers, Technical Consultants, and more.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Contact Us", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-primary-foreground/70 hover:text-secondary transition-colors font-body text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
          <div className="flex flex-col gap-3 text-sm font-body">
            <div className="flex items-start gap-3 text-primary-foreground/70">
              <MapPin size={18} className="mt-0.5 shrink-0 text-secondary" />
              58/2, Nakshtra Empire, Nehru Nagar, Ajmer Road, Jaipur, Rajasthan, 302021
            </div>
            <a href="tel:+918690720859" className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors">
              <Phone size={18} className="shrink-0 text-secondary" />
              +91 86907 20859
            </a>
            <a href="mailto:contact@eventsauditor.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors">
              <Mail size={18} className="shrink-0 text-secondary" />
              contact@eventsauditor.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 text-center text-primary-foreground/50 text-sm font-body">
        © {new Date().getFullYear()} Events Auditor AJCO. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
