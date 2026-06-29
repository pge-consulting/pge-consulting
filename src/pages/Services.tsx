import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ServiceCard, AdditionalServiceCard, ProcessCard } from "@/components/Cards";
import { SERVICES, ADDITIONAL_SERVICES, PROCESS_STEPS } from "@/data/index";
import { ROUTE_PATHS } from "@/lib/index";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Briefcase,
  Flame,
  Factory,
  Zap,
  AlertTriangle,
  FileSearch,
} from "lucide-react";

const iconMap = {
  Briefcase,
  Flame,
  Factory,
  Zap,
  AlertTriangle,
  FileSearch,
};

export default function Services() {
  return (
    <Layout>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="min-h-screen"
      >
        <section className="relative py-20 md:py-28 overflow-hidden text-background">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/posco.jpeg"
              alt="Industrial facility"
              className="w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-foreground/80" />
          </div>
          <div className="relative z-10 container mx-auto px-4 max-w-4xl text-center">
            <motion.p
              variants={fadeInUp}
              className="text-primary font-mono text-sm uppercase tracking-widest mb-4"
            >
              What We Do
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              Our Services
            </motion.h1>
            <div className="w-12 h-1 bg-primary mx-auto mb-6" />
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-background/80 max-w-3xl mx-auto font-medium"
            >
              Owner-side project execution and recovery for complex industrial
              facilities.
            </motion.p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16 text-center"
            >
              <motion.div variants={staggerItem} className="flex flex-col items-center gap-2 mb-2">
                <p className="text-primary font-mono text-sm uppercase tracking-widest">Full Lifecycle Execution</p>
                <h2 className="text-4xl md:text-5xl font-bold">Core Services</h2>
                <div className="w-12 h-1 bg-primary mt-2" />
              </motion.div>
              <motion.p
                variants={staggerItem}
                className="text-lg text-muted-foreground max-w-3xl mx-auto"
              >
                Field-driven execution across the full project lifecycle — from
                pre-construction planning through commissioning and startup.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {SERVICES.map((service) => {
                const IconComponent = iconMap[service.icon as keyof typeof iconMap];
                return (
                  <motion.div key={service.id} variants={staggerItem}>
                    <ServiceCard
                      icon={IconComponent}
                      title={service.title}
                      description={service.description}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Project Photo Gallery Strip */}
        <section className="py-0 bg-foreground">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {[
              { src: "/images/enviva.jpg", alt: "Enviva wood pellet facility" },
              { src: "/images/enviva 2.jpg", alt: "Enviva conveyor system" },
              { src: "/images/overland.jpg", alt: "Overland conveyor infrastructure" },
              { src: "/images/Van Ess Farm 20230715.jpg", alt: "Van Ess Farm RNG facility" },
            ].map((photo, i) => (
              <div key={i} className="relative overflow-hidden h-56 md:h-72">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16 text-center"
            >
              <motion.h2
                variants={staggerItem}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Additional Services
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-lg text-muted-foreground max-w-3xl mx-auto"
              >
                Specialized consulting and advisory services for private equity,
                project lifecycle management, and process safety compliance.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-3 gap-8"
            >
              {ADDITIONAL_SERVICES.map((service, index) => (
                <motion.div key={index} variants={staggerItem}>
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

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16 text-center"
            >
              <motion.h2
                variants={staggerItem}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                How We Engage
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-lg text-muted-foreground max-w-3xl mx-auto"
              >
                A straightforward, field-driven approach to project execution —
                no fluff, no surprises, just results.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {PROCESS_STEPS.map((step) => (
                <motion.div key={step.step} variants={staggerItem}>
                  <ProcessCard
                    step={step.step}
                    title={step.title}
                    description={step.description}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 text-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                variants={staggerItem}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Not Sure Which Service Fits?
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-xl text-background/80 mb-8 max-w-2xl mx-auto"
              >
                Every project is different. Let's have a conversation about your
                specific challenges and figure out the best approach together.
              </motion.p>
              <motion.div variants={staggerItem}>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
                >
                  <Link to={ROUTE_PATHS.APPOINTMENTS}>Schedule a Call</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
}
