import { useState, useEffect, type FormEvent } from 'react';
import { X, Calendar, Clock, CheckCircle2, Shield, ArrowRight, User, Mail, Phone, Building, Target } from 'lucide-react';
import { COACH_PROFILE, PRICING_PACKAGES } from '../data';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPackage?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  preselectedPackage
}: ConsultationModalProps) {
  const [packageName, setPackageName] = useState('Free 30-Minute Consultation');
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('11:00 AM IST');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form Fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    stage: '₹50L - ₹2 Cr ARR',
    primaryChallenge: ''
  });

  useEffect(() => {
    if (preselectedPackage) {
      setPackageName(preselectedPackage);
    }
  }, [preselectedPackage]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const availableDates = [
    { label: 'Tomorrow', desc: 'Sep 11, 2026' },
    { label: 'Friday', desc: 'Sep 12, 2026' },
    { label: 'Monday', desc: 'Sep 15, 2026' },
    { label: 'Tuesday', desc: 'Sep 16, 2026' }
  ];

  const timeSlots = [
    '10:30 AM IST',
    '11:00 AM IST',
    '02:30 PM IST',
    '04:00 PM IST',
    '06:00 PM IST'
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div
      id="booking-consultation-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-gray-100 overflow-hidden my-8">
        
        {/* Modal Top Header */}
        <div className="bg-[#1F4788] text-white p-6 sm:p-7 flex items-center justify-between relative">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
              Direct Strategy Advisory
            </span>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight">
              Book Strategy Consultation
            </h3>
            <p className="text-xs sm:text-sm text-blue-100">
              1-on-1 confidential session with Rajesh Kumar • Zero sales pressure
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-8 space-y-6 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-extrabold text-[#1A1A1A]">
                  Consultation Confirmed!
                </h4>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  Thank you, <strong className="text-gray-900">{formData.name}</strong>. A calendar invite & Zoom link for <strong className="text-[#1F4788]">{selectedDate} at {selectedTime}</strong> have been prepared for <span className="text-gray-900 font-semibold">{formData.email}</span>.
                </p>
              </div>

              {/* Consultation Details Card */}
              <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-200 text-left max-w-md mx-auto text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Track Selected:</span>
                  <span className="font-bold text-[#1F4788]">{packageName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Scheduled Slot:</span>
                  <span className="font-bold text-gray-800">{selectedDate}, {selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Advisor:</span>
                  <span className="font-bold text-gray-800">{COACH_PROFILE.name}</span>
                </div>
              </div>

              {/* Instant WhatsApp confirmation button */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/${COACH_PROFILE.whatsappNumber}?text=Hi%20Rajesh,%20I%20just%20booked%20a%20consultation%20for%20${encodeURIComponent(formData.company || formData.name)}%20(${encodeURIComponent(selectedDate)}%20at%20${encodeURIComponent(selectedTime)}).%20Looking%20forward%20to%20our%20call.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2"
                >
                  <span>Confirm on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Package Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  Select Program or Engagement
                </label>
                <select
                  value={packageName}
                  onChange={(e) => setPackageName(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-300 text-sm font-semibold text-gray-800 bg-white focus:outline-none focus:border-[#1F4788] focus:ring-1 focus:ring-[#1F4788]"
                >
                  <option value="Free 30-Minute Consultation">Free 30-Minute Strategy Diagnostic (Recommended for 1st Time)</option>
                  <option value="Starter Intensive (₹14,999)">Starter Intensive — 90-Minute Teardown (₹14,999)</option>
                  <option value="Growth Accelerator (₹64,999)">Growth Accelerator — 6-Week Sprints (₹64,999)</option>
                  <option value="Premium Advisory (₹1,49,999)">Premium Advisory — 3-Month Partnership (₹1,49,999)</option>
                  <option value="Custom Enterprise Advisory">Custom Enterprise & Board Retainer</option>
                </select>
              </div>

              {/* Date & Time Slot Picker */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500">
                  Preferred Date & Time Slot (IST)
                </label>
                
                {/* Dates row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {availableDates.map((d) => (
                    <button
                      type="button"
                      key={d.label}
                      onClick={() => setSelectedDate(`${d.label} (${d.desc})`)}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                        selectedDate.includes(d.label)
                          ? 'bg-[#1F4788] text-white border-[#1F4788] font-bold shadow-xs'
                          : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 font-medium'
                      }`}
                    >
                      <div className="text-xs">{d.label}</div>
                      <div className="text-[10px] opacity-80">{d.desc}</div>
                    </button>
                  ))}
                </div>

                {/* Time slots row */}
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 pt-1">
                  {timeSlots.map((time) => (
                    <button
                      type="button"
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 px-1 rounded-lg border text-center transition-all text-xs cursor-pointer ${
                        selectedTime === time
                          ? 'bg-[#00B4D8] text-white border-[#00B4D8] font-bold'
                          : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Details */}
              <div className="space-y-4 pt-2 border-t border-gray-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Your Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikram Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-gray-300 focus:outline-none focus:border-[#1F4788]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Work Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                      <input
                        type="email"
                        required
                        placeholder="vikram@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-gray-300 focus:outline-none focus:border-[#1F4788]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      WhatsApp / Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-gray-300 focus:outline-none focus:border-[#1F4788]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Company or Venture & Role *
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="LogiSync Tech, Founder & CEO"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-gray-300 focus:outline-none focus:border-[#1F4788]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    What is the primary bottleneck or revenue goal you want to tackle?
                  </label>
                  <div className="relative">
                    <Target className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      placeholder="e.g. Scaling from ₹30L to ₹1.5 Cr MRR, hiring head of sales, fixing churn..."
                      value={formData.primaryChallenge}
                      onChange={(e) => setFormData({ ...formData, primaryChallenge: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-gray-300 focus:outline-none focus:border-[#1F4788]"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-[#1F4788] hover:bg-[#163568] text-white font-extrabold text-sm sm:text-base shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Reserving Your Strategic Slot...</span>
                    </span>
                  ) : (
                    <>
                      <span>Confirm & Book Consultation</span>
                      <ArrowRight className="w-4 h-4 text-[#00B4D8]" />
                    </>
                  )}
                </button>

                <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-gray-500">
                  <Shield className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Strict NDA protection • No obligation • Instant Zoom invite</span>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
