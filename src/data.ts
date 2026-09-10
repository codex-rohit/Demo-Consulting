import {
  ServiceItem,
  ProcessStep,
  CaseStudy,
  Testimonial,
  PricingPackage,
  FAQItem
} from './types';

export const COACH_PROFILE = {
  name: "Rajesh Kumar",
  title: "Business Growth & Executive Coach",
  heroHeadline: "Rajesh Kumar, Business Growth Coach",
  heroSubheadline: "Help Indian Founders & Ambitious Leaders Scale to ₹10 Crore ARR with Predictable Systems",
  experienceYears: 14,
  foundersCoached: 180,
  revenueScaled: "₹140+ Cr",
  satisfactionRate: "98.4%",
  location: "Bengaluru & Mumbai, India (Global Clients)",
  email: "rajesh@rajeshkumar.co",
  phone: "+91 98201 45892",
  whatsappNumber: "919820145892",
  linkedinUrl: "https://linkedin.com/in/rajeshkumar-coach-demo",
  twitterUrl: "https://twitter.com/rajeshkumar_biz",
  instagramUrl: "https://instagram.com/rajeshkumar.growth",
  credentials: [
    "ICF Master Certified Coach (MCC)",
    "Ex-VP of Operations (2 Startups Scaled from Seed to Series B)",
    "Stanford Seed Consulting Mentor (India Chapter)",
    "IIT Delhi & IIM Ahmedabad Alumni Advisor"
  ],
  heroImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
  aboutImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80"
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "business-strategy",
    title: "Business Strategy Consulting",
    description: "Architect a resilient growth flywheel with proven unit economics, market positioning, and defensible moats suited for the fast-evolving Indian market.",
    deliverables: ["Unit Economics Audit", "3-Year Strategic Growth Matrix", "Moat & Pricing Power Blueprint"],
    iconName: "TrendingUp",
    tag: "Core Strategic Foundation"
  },
  {
    id: "leadership-coaching",
    title: "Leadership & Executive Coaching",
    description: "Transform from hands-on operator into an inspiring, high-leverage CEO who communicates vision effortlessly and makes high-stakes decisions with conviction.",
    deliverables: ["1:1 Executive Sprints", "Emotional Intelligence Coaching", "Delegation & Authority Framework"],
    iconName: "Compass",
    tag: "High-Leverage Leadership"
  },
  {
    id: "career-transition",
    title: "Career Transition Coaching",
    description: "Confidential advisory for senior tech leads, directors, and functional heads navigating promotion into VP/CXO roles or stepping out to found their first venture.",
    deliverables: ["Executive Personal Brand Audit", "C-Suite Visibility Playbook", "Board Interview & Equity Negotiation"],
    iconName: "Briefcase",
    tag: "Career Elevation"
  },
  {
    id: "team-building",
    title: "High-Performance Team Building",
    description: "Design hiring scorecards to attract top 5% talent, establish transparent OKR alignment, and build a self-accountable culture that thrives without micromanagement.",
    deliverables: ["A-Player Hiring Scorecards", "OKR & Weekly Review Sprints", "Retention & Incentive Framework"],
    iconName: "Users",
    tag: "Operational Scale"
  },
  {
    id: "gtm-marketing",
    title: "Go-To-Market & Revenue Scaling",
    description: "Build predictable B2B sales engines, shorten sales cycles, and refine customer acquisition channels to scale MRR systematically without burning capital.",
    deliverables: ["B2B Pipeline Architecture", "Enterprise Deal Closing Playbook", "CAC:LTV Optimization Protocol"],
    iconName: "Target",
    tag: "Revenue Engine"
  },
  {
    id: "founder-resilience",
    title: "Founder Resilience & Financial Planning",
    description: "Safeguard your mental clarity, eliminate chronic burnout, and optimize runway forecasting so you scale your company while staying healthy and centered.",
    deliverables: ["Cash-Flow Runway Simulator", "Executive Energy Protocol", "Crisis Navigation Playbook"],
    iconName: "ShieldCheck",
    tag: "Sustainable High Output"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "Discovery Call",
    subtitle: "30-Min Diagnostic Audit",
    description: "We dissect your current revenue bottlenecks, leadership friction, and operational blockades. No sugar-coating, just unfiltered clarity on where your venture is leaking momentum.",
    keyAction: "Identify top 3 growth constraints & uncover low-hanging ROI levers.",
    iconName: "SearchCheck"
  },
  {
    stepNumber: 2,
    title: "Custom Strategy",
    subtitle: "90-Day Tailored Playbook",
    description: "We co-create an executable 90-day roadmap tailored specifically to your stage, team size, and financial targets with measurable milestone gates and clear accountability owners.",
    keyAction: "Receive concrete unit metrics, OKR cadences, and decision matrices.",
    iconName: "Sliders"
  },
  {
    stepNumber: 3,
    title: "Ongoing Support",
    subtitle: "Weekly Sprints & Direct Access",
    description: "Execute with ruthless consistency through bi-weekly 1:1 strategy reviews, real-time WhatsApp priority access, live deal advisory, and zero-compromise accountability.",
    keyAction: "Course-correct in real-time with actionable feedback within 4 hours.",
    iconName: "Zap"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-1",
    client: "Vikram S.",
    roleCompany: "Founder, D2C Wellness Startup",
    location: "Bengaluru",
    industry: "Consumer Tech / D2C",
    beforeState: "Stuck at ₹18 Lakh/month MRR, high ad fatigue, 65% contribution margin erosion.",
    afterState: "Scaled to ₹1.45 Crore/month MRR with 24% net EBITDA profitability in 8 months.",
    growthMetric: "+705%",
    metricLabel: "MRR Growth in 8 Months",
    story: "By restructuring customer acquisition around high-LTV subscription bundles and revamping retention cohorts, Vikram transformed a cash-burning DTC operation into an investor-ready profitable powerhouse.",
    timeframe: "8 Months",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "cs-2",
    client: "Ananya Deshmukh",
    roleCompany: "Co-Founder & CEO, B2B SaaS",
    location: "Pune / Singapore",
    industry: "Enterprise SaaS",
    beforeState: "6-month sales cycles, founder-dependent sales, unable to close Series A.",
    afterState: "Shortened sales cycle to 28 days, closed 14 Tier-1 enterprise contracts, raised $2.4M.",
    growthMetric: "3.4x",
    metricLabel: "ARR Jump & Series A Closed",
    story: "Implemented an enterprise sales qualification matrix and trained the leadership team to handle pricing pushbacks. Revenue scaled from $280K to $950K ARR within one fiscal year.",
    timeframe: "11 Months",
    avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "cs-3",
    client: "Rohan Verma",
    roleCompany: "VP Engineering → CTO",
    location: "Gurugram",
    industry: "Fintech Scaleup",
    beforeState: "Frustrated by executive communication hurdles and passed over for promotion.",
    afterState: "Elevated to Chief Technology Officer in 6 months with 65% compensation boost.",
    growthMetric: "+65%",
    metricLabel: "Total Compensation & CTO Title",
    story: "Mastered executive storytelling, strategic board communications, and team re-architecture. Rajesh’s coaching bridged the gap between pure engineering and high-stakes commercial impact.",
    timeframe: "6 Months",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "cs-4",
    client: "Priya Nair",
    roleCompany: "Managing Partner, Tech Services Agency",
    location: "Mumbai",
    industry: "Digital Transformation",
    beforeState: "Net margins hovering at 11%, team over-servicing clients, high founder exhaustion.",
    afterState: "Operating margins surged to 36% while reducing billable founder hours by 40%.",
    growthMetric: "36%",
    metricLabel: "Sustained Net Operating Margin",
    story: "Restructured client contracts into fixed-value retainers with performance incentives, automated repetitive onboarding pipelines, and established a senior management operating cadence.",
    timeframe: "5 Months",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Vikram Sharma",
    role: "Founder & CEO",
    company: "LogiSync Technologies",
    location: "Bengaluru",
    rating: 5,
    highlight: "Scaled revenue from ₹1.8 Cr to ₹8.2 Cr in 14 months",
    quote: "Rajesh isn’t a textbook coach who throws buzzwords. He spent 3 hours in our office ripping apart our unit economics, helped us fire toxic clients, and rebuilt our sales pipeline. Within 14 months, we scaled our ARR by 4.5x with healthy margins.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "test-2",
    name: "Ananya Deshmukh",
    role: "Co-Founder",
    company: "Vedika Natural Foods",
    location: "Pune",
    rating: 5,
    highlight: "Secured our ₹6 Crore seed round with pristine unit economics",
    quote: "Working with Rajesh was the single highest ROI investment our founding team made. His clarity on Indian consumer distribution and founder sanity kept us focused on profitability when everyone else was chasing empty vanity metrics.",
    avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "test-3",
    name: "Amitav Sen",
    role: "Chief Technology Officer",
    company: "CloudScale Systems",
    location: "Gurugram",
    rating: 5,
    highlight: "From hands-on coder to influential C-level executive",
    quote: "I was struggling with board presentations and executive presence. Rajesh’s 1:1 coaching gave me the exact frameworks to articulate engineering risks in business language. It earned me board buy-in and a direct seat at the strategy table.",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "test-4",
    name: "Sneha Kulkarni",
    role: "Managing Director",
    company: "Catalyst Strategy Partners",
    location: "Mumbai",
    rating: 5,
    highlight: "Cut founder working hours from 75 to 42 hrs/week",
    quote: "I was on the verge of physical burnout managing 40 employees. Rajesh taught me how to delegate real authority without losing quality. My firm is more profitable today, and I finally take weekends off with my family.",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "test-5",
    name: "Rajiv Menon",
    role: "Founder & Product Lead",
    company: "FinStride",
    location: "Hyderabad",
    rating: 5,
    highlight: "Achieved product-market fit and signed 12 enterprise clients",
    quote: "The direct WhatsApp access is priceless. Whenever we faced a sticky pricing negotiation or executive conflict, Rajesh gave us actionable advice within hours. He’s our secret weapon in the boardroom.",
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80"
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "starter",
    name: "Starter Intensive",
    tagline: "High-impact single deep dive to unblock your immediate bottleneck",
    price: "₹14,999",
    period: "One-Time",
    duration: "90-Minute 1:1 Strategic Session",
    idealFor: "Founders seeking immediate clarity on a critical crossroads or growth plateau.",
    features: [
      "90-minute intensive 1:1 deep-dive video session",
      "Comprehensive pre-call diagnostic audit & financial review",
      "Bespoke 6-page growth bottleneck teardown document",
      "Actionable 30-day tactical implementation roadmap",
      "Audio recording & AI-generated action items transcript",
      "7 days of post-call email Q&A follow-up"
    ],
    outcomes: "Instant elimination of strategic confusion and clear step-by-step next moves.",
    ctaText: "Book Starter Intensive"
  },
  {
    id: "growth",
    name: "Growth Accelerator",
    tagline: "The comprehensive 6-week program to scale revenue and build systems",
    price: "₹64,999",
    period: "6-Week Program",
    duration: "6 Weekly 60-Min Strategy Sprints",
    isPopular: true,
    idealFor: "Startups ready to build predictable revenue machines and hire A-players.",
    features: [
      "6 weekly 60-minute 1:1 strategic coaching sessions",
      "Direct priority WhatsApp voice & text access (Mon–Fri)",
      "Proprietary Playbook Library (Hiring, Sales Scripts, OKRs)",
      "Live review of your pitch decks, sales proposals, & KPIs",
      "Unit economics & cash-flow runway modeling session",
      "Bi-weekly team alignment & leadership check-ins",
      "Full 30-day post-program accountability check-in"
    ],
    outcomes: "Predictable customer acquisition funnels, autonomous team, and 2-3x output.",
    ctaText: "Join Growth Accelerator"
  },
  {
    id: "premium",
    name: "Premium Advisory",
    tagline: "White-glove 3-month founder partnership for hyper-growth & board leadership",
    price: "₹1,49,999",
    period: "3-Month Intensive",
    duration: "12 Weekly Advisory Sessions + Emergency Access",
    idealFor: "Funded founders, CXOs, and businesses scaling past ₹5–10 Crore ARR.",
    features: [
      "12 weekly 75-minute high-stakes strategy sessions",
      "24/7 emergency hotline for critical negotiations & crises",
      "Full-day in-person or virtual Executive Offsite Strategy Workshop",
      "Direct participation in quarterly business & board reviews",
      "Custom C-suite hiring and interview panel participation",
      "Complete organizational structure & equity incentive design",
      "Personalized high-performance executive energy coaching"
    ],
    outcomes: "Institutional-grade scale, rock-solid leadership team, and Series A/B readiness.",
    ctaText: "Apply for Premium Advisory"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "How is your coaching different from typical consulting or life coaching?",
    answer: "Most traditional consultants deliver a 60-page PDF report and walk away, while generic life coaches offer vague motivational pep-talks. My approach is execution-obsessed: I combine 14+ years of real startup operating experience (having scaled companies from seed to Series B) with ICF-certified methodologies. You receive battle-tested operational frameworks, financial models, and weekly tactical accountability with direct WhatsApp access."
  },
  {
    id: "faq-2",
    question: "What quantifiable results can I realistically expect?",
    answer: "Clients typically report three immediate shifts: 1) Financial: 30% to 200%+ growth in ARR/MRR within 6 months through optimized pricing and sales pipeline discipline; 2) Operational: Reclaiming 15–20 hours per week by delegating low-leverage tasks to trained managers; 3) Leadership: Supreme clarity in investor pitches, board presentations, and hiring top-tier talent without second-guessing."
  },
  {
    id: "faq-3",
    question: "How long does it take before we start seeing tangible traction?",
    answer: "Strategic clarity is immediate—usually within the very first 90-minute session. Operational wins (such as eliminating non-performing channels or revamping your sales script) occur within 2 to 3 weeks. Revenue compounding and sustained ARR scaling reliably manifest across the 6-to-12-week mark as newly built systems mature."
  },
  {
    id: "faq-4",
    question: "Do you specialize in specific industries or business models in India?",
    answer: "My core expertise centers on B2B SaaS, tech-enabled services, D2C/e-commerce brands, and high-growth digital agencies operating in India and Southeast Asia. I also coach senior tech and product leaders transitioning into C-suite executive roles across multinational tech enterprises."
  },
  {
    id: "faq-5",
    question: "What happens if I am not satisfied with the coaching program?",
    answer: "I operate with an uncompromising integrity guarantee. If after our first two weeks in the Growth Accelerator or Premium Advisory you genuinely feel we are not a fit or that the value delivered does not far exceed your investment, simply let me know. You will receive a prompt, unconditional pro-rata refund—no arguments, no hard feelings."
  },
  {
    id: "faq-6",
    question: "How do we communicate between our scheduled strategy sessions?",
    answer: "For clients in the Growth and Premium tiers, you receive direct priority access to my private WhatsApp and Loom channel. Whether you need a quick review of an enterprise proposal before sending it, advice on a difficult employee dispute, or quick feedback on an investor deck, you get concise voice or text guidance within 4 hours during business days."
  }
];

export const PRESS_MENTIONS = [
  { name: "The Economic Times", logoText: "The Economic Times" },
  { name: "Mint", logoText: "mint" },
  { name: "YourStory", logoText: "YOURSTORY" },
  { name: "Inc42", logoText: "Inc42" },
  { name: "Forbes India", logoText: "Forbes India" }
];
