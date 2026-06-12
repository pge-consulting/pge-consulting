import { ROUTE_PATHS } from '@/lib/index';
import type { Service, NavItem, ContactInfo, CompanyStat, ProcessStep, AdditionalService } from '@/lib/index';

export const SERVICES: Service[] = [
  {
    id: 'owners-rep',
    title: "Owner's Representative & Project Execution",
    description: "Field-driven EPC oversight, contractor coordination, and hands-on project leadership. We don't just advise — we execute. From pre-construction planning through final commissioning, we're on-site managing scope, schedule, and safety to ensure your project delivers on time and on budget.",
    icon: 'Briefcase',
  },
  {
    id: 'rng-anaerobic',
    title: 'RNG & Anaerobic Digestion',
    description: "Specialized expertise in biogas facilities — from feedstock handling and digester operations to gas cleanup systems (H2S removal, dehydration, CO2 scrubbing). We've commissioned multiple RNG plants and know how to troubleshoot CH4 purity issues, oxygen ingress, and flare system failures.",
    icon: 'Flame',
  },
  {
    id: 'wood-pellet',
    title: 'Wood Pellet Plant Execution',
    description: 'Complete project delivery for wood pellet manufacturing facilities — dryer systems, pellet mills, cooling/screening, load-out infrastructure. We understand the unique challenges of biomass material handling, dust control, fire suppression, and achieving target pellet quality specs.',
    icon: 'Factory',
  },
  {
    id: 'commissioning-startup',
    title: 'Commissioning & Startup Leadership',
    description: 'Systematic commissioning from PSSR completion through first production run. We lead pre-startup safety reviews, develop startup procedures, coordinate vendor support, and troubleshoot equipment issues in real-time. Our goal: safe, efficient transition from construction to operations.',
    icon: 'Zap',
  },
  {
    id: 'project-recovery',
    title: 'Project Recovery & Turnaround',
    description: 'Stabilizing troubled projects when schedules slip, budgets overrun, or contractors underperform. We assess root causes, re-baseline scope and schedule, replace underperforming teams if needed, and implement corrective action plans to get projects back on track.',
    icon: 'AlertTriangle',
  },
  {
    id: 'technical-due-diligence',
    title: 'Technical Due Diligence & Investor Support',
    description: 'Independent technical reviews for private equity firms and project investors. We evaluate project feasibility, technology risks, cost estimates, schedule assumptions, and operational readiness. Our assessments help investors make informed decisions before capital deployment.',
    icon: 'FileSearch',
  },
];

export const ADDITIONAL_SERVICES: AdditionalService[] = [
  {
    title: 'Private Equity Consulting',
    description: 'Exclusive partnership with IN3 Capital providing technical advisory for industrial investments.',
    items: [
      'Pre-acquisition technical due diligence',
      'Portfolio company operational assessments',
      'Capital project oversight and execution support',
      'Exit readiness evaluations',
    ],
  },
  {
    title: 'Project Lifecycle Consulting',
    description: 'Full-spectrum project support from concept through closeout.',
    items: [
      'Project initiation and feasibility studies',
      'EPC contractor selection and bid evaluation',
      'Construction oversight and quality assurance',
      'Commissioning, startup, and performance testing',
      'Project closeout and lessons learned documentation',
    ],
  },
  {
    title: 'Process Safety & Compliance',
    description: 'Regulatory compliance and process safety management for industrial facilities.',
    items: [
      'Process Hazard Analysis (PHA) facilitation',
      'Layer of Protection Analysis (LOPA)',
      'OSHA PSM and EPA RMP compliance',
      'Standard Operating Procedure (SOP) development',
      'Lockout/Tagout (LOTO) procedure generation',
    ],
  },
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: ROUTE_PATHS.HOME },
  { label: 'About', path: ROUTE_PATHS.ABOUT },
  { label: 'Services', path: ROUTE_PATHS.SERVICES },
  { label: 'Gallery', path: ROUTE_PATHS.GALLERY },
  { label: 'Contact', path: ROUTE_PATHS.CONTACT },
];

export const COMPANY_STATS: CompanyStat[] = [
  { value: '20+', label: 'Years Experience' },
  { value: '30+', label: 'Projects Delivered' },
  { value: '5', label: 'Industries Served' },
];

export const CONTACT_INFO: ContactInfo = {
  email: 'staceyr@pge-consulting.com',
  phone: '(804) 874-8874',
  location: 'Port Charlotte, FL',
  officeHours: 'Available for project consultations by appointment',
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Assess',
    description: "We start with a frank conversation about your project -- scope, timeline, risks, and what is keeping you up at night. No sales pitch, just honest technical assessment.",
  },
  {
    step: 2,
    title: 'Plan',
    description: "We develop a clear execution strategy -- roles, deliverables, milestones, and success criteria. You will know exactly what we are doing and why.",
  },
  {
    step: 3,
    title: 'Execute',
    description: "We get to work in the field -- managing contractors, solving problems, and keeping the project moving forward. Daily communication, weekly progress reports, no surprises.",
  },
  {
    step: 4,
    title: 'Deliver',
    description: "We do not leave until the facility is running safely and efficiently. Commissioning complete, operations trained, punch list closed, lessons learned documented.",
  },
];
