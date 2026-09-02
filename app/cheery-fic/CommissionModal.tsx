"use client";

import React, { useState } from "react";
import { X, Sparkles, CheckCircle2, Upload, AlertCircle } from "lucide-react";

export function CommissionModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    subjectType: "Solo Portrait",
    occasion: "Birthday / Celebration",
    style: "Expressive Caricature (Classic Cheery)",
    description: "",
    name: "",
    email: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/80 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#faf8f5] text-stone-900 rounded-3xl border-2 border-stone-800 shadow-2xl p-6 sm:p-10 my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close icon */}
        <button
          onClick={onClose}
          aria-label="Close commission modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-stone-200/80 hover:bg-stone-900 text-stone-800 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center mx-auto border-2 border-amber-600">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
              Commission Request Previewed!
            </h3>
            <p className="text-stone-600 max-w-md mx-auto text-sm leading-relaxed">
              This is a <strong className="text-stone-900">frontend visual review prototype</strong>. In the future production phase, this will connect to Cheery&apos;s direct commission studio dashboard.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-full bg-stone-900 text-white font-mono text-xs font-semibold cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-700">
                cheery_fic Studio • Custom Commission
              </span>
            </div>

            <h3 id="modal-title" className="text-2xl sm:text-3xl font-black font-serif text-stone-900">
              Commission a Caricature
            </h3>

            <p className="text-xs sm:text-sm text-stone-600 mt-1 mb-6">
              Turn your memory, personality, or occasion into a handcrafted illustration by Cheery.
            </p>

            {/* Prototype banner */}
            <div className="mb-6 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>
                <strong>Frontend UX Preview:</strong> Fill out the options below to evaluate the commission enquiry workflow.
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {/* Type Selection */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-stone-700 mb-1.5">
                  1. Subject Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {["Solo Portrait", "Couple", "Family", "Group / Team"].map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setFormData({ ...formData, subjectType: type })}
                      className={`p-2.5 rounded-xl border text-xs font-mono text-center transition-all cursor-pointer ${
                        formData.subjectType === type
                          ? "bg-stone-900 text-white border-stone-900 font-bold"
                          : "bg-white text-stone-700 border-stone-300 hover:border-stone-500"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Occasion */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-stone-700 mb-1.5">
                    2. Occasion
                  </label>
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-stone-300 bg-white text-xs font-mono focus:border-stone-900 focus:outline-hidden"
                  >
                    <option>Birthday / Celebration</option>
                    <option>Wedding / Anniversary</option>
                    <option>Farewell / Milestone</option>
                    <option>Social Media Avatar / Logo</option>
                    <option>Gift for Loved Ones</option>
                    <option>Personal Keepsake</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-stone-700 mb-1.5">
                    3. Artistic Style
                  </label>
                  <select
                    value={formData.style}
                    onChange={(e) => setFormData({ ...formData, style: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-stone-300 bg-white text-xs font-mono focus:border-stone-900 focus:outline-hidden"
                  >
                    <option>Expressive Caricature (Classic Cheery)</option>
                    <option>Minimalist Line Art & Scripture</option>
                    <option>Full Character with Custom Background</option>
                    <option>Digital Print Ready</option>
                  </select>
                </div>
              </div>

              {/* Reference Upload Mockup */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-stone-700 mb-1.5">
                  4. Reference Photo
                </label>
                <div className="border-2 border-dashed border-stone-300 rounded-2xl p-4 text-center bg-white/70 hover:bg-white transition-colors cursor-pointer">
                  <Upload className="w-5 h-5 mx-auto text-stone-400 mb-1" />
                  <span className="text-xs font-mono text-stone-600 block">
                    Upload reference photos (JPG, PNG)
                  </span>
                  <span className="text-[10px] text-stone-400 font-sans">
                    Clear lighting and expressive smiles work best
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-stone-700 mb-1.5">
                  5. Story & Distinctive Traits
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about funny habits, favorite props, sports jersey, glasses, hairstyle, or inside jokes..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-stone-300 bg-white text-xs font-sans focus:border-stone-900 focus:outline-hidden"
                />
              </div>

              {/* Client Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-stone-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Philip"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-stone-300 bg-white text-xs font-mono focus:border-stone-900 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-stone-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-stone-300 bg-white text-xs font-mono focus:border-stone-900 focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-amber-600 text-white font-mono text-sm font-bold hover:bg-amber-700 transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  Submit Commission Enquiry (Visual Demo)
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
