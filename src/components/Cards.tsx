import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { hoverLift, fadeInUp } from "@/lib/motion";
import type { Service, CompanyStat, ProcessStep, AdditionalService } from "@/lib/index";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      variants={hoverLift}
      initial="rest"
      whileHover="hover"
      className="bg-card border border-border rounded-lg p-6 transition-all duration-200"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="text-center py-8 px-6 bg-card/50 border border-border rounded-lg"
    >
      <div className="text-5xl font-bold font-mono text-primary mb-2">{value}</div>
      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
        {label}
      </div>
    </motion.div>
  );
}

interface ProcessCardProps {
  step: number;
  title: string;
  description: string;
}

export function ProcessCard({ step, title, description }: ProcessCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="relative bg-card border border-border rounded-lg p-6"
    >
      <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
        <span className="text-xl font-bold text-primary-foreground font-mono">{step}</span>
      </div>
      <div className="pt-4">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

interface AdditionalServiceCardProps {
  title: string;
  description: string;
  items: string[];
}

export function AdditionalServiceCard({ title, description, items }: AdditionalServiceCardProps) {
  return (
    <motion.div
      variants={hoverLift}
      initial="rest"
      whileHover="hover"
      className="bg-card border border-border rounded-lg p-6 h-full flex flex-col"
    >
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-3 flex-1">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
            <span className="text-sm text-foreground leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
