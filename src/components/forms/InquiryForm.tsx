'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { toast } from '@/components/ui/Toast';
import { admissionInquirySchema, type AdmissionInquiryFormData } from '@/lib/utils/validation';

const programOptions = [
  { value: 'btech-cse', label: 'B.Tech - Computer Science' },
  { value: 'btech-ece', label: 'B.Tech - Electronics' },
  { value: 'btech-mech', label: 'B.Tech - Mechanical' },
  { value: 'btech-civil', label: 'B.Tech - Civil' },
  { value: 'bpharm', label: 'B.Pharm' },
  { value: 'pharmd', label: 'Pharm.D' },
  { value: 'bba', label: 'BBA' },
  { value: 'mtech', label: 'M.Tech' },
  { value: 'mpharm', label: 'M.Pharm' },
  { value: 'mba', label: 'MBA' },
  { value: 'phd', label: 'Ph.D' },
];

export function InquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AdmissionInquiryFormData>({
    resolver: zodResolver(admissionInquirySchema),
  });

  const onSubmit = async (data: AdmissionInquiryFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/admission-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Inquiry submitted successfully! Our team will contact you soon.');
        reset();
      } else {
        const error = await response.json();
        toast.error(error.message || 'Failed to submit inquiry. Please try again.');
      }
    } catch {
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Full Name"
        placeholder="Enter your full name"
        required
        {...register('fullName')}
        error={errors.fullName?.message}
      />

      <div className="grid md:grid-cols-2 gap-4">
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          required
          {...register('email')}
          error={errors.email?.message}
        />
        <Input
          label="Phone"
          placeholder="10-digit mobile number"
          required
          {...register('phone')}
          error={errors.phone?.message}
        />
      </div>

      <Select
        label="Program of Interest"
        options={programOptions}
        placeholder="Select a program"
        required
        {...register('programInterest')}
        error={errors.programInterest?.message}
      />

      <Input
        label="Current Qualification"
        placeholder="e.g., 12th PCM, B.Tech CSE"
        required
        {...register('currentQualification')}
        error={errors.currentQualification?.message}
      />

      <Textarea
        label="Message (Optional)"
        placeholder="Any specific questions?"
        rows={3}
        {...register('message')}
        error={errors.message?.message}
      />

      <Button type="submit" size="lg" className="w-full" isLoading={isSubmitting}>
        Submit Inquiry
      </Button>
    </form>
  );
}
