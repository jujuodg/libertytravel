export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

export const isEmail = (v: unknown) =>
  typeof v === 'string' && EMAIL_RE.test(v);

export function flattenOnce(obj: any) {
  if (!obj || typeof obj !== 'object') return {};
  const out: Record<string, any> = { ...obj };
  for (const k of [
    'formData',
    'passengerData',
    'passenger',
    'applicant',
    'contact',
  ]) {
    if (obj[k] && typeof obj[k] === 'object') Object.assign(out, obj[k]);
  }
  return out;
}

export function extractEmail(payload: any): string | null {
  const flat = flattenOnce(payload);
  if (isEmail(flat.email)) return flat.email;
  for (const [, v] of Object.entries(flat)) if (isEmail(v)) return v as string;
  return null;
}

export function stripFiles(obj: any): any {
  if (!obj || typeof obj !== 'object') return obj;
  if (obj instanceof File || obj instanceof Blob) return '[file]';
  const out: any = Array.isArray(obj) ? [] : {};
  for (const [k, v] of Object.entries(obj)) out[k] = stripFiles(v);
  return out;
}
