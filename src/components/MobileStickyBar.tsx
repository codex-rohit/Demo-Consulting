import { Calendar, MessageCircle } from 'lucide-react';
import { COACH_PROFILE } from '../data';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export default function MobileStickyBar({ onOpenBooking }: MobileStickyBarProps) {
  return (
    <div
      id="mobile-sticky-cta-bar"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] flex items-center gap-2 safe-area-pb"
    >
      {/* WhatsApp Quick Chat */}
      <a
        id="mobile-sticky-whatsapp-btn"
        href={`https://wa.me/${COACH_PROFILE.whatsappNumber}?text=Hi%20Rajesh,%20I'd%20like%20to%20inquire%20about%20your%20coaching%20programs.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 min-h-[48px] bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform"
      >
        <MessageCircle className="w-4 h-4 fill-white/20" />
        <span>WhatsApp</span>
      </a>

      {/* Book Consultation Primary CTA */}
      <button
        id="mobile-sticky-book-btn"
        onClick={onOpenBooking}
        className="flex-[2] min-h-[48px] bg-[#1F4788] hover:bg-[#163568] text-white rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform cursor-pointer"
      >
        <Calendar className="w-4 h-4 text-[#00B4D8]" />
        <span>Book Free Consultation</span>
      </button>
    </div>
  );
}
