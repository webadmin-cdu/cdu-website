import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional().refine((val) => {
    if (!val) return true;
    return /^[6-9]\d{9}$/.test(val);
  }, 'Invalid Indian phone number'),
  inquiryType: z.enum(['general', 'admissions', 'placements', 'other']),
  message: z.string().min(20, 'Message must be at least 20 characters'),
  honeypot: z.string().max(0, 'Bot detected'),
});

export const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export const admissionInquirySchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Invalid Indian phone number'),
  programInterest: z.string().min(1, 'Please select a program'),
  currentQualification: z.string().min(1, 'Please enter your qualification'),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type NewsletterFormData = z.infer<typeof newsletterSchema>;
export type AdmissionInquiryFormData = z.infer<typeof admissionInquirySchema>;
