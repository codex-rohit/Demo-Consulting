import { Check, Zap, Sparkles, Shield, Gift, ArrowRight } from 'lucide-react';
import { PRICING_PACKAGES } from '../data';

interface PricingProps {
  onSelectPackage: (packageName: string) => void;
}

export default function Pricing({ onSelectPackage }: PricingProps) {
  return (
    <section id="pricing" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Free Consultation Highlight Banner */}
        <div className="max-w-3xl mx-auto mb-12 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 border border-blue-200 text-center shadow-xs">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1F4788] text-white flex items-center justify-center shrink-0">
              <Gift className="w-5 h-5 text-[#00B4D8]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-[#1F4788]">
                First Consultation Is 100% Free
              </h3>
              <p className="text-xs sm:text-sm text-gray-700">
                Book a confidential 30-minute diagnostic session to assess mutual fit and get instant tactical clarity before committing.
              </p>
            </div>
            <button
              onClick={() => onSelectPackage("Free 30-Minute Consultation")}
              className="mt-2 sm:mt-0 shrink-0 bg-[#1F4788] hover:bg-[#163568] text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              Claim Free 30-Min Call
            </button>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#1F4788] text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-[#00B4D8]" />
            <span>Investment Tiers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            Consulting Packages
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Transparent pricing, tangible milestones, and zero lock-in contracts. Choose the level of strategic firepower your venture demands.
          </p>
        </div>

        {/* 3 Pricing Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg, idx) => (
            <div
              key={pkg.id}
              id={`pricing-package-${pkg.id}`}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.isPopular
                  ? 'bg-white border-2 border-[#1F4788] shadow-xl ring-4 ring-[#1F4788]/5 -translate-y-2'
                  : 'bg-white border border-gray-200 shadow-sm hover:border-gray-300'
              }`}
            >
              {/* Popular Badge */}
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1F4788] text-white text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#00B4D8]" />
                  <span>Most Popular Tier</span>
                </div>
              )}

              <div>
                {/* Header info */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#1A1A1A]">{pkg.name}</h3>
                  <p className="text-xs text-gray-500 mt-1 min-h-[32px]">{pkg.tagline}</p>
                </div>

                {/* Price and Period */}
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-[#1F4788] tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      / {pkg.period}
                    </span>
                  </div>
                  <div className="mt-2 text-xs font-semibold text-[#00B4D8] flex items-center gap-1">
                    <span>Duration:</span>
                    <span className="text-gray-700 font-bold">{pkg.duration}</span>
                  </div>
                </div>

                {/* Ideal for statement */}
                <div className="p-3 rounded-lg bg-gray-50 text-xs text-gray-700 mb-6">
                  <strong className="font-semibold text-[#1F4788] block mb-0.5">Best Suited For:</strong>
                  <span>{pkg.idealFor}</span>
                </div>

                {/* What's included bullet list */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-3">
                    What's Included:
                  </span>
                  {pkg.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Expected Outcome */}
                <div className="mb-8 pt-4 border-t border-gray-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#1F4788] block mb-1">
                    Expected ROI & Outcome:
                  </span>
                  <p className="text-xs text-gray-600 italic">
                    "{pkg.outcomes}"
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  id={`btn-package-${pkg.id}`}
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.isPopular
                      ? 'bg-[#1F4788] hover:bg-[#163568] text-white shadow-md cta-glow'
                      : 'bg-gray-100 hover:bg-[#1F4788] text-gray-900 hover:text-white'
                  }`}
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="mt-3 text-center text-[11px] text-gray-500 flex items-center justify-center gap-1">
                  <Shield className="w-3 h-3 text-emerald-600" />
                  <span>GST invoice available • 100% Tax Deductible</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Trust Guarantee Note */}
        <div className="mt-14 max-w-2xl mx-auto text-center space-y-2">
          <p className="text-xs sm:text-sm text-gray-600">
            Need a tailored advisory retainer for your board or multi-entity conglomerate?
          </p>
          <button
            onClick={() => onSelectPackage("Custom Enterprise Advisory")}
            className="text-xs sm:text-sm font-bold text-[#1F4788] hover:text-[#00B4D8] underline underline-offset-4 cursor-pointer"
          >
            Contact for Custom Corporate Retainer & Board Engagements
          </button>
        </div>

      </div>
    </section>
  );
}
