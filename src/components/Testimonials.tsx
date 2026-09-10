import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#F8FAFC] border-y border-gray-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200">
            <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            What My Clients Say
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Unfiltered feedback from founders and executives who transformed their operational clarity, team execution, and bottom-line revenue.
          </p>
        </div>

        {/* 5 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div
              key={t.id}
              id={`testimonial-card-${idx}`}
              className="group bg-white rounded-2xl p-7 border border-gray-200 shadow-xs hover:border-[#1F4788] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Stars + Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gray-300 group-hover:text-[#00B4D8] transition-colors" />
                </div>

                {/* Specific Highlight / Result Tag */}
                <div className="mb-4">
                  <span className="inline-block bg-blue-50 text-[#1F4788] text-xs font-bold px-3 py-1.5 rounded-md border border-blue-100">
                    {t.highlight}
                  </span>
                </div>

                {/* Authentic Quote (30-50 words) */}
                <p className="text-sm text-gray-700 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Client Info with Avatar & Verified Stamp */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatarUrl}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border border-gray-200"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-sm text-[#1A1A1A] leading-tight">
                      {t.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {t.role}, <span className="font-semibold text-gray-700">{t.company}</span>
                    </p>
                    <span className="text-[10px] text-gray-400 font-medium">
                      {t.location}
                    </span>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges bottom row */}
        <div className="mt-14 pt-8 border-t border-gray-200 text-center flex flex-wrap items-center justify-center gap-8 text-xs font-semibold text-gray-600">
          <div className="flex items-center gap-2">
            <span className="text-[#1F4788] font-bold text-base">4.98 / 5.0</span>
            <span>Average Client Rating</span>
          </div>
          <span className="text-gray-300">•</span>
          <div>
            <span className="text-[#1F4788] font-bold text-base">94%</span>
            <span> Hit Target ARR in 9 Months</span>
          </div>
          <span className="text-gray-300">•</span>
          <div>
            <span className="text-[#1F4788] font-bold text-base">100%</span>
            <span> Confidentiality & NDA Protected</span>
          </div>
        </div>

      </div>
    </section>
  );
}
