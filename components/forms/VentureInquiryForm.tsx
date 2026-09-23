"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FormType, INQUIRY_FORMS } from "@/data/inquiryForms";
import { FormField } from "./FormField";
import { CheckCircle2, MessageCircle, AlertCircle, Sparkles, Send } from "lucide-react";
import { buildCheeryWhatsAppUrl } from "@/lib/whatsapp";

export function VentureInquiryForm({
  formType,
  onSuccess,
}: {
  formType: FormType;
  onSuccess?: (submissionId: string) => void;
}) {
  const config = INQUIRY_FORMS[formType];
  const pathname = usePathname();

  const [formValues, setFormValues] = useState<Record<string, string | boolean>>({});
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    configured: boolean;
    submissionId: string;
    message: string;
    whatsappText?: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFieldChange = (fieldId: string, val: string | boolean) => {
    setFormValues((prev) => ({ ...prev, [fieldId]: val }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType,
          sourcePath: pathname || "/",
          fields: formValues,
          honeypot,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Submission failed. Please check required fields.");
      }

      // Prepare fallback WhatsApp summary text
      const summaryLines = [
        `*CHEERYS INQUIRY — ${config.ventureName.toUpperCase()}*`,
        `Ref ID: ${data.submissionId}`,
        `Name: ${formValues.fullName || formValues.studentName || ""}`,
        `Contact: ${formValues.whatsapp || ""}`,
      ];

      Object.entries(formValues).forEach(([k, v]) => {
        if (!["fullName", "studentName", "whatsapp", "consent"].includes(k) && v) {
          summaryLines.push(`${k}: ${v}`);
        }
      });

      const formattedWhatsappText = summaryLines.join("\n");

      setSubmissionResult({
        success: data.success,
        configured: data.configured,
        submissionId: data.submissionId,
        message: data.message,
        whatsappText: formattedWhatsappText,
      });

      if (onSuccess) {
        onSuccess(data.submissionId);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Network error. Please try again.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppHref = () => {
    const message = submissionResult?.whatsappText
      ? `${config.whatsappPrompt}\n\n${submissionResult.whatsappText}`
      : config.whatsappPrompt;

    return buildCheeryWhatsAppUrl(message);
  };

  // SUCCESS / CONFIRMATION STATE
  if (submissionResult) {
    const isLiveRecorded = submissionResult.success && submissionResult.configured;

    return (
      <div className="bg-white rounded-3xl border-2 border-stone-900 p-8 sm:p-12 shadow-2xl text-center space-y-6">
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto border-2 ${
            isLiveRecorded
              ? "bg-emerald-100 text-emerald-800 border-emerald-600"
              : "bg-amber-100 text-amber-900 border-amber-600"
          }`}
        >
          {isLiveRecorded ? <CheckCircle2 className="w-8 h-8" /> : <Sparkles className="w-8 h-8" />}
        </div>

        <div>
          <span className="text-xs font-mono font-bold tracking-widest text-stone-500 uppercase block mb-1">
            Reference ID: {submissionResult.submissionId}
          </span>
          <h3 className="text-2xl sm:text-3xl font-black font-serif text-stone-900">
            {isLiveRecorded ? "Inquiry Recorded Successfully!" : "Inquiry Prepared For Studio Review"}
          </h3>
          <p className="mt-3 text-stone-600 text-sm max-w-lg mx-auto leading-relaxed">
            {submissionResult.message}
          </p>
        </div>

        {/* Highlighted WhatsApp continuation card */}
        <div className="p-6 rounded-2xl bg-[#faf8f5] border border-stone-300 max-w-md mx-auto text-left space-y-3">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-mono font-bold text-stone-900 uppercase">
              Instant Studio Follow-up
            </span>
          </div>
          <p className="text-xs text-stone-600">
            Click below to open WhatsApp with your reference ID ({submissionResult.submissionId}) and project summary pre-filled.
          </p>
          <a
            href={getWhatsAppHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-950 text-white font-mono text-xs font-bold transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            Continue with Cheery on WhatsApp →
          </a>
        </div>

        <div>
          <button
            type="button"
            onClick={() => {
              setSubmissionResult(null);
              setFormValues({});
            }}
            className="text-xs font-mono text-stone-500 hover:text-stone-900 underline"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  // ACTIVE FORM STATE
  return (
    <div className="bg-[#faf8f5] rounded-3xl border-2 border-stone-900 p-6 sm:p-10 shadow-2xl relative">
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900 text-stone-100 text-xs font-mono font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          {config.badgeText}
        </div>
        <h3 className="text-2xl sm:text-3xl font-black font-serif text-stone-900">
          {config.title}
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-xl leading-relaxed">
          {config.subtitle}
        </p>
      </div>

      {errorMessage && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-mono flex items-center gap-2 mb-6">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Anti-spam honeypot */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="form_hp">Leave this empty</label>
          <input
            type="text"
            id="form_hp"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        {/* Grouped logical form sections */}
        {config.sections.map((section, sIdx) => (
          <div key={section.title} className="p-5 sm:p-6 bg-white rounded-2xl border border-stone-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-2.5">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-900">
                Step 0{sIdx + 1} • {section.title}
              </h4>
            </div>

            {section.description && (
              <p className="text-xs text-stone-500 font-sans">{section.description}</p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {section.fields.map((field) => {
                const isFullWidth = ["textarea", "checkbox", "url"].includes(field.type);
                return (
                  <div key={field.id} className={isFullWidth ? "sm:col-span-2" : "sm:col-span-1"}>
                    <FormField
                      schema={field}
                      value={formValues[field.id] ?? ""}
                      onChange={(val) => handleFieldChange(field.id, val)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Submit action */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-2xl bg-stone-900 hover:bg-stone-950 text-white font-mono text-sm font-bold transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Recording inquiry...</span>
            ) : (
              <>
                <Send className="w-4 h-4 text-amber-400" />
                Submit Studio Inquiry
              </>
            )}
          </button>
          <span className="block text-center text-[11px] font-mono text-stone-500 mt-2.5">
            Your details are kept private and shared only with Cheery.
          </span>
        </div>
      </form>
    </div>
  );
}
