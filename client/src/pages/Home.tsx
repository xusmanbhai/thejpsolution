import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowWeHelp from "@/components/HowWeHelp";
import AboutUs from "@/components/AboutUs";
import TypesOfCases from "@/components/TypesOfCases";
import WhyAttorneys from "@/components/WhyAttorneys";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";

export default function Home() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  const openConsultation = () => setConsultationOpen(true);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onScheduleConsultation={openConsultation} />
      <main>
        <Hero onScheduleConsultation={openConsultation} />
        <HowWeHelp />
        <AboutUs />
        <TypesOfCases />
        <WhyAttorneys />
        <CTASection onScheduleConsultation={openConsultation} />
      </main>
      <Footer />
      <ConsultationModal
        open={consultationOpen}
        onOpenChange={setConsultationOpen}
      />
    </div>
  );
}
