import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQ_DATA, COACH_PROFILE } from '../data';

interface FAQProps {
  onOpenBooking: () => void;
}

export default function FAQ({ onOpenBooking }: FAQProps) {
  // Keep first question open by default for immediate preview
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 bg-[#F8FAFC] border-y border-gray-200/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#1F4788] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#00B4D8]" />
            <span>Clarity & Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Everything you need to know about the coaching cadence, ROI expectations, and our working dynamic.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                id={`faq-item-${idx}`}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#1F4788]/40 shadow-sm'
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-bold text-base sm:text-lg text-[#1A1A1A] tracking-tight">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-blue-50 text-[#1F4788] rotate-180' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Prompt if Question Isn't Listed */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#1F4788] shrink-0">
              <MessageSquare className="w-5 h-5 text-[#00B4D8]" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#1A1A1A]">
                Have a specific question not covered here?
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">
                Write directly to Rajesh or ask during your free 30-minute consultation.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${COACH_PROFILE.whatsappNumber}?text=Hi%20Rajesh,%20I%20have%20a%20question%20about%20your%20consulting%20programs.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-bold text-[#1F4788] hover:text-[#00B4D8] px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Ask on WhatsApp
            </a>
            <button
              onClick={onOpenBooking}
              className="bg-[#1F4788] hover:bg-[#163568] text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer"
            >
              Book Free Call
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
