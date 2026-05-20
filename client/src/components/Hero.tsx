import { useEffect, useState } from "react";

interface HeroProps {
  onScheduleConsultation?: () => void;
}

export default function Hero({ onScheduleConsultation }: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="solutions"
      className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663210731378/nLzKcVbaxZQWgA4ZtikVuo/hero-probate-PcUACaxUvooYNdtsk84Vmg.webp"
          alt="Luxury residential property"
          className="w-full h-full object-cover transition-transform duration-[8000ms] ease-out"
          style={{ transform: isLoaded ? "scale(1.03)" : "scale(1)" }}
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-navy/50 sm:from-navy/90 sm:via-navy/70 sm:to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-navy/30" />
      </div>

      {/* Content */}
      <div className="relative container pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-24">
        <div className="max-w-2xl">
          <h1
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-4 sm:mb-6 transition-all duration-700 ease-out"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(30px)",
            }}
          >
            Creative Solutions.
            <br />
            Practical Results.
          </h1>

          <p
            className="text-gold font-sans font-semibold text-xs sm:text-sm uppercase tracking-[0.12em] sm:tracking-[0.15em] mb-4 sm:mb-5 transition-all duration-700 ease-out"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "200ms",
            }}
          >
            For Heirs. For Attorneys. For Resolutions.
          </p>

          <p
            className="text-white/85 font-sans text-sm sm:text-base lg:text-xl leading-relaxed mb-8 sm:mb-10 max-w-xl transition-all duration-700 ease-out"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "350ms",
            }}
          >
            We help resolve inherited property, probate, and co-ownership matters
            when traditional solutions are not possible.
          </p>

          <div
            className="transition-all duration-700 ease-out"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "500ms",
            }}
          >
            <button
              type="button"
              onClick={onScheduleConsultation}
              className="group relative inline-flex items-center bg-transparent border-2 border-white text-white font-sans font-semibold text-xs sm:text-sm uppercase tracking-wider px-5 sm:px-8 py-3 sm:py-4 transition-all duration-300 hover:bg-gold hover:border-gold hover:text-navy active:scale-[0.97] cursor-pointer"
            >
              <span className="hidden sm:inline">Schedule a Confidential Consultation</span>
              <span className="sm:hidden">Schedule Consultation</span>
              <span className="ml-2 sm:ml-3 transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold/60 to-transparent transition-all duration-1000 ease-out"
        style={{
          opacity: isLoaded ? 1 : 0,
          transitionDelay: "700ms",
        }}
      />
    </section>
  );
}
