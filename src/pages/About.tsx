import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ROUTE_PATHS } from "@/lib/index";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";
import { IMAGES } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const specializations = [
    "RNG & Anaerobic Digestion Facilities",
    "Wood Pellet Manufacturing Plants",
    "Heavy Industrial Construction Projects",
    "Commissioning & Startup Leadership",
    "Project Recovery & Turnaround",
    "Technical Due Diligence for Investors",
  ];

  const engagementScenarios = [
    "Your project is approaching commissioning and you need experienced leadership to manage the transition from construction to operations.",
    "You're an owner or developer without in-house technical staff and need someone to represent your interests during EPC execution.",
    "Your project is behind schedule, over budget, or experiencing contractor performance issues and needs immediate intervention.",
    "You're a private equity firm evaluating an industrial investment and need independent technical assessment before capital deployment.",
    "You have a complex biogas or biomass facility with unique technical challenges that require specialized expertise.",
  ];

  const experiences = [
    "Led commissioning and startup of multiple RNG facilities processing agricultural and municipal waste feedstocks",
    "Managed EPC execution for wood pellet plants with production capacities ranging from 100,000 to 500,000 tons per year",
    "Recovered troubled industrial projects with budgets exceeding $50M through contractor replacement and scope re-baselining",
    "Conducted technical due diligence for private equity acquisitions in renewable energy and industrial manufacturing sectors",
    "Developed process safety programs (PSM/RMP) and led PHA/LOPA studies for high-hazard industrial facilities",
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        <section className="relative bg-foreground py-24 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-background mb-6">
                About PGE Consulting
              </h1>
              <p className="text-xl md:text-2xl text-background/80 font-mono">
                Delivering Industrial Projects. On Schedule. On Budget. Safely.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Who We Are
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    PGE Consulting is an industrial project execution firm with over 20 years of hands-on experience delivering complex facilities in renewable energy, biomass, and heavy industrial sectors.
                  </p>
                  <p>
                    We're not advisors. We're not consultants who write reports and disappear. We're field-driven project leaders who get our boots dirty managing EPC contractors, solving technical problems in real-time, and ensuring your facility starts up safely and efficiently.
                  </p>
                  <p>
                    We work exclusively on the owner's side — your advocate, your technical expert, your project leader. When you hire PGE Consulting, you're getting someone who will fight for your interests, not the contractor's.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src={IMAGES.WOOD_PELLET_4}
                  alt="Industrial facility"
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.h2
                variants={staggerItem}
                className="text-3xl md:text-4xl font-bold mb-8 text-center"
              >
                What We Specialize In
              </motion.h2>
              <motion.ul
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-4"
              >
                {specializations.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={staggerItem}
                    className="flex items-start gap-3 text-lg"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How We Work
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Clients typically engage PGE Consulting when they need experienced, hands-on project leadership to navigate complex industrial execution challenges:
              </p>
              <ul className="space-y-4">
                {engagementScenarios.map((scenario, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold font-mono">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{scenario}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Representative Experience
              </h2>
              <ul className="space-y-4">
                {experiences.map((experience, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 p-6 bg-card rounded-lg border-l-4 border-primary"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <p className="text-lg">{experience}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Meet the Principal
              </h2>
              <div className="grid md:grid-cols-5 gap-8 bg-card p-8 rounded-lg border border-border">
                <div className="md:col-span-2">
                  <img
                    src={IMAGES.TEAM_PORTRAIT_7}
                    alt="Stacey Roberts"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:col-span-3 space-y-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      Stacey Roberts, MBA
                    </h3>
                    <p className="text-xl text-primary font-semibold">
                      Principal Consultant
                    </p>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Stacey brings over 20 years of hands-on industrial project execution experience across renewable energy, biomass, and heavy industrial sectors. She's not a desk consultant — she's a field leader who has commissioned RNG facilities, managed wood pellet plant startups, and recovered troubled projects with budgets exceeding $50M.
                    </p>
                    <p>
                      Her expertise spans EPC oversight, commissioning leadership, process safety management, and technical due diligence for private equity investors. She holds an MBA and has led projects from initial feasibility through final performance testing.
                    </p>
                    <p>
                      Stacey's approach is direct, technical, and results-focused. She tells clients what they need to hear, not what they want to hear. When you work with PGE Consulting, you're getting honest assessments, clear communication, and relentless execution until the job is done right.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-foreground">
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-background mb-6">
                Ready to Deliver Your Project?
              </h2>
              <p className="text-xl text-background/80 mb-8">
                Let's have a frank conversation about your project challenges and whether PGE Consulting can help.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
              >
                <Link to={ROUTE_PATHS.APPOINTMENTS}>Schedule a Free Consultation</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
