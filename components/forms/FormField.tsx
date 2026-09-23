import React from "react";
import { FormFieldSchema } from "@/data/inquiryForms";
import { AlertCircle } from "lucide-react";

export function FormField({
  schema,
  value,
  onChange,
  error,
}: {
  schema: FormFieldSchema;
  value: string | boolean;
  onChange: (val: string | boolean) => void;
  error?: string;
}) {
  const { id, label, type, required, placeholder, options, helperText, importantNote } = schema;

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-xs font-mono font-bold uppercase tracking-wider text-stone-800">
          {label} {required && <span className="text-amber-700">*</span>}
        </label>
      </div>

      {importantNote && (
        <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-300/80 text-amber-950 text-xs font-sans flex items-start gap-2 mb-1">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <span className="leading-snug">{importantNote}</span>
        </div>
      )}

      {type === "textarea" && (
        <textarea
          id={id}
          required={required}
          rows={3}
          value={typeof value === "string" ? value : ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full p-3 rounded-xl border bg-white text-xs font-sans text-stone-900 placeholder:text-stone-400 focus:outline-hidden transition-all ${
            error ? "border-red-500 ring-1 ring-red-500" : "border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900"
          }`}
        />
      )}

      {type === "select" && options && (
        <select
          id={id}
          required={required}
          value={typeof value === "string" ? value : ""}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full p-3 rounded-xl border bg-white text-xs font-mono text-stone-900 focus:outline-hidden transition-all ${
            error ? "border-red-500 ring-1 ring-red-500" : "border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900"
          }`}
        >
          <option value="">-- Select an option --</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      )}

      {type === "checkbox" && (
        <label className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200 cursor-pointer hover:bg-stone-100 transition-colors">
          <input
            type="checkbox"
            id={id}
            required={required}
            checked={Boolean(value)}
            onChange={(e) => onChange(e.target.checked)}
            className="mt-0.5 w-4 h-4 rounded-sm border-stone-300 text-stone-900 focus:ring-stone-900 accent-stone-900"
          />
          <span className="text-xs font-mono text-stone-700 leading-snug">
            {label} {required && <span className="text-amber-700">*</span>}
          </span>
        </label>
      )}

      {["text", "email", "tel", "url"].includes(type) && (
        <input
          type={type}
          id={id}
          required={required}
          value={typeof value === "string" ? value : ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full p-3 rounded-xl border bg-white text-xs font-mono text-stone-900 placeholder:text-stone-400 focus:outline-hidden transition-all ${
            error ? "border-red-500 ring-1 ring-red-500" : "border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900"
          }`}
        />
      )}

      {helperText && <span className="text-[11px] font-mono text-stone-500">{helperText}</span>}
      {error && <span className="text-xs font-mono text-red-600 font-semibold">{error}</span>}
    </div>
  );
}
