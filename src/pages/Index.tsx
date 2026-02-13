import { Link } from "react-router-dom";
import { Phone, Shield, TrendingUp, Handshake, ChevronRight, Building2, CalendarCheck, ClipboardCheck, Landmark, PartyPopper, Quote, Music, Trophy, Award, Briefcase, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import clientLogos from "@/assets/client-logos.png";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Events Audited" },
  { value: "10-20%", label: "Budget Savings" },
  { value: "100%", label: "Happy Clients" },
];

const services = [
  { icon: Building2, title: "EXPO Audit", desc: "Comprehensive auditing for large-scale expos" },
  { icon: ClipboardCheck, title: "Trade Show Audit", desc: "Financial controls for trade exhibitions" },
  { icon: CalendarCheck, title: "Conference Audit", desc: "End-to-end conference compliance" },
  { icon: Landmark, title: "Exhibition Audit", desc: "Transparent exhibition financial management" },
  { icon: PartyPopper, title: "Wedding & Birthday Audit", desc: "Event cost optimization for celebrations" },
  { icon: Music, title: "Concert & Festival Audit", desc: "Financial oversight for concerts and festivals" },
  { icon: Trophy, title: "Sports & Marathon Audit", desc: "Audit services for sporting events and marathons" },
  { icon: Award, title: "Award Show Audit", desc: "Compliance and financial control for award ceremonies" },
  { icon: Briefcase, title: "Corporate Gala Audit", desc: "End-to-end audit for corporate galas and dinners" },
  { icon: Rocket, title: "Brand Activation / Product Launch Audit", desc: "Cost optimization for brand activations and launches" },
];

const testimonials = [
  { name: "Nehal Agarwal", text: "Their event audit team ensured strong internal controls, transparent reporting, and full statutory compliance throughout the event lifecycle." },
  { name: "Rajesh Mehta", text: "Accurate event audits, clear reporting, and goodwill made the event more smoother and effortless." },
  { name: "Ankit Sharma", text: "Professional audit support with clear reporting made event compliance seamless." },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        </div>
        <div className="relative container-narrow section-padding pt-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-secondary/20 text-secondary-foreground border border-secondary/30 px-4 py-1.5 rounded-full text-sm font-body font-medium mb-6">
              India's First Event Audit Firm
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Event Audit &<br />
              <span className="text-secondary">Compliance Experts</span>
            </h1>
            <p className="text-primary-foreground/80 font-body text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Elevate your event with an added layer of excellence — hand over your burdens effortlessly.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-secondary text-secondary-foreground px-8 py-3.5 rounded-lg font-body font-semibold hover-lift inline-flex items-center gap-2"
              >
                Book Audit <ChevronRight size={18} />
              </Link>
              <a
                href="tel:+918690720859"
                className="border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-lg font-body font-semibold hover:bg-primary-foreground/10 transition-colors inline-flex items-center gap-2"
              >
                <Phone size={18} /> Schedule a Free Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-16 z-10 px-6 lg:px-20">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card grid grid-cols-2 md:grid-cols-4 gap-6 p-8 md:p-10"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-heading text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="font-body text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding" style={{ background: "var(--section-gradient)" }}>
        <div className="container-narrow grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <img src={aboutTeam} alt="Our team" className="rounded-2xl shadow-xl w-full" />
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <div className="divider-line mb-4" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              We're not a typical audit firm
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Our dedicated team brings deep specialization in event auditing, unlocking value by identifying revenue leakages, optimizing costs, and ensuring contractual compliance. This results in substantial financial savings—often 10-20% of event budgets.
            </p>
            <div className="space-y-4 mb-8">
              {[
                { icon: Handshake, title: "Goodwill", desc: "Builds lasting trust through transparent audits" },
                { icon: TrendingUp, title: "Financial Savings", desc: "10-20% budget recoveries" },
                { icon: Shield, title: "Best Utilization", desc: "Optimizes resource allocation for maximum efficiency" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <item.icon size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-foreground">{item.title}</h4>
                    <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 font-body font-semibold text-secondary hover:gap-3 transition-all">
              More About Us <ChevronRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-narrow">
          <AnimatedSection className="text-center mb-14">
            <div className="divider-line mx-auto mb-4" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
              Delivering Outcomes Through<br />Preventive & Detective Controls
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              A modern audit firm specializing in all types of events
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass-card p-8 group cursor-pointer h-full">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-500">
                    <service.icon size={28} className="text-secondary group-hover:text-secondary-foreground transition-colors duration-500" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="font-body text-sm text-muted-foreground mb-4">{service.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-1 text-sm font-body font-semibold text-secondary group-hover:gap-2 transition-all">
                    Learn More <ChevronRight size={14} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden">
        <div className="bg-primary section-padding">
          <AnimatedSection className="container-narrow text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Unlock Clarity with Expert Event Auditors
            </h2>
            <p className="font-body text-primary-foreground/70 mb-8 max-w-lg mx-auto">
              Book a free consultation and discover how we can optimize your event's financial performance.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3.5 rounded-lg font-body font-semibold hover-lift"
            >
              Book A Free Consultation <ChevronRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-14 px-6 lg:px-20 overflow-hidden">
        <div className="container-narrow">
          <AnimatedSection className="text-center mb-8">
            <p className="font-body text-sm font-semibold text-muted-foreground uppercase tracking-widest">Trusted By Leading Event Organizers</p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="relative overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                <img src={clientLogos} alt="Our clients" className="h-36 md:h-44 object-contain mr-16 shrink-0" />
                <img src={clientLogos} alt="Our clients" className="h-36 md:h-44 object-contain mr-16 shrink-0" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding" style={{ background: "var(--section-gradient)" }}>
        <div className="container-narrow">
          <AnimatedSection className="text-center mb-14">
            <div className="divider-line mx-auto mb-4" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
              What Our Clients Say
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Our event audit clients value live control, transparency, and compliance excellence
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="glass-card p-8 h-full flex flex-col">
                  <Quote size={32} className="text-secondary/30 mb-4" />
                  <p className="font-body text-muted-foreground text-sm leading-relaxed flex-1 mb-6">{t.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center font-heading font-bold text-secondary">
                      {t.name[0]}
                    </div>
                    <span className="font-body font-semibold text-foreground text-sm">{t.name}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
