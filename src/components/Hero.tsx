import { type MouseEvent } from 'react';
import { ArrowRight, CheckCircle, Award, Star, Sparkles, TrendingUp, Users } from 'lucide-react';
import { COACH_PROFILE, PRESS_MENTIONS } from '../data';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const scrollToAbout = (e: MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-white"
    >
      {/* Subtle background decorative shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-20 w-80 h-80 rounded-full bg-cyan-100/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#1F4788] text-xs sm:text-sm font-semibold">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Accepting 3 New Founder Advisory Clients for Q3</span>
              <Sparkles className="w-3.5 h-3.5 text-[#00B4D8]" />
            </div>

            {/* Headline */}
            <div className="space-y-3">
              {/* Mobile Profile Thumbnail */}
              <div className="lg:hidden flex items-center gap-3 p-2 rounded-2xl bg-white border border-gray-200 shadow-xs mb-2">
                <img
                  src={COACH_PROFILE.heroImage}
                  alt={COACH_PROFILE.name}
                  className="w-14 h-14 rounded-xl object-cover object-top border-2 border-[#1F4788]/20 shrink-0"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1 text-amber-500 text-[11px] font-bold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>4.98/5 Rated Mentor</span>
                  </div>
                  <div className="text-xs font-bold text-gray-900 truncate">
                    Rajesh Kumar, MCC
                  </div>
                  <div className="text-[11px] text-gray-500">
                    Ex-VP Operations • 180+ Founders
                  </div>
                </div>
              </div>

              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold tracking-tight text-[#1A1A1A] leading-[1.2]">
                <span className="text-[#1F4788] block mb-1">
                  {COACH_PROFILE.name},
                </span>
                <span className="text-[#2C2C2C]">
                  Business Growth Coach
                </span>
              </h1>
              
              {/* Subheading strictly aligned to prompt template */}
              <p className="text-lg sm:text-xl text-gray-700 font-normal leading-relaxed max-w-2xl">
                Helping <strong className="font-semibold text-[#1F4788]">Indian Founders & High-Growth Startups</strong> scale to <strong className="font-semibold text-emerald-700">₹10+ Crore ARR</strong> with predictable revenue engines, unit economics, and executive clarity.
              </p>
            </div>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#00B4D8] shrink-0" />
                <span>Zero theoretical fluff — battle-tested execution</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#00B4D8] shrink-0" />
                <span>Ex-VP Operations with ₹140+ Cr scaled</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#00B4D8] shrink-0" />
                <span>Direct 1:1 WhatsApp priority access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#00B4D8] shrink-0" />
                <span>30-minute diagnostic session is 100% free</span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="hero-primary-cta-btn"
                onClick={onOpenBooking}
                className="bg-[#1F4788] hover:bg-[#163568] text-white text-base font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-900/15 transition-all duration-200 flex items-center justify-center gap-3 group cursor-pointer cta-glow text-center"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5 text-[#00B4D8] group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                id="hero-secondary-cta-link"
                href="#about"
                onClick={scrollToAbout}
                className="text-gray-700 hover:text-[#1F4788] font-semibold text-base px-5 py-4 flex items-center justify-center gap-2 transition-colors border border-transparent hover:border-gray-200 rounded-xl"
              >
                <span>Learn About Me</span>
                <span className="text-[#00B4D8] text-lg font-bold">→</span>
              </a>
            </div>

            {/* Key Micro-Stats */}
            <div className="pt-6 border-t border-gray-200/80 grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#1F4788]">
                  14+ <span className="text-[#00B4D8] text-lg">Yrs</span>
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  Operating & Advisory
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#1F4788]">
                  180+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  Founders Coached
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#1F4788]">
                  ₹140+ <span className="text-[#00B4D8] text-lg">Cr</span>
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  Revenue Scaled
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Headshot & Trust Badges */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              
              {/* Main Headshot Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/5] max-h-[540px]">
                <img
                  id="hero-coach-headshot"
                  src={COACH_PROFILE.heroImage}
                  alt="Rajesh Kumar - Executive Growth Coach"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F4788]/70 via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-gray-100 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">ICF Master Certified Coach</p>
                      <p className="text-sm font-bold text-[#1F4788]">Rajesh Kumar, MCC</p>
                    </div>
                    <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                      <Star className="w-4 h-4 fill-current text-amber-400" />
                      <span>4.98/5 Rating</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Top Floating Card: Quantified Result */}
              <div className="hidden sm:flex absolute -top-4 -left-6 bg-white p-3.5 rounded-xl shadow-lg border border-gray-100 items-center gap-3 animate-in fade-in duration-500">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Average Client Impact</div>
                  <div className="text-sm font-bold text-gray-900">+240% ARR in 9 Months</div>
                </div>
              </div>

              {/* Floating Card: Mentored Alumni */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white p-3.5 rounded-xl shadow-lg border border-gray-100 items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1F4788] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Advisory Background</div>
                  <div className="text-xs font-bold text-gray-900">Ex-VP Operations & Stanford Seed</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Press / Recognized In Ribbon */}
        <div className="mt-16 pt-10 border-t border-gray-200 text-center">
          <p className="text-xs uppercase tracking-widest font-semibold text-gray-600 mb-6">
            Insights & Thought Leadership Featured In Leading Publications
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {PRESS_MENTIONS.map((pub) => (
              <span
                key={pub.name}
                className="font-bold text-gray-600 text-sm sm:text-base tracking-tight hover:text-[#1F4788] transition-colors"
              >
                {pub.logoText}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
