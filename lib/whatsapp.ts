// Central Cheerys WhatsApp configuration and deep-link builder
// Canonical business phone number: +91 9447450825 (919447450825)

export const DEFAULT_CHEERYS_WHATSAPP = "919447450825";

/**
 * Returns the canonical digits-only WhatsApp phone number for Cheery.
 * Allows override via NEXT_PUBLIC_CHEERYS_WHATSAPP_NUMBER if provided.
 */
export function getCheeryWhatsAppNumber(): string {
  const env = process.env.NEXT_PUBLIC_CHEERYS_WHATSAPP_NUMBER?.replace(/\D/g, "");
  return env && env.length >= 10 ? env : DEFAULT_CHEERYS_WHATSAPP;
}

/**
 * Builds a direct, recipient-addressed WhatsApp chat link.
 * GUARANTEES recipient is always set to Cheery's phone number.
 * Formats: https://wa.me/919447450825?text=...
 */
export function buildCheeryWhatsAppUrl(message: string): string {
  const phone = getCheeryWhatsAppNumber();
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
