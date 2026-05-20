import FadeIn from "@/components/FadeIn";
import {
  Handshake,
  Users,
  Scale,
  FileText,
  Landmark,
  DollarSign,
  HelpCircle,
  Gavel,
  Wallet,
} from "lucide-react";

const services = [
  {
    icon: Handshake,
    title: "Partial Ownership Purchases",
    description:
      "We buy inherited and co-owned property interests, even when other owners refuse to sell.",
  },
  {
    icon: Users,
    title: "Heir & Co-Owner Buyouts",
    description:
      "Cash out your inheritance share without forcing a full property sale.",
  },
  {
    icon: Scale,
    title: "Partition Action Avoidance",
    description:
      "Helping families and attorneys avoid lengthy and expensive partition litigation.",
  },
  {
    icon: FileText,
    title: "Complex Title & Heir Disputes",
    description:
      "Solutions for clouded titles, multiple heirs, disputes, pending litigation, missing heirs, and more.",
  },
  {
    icon: Landmark,
    title: "Probate Expense Funding",
    description:
      "Access funds to cover probate costs, taxes, legal fees, court expenses, and estate debts.",
  },
];

const additionalServices = [
  {
    icon: DollarSign,
    title: "Tax Defaults & Foreclosures",
    description:
      "We work with tax delinquent properties and foreclosure situations.",
  },
  {
    icon: HelpCircle,
    title: "Missing or Uncooperative Heirs",
    description:
      "We help locate solutions when heirs are missing, difficult to reach, or unwilling to cooperate.",
  },
  {
    icon: Gavel,
    title: "Litigation & Probate Conflicts",
    description:
      "Experience navigating probate litigation, trustee disputes, and ownership conflicts.",
  },
  {
    icon: Wallet,
    title: "Unpaid Probate Funds",
    description:
      "No-cost solutions to help attorneys recover unpaid fees and outstanding probate-related funds.",
  },
];

export default function HowWeHelp() {
  return (
    <section id="how-we-help" className="py-16 sm:py-20 lg:py-28 bg-warm-white">
      <div className="container">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-gold font-sans font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-3">
              Solutions That Create Options
            </p>
            <div className="w-12 h-[2px] bg-gold mx-auto mb-5" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
              How We Help
            </h2>
          </div>
        </FadeIn>

        {/* Primary Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-5 mb-8 sm:mb-12">
          {services.map((service, index) => (
            <FadeIn key={service.title} direction="up" delay={index * 80}>
              <div className="group bg-white p-5 sm:p-6 lg:p-5 border border-border hover:border-gold/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5 hover:-translate-y-1 text-center h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 flex items-center justify-center rounded-sm bg-navy/5 group-hover:bg-gold/10 transition-colors duration-300">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-sm sm:text-base lg:text-[15px] font-bold text-navy mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-text leading-relaxed">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Secondary Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {additionalServices.map((service, index) => (
            <FadeIn key={service.title} direction="up" delay={index * 80}>
              <div className="group bg-white p-5 sm:p-6 border border-border hover:border-gold/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5 hover:-translate-y-1 text-center h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 flex items-center justify-center rounded-sm bg-navy/5 group-hover:bg-gold/10 transition-colors duration-300">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-sm sm:text-base font-bold text-navy mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-text leading-relaxed">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
