import { SearchCheck, Sliders, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import { PROCESS_STEPS } from '../data';

interface ProcessProps {
  onOpenBooking: () => void;
}

export default function Process({ onOpenBooking }: ProcessProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'SearchCheck':
        return <SearchCheck className="w-7 h-7 text-[#1F4788]" />;
      case 'Sliders':
        return <Sliders className="w-7 h-7 text-[#1F4788]" />;
      case 'Zap':
        return <Zap className="w-7 h-7 text-[#00B4D8]" />;
      default:
        return <SearchCheck className="w-7 h-7 text-[#1F4788]" />;
    }
  };

  return (
    <section id="process" className="py-20 bg-[#F8FAFC] border-y border-gray-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#1F4788] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Execution Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            My Proven 3-Step Process
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            A battle-tested, structured trajectory that takes you from strategic ambiguity to disciplined execution and exponential revenue scaling.
          </p>
        </div>

        {/* 3 Steps in Horizontal Flow with Visual Arrows */}
        <div className="relative">
          
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-28 left-[18%] right-[18%] h-0.5 bg-gradient-to-r from-[#1F4788]/30 via-[#00B4D8] to-[#1F4788]/30 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <div
                key={step.stepNumber}
                id={`process-step-${step.stepNumber}`}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
              >
                {/* Step badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-xs">
                    {getIcon(step.iconName)}
                  </div>
                  <span className="text-xs font-black tracking-widest text-white bg-[#1F4788] px-3 py-1 rounded-full uppercase">
                    Step 0{step.stepNumber}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-extrabold text-[#1F4788] tracking-tight">
                    {step.title}
                  </h3>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#00B4D8]">
                    {step.subtitle}
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed pt-2">
                    {step.description}
                  </p>
                </div>

                {/* Key Action Pill */}
                <div className="mt-6 pt-4 border-t border-gray-100 bg-slate-50/80 -mx-7 -mb-7 p-5 rounded-b-2xl">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-1">
                    Direct Takeaway:
                  </span>
                  <p className="text-xs font-semibold text-[#1A1A1A]">
                    {step.keyAction}
                  </p>
                </div>

                {/* Arrow indicator between cards on mobile/tablet */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="lg:hidden flex justify-center py-2 text-[#00B4D8]">
                    <span className="text-2xl font-bold">↓</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Process Guarantee Box */}
        <div className="mt-14 max-w-2xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700 bg-white px-5 py-2.5 rounded-full border border-gray-200 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>100% Risk-Free: The 30-minute discovery call carries zero sales pressure.</span>
          </div>
          <div>
            <button
              onClick={onOpenBooking}
              className="bg-[#1F4788] hover:bg-[#163568] text-white text-sm font-bold px-7 py-3 rounded-xl shadow-sm transition-all duration-200 inline-flex items-center gap-2 cursor-pointer cta-glow"
            >
              <span>Initiate Step 1: Book Discovery Call</span>
              <ArrowRight className="w-4 h-4 text-[#00B4D8]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
