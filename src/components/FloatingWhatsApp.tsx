import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COACH_PROFILE } from '../data';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl shadow-lg border border-gray-100 text-xs font-semibold text-gray-800 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Rajesh is online on WhatsApp</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-gray-400 hover:text-gray-600 ml-1 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        id="floating-whatsapp-btn"
        href={`https://wa.me/${COACH_PROFILE.whatsappNumber}?text=Hi%20Rajesh,%20I'm%20visiting%20your%20website%20and%20would%20like%20to%20chat%20about%20your%20coaching%20programs.`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105"
        aria-label="Chat with Rajesh Kumar on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white/20 text-white" />
        
        {/* Pulse indicator */}
        <span className="absolute top-1 right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white" />
        </span>
      </a>
    </div>
  );
}
