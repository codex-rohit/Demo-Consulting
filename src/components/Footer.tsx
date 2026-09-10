import { useState, type FormEvent } from 'react';
import { Mail, Phone, MessageCircle, Linkedin, Twitter, Instagram, Send, CheckCircle2, Shield } from 'lucide-react';
import { COACH_PROFILE } from '../data';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-[#1A1A1A] text-gray-300 pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-gray-800">
          
          {/* Col 1: Brand & Availability Note (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#1F4788] text-white flex items-center justify-center font-bold text-lg">
                RK
              </div>
              <div>
                <span className="font-bold text-lg text-white block">
                  {COACH_PROFILE.name}
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  {COACH_PROFILE.title}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed pr-4">
              Empowering Indian founders, technology leaders, and high-growth ventures to achieve sustainable profitability, scale to ₹10+ Crore ARR, and build resilient leadership teams.
            </p>

            {/* Availability Note strictly required */}
            <div className="inline-flex items-center gap-2 p-3 rounded-xl bg-gray-900 border border-gray-800 text-xs text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for 1:1 consultations</span>
            </div>

            {/* Social Links (LinkedIn critical for coaches) */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-3">
                Connect on Social
              </span>
              <div className="flex items-center gap-3">
                <a
                  id="footer-linkedin-link"
                  href={COACH_PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#1F4788] text-white flex items-center justify-center hover:bg-[#00B4D8] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  id="footer-twitter-link"
                  href={COACH_PROFILE.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-gray-800 text-gray-300 flex items-center justify-center hover:text-white hover:bg-gray-700 transition-colors"
                  aria-label="Twitter Profile"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  id="footer-instagram-link"
                  href={COACH_PROFILE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-gray-800 text-gray-300 flex items-center justify-center hover:text-white hover:bg-gray-700 transition-colors"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => scrollTo('#about')}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  About Rajesh
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#services')}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Advisory Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#process')}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  3-Step Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#results')}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Success Stories
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#testimonials')}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Client Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#pricing')}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Packages & Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#faq')}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact Information (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#00B4D8] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-gray-400 uppercase font-semibold">Email</div>
                  <a
                    href={`mailto:${COACH_PROFILE.email}`}
                    className="text-gray-300 hover:text-white font-medium"
                  >
                    {COACH_PROFILE.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#00B4D8] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-gray-400 uppercase font-semibold">Phone</div>
                  <a
                    href={`tel:${COACH_PROFILE.phone}`}
                    className="text-gray-300 hover:text-white font-medium"
                  >
                    {COACH_PROFILE.phone}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-gray-400 uppercase font-semibold">WhatsApp Direct</div>
                  <a
                    href={`https://wa.me/${COACH_PROFILE.whatsappNumber}?text=Hi%20Rajesh,%20I%20would%20like%20to%20connect%20for%20advisory.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline font-medium"
                  >
                    Chat on WhatsApp (Instant Response)
                  </a>
                </div>
              </li>

              <li className="pt-1 text-xs text-gray-400">
                Office: Indiranagar, Bengaluru, KA 560038 & Nariman Point, Mumbai, MH 400021
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter Section (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Weekly Growth Letter
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Get free tips + exclusive resources. Every Tuesday, read teardowns of real Indian startup unit economics and leadership playbooks.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-800/80 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>You're subscribed! Check your inbox for the Scaling Framework PDF.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex rounded-lg overflow-hidden border border-gray-700 focus-within:border-[#00B4D8]">
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-gray-900 px-3.5 py-2.5 text-xs text-white placeholder-gray-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#1F4788] hover:bg-[#00B4D8] text-white px-3.5 py-2.5 transition-colors flex items-center justify-center cursor-pointer"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                  <Shield className="w-3 h-3 text-gray-400" />
                  <span>No spam ever. 1-click unsubscribe anytime.</span>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} Rajesh Kumar Consulting & Advisory Services. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-gray-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-300 cursor-pointer">Terms of Engagement</span>
            <span className="hover:text-gray-300 cursor-pointer">Client NDA Guarantee</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
