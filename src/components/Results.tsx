import { ArrowUpRight, TrendingUp, CheckCircle, Clock } from 'lucide-react';
import { CASE_STUDIES } from '../data';

interface ResultsProps {
  onOpenBooking: () => void;
}

export default function Results({ onOpenBooking }: ResultsProps) {
  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            <span>Verifiable Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            Client Success Stories
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Real founders, real executives, real numbers. How structured coaching unlocked exponential revenue and career trajectories.
          </p>
        </div>

        {/* 4 Case Study Cards in Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((cs, idx) => (
            <div
              key={cs.id}
              id={`case-study-card-${idx}`}
              className="bg-[#F8FAFC] rounded-2xl p-7 border border-gray-200/90 shadow-xs hover:border-[#1F4788]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Client info & industry */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={cs.avatarUrl}
                      alt={cs.client}
                      className="w-13 h-13 rounded-full object-cover border-2 border-[#1F4788]/20"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h3 className="font-bold text-base text-[#1A1A1A]">{cs.client}</h3>
                      <p className="text-xs font-medium text-gray-600">{cs.roleCompany}</p>
                      <span className="text-[11px] text-[#1F4788] font-semibold">{cs.location}</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-white border border-gray-200 text-gray-600 px-2.5 py-1 rounded-md">
                    {cs.industry}
                  </span>
                </div>

                {/* Big Metric Box */}
                <div className="p-4 rounded-xl bg-white border border-blue-100/80 mb-5 flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-black text-[#1F4788] tracking-tight">
                      {cs.growthMetric}
                    </div>
                    <div className="text-xs font-semibold text-gray-600">
                      {cs.metricLabel}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{cs.timeframe}</span>
                  </div>
                </div>

                {/* Before vs After Breakdown */}
                <div className="space-y-2.5 text-xs sm:text-sm mb-5">
                  <div className="p-2.5 rounded-lg bg-red-50/70 border border-red-100/80 text-red-950">
                    <strong className="font-bold text-red-700 block text-[11px] uppercase tracking-wider mb-0.5">
                      Before Coaching:
                    </strong>
                    <span>{cs.beforeState}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-100/80 text-emerald-950">
                    <strong className="font-bold text-emerald-700 block text-[11px] uppercase tracking-wider mb-0.5">
                      After Coaching:
                    </strong>
                    <span>{cs.afterState}</span>
                  </div>
                </div>

                {/* Story (50 words max) */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed italic">
                  "{cs.story}"
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Client Outcome</span>
                </span>
                <button
                  onClick={onOpenBooking}
                  className="text-xs font-bold text-[#1F4788] hover:text-[#00B4D8] inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Replicate this result</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 mb-4">
            Want to see how your specific business metrics can be scaled?
          </p>
          <button
            onClick={onOpenBooking}
            className="bg-[#1F4788] hover:bg-[#163568] text-white text-sm font-bold px-6 py-3 rounded-xl shadow-sm transition-colors cursor-pointer inline-flex items-center gap-2"
          >
            <span>Discuss Your Venture's Roadmap</span>
            <ArrowUpRight className="w-4 h-4 text-[#00B4D8]" />
          </button>
        </div>

      </div>
    </section>
  );
}
