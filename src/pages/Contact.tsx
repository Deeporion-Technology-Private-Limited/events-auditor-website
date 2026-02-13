import { useState, lazy, Suspense } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import AnimatedSection from "@/components/AnimatedSection";

const GoogleMapSection = lazy(() => import("@/components/GoogleMapSection"));

const EVENT_TYPES = ["", "EXPO", "Trade Show", "Conference", "Exhibition", "Wedding / Birthday", "Other"] as const;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm({ name: "", phone: "", email: "", eventType: "", message: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = form;
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in name, email and message.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          eventType: form.eventType.trim(),
          message: form.message.trim(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        toast.error(data.error || "Something went wrong. Please try again.");
        return;
      }
      toast.success("Enquiry sent. We'll get back to you shortly.");
      setSubmitted(true);
      resetForm();
    } catch {
      toast.error("Failed to send. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
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
                        <input
                          required
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block font-body text-sm font-medium text-foreground mb-1.5">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-all"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-body text-sm font-medium text-foreground mb-1.5">Email</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-all"
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm font-medium text-foreground mb-1.5">Event Type</label>
                      <select
                        name="eventType"
                        value={form.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-all"
                      >
                        {EVENT_TYPES.map((opt) => (
                          <option key={opt || "empty"} value={opt}>
                            {opt || "Select event type"}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block font-body text-sm font-medium text-foreground mb-1.5">Message</label>
                      <textarea
                        required
                        rows={4}
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-all resize-none"
                        placeholder="Tell us about your event..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-secondary text-secondary-foreground px-8 py-3.5 rounded-lg font-body font-semibold hover-lift inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:pointer-events-none"
                    >
                      {loading ? (
                        <Loader2 size={18} className="animate-spin" />
                      ) : (
                        <Send size={18} />
                      )}{" "}
                      {loading ? "Sending…" : "Submit Now"}
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
