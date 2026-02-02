'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { toast } from '@/components/ui/Toast';
import { contactFormSchema, type ContactFormData } from '@/lib/utils/validation';

const inquiryTypes = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'admissions', label: 'Admissions' },
  { value: 'placements', label: 'Placements' },
  { value: 'other', label: 'Other' },
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      inquiryType: 'general',
      message: '',
      honeypot: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Message sent successfully! We will get back to you soon.');
        reset();
      } else {
        const error = await response.json();
        toast.error(error.message || 'Failed to send message. Please try again.');
      }
    } catch {
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        {...register('honeypot')}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          placeholder="Enter your full name"
          required
          {...register('fullName')}
          error={errors.fullName?.message}
        />
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          required
          {...register('email')}
          error={errors.email?.message}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Phone"
          placeholder="10-digit mobile number"
          {...register('phone')}
          error={errors.phone?.message}
        />
        <Select
          label="Inquiry Type"
          options={inquiryTypes}
          required
          {...register('inquiryType')}
          error={errors.inquiryType?.message}
        />
      </div>

      <Textarea
        label="Message"
        placeholder="How can we help you?"
        required
        rows={5}
        {...register('message')}
        error={errors.message?.message}
      />

      <Button type="submit" size="lg" isLoading={isSubmitting}>
        Send Message
      </Button>
    </form>
  );
}
