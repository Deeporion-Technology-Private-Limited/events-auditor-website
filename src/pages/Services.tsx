import { Link } from "react-router-dom";
import { Building2, CalendarCheck, ClipboardCheck, Landmark, PartyPopper, ChevronRight, CheckCircle2, Music, Trophy, Award, Briefcase, Rocket } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import servicesBg from "@/assets/services-bg.jpg";

const services = [
  {
    icon: Building2,
    title: "EXPO Audit",
    desc: "Comprehensive financial and operational auditing for large-scale expos, ensuring every vendor contract, sponsorship agreement, and cost allocation is verified and optimized.",
    features: ["Revenue leakage detection", "Vendor compliance checks", "Budget optimization", "Real-time reporting"],
  },
  {
    icon: ClipboardCheck,
    title: "Trade Show Audit",
    desc: "End-to-end financial controls for trade shows, covering booth allocations, service utilization, and sponsor deliverables.",
    features: ["Service utilization tracking", "Contract verification", "Cost allocation analysis", "Stakeholder reporting"],
  },
  {
    icon: CalendarCheck,
    title: "Conference Audit",
    desc: "Complete conference compliance covering speaker contracts, venue agreements, delegate management, and financial transparency.",
    features: ["Speaker contract audits", "Venue cost analysis", "Delegate tracking", "Compliance documentation"],
  },
  {
    icon: Landmark,
    title: "Exhibition Audit",
    desc: "Transparent exhibition financial management with focus on exhibitor agreements, floor space utilization, and service delivery verification.",
    features: ["Exhibitor agreement review", "Space utilization audit", "Service delivery checks", "Financial reconciliation"],
  },
  {
    icon: PartyPopper,
    title: "Wedding & Birthday Audit",
    desc: "Event cost optimization for personal celebrations ensuring vendors deliver on commitments and budgets are respected.",
    features: ["Vendor deliverable tracking", "Budget adherence", "Quality assurance", "Cost optimization"],
  },
  {
    icon: Music,
    title: "Concert & Festival Audit",
    desc: "Financial oversight for concerts and music festivals covering artist contracts, ticketing revenue, vendor payments, and on-ground expense verification.",
    features: ["Artist contract verification", "Ticketing revenue audit", "Vendor payment tracking", "On-ground expense review"],
  },
  {
    icon: Trophy,
    title: "Sports & Marathon Audit",
    desc: "Comprehensive audit services for sporting events and marathons, ensuring sponsor deliverables, participant fees, and logistics costs are fully accounted for.",
    features: ["Sponsor deliverable checks", "Participant fee reconciliation", "Logistics cost analysis", "Prize fund verification"],
  },
  {
    icon: Award,
    title: "Award Show Audit",
    desc: "Compliance and financial control for award ceremonies, covering nomination processes, venue costs, and production budget adherence.",
    features: ["Nomination process audit", "Production budget review", "Venue cost verification", "Sponsor compliance"],
  },
  {
    icon: Briefcase,
    title: "Corporate Gala Audit",
    desc: "End-to-end audit for corporate galas and formal dinners, ensuring catering, entertainment, and venue contracts are transparent and cost-effective.",
    features: ["Catering contract review", "Entertainment cost audit", "Venue agreement checks", "Guest management audit"],
  },
  {
    icon: Rocket,
    title: "Brand Activation / Product Launch Audit",
    desc: "Cost optimization and compliance for brand activations and product launches, verifying vendor deliverables, marketing spend, and ROI tracking.",
    features: ["Marketing spend verification", "Vendor deliverable tracking", "ROI analysis", "Budget compliance"],
  },
];

const Services = () => (
  <main>
    {/* Hero */}
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={servicesBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      </div>
      <div className="relative container-narrow section-padding pt-32">
        <AnimatedSection>
          <span className="inline-block bg-secondary/20 text-secondary-foreground border border-secondary/30 px-4 py-1.5 rounded-full text-sm font-body font-medium mb-4">
            Our Services
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            A Modern Audit Firm<br />Delivering Outcomes
          </h1>
          <p className="font-body text-primary-foreground/70 text-lg max-w-2xl">
            Through preventive & detective controls, we ensure financial transparency and compliance across all event types.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Services Grid */}
    <section className="section-padding">
      <div className="container-narrow space-y-8">
        {services.map((service, i) => (
          <AnimatedSection key={i} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
            <div className="glass-card p-8 md:p-10 grid md:grid-cols-[auto_1fr] gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0">
                <service.icon size={32} className="text-secondary" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {service.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2 font-body text-sm text-foreground">
                      <CheckCircle2 size={16} className="text-secondary shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary section-padding">
      <AnimatedSection className="container-narrow text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Ready to Optimize Your Event?
        </h2>
        <p className="font-body text-primary-foreground/70 mb-8 max-w-lg mx-auto">
          Let's discuss how our audit services can bring transparency and savings to your next event.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3.5 rounded-lg font-body font-semibold hover-lift"
        >
          Book A Free Consultation <ChevronRight size={18} />
        </Link>
      </AnimatedSection>
    </section>
  </main>
);

export default Services;
