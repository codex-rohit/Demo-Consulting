import { TrendingUp, Compass, Briefcase, Users, Target, ShieldCheck, Check, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data';

interface ServicesProps {
  onOpenBooking: (serviceTitle?: string) => void;
}

export default function Services({ onOpenBooking }: ServicesProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#1F4788] group-hover:text-[#00B4D8] transition-colors" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#1F4788] group-hover:text-[#00B4D8] transition-colors" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#1F4788] group-hover:text-[#00B4D8] transition-colors" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#1F4788] group-hover:text-[#00B4D8] transition-colors" />;
      case 'Target':
        return <Target className="w-6 h-6 text-[#1F4788] group-hover:text-[#00B4D8] transition-colors" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#1F4788] group-hover:text-[#00B4D8] transition-colors" />;
      default:
        return <TrendingUp className="w-6 h-6 text-[#1F4788]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#1F4788] text-xs font-bold uppercase tracking-wider mb-3 border border-blue-100">
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            How I Can Help
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Tailored advisory programs designed to dismantle bottlenecks, establish scalable business architectures, and supercharge executive effectiveness.
          </p>
        </div>

        {/* 6 Service Boxes (3x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${index}`}
              className="group bg-white rounded-2xl p-7 border border-gray-200/90 shadow-xs hover:border-[#00B4D8] transition-all duration-300 flex flex-col justify-between service-card-lift relative overflow-hidden"
            >
              {/* Subtle top accent highlight on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#1F4788] group-hover:to-[#00B4D8] transition-all duration-300" />

              <div>
                {/* Header with Icon and Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-[#1F4788]/10 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                    {service.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1A1A1A] group-hover:text-[#1F4788] transition-colors mb-3">
                  {service.title}
                </h3>

                {/* Description (2-3 sentences on what client gets) */}
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables / Tangible Inclusions */}
                <div className="space-y-2 pt-4 border-t border-gray-100 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">
                    Key Outcomes & Assets:
                  </span>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-gray-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking(service.title)}
                  className="w-full py-2.5 px-4 rounded-lg bg-gray-50 hover:bg-[#1F4788] text-gray-700 hover:text-white text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-sm cursor-pointer"
                >
                  <span>Explore Advisory Fit</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#00B4D8]" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F8FAFC] border border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-sm sm:text-base font-bold text-[#1F4788]">
              Not sure which advisory track matches your venture's stage?
            </h4>
            <p className="text-xs sm:text-sm text-gray-600">
              In our 30-minute discovery session, we evaluate your metrics and map out the exact focus area with zero obligation.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking()}
            className="shrink-0 bg-[#1F4788] hover:bg-[#163568] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            Book Free Diagnostic Call
          </button>
        </div>

      </div>
    </section>
  );
}
