import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
interface HeaderProps {
  onScheduleConsultation?: () => void;
}

export default function Header({ onScheduleConsultation }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Solutions", href: "#solutions" },
    { label: "About", href: "#about" },
    { label: "How We Help", href: "#how-we-help" },
    { label: "Types of Cases", href: "#types-of-cases" },
    { label: "Why Attorneys Refer Us", href: "#why-attorneys" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg"
          : "bg-navy/80 backdrop-blur-sm"
      }`}
    >
      <div className="container flex items-center justify-between h-14 sm:h-16 lg:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center group shrink-0">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663210731378/wbQPEauJqNVlGQYX.png"
            alt="Solution Property Partners"
            className="h-8 sm:h-10 lg:h-12 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-gold text-sm font-medium tracking-wide transition-colors duration-200 whitespace-nowrap relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:949-749-4242"
            className="flex items-center gap-2 text-white/80 hover:text-gold text-sm transition-colors whitespace-nowrap"
          >
            <Phone className="w-4 h-4" />
            <span>949-749-4242</span>
          </a>
          <button
            type="button"
            onClick={onScheduleConsultation}
            className="bg-gold hover:bg-gold-dark text-navy font-semibold text-sm px-5 py-2.5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap cursor-pointer"
          >
            Schedule Consultation
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10 animate-in slide-in-from-top-2 duration-200">
          <nav className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/80 hover:text-gold text-base font-medium py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <hr className="border-white/10 my-2" />
            <a
              href="tel:949-749-4242"
              className="flex items-center gap-2 text-gold text-base font-medium"
            >
              <Phone className="w-4 h-4" />
              949-749-4242
            </a>
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onScheduleConsultation?.();
              }}
              className="bg-gold text-navy font-semibold text-base px-5 py-3 mt-2 w-full text-center cursor-pointer"
            >
              Schedule Consultation
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
