export interface Coupon {
  step: number;
  brand: string;
  code: string;
  value: number;
  image: string;
}

export interface WithdrawalDetails {
  method: 'express' | 'iban';
  holder: string;
  account: string;
}

export interface ValidationHistoryItem {
  id: string;
  code: string;
  value: number;
  date: string;
}

export const COUPONS: Coupon[] = [
  { step: 1, brand: 'UNITEL', code: '38154927', value: 3000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-28%20at%2002.00.29-NobwC7hD4GeYuw7FYnIYrTM3iXeNIs.jpeg' },
  { step: 2, brand: 'KWIK', code: '62849317', value: 5000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-28%20at%2002.00.29%20%281%29-tRPJdiWdg2yFrHn5O2QAcmxKrhhX8g.jpeg' },
  { step: 3, brand: 'BANTUBET', code: '73528164', value: 7000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-28%20at%2002.00.29%20%282%29-NThD87gfv0AyVKsCNpCXHx4mLp7bsd.jpeg' },
  { step: 4, brand: 'CUCA', code: '16482753', value: 9000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-28%20at%2002.00.30-uHU4NpAkghyIM6AMzyfNjZXBH4wJVh.jpeg' },
  { step: 5, brand: 'PAY', code: '95318472', value: 11000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-28%20at%2002.00.31-jjSKyJCSj0YoCjWv12AiWfHlpr1fnm.jpeg' },
  { step: 6, brand: 'ZAP', code: '27594386', value: 13000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-28%20at%2002.00.31%20%281%29-p5XAv0WU6tTFqZw41Dsy2DZV214BvA.jpeg' },
  { step: 7, brand: 'EMIS', code: '84261935', value: 15000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-28%20at%2002.00.32-LxxmIR61LAptTplmVSmy228kJzC3IJ.jpeg' },
  { step: 8, brand: 'KERO', code: '31864572', value: 17000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-28%20at%2002.00.32%20%281%29-xysjtDbYcECLAGovVZDQth3DGVgvcJ.jpeg' },
  { step: 9, brand: 'SONANGOL', code: '48372615', value: 20000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-28%20at%2002.00.33-7h6pf0SkH7csQCeaBTNxGpvCeMnubJ.jpeg' },
  { step: 10, brand: 'AFRICELL', code: '57291846', value: 25000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-28%20at%2002.00.33%20%281%29-xwjgr0eVEFE3Izr9hiGtuMe8favf7M.jpeg' },
];

export const TOTAL_VALUE = COUPONS.reduce((acc, c) => acc + c.value, 0); // 150,000.00 Kz

/**
 * Format currency to standard Angolan Kwanza representation: "Kz 3.000,00"
 */
export function formatKz(value: number): string {
  const fixed = Number(value || 0).toFixed(2);
  const dotIndex = fixed.lastIndexOf('.');
  const intPart = fixed.slice(0, dotIndex);
  const decPart = fixed.slice(dotIndex + 1);
  return `Kz ${intPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.')},${decPart}`;
}

export type InputCodeState = 'default' | 'partial' | 'valid' | 'invalid';

/**
 * Determines code input validation state
 */
export function getCouponInputState(inputValue: string, expectedCode: string): InputCodeState {
  if (!inputValue || inputValue.length === 0) return 'default';
  const startsCorrect = expectedCode.startsWith(inputValue);
  const isComplete = inputValue.length === 8 && startsCorrect;
  if (isComplete) return 'valid';
  if (startsCorrect) return 'partial';
  return 'invalid';
}

/**
 * Validate phone number format (typically 9 digits in Angola)
 */
export function validatePhone(phone: string): boolean {
  const clean = phone.replace(/\D/g, '');
  return clean.length === 9;
}

/**
 * Validate withdrawal account based on method
 */
export function validateWithdrawalAccount(method: 'express' | 'iban', account: string): { valid: boolean; error?: string } {
  const clean = account.replace(/\D/g, '');
  if (method === 'express') {
    if (clean.length !== 9) {
      return { valid: false, error: 'Indique um número Multicaixa Express válido (9 dígitos).' };
    }
  } else {
    if (clean.length !== 21) {
      return { valid: false, error: 'Indique um IBAN válido (21 dígitos após AO06).' };
    }
  }
  return { valid: true };
}

/**
 * Validates submission of a coupon code against current state
 */
export function validateCouponSubmission(
  inputCode: string,
  currentCoupon: Coupon | null,
  history: ValidationHistoryItem[],
  allCoupons: Coupon[] = COUPONS
): { success: boolean; error?: string; reward?: number } {
  if (!currentCoupon) {
    return { success: false, error: 'Todos os cupons já foram validados.' };
  }

  const clean = inputCode.trim();
  if (clean === currentCoupon.code) {
    return { success: true, reward: currentCoupon.value };
  }

  const alreadyUsed = history.some(h => h.code === clean);
  if (alreadyUsed) {
    return { success: false, error: 'Este KWIK já foi validado. Use o código do cupom atual.' };
  }

  const matchOther = allCoupons.find(c => c.code === clean);
  if (matchOther) {
    return { success: false, error: `Ainda não é a vez deste KWIK. Valide primeiro o cupom ${currentCoupon.step}.` };
  }

  return { success: false, error: 'Código inválido. Confira os 8 dígitos do KWIK.' };
}

/**
 * Formats a phone number into Multicaixa Express style: "928 457 885"
 */
export function formatPhoneNumber(phone: string): string {
  if (!phone) return '928 457 885';
  const clean = phone.replace(/\D/g, '');
  // Extract 9 local digits (if prefixed by country code like 244)
  const local = clean.length > 9 && clean.startsWith('244') ? clean.slice(3) : clean.slice(-9);
  if (local.length === 9) {
    return `${local.slice(0, 3)} ${local.slice(3, 6)} ${local.slice(6, 9)}`;
  }
  return phone;
}

/**
 * Formats currency in the exact Multicaixa Express style from receipt: "125.000 Kz"
 */
export function formatExpressAmount(value: number): string {
  const intVal = Math.round(value || 0);
  const formatted = intVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `${formatted} Kz`;
}

