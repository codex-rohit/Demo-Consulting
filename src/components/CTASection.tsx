import { ArrowRight, ShieldCheck, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { COACH_PROFILE } from '../data';

interface CTASectionProps {
  onOpenBooking: () => void;
}

export default function CTASection({ onOpenBooking }: CTASectionProps) {
  return (
    <section className="py-20 sm:py-24 bg-[#1F4788] text-white relative overflow-hidden">
      {/* Decorative background glow & accent rings */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#00B4D8]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-blue-900/40 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Urgency Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-cyan-200 text-xs sm:text-sm font-semibold border border-white/15">
          <Clock className="w-4 h-4 text-[#00B4D8]" />
          <span>Only 3 Founder Advisory Slots Remaining for Q3</span>
        </div>

        {/* Headlines as specified in prompt */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Ready to Achieve Your Goals?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 font-normal">
            Take the first step with a free consultation
          </p>
        </div>

        {/* Benefits list */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-blue-100">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00B4D8]" />
            <span>1-on-1 with Rajesh Kumar</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00B4D8]" />
            <span>Uncover Top 3 Growth Bottlenecks</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00B4D8]" />
            <span>100% Confidential & Free</span>
          </div>
        </div>

        {/* Primary CTA Button */}
        <div className="pt-2 flex flex-col items-center gap-4">
          <button
            id="cta-bottom-primary-btn"
            onClick={onOpenBooking}
            className="w-full sm:w-auto bg-[#00B4D8] hover:bg-[#0096c7] text-[#1F4788] hover:text-white font-extrabold text-base sm:text-lg px-9 py-4 rounded-xl shadow-xl transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer group cta-glow"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Free Consultation Call</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Subtext requirement */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-200/90 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>No pressure, 30-minute call to explore fit</span>
          </div>
        </div>

        {/* Quick alternative contact */}
        <div className="pt-6 border-t border-white/10 text-xs text-blue-200">
          Prefer WhatsApp? Message directly at{' '}
          <a
            href={`https://wa.me/${COACH_PROFILE.whatsappNumber}?text=Hi%20Rajesh,%20I'd%20like%20to%20schedule%20a%20free%20consultation.`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-bold text-white hover:text-cyan-300 ml-1"
          >
            +91 98201 45892
          </a>
        </div>

      </div>
    </section>
  );
}
