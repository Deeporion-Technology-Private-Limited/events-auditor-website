import { useState, lazy, Suspense } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const GoogleMapSection = lazy(() => import("@/components/GoogleMapSection"));

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-primary section-padding pt-32 pb-16">
        <div className="container-narrow">
          <AnimatedSection>
            <span className="inline-block bg-secondary/20 text-secondary-foreground border border-secondary/30 px-4 py-1.5 rounded-full text-sm font-body font-medium mb-4">
              Contact Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Let's Get Started
            </h1>
            <p className="font-body text-primary-foreground/70 text-lg max-w-2xl">
              Reach out and we'll get back to you right away. Book a free consultation today.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <AnimatedSection direction="left" className="md:col-span-2 space-y-8">
            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">Get In Touch</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-foreground text-sm">Office</p>
                    <p className="font-body text-muted-foreground text-sm">58/2, Nakshtra Empire, Nehru Nagar, Ajmer Road, Jaipur, Rajasthan, 302021</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-foreground text-sm">Phone</p>
                    <a href="tel:+918690720859" className="font-body text-muted-foreground text-sm hover:text-secondary transition-colors">+91 86907 20859</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-foreground text-sm">Email</p>
                    <a href="mailto:contact@eventsauditor.com" className="font-body text-muted-foreground text-sm hover:text-secondary transition-colors">contact@eventsauditor.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-heading text-lg font-semibold text-foreground mb-3">During our engagement, we focus on:</h4>
              <ul className="space-y-2">
                {[
                  "Event structure, scale, and operational workflow",
                  "Vendor management and cost allocation",
                  "Control mechanisms and risk areas",
                  "Revenue tracking and reporting requirements",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-secondary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection direction="right" delay={0.2} className="md:col-span-3">
            <div className="glass-card p-8 md:p-10">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={32} className="text-secondary" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                    <p className="font-body text-muted-foreground">We'll get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-body text-sm font-medium text-foreground mb-1.5">Name</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-all" placeholder="Your name" />
                      </div>
                      <div>
                        <label className="block font-body text-sm font-medium text-foreground mb-1.5">Phone</label>
                        <input type="tel" className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-all" placeholder="+91 XXXXX XXXXX" />
                      </div>
                    </div>
                    <div>
                      <label className="block font-body text-sm font-medium text-foreground mb-1.5">Email</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-all" placeholder="you@email.com" />
                    </div>
                    <div>
                      <label className="block font-body text-sm font-medium text-foreground mb-1.5">Event Type</label>
                      <select className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-all">
                        <option value="">Select event type</option>
                        <option>EXPO</option>
                        <option>Trade Show</option>
                        <option>Conference</option>
                        <option>Exhibition</option>
                        <option>Wedding / Birthday</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-body text-sm font-medium text-foreground mb-1.5">Message</label>
                      <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-all resize-none" placeholder="Tell us about your event..." />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-secondary text-secondary-foreground px-8 py-3.5 rounded-lg font-body font-semibold hover-lift inline-flex items-center justify-center gap-2"
                    >
                      <Send size={18} /> Submit Now
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Location - Map (lazy loaded) */}
      <Suspense
        fallback={
          <section className="section-padding">
            <div className="container-narrow">
              <div className="divider-line mb-4" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Our Location</h2>
              <div className="w-full h-[300px] md:h-[425px] rounded-xl shadow-lg bg-muted animate-pulse" />
            </div>
          </section>
        }
      >
        <GoogleMapSection />
      </Suspense>
    </main>
  );
};

export default Contact;
