export const ROUTE_PATHS = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  CONTACT: '/contact',
  APPOINTMENTS: '/appointments',
} as const;

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  officeHours: string;
}

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
}

export interface CompanyStat {
  value: string;
  label: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface AdditionalService {
  title: string;
  description: string;
  items: string[];
}
