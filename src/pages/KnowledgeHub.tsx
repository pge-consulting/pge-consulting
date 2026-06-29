import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";
import { BookOpen, ExternalLink, Clock, Wrench } from "lucide-react";

const books = [
  {
    title: "Inspection, Testing, and Turnover in Industrial Construction",
    subtitle: "A Field Guide for Owners, Engineers, and Contractors",
    author: "Stacey Roberts",
    published: "March 29, 2026",
    price: "$89.99",
    cover: "/images/itp cover.jpg",
    description:
      "This is a manual for Q/A construction inspectors in the field. This manual defines inspection and testing protocols aligned with ISO, ASME, ASTM, and industry best practices. Real world descriptions for ITP Execution. All work shall follow Inspection & Test Plans (ITPs) with defined hold and witness points.",
    amazonUrl:
      "https://www.amazon.com/gp/product/B0GRMXDPDD",
    tags: ["Inspection", "ITP", "ISO", "ASME", "ASTM", "Field Guide"],
  },
  {
    title: "From Blueprint to Operation",
    subtitle: "The Complete Industrial Commissioning and Startup Guide",
    author: "Stacey Roberts",
    published: "April 18, 2026",
    price: "$119.00",
    cover: "/images/blueprint cover.jpg",
    description:
      '"The difference between a facility that starts cleanly and one that suffers costly delays, rework, and safety incidents is almost never the equipment — it is the commissioning process." The definitive field-tested reference for industrial commissioning — from first engineering drawing through handover of a fully operational facility.',
    amazonUrl:
      "https://www.amazon.it/-/en/Stacey-Roberts-ebook/dp/B0GX31YRNN",
    tags: ["Commissioning", "Startup", "OSHA PSM", "Capital Projects", "EPCM"],
  },
];

const tools = [
  {
    name: "VRInspector",
    tagline: "Coming Soon",
    description:
      "A next-generation VR-based inspection tool built for industrial facilities. VRInspector brings immersive virtual reality to field inspection workflows — enabling engineers and inspectors to conduct detailed walkthroughs, document findings, and validate systems in a fully interactive 3D environment.",
    status: "coming-soon",
    url: "https://vrinspector.com",
    icon: "🥽",
  },
  {
    name: "Clean Energy Supply",
    tagline: "RNG & Clean Energy Project Resources",
    description:
      "A dedicated resource hub for clean energy project development, focused on renewable natural gas (RNG), anaerobic digestion, and sustainable energy supply chains. Visit for project insights, market analysis, and sourcing guidance.",
    status: "live",
    url: "https://cleanenergy-supply.com",
    icon: "⚡",
  },
];

export default function KnowledgeHub() {
  return (
    <Layout>
      <div className="min-h-screen">

        {/* Hero */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/P6240057.jpg"
              alt="Industrial project site"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-foreground/85" />
          </div>
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-3xl"
            >
              <motion.p
                variants={staggerItem}
                className="text-primary font-mono text-sm uppercase tracking-widest mb-4"
              >
                Publications & Resources
              </motion.p>
              <motion.h1
                variants={staggerItem}
                className="text-4xl md:text-6xl font-bold text-background mb-6"
              >
                Knowledge Hub
              </motion.h1>
              <motion.p
                variants={staggerItem}
                className="text-xl text-background/80"
              >
                Field-tested books, emerging tools, and trusted resources — from the same experience behind every project PGE delivers.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Books */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-12"
            >
              <BookOpen className="w-7 h-7 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Published Books</h2>
            </motion.div>

            <div className="space-y-16">
              {books.map((book, index) => (
                <motion.div
                  key={book.title}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-10 items-start`}
                >
                  {/* Cover */}
                  <div className="flex-shrink-0 w-full md:w-64">
                    <div className="relative group">
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full md:w-64 h-80 object-cover rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 rounded-lg ring-1 ring-white/10" />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {book.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
                      {book.title}
                    </h3>
                    <p className="text-primary font-semibold text-lg mb-1">{book.subtitle}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono mb-6">
                      <span>By {book.author}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {book.published}
                      </span>
                      <span>·</span>
                      <span className="font-semibold text-foreground">{book.price}</span>
                    </div>
                    <p className="text-muted-foreground text-base leading-relaxed mb-8">
                      {book.description}
                    </p>
                    <a
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
                    >
                      <BookOpen className="w-4 h-4" />
                      Buy on Amazon Kindle
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Series callout */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-16 p-8 border border-primary/30 rounded-lg bg-primary/5 text-center"
            >
              <p className="text-sm font-mono text-primary uppercase tracking-widest mb-2">Industrial Construction Series</p>
              <p className="text-lg font-semibold mb-1">Get both books together on Kindle</p>
              <p className="text-muted-foreground mb-6 text-sm">
                The global testing and commissioning market was valued at USD 265.9 billion in 2025 and is projected to reach USD 400.6 billion by 2034. Nearly 50% of process safety incidents occur during startup and shutdown — these books exist to change that.
              </p>
              <a
                href="https://www.amazon.com/dp/B0GRMXDPDD"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-primary text-primary font-semibold px-6 py-3 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                View the Full Series on Amazon
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Tools & Resources */}
        <section className="py-24 bg-muted/30 border-t border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-16"
            >
              <Wrench className="w-7 h-7 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Tools & Resources</h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              {tools.map((tool) => (
                <motion.div
                  key={tool.name}
                  variants={staggerItem}
                  className="bg-card border border-border rounded-lg p-8 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{tool.icon}</span>
                    {tool.status === "coming-soon" ? (
                      <span className="px-3 py-1 bg-amber-500/10 text-amber-500 text-xs font-mono rounded-full border border-amber-500/30 uppercase tracking-widest">
                        Coming Soon
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-mono rounded-full border border-green-500/30 uppercase tracking-widest">
                        Live
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{tool.name}</h3>
                  <p className="text-primary font-mono text-sm mb-4">{tool.tagline}</p>
                  <p className="text-muted-foreground leading-relaxed flex-1 mb-8">
                    {tool.description}
                  </p>
                  {tool.status === "coming-soon" ? (
                    <div className="inline-flex items-center gap-2 border border-border text-muted-foreground font-semibold px-6 py-3 rounded-md cursor-not-allowed opacity-60 w-fit">
                      <Clock className="w-4 h-4" />
                      Coming Soon
                    </div>
                  ) : (
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-md hover:bg-primary/90 transition-colors w-fit"
                    >
                      Visit {tool.name}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-foreground">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
                Need Hands-On Expertise, Not Just a Book?
              </h2>
              <p className="text-background/70 text-lg mb-8 max-w-2xl mx-auto">
                The same knowledge behind these publications is available directly — applied to your project, your site, and your schedule.
              </p>
              <a
                href="#/appointments"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-md hover:bg-primary/90 transition-colors text-lg"
              >
                Schedule a Free Consultation →
              </a>
            </motion.div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
