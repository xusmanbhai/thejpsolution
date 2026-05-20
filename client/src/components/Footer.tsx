import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/const";

export default function Footer() {
  return (
    <footer className="bg-navy-light py-12 lg:py-16">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663210731378/wbQPEauJqNVlGQYX.png"
                alt="Solution Property Partners"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white/60 font-sans text-sm leading-relaxed">
              Resolving inherited property, probate, and co-ownership matters with
              creative, practical solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-sans font-semibold text-xs uppercase tracking-[0.15em] mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2.5">
              <a href="#solutions" className="text-white/70 hover:text-gold text-sm font-sans transition-colors">
                Solutions
              </a>
              <a href="#how-we-help" className="text-white/70 hover:text-gold text-sm font-sans transition-colors">
                How We Help
              </a>
              <a href="#types-of-cases" className="text-white/70 hover:text-gold text-sm font-sans transition-colors">
                Types of Cases
              </a>
              <a href="#why-attorneys" className="text-white/70 hover:text-gold text-sm font-sans transition-colors">
                Why Attorneys Refer Us
              </a>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gold font-sans font-semibold text-xs uppercase tracking-[0.15em] mb-4">
              Services
            </h4>
            <nav className="flex flex-col gap-2.5">
              <span className="text-white/70 text-sm font-sans">Partial Interest Sales</span>
              <span className="text-white/70 text-sm font-sans">Heir Buyouts</span>
              <span className="text-white/70 text-sm font-sans">Probate Funding</span>
              <span className="text-white/70 text-sm font-sans">Title Resolution</span>
              <span className="text-white/70 text-sm font-sans">Partition Avoidance</span>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-sans font-semibold text-xs uppercase tracking-[0.15em] mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:949-749-4242"
                className="flex items-center gap-3 text-white/70 hover:text-gold text-sm font-sans transition-colors"
              >
                <Phone className="w-4 h-4 text-gold/70" />
                949-749-4242
              </a>
              <a
                href={CONTACT_MAILTO}
                className="flex items-center gap-3 text-white/70 hover:text-gold text-sm font-sans transition-colors"
              >
                <Mail className="w-4 h-4 text-gold/70" />
                {CONTACT_EMAIL}
              </a>
              <div className="flex items-start gap-3 text-white/70 text-sm font-sans">
                <MapPin className="w-4 h-4 text-gold/70 mt-0.5 shrink-0" />
                <span>California</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-xs font-sans">
              &copy; {new Date().getFullYear()} The JP Solution. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/50 hover:text-gold text-xs font-sans transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/50 hover:text-gold text-xs font-sans transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
