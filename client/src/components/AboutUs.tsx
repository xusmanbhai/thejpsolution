import FadeIn from "@/components/FadeIn";
import { Award, BookOpen, Shield, Briefcase } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-navy/[0.02] to-transparent pointer-events-none" />

      <div className="container relative">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-gold font-sans font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-3">
              About Us
            </p>
            <div className="w-12 h-[2px] bg-gold mx-auto mb-5" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
              Who We Are
            </h2>
          </div>
        </FadeIn>

        {/* Content Grid - Photo + Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 sm:gap-12 lg:gap-16 items-start mb-12 sm:mb-16">
          {/* Photo Column */}
          <FadeIn direction="up" className="mx-auto lg:mx-0">
            <div className="relative">
              {/* Gold accent frame */}
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-gold/30" />
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663210731378/iKZZXwtgwUMOYPpl.png"
                alt="Joe Perez - Founder of JP Solutions"
                className="relative w-56 sm:w-64 md:w-72 lg:w-80 h-auto object-cover shadow-xl"
              />
              {/* Name badge */}
              <div className="absolute -bottom-4 left-4 right-4 bg-navy py-3 px-4 sm:px-5 shadow-lg">
                <p className="font-serif text-base sm:text-lg font-bold text-white">Joe Perez</p>
                <p className="font-sans text-[10px] sm:text-xs text-gold uppercase tracking-wider">Founder &amp; Principal</p>
              </div>
            </div>
          </FadeIn>

          {/* Text Column */}
          <FadeIn direction="up" delay={100}>
            <div className="pt-6 lg:pt-0">
              <p className="font-sans text-sm sm:text-base lg:text-lg text-foreground leading-relaxed mb-5 sm:mb-6">
                JP Solutions helps attorneys, fiduciaries, heirs, and families navigate
                probate, complex title, and challenging real estate matters with practical
                solutions when traditional options are no longer effective.
              </p>

              <div className="border-l-2 border-gold pl-4 sm:pl-6 mb-5 sm:mb-6">
                <p className="font-serif text-lg sm:text-xl lg:text-2xl text-navy font-semibold italic leading-snug">
                  "Founded by Joe Perez, the company brings over 30 years of experience
                  specializing in distressed assets, probate matters, and creative real
                  estate transactions."
                </p>
              </div>

              <p className="font-sans text-sm sm:text-base text-foreground leading-relaxed mb-4 sm:mb-5">
                Joe also attended law school to further understand the legal complexities
                surrounding probate, foreclosure, and title-related matters. While not an
                attorney, this background provides valuable insight when working alongside
                attorneys, fiduciaries, and title professionals on complex real estate
                situations.
              </p>

              <p className="font-sans text-sm sm:text-base text-foreground leading-relaxed">
                Joe has been a licensed California real estate broker for over 29 years and
                remains in good standing with zero disciplinary actions.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Bottom Grid - Credentials + Extended Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
          {/* Credential Cards */}
          <FadeIn direction="up">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-navy/[0.03] border border-border hover:border-gold/30 transition-colors duration-300">
                <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center bg-gold/10 rounded-sm">
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-navy mb-1">30+ Years of Experience</h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-text leading-relaxed">
                    Specializing in distressed assets, probate matters, clouded title, co-ownership disputes, and creative real estate transactions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-navy/[0.03] border border-border hover:border-gold/30 transition-colors duration-300">
                <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center bg-gold/10 rounded-sm">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-navy mb-1">Law School Background</h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-text leading-relaxed">
                    Provides valuable insight when working alongside attorneys, fiduciaries, and title professionals on complex situations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-navy/[0.03] border border-border hover:border-gold/30 transition-colors duration-300">
                <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center bg-gold/10 rounded-sm">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-navy mb-1">Licensed CA Broker — 29+ Years</h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-text leading-relaxed">
                    In good standing with zero disciplinary actions. A trusted professional in the California real estate landscape.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-navy/[0.03] border border-border hover:border-gold/30 transition-colors duration-300">
                <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center bg-gold/10 rounded-sm">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-navy mb-1">Confidential & Professional</h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-text leading-relaxed">
                    Every case requires a customized approach with professionalism, discretion, and strong understanding of both real estate and probate.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Extended Bio */}
          <FadeIn direction="up" delay={100}>
            <div className="space-y-4 sm:space-y-5">
              <p className="font-sans text-sm sm:text-base text-foreground leading-relaxed">
                Our focus is on creating practical, solution-oriented outcomes that help reduce
                delays, preserve value, and avoid unnecessary litigation whenever possible. We
                understand that probate and ownership disputes often involve sensitive family
                dynamics, financial pressures, and legal complexities that require a thoughtful
                and professional approach.
              </p>

              <p className="font-sans text-sm sm:text-base text-foreground leading-relaxed">
                JP Solutions works collaboratively with attorneys, executors, administrators,
                trustees, and heirs to help resolve difficult real estate matters efficiently
                and confidentially. Whether the situation involves partial ownership interests,
                inherited property disputes, distressed assets, or complex title issues, our
                goal is to help create workable resolutions tailored to each unique circumstance.
              </p>

              <p className="font-sans text-sm sm:text-base text-foreground leading-relaxed">
                We believe every case requires a customized approach, especially when traditional
                real estate solutions are not practical. Our experience allows us to navigate
                complex situations with professionalism, discretion, and a strong understanding
                of both the real estate and probate landscape.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
