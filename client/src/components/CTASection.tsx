import FadeIn from "@/components/FadeIn";

interface CTASectionProps {
  onScheduleConsultation?: () => void;
}

export default function CTASection({ onScheduleConsultation }: CTASectionProps) {
  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663210731378/nLzKcVbaxZQWgA4ZtikVuo/cta-handshake-GgnkEM7Gkqreet5auSpC2w.webp"
          alt="Professional handshake"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/75 to-navy/60 sm:from-navy/85 sm:via-navy/70 sm:to-navy/50" />
      </div>

      {/* Content */}
      <div className="relative container">
        <FadeIn direction="up">
          <div className="max-w-2xl mx-auto text-center sm:text-right sm:ml-auto sm:mr-0">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Let's Find the Right Solution
            </h2>
            <p className="text-gold font-sans font-semibold text-xs sm:text-sm uppercase tracking-[0.12em] sm:tracking-[0.15em] mb-4 sm:mb-6">
              Confidential. Professional. Solution-Focused.
            </p>
            <p className="text-white/80 font-sans text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10">
              If you are dealing with a probate matter, inherited property dispute,
              or complex co-ownership issue, contact us for a confidential consultation.
            </p>
            <button
              type="button"
              onClick={onScheduleConsultation}
              className="inline-flex items-center bg-gold hover:bg-gold-dark text-navy font-sans font-bold text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 hover:scale-[1.02] active:scale-[0.97] shadow-lg shadow-gold/20 cursor-pointer"
            >
              Schedule a Consultation
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
