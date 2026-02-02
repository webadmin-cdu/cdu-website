'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { toast } from '@/components/ui/Toast';
import { newsletterSchema, type NewsletterFormData } from '@/lib/utils/validation';
import { PaperPlaneTilt } from '@phosphor-icons/react';

export function NewsletterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Successfully subscribed to our newsletter!');
        reset();
      } else {
        const error = await response.json();
        toast.error(error.message || 'Failed to subscribe. Please try again.');
      }
    } catch {
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
      <div className="flex-grow">
        <Input
          type="email"
          placeholder="Enter your email"
          {...register('email')}
          error={errors.email?.message}
        />
      </div>
      <Button type="submit" isLoading={isSubmitting}>
        <PaperPlaneTilt className="h-4 w-4" />
      </Button>
    </form>
  );
}
