"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsArrowRight } from "react-icons/bs";
import { HiEnvelope, HiShieldCheck } from "react-icons/hi2";
import { RiLinkedinLine } from "react-icons/ri";

import CyberAtmosphere from "@/components/CyberAtmosphere";
import { fadeIn } from "@/variants";

const SCOPES = [
  "Web Application",
  "REST API",
  "Mobile App",
  "Network",
  "Vulnerability Assessment",
  "Other",
];

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    url: "",
    services: [] as string[],
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const toggleScope = (scope: string) => {
    setForm((prev) => {
      const exists = prev.services.includes(scope);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== scope)
          : [...prev.services, scope],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields (*).");
      return;
    }

    setIsLoading(true);
    const toastId = toast.loading("Encrypting and dispatching assessment scope...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to transmit message.");
      }

      toast.success(
        "Assessment request received! Abinaya will review and respond shortly.",
        { id: toastId, duration: 5000 }
      );
      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        url: "",
        services: [],
        message: "",
      });
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Transmission failed. Try direct email.";
      toast.error(message, { id: toastId, duration: 5000 });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen xl:h-full flex items-center justify-center relative px-4 sm:px-8 xl:px-14 select-none bg-primary/40 overflow-y-auto xl:overflow-hidden">
      <CyberAtmosphere
        watermarkText="ENGAGE AEGIS"
        sectionCode="04 // DISPATCH SECURITY DIRECTIVE"
      />

      <div className="container mx-auto h-auto min-h-screen xl:h-full flex flex-col justify-center items-center z-10 pt-20 sm:pt-24 xl:pt-16 pb-24 xl:pb-6">
        <div className="w-full max-w-5xl flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-12">
          {/* Left Column: Context, Direct Reach & Trust Signals */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex-1 text-center xl:text-left w-full max-w-xl"
          >
            <div className="inline-flex items-center gap-x-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-mono mb-3">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
              Direct Engagement Channel
            </div>

            <h2 className="h2 text-[26px] sm:text-[34px] xl:text-[42px] mb-2 leading-tight">
              Request a security <span className="text-accent">assessment.</span>
            </h2>

            <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed mb-4 max-w-md mx-auto xl:mx-0">
              Tell me about your application, environment, or security
              requirement. I&apos;ll review the scope and get back to you.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-2.5 max-w-md mx-auto xl:mx-0">
              <a
                href="mailto:abinayaselsa@gmail.com"
                className="flex items-center gap-x-3.5 p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-accent/60 hover:shadow-[0_0_20px_rgba(241,48,36,0.2)] transition-all text-left group"
              >
                <div className="text-xl text-accent group-hover:scale-110 transition-transform">
                  <HiEnvelope />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-white/40 uppercase">
                    Direct Email
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-accent transition-colors">
                    abinayaselsa@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/abinayas2003/"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-x-3.5 p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-accent/60 hover:shadow-[0_0_20px_rgba(241,48,36,0.2)] transition-all text-left group"
              >
                <div className="text-xl text-[#0077b5] group-hover:scale-110 transition-transform">
                  <RiLinkedinLine />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-white/40 uppercase">
                    LinkedIn
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-accent transition-colors">
                    linkedin.com/in/abinayas2003
                  </div>
                </div>
              </a>

              {/* Responsible Testing Notice */}
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-left">
                <div className="flex items-center gap-x-2 text-[11px] font-mono text-accent uppercase font-bold mb-0.5">
                  <HiShieldCheck className="text-sm" />
                  <span>Responsible Security Testing</span>
                </div>
                <p className="text-[10px] text-white/60 font-light leading-relaxed">
                  Security testing is performed only with appropriate authorization
                  and within agreed scope boundaries.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Intake Form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="flex-1 w-full max-w-lg bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6 space-y-3"
          >
            <div className="flex gap-x-3">
              <div className="flex-1">
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  className="input text-xs sm:text-sm !h-10"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  disabled={isLoading}
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Company / Org"
                  className="input text-xs sm:text-sm !h-10"
                  value={form.company}
                  onChange={(e) =>
                    setForm({ ...form, company: e.target.value })
                  }
                  disabled={isLoading}
                />
              </div>
            </div>

            <div>
              <input
                type="email"
                required
                placeholder="Business Email *"
                className="input text-xs sm:text-sm !h-10"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                disabled={isLoading}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Website / Application URL"
                className="input text-xs sm:text-sm !h-10"
                value={form.url}
                onChange={(e) => setForm({ ...form, url: e.target.value })}
                disabled={isLoading}
              />
            </div>

            {/* Scope Selection */}
            <div>
              <label className="block text-left text-[11px] font-mono text-white/60 mb-1.5">
                Target Scope:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                {SCOPES.map((scope) => {
                  const selected = form.services.includes(scope);
                  return (
                    <button
                      type="button"
                      key={scope}
                      onClick={() => toggleScope(scope)}
                      className={`px-2 py-1 rounded-md text-[11px] font-mono transition-all text-left flex items-center justify-between border cursor-pointer ${
                        selected
                          ? "bg-accent/20 border-accent text-white font-semibold shadow-[0_0_10px_rgba(241,48,36,0.3)]"
                          : "bg-black/40 border-white/10 text-white/60 hover:text-white"
                      }`}
                    >
                      <span className="truncate">{scope}</span>
                      <span className="text-[10px] text-accent ml-1">
                        {selected ? "✓" : "+"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <textarea
                required
                rows={3}
                placeholder="Scope description & testing objectives *"
                className="textarea text-xs sm:text-sm !min-h-16 !max-h-24 p-3"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn rounded-full border border-white/50 max-w-52 !h-10 px-6 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group disabled:pointer-events-none cursor-pointer"
            >
              <span
                className={
                  isLoading
                    ? ""
                    : "group-hover:translate-y-[-120%] group-hover:opacity-0 transition-all duration-500 font-light text-xs sm:text-sm"
                }
              >
                {isLoading ? "Submitting..." : "Submit Request"}
              </span>

              {!isLoading && (
                <BsArrowRight
                  className="translate-y-[-120%] opacity-0 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-lg text-accent"
                  aria-hidden
                />
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
