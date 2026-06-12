import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Briefcase, Flame, Factory, Zap, AlertTriangle, FileSearch, Wrench, Shield, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROUTE_PATHS } from "@/lib/index";
import { SERVICES, ADDITIONAL_SERVICES, COMPANY_STATS } from "@/data/index";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";
import { ServiceCard, StatCard, AdditionalServiceCard } from "@/components/Cards";
import { Layout } from "@/components/Layout";
import { IMAGES } from "@/assets/images";

const iconMap = {
  Briefcase,
  Flame,
  Factory,
  Zap,
  AlertTriangle,
  FileSearch,
};

const whyPgeItems = [
  {
    icon: Wrench,
    title: "Field-Driven",
    description: "We're not consultants who write reports. We're in the field, managing contractors, solving problems, and getting projects built.",
  },
  {
    icon: Shield,
    title: "Owner-Side",
    description: "We work exclusively for project owners and investors. Your interests are our only priority — no conflicts, no compromises.",
  },
  {
    icon: Target,
    title: "Execution-Focused",
    description: "We deliver results, not PowerPoint decks. Our success is measured by projects completed safely, on schedule, and on budget.",
  },
];

const whatWeDoItems = [
  "Owner's Representative & EPC Oversight",
  "RNG & Anaerobic Digestion Facilities",
  "Wood Pellet Plant Execution",
  "Commissioning & Startup Leadership",
  "Project Recovery & Turnaround",
];

export default function Home() {
  return (
    <Layout>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Van Ess Farm upgrader 20230715.jpg"
            alt="RNG upgrader facility"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-32 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              Organize the Chaos.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Owner-side project execution for complex industrial facilities. We don't just advise — we deliver.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link to={ROUTE_PATHS.APPOINTMENTS}>Schedule a Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link to={ROUTE_PATHS.SERVICES}>View Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {COMPANY_STATS.map((stat) => (
              <motion.div key={stat.label} variants={staggerItem}>
                <StatCard value={stat.value} label={stat.label} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Do</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We execute complex industrial projects from the owner's side. No advisory fluff — just hands-on project leadership, contractor management, and field-driven problem solving.
            </p>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-2xl mx-auto space-y-4"
          >
            {whatWeDoItems.map((item) => (
              <motion.li
                key={item}
                variants={staggerItem}
                className="flex items-start gap-3 text-lg"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why PGE Consulting</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're different from typical consultants. Here's how.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {whyPgeItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  className="bg-card border border-border rounded-lg p-8 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Additional Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Beyond core project execution, we provide specialized consulting services.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {ADDITIONAL_SERVICES.map((service) => (
              <motion.div key={service.title} variants={staggerItem}>
                <AdditionalServiceCard
                  title={service.title}
                  description={service.description}
                  items={service.items}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Roorda farm 20230715.jpg"
            alt="Aerial view of anaerobic digester"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-foreground/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-background">
              Ready to Talk About Your Project?
            </h2>
            <p className="text-xl text-background/80 mb-8">
              No sales pitch. Just an honest conversation about your project and whether we can help.
            </p>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-background text-foreground hover:bg-background/90">
              <Link to={ROUTE_PATHS.APPOINTMENTS}>Schedule a Call</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
