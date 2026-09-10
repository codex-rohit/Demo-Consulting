export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  iconName: string;
  tag: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  keyAction: string;
  iconName: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  roleCompany: string;
  location: string;
  industry: string;
  beforeState: string;
  afterState: string;
  growthMetric: string;
  metricLabel: string;
  story: string;
  timeframe: string;
  avatarUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  quote: string;
  highlight: string;
  avatarUrl: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  duration: string;
  isPopular?: boolean;
  idealFor: string;
  features: string[];
  outcomes: string;
  ctaText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  companyOrRole: string;
  packagePreference: string;
  date: string;
  timeSlot: string;
  primaryGoal: string;
}
