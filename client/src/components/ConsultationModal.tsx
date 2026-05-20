import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { X, CheckCircle2 } from "lucide-react";

interface ConsultationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  role: string;
  propertyAddress: string;
  isProbateOrInherited: string;
  numberOfHeirs: string;
  titleIssues: string;
  solutionType: string;
  description: string;
}

export default function ConsultationModal({ open, onOpenChange }: ConsultationModalProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    propertyAddress: "",
    isProbateOrInherited: "",
    numberOfHeirs: "",
    titleIssues: "",
    solutionType: "",
    description: "",
  });

  const totalSteps = 3;

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = (await res.json()) as { success?: boolean; error?: string };
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Could not send your request. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Could not send your request. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset after animation
    setTimeout(() => {
      setStep(1);
      setSubmitted(false);
      setSubmitError(null);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        role: "",
        propertyAddress: "",
        isProbateOrInherited: "",
        numberOfHeirs: "",
        titleIssues: "",
        solutionType: "",
        description: "",
      });
    }, 300);
  };

  const inputClasses =
    "w-full px-4 py-3 border border-border bg-white font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors";

  const labelClasses = "block font-sans text-sm font-medium text-navy mb-1.5";

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[560px] p-0 gap-0 overflow-hidden border-0 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-navy px-4 sm:px-6 py-4 sm:py-5">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl sm:text-2xl text-white font-bold">
              Schedule a Free Consultation
            </DialogTitle>
            <DialogDescription className="text-gold/80 font-sans text-sm mt-1">
              Confidential. No obligation. Let us understand your situation.
            </DialogDescription>
          </DialogHeader>
        </div>

        {submitted ? (
          /* Success State */
          <div className="px-4 sm:px-6 py-8 sm:py-12 text-center">
            <div className="w-16 h-16 mx-auto mb-5 bg-green-50 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-navy mb-3">
              Thank You
            </h3>
            <p className="font-sans text-slate-text text-base leading-relaxed max-w-sm mx-auto mb-6">
              We've received your consultation request. A member of our team will
              reach out within 24 hours.
            </p>
            <button
              onClick={handleClose}
              className="bg-navy text-white font-sans font-semibold text-sm px-6 py-3 hover:bg-navy-light transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Progress Bar */}
            <div className="px-4 sm:px-6 pt-4 sm:pt-5">
              <div className="flex items-center justify-between mb-1">
                <span className="font-sans text-xs text-muted-foreground">
                  Step {step} of {totalSteps}
                </span>
                <span className="font-sans text-xs text-gold font-medium">
                  {Math.round((step / totalSteps) * 100)}% complete
                </span>
              </div>
              <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gold transition-all duration-500 ease-out rounded-full"
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            {/* Form Steps */}
            <div className="px-4 sm:px-6 py-4 sm:py-6">
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div>
                    <label className={labelClasses}>Full Name *</label>
                    <input
                      type="text"
                      className={inputClasses}
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Email Address *</label>
                    <input
                      type="email"
                      className={inputClasses}
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Phone Number *</label>
                    <input
                      type="tel"
                      className={inputClasses}
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>
                      Are You an Attorney, Heir, Trustee, or Co-Owner? *
                    </label>
                    <select
                      className={inputClasses}
                      value={formData.role}
                      onChange={(e) => updateField("role", e.target.value)}
                    >
                      <option value="">Select your role</option>
                      <option value="Attorney">Attorney</option>
                      <option value="Heir">Heir</option>
                      <option value="Trustee">Trustee</option>
                      <option value="Co-Owner">Co-Owner</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div>
                    <label className={labelClasses}>Property Address *</label>
                    <input
                      type="text"
                      className={inputClasses}
                      placeholder="Full property address"
                      value={formData.propertyAddress}
                      onChange={(e) => updateField("propertyAddress", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>
                      Is there an active probate case? If yes, what is the case number and/or name of the parties?
                    </label>
                    <input
                      type="text"
                      className={inputClasses}
                      placeholder="e.g., Yes — Case #12345, Smith v. Johnson"
                      value={formData.isProbateOrInherited}
                      onChange={(e) => updateField("isProbateOrInherited", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>
                      How Many Heirs or Co-Owners Are Involved?
                    </label>
                    <input
                      type="text"
                      className={inputClasses}
                      placeholder="e.g., 3 heirs"
                      value={formData.numberOfHeirs}
                      onChange={(e) => updateField("numberOfHeirs", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>
                      Are There Any Title, Litigation, Tax Defaults, or Foreclosure Concerns?
                    </label>
                    <select
                      className={inputClasses}
                      value={formData.titleIssues}
                      onChange={(e) => updateField("titleIssues", e.target.value)}
                    >
                      <option value="">Select an option</option>
                      <option value="Yes - Title Issues">Yes - Title Issues</option>
                      <option value="Yes - Litigation">Yes - Litigation</option>
                      <option value="Yes - Tax Defaults">Yes - Tax Defaults</option>
                      <option value="Yes - Foreclosure">Yes - Foreclosure</option>
                      <option value="Yes - Multiple Issues">Yes - Multiple Issues</option>
                      <option value="No">No</option>
                      <option value="Not Sure">Not Sure</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div>
                    <label className={labelClasses}>
                      What Type of Solution Are You Looking For? *
                    </label>
                    <select
                      className={inputClasses}
                      value={formData.solutionType}
                      onChange={(e) => updateField("solutionType", e.target.value)}
                    >
                      <option value="">Select a solution type</option>
                      <option value="Partial Interest Sale">Partial Interest Sale</option>
                      <option value="Heir Buyout">Heir Buyout</option>
                      <option value="Probate Liquidity">Probate Liquidity</option>
                      <option value="Clear Title">Clear Title</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClasses}>
                      Briefly Describe the Situation *
                    </label>
                    <textarea
                      className={`${inputClasses} resize-none`}
                      rows={5}
                      placeholder="Please describe your situation, including any relevant details about the property, heirs, or legal matters..."
                      value={formData.description}
                      onChange={(e) => updateField("description", e.target.value)}
                    />
                  </div>
                </div>
              )}
            </div>

            {submitError && (
              <p className="px-4 sm:px-6 pb-2 font-sans text-sm text-red-600" role="alert">
                {submitError}
              </p>
            )}

            {/* Navigation Buttons */}
            <div className="px-4 sm:px-6 pb-4 sm:pb-6 flex items-center justify-between gap-4">
              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="font-sans text-sm font-medium text-navy hover:text-gold transition-colors px-4 py-2.5"
                >
                  &larr; Back
                </button>
              ) : (
                <div />
              )}

              {step < totalSteps ? (
                <button
                  onClick={() => setStep(step + 1)}
                  className="bg-navy text-white font-sans font-semibold text-sm px-6 py-3 hover:bg-navy-light transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Continue &rarr;
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="bg-gold hover:bg-gold-dark text-navy font-sans font-bold text-sm px-8 py-3 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-gold/20 disabled:opacity-60 disabled:pointer-events-none"
                >
                  {submitting ? "Sending…" : "Submit Request"}
                </button>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
