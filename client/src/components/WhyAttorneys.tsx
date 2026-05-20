import FadeIn from "@/components/FadeIn";
import {
  Shield,
  FileSearch,
  Lightbulb,
  Zap,
  HandshakeIcon,
  Target,
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Confidential Case Evaluations",
  },
  {
    icon: FileSearch,
    title: "Experience with Complex Title & Ownership Issues",
  },
  {
    icon: Lightbulb,
    title: "Creative, Non-Traditional Solutions",
  },
  {
    icon: Zap,
    title: "Fast Response & Streamlined Process",
  },
  {
    icon: HandshakeIcon,
    title: "Collaborative Approach with Counsel",
  },
  {
    icon: Target,
    title: "Resolution-Focused Approach",
  },
];

export default function WhyAttorneys() {
  return (
    <section id="why-attorneys" className="py-16 sm:py-20 lg:py-28 bg-navy relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <FadeIn direction="up">
            <div>
              <p className="text-gold font-sans font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-3">
                Why Attorneys
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-5">
                Refer Us
              </h2>
              <div className="w-12 h-[2px] bg-gold mb-5 sm:mb-6" />
              <p className="text-white/70 font-sans text-sm sm:text-base lg:text-lg leading-relaxed">
                We partner with attorneys, fiduciaries, and title professionals to
                deliver solutions that protect their clients and help cases move
                forward.
              </p>
            </div>
          </FadeIn>

          {/* Right Column - Reasons Grid */}
          <FadeIn direction="up" delay={150}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {reasons.map((reason) => (
                <div
                  key={reason.title}
                  className="flex items-start gap-3 sm:gap-4 group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center rounded-sm bg-gold/10 group-hover:bg-gold/20 transition-colors duration-300">
                    <reason.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <p className="text-white/90 font-sans text-sm font-medium leading-snug pt-1.5 sm:pt-2">
                    {reason.title}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
