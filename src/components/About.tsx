import { Award, CheckCircle2, ShieldCheck, Briefcase, GraduationCap, ArrowUpRight } from 'lucide-react';
import { COACH_PROFILE } from '../data';

interface AboutProps {
  onOpenBooking: () => void;
}

export default function About({ onOpenBooking }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-[#F8FAFC] border-y border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 text-[#1F4788] text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-[#00B4D8]" />
            <span>Authority & Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            Who Am I & What I Do
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            A battle-tested operator turned trusted advisor for India’s fastest-growing venture founders and C-suite leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Photo & Credibility Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <img
                src={COACH_PROFILE.aboutImage}
                alt="Rajesh Kumar facilitating executive strategy session"
                className="w-full h-80 sm:h-96 object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="p-5 bg-white space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1F4788] uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4 text-[#00B4D8]" />
                  <span>Credentials & Qualifications</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                  {COACH_PROFILE.credentials.map((cred, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Personal Success Story Box */}
            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1F4788] uppercase tracking-wider">
                <Briefcase className="w-4 h-4 text-[#00B4D8]" />
                <span>My Journey: From 80-Hour Weeks to Scaled Impact</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                "In 2014, as VP of Operations, I learned the brutal cost of scaling without systems: 85-hour weeks, constant fires, and near-burnout. Over 6 years, we engineered playbooks that allowed us to scale from 25 to 300+ people while improving margins by 42%. Today, my mission is ensuring Indian founders achieve aggressive scale without sacrificing their personal lives or sanity."
              </p>
              <div className="text-xs font-semibold text-[#1F4788]">
                — Rajesh Kumar
              </div>
            </div>
          </div>

          {/* Right Column: 4 Core Narrative Paragraphs */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Paragraph 1: Background + Expertise */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200/80 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-[#1F4788] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1F4788] text-xs flex items-center justify-center font-bold">1</span>
                <span>Background & Operating Roots</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                For over 14 years, I have lived inside high-growth technology and consumer businesses across India. Before establishing my advisory practice, I served as VP of Operations for two venture-backed scaleups—steering both through Series A and Series B funding rounds, building cross-functional teams of 300+ professionals, and managing over ₹200 Crore in annual operational budgets.
              </p>
            </div>

            {/* Paragraph 2: What Clients Struggle With */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200/80 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-[#1F4788] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1F4788] text-xs flex items-center justify-center font-bold">2</span>
                <span>The Common "Founder Trap"</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Most founders reach a treacherous plateau around the ₹1 Crore to ₹5 Crore ARR mark. What got you here won't get you there. You become the single bottleneck of every decision, cash-flow margins leak invisibly, hiring senior leaders turns into expensive trial-and-error, and high customer churn silently destroys growth. You work harder than ever, yet revenue remains frustratingly unpredictable.
              </p>
            </div>

            {/* Paragraph 3: How I Help */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200/80 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-[#1F4788] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1F4788] text-xs flex items-center justify-center font-bold">3</span>
                <span>My Pragmatic Scaling Framework</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                I help you break free by installing rigorous unit economics, predictable sales cadences, and self-managing leadership structures. Together, we audit your customer acquisition cost (CAC), fix margin leaks, build your 90-day execution sprints, and elevate you from an exhausted operator into a high-leverage CEO who leads with calm confidence.
              </p>
            </div>

            {/* Paragraph 4: What Makes My Approach Unique */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200/80 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-[#1F4788] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1F4788] text-xs flex items-center justify-center font-bold">4</span>
                <span>Why My Approach Is Different</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                No academic lectures, no generic 50-page slides. I work directly in the trenches with you. You get direct WhatsApp priority access for real-time decisions, battle-tested templates used by India’s top tier startups, and ruthless accountability. If something doesn't produce measurable financial ROI or executive clarity, we don't do it.
              </p>
            </div>

            {/* Credibility Summary Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-gray-200 text-center shadow-xs">
                <div className="text-2xl font-extrabold text-[#1F4788]">14+</div>
                <div className="text-xs font-semibold text-gray-600 mt-0.5">Years Experience</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200 text-center shadow-xs">
                <div className="text-2xl font-extrabold text-[#1F4788]">180+</div>
                <div className="text-xs font-semibold text-gray-600 mt-0.5">Founders Mentored</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200 text-center shadow-xs">
                <div className="text-2xl font-extrabold text-[#1F4788]">₹140+ Cr</div>
                <div className="text-xs font-semibold text-gray-600 mt-0.5">Revenue Scaled</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200 text-center shadow-xs">
                <div className="text-2xl font-extrabold text-emerald-600">98.4%</div>
                <div className="text-xs font-semibold text-gray-600 mt-0.5">Retention Rate</div>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="text-[#1F4788] hover:text-[#163568] font-bold text-sm sm:text-base inline-flex items-center gap-1.5 group cursor-pointer"
              >
                <span>Schedule a 30-min strategy audit with Rajesh</span>
                <ArrowUpRight className="w-4 h-4 text-[#00B4D8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
