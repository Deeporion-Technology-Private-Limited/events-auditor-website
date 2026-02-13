import { Shield, TrendingUp, Handshake, Users, Award, Target } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import aboutTeam from "@/assets/about-team.jpg";
import { EXPERIENCE_YEARS } from "@/constants";

const values = [
  { icon: Handshake, title: "Goodwill", desc: "Builds lasting trust and reputation through transparent audits that verify contracts, prevent disputes, and showcase ethical practices to stakeholders." },
  { icon: TrendingUp, title: "Financial Savings", desc: "Uncovers revenue leakages, overbilling, and cost overruns, delivering 10-20% budget recoveries—directly boosting profitability." },
  { icon: Shield, title: "Best Utilization", desc: "Optimizes resource allocation by matching contracted services to actual usage, eliminating waste for maximum efficiency." },
  { icon: Users, title: "Expert Team", desc: "Chartered Accountants, Company Secretary, CMA, MBA, Event Managers, Engineers, Technical Consultants, and more." },
  { icon: Award, title: "Compliance Excellence", desc: "Full statutory compliance throughout the event lifecycle with strong internal controls and transparent reporting." },
  { icon: Target, title: "Client-Focused", desc: "Tailored solutions to meet your specific goals with seamless management from planning to post-event follow-up." },
];

const About = () => (
  <main>
    {/* Hero */}
    <section className="bg-primary section-padding pt-32 pb-16">
      <div className="container-narrow">
        <AnimatedSection>
          <span className="inline-block bg-secondary/20 text-secondary-foreground border border-secondary/30 px-4 py-1.5 rounded-full text-sm font-body font-medium mb-4">
            About Us
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Your Trusted Event Audit<br />& Accounting Partner
          </h1>
          <p className="font-body text-primary-foreground/70 text-lg max-w-2xl">
            We're not a typical audit firm. We specialize in event auditing, unlocking value that others overlook.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Story — Years Of Proven Experience */}
    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <AnimatedSection direction="left">
            <img src={aboutTeam} alt="Our team at work" className="rounded-2xl shadow-xl w-full" />
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <div className="flex flex-col gap-6">
              <div className="divider-line w-16 shrink-0" />
              <div className="space-y-2">
                <p className="font-heading text-4xl md:text-5xl font-bold gradient-text">
                  {EXPERIENCE_YEARS}
                </p>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  Years Of Proven Experience
                </h2>
              </div>
              <p className="font-body text-muted-foreground leading-relaxed">
                Our dedicated team brings deep specialization in event auditing, unlocking value by identifying revenue leakages, optimizing costs, and ensuring contractual compliance.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                This results in substantial financial savings—often 10-20% of event budgets—while elevating service delivery standards, enhancing transparency, and boosting stakeholder satisfaction from organizers to vendors.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding" style={{ background: "var(--section-gradient)" }}>
      <div className="container-narrow">
        <AnimatedSection className="text-center mb-14">
          <div className="divider-line mx-auto mb-4" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Our Core Values</h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-card p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <v.icon size={24} className="text-secondary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default About;
