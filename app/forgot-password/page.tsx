'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import Button from '../_components/ui/Button';

const forgotPasswordSchema = z.object({
  email: z.string().min(1, 'ایمیل نمی‌تواند خالی باشد.').email('فرمت ایمیل نامعتبر است.'),
});

type ForgotPasswordInputs = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordInputs>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = (data: ForgotPasswordInputs) => {
    console.log('ایمیل برای بازیابی:', data.email);
    return new Promise((resolve) =>
      setTimeout(() => {
        setIsSubmitted(true);
        resolve(true);
      }, 1500)
    );
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="w-full max-w-md mx-auto bg-gray-800/50 border border-gray-700 rounded-2xl shadow-2xl p-8 backdrop-blur-lg">
        {isSubmitted ? (
          <div className="text-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h1 className="text-2xl font-bold mt-4">ایمیل ارسال شد!</h1>
            <p className="text-gray-300 mt-2">
              یک لینک برای بازیابی رمز عبور به ایمیل شما ارسال شد. لطفاً پوشه اسپم را نیز بررسی کنید.
            </p>
            <Link href="/login" className="inline-block mt-8 text-red-500 hover:text-red-400 transition-colors duration-300">
              بازگشت به صفحه ورود
            </Link>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white">بازیابی رمز عبور</h1>
              <p className="text-gray-400 mt-2">ایمیل خود را وارد کنید تا لینک بازیابی برایتان ارسال شود.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  آدرس ایمیل
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className={`w-full p-3 bg-gray-700 border rounded-lg text-white placeholder-gray-500 transition-colors focus:outline-none focus:ring-2 ${
                    errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:ring-red-500'
                  }`}
                  placeholder="you@example.com"
                />
                {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>}
              </div>

              <div>
                <Button type="submit" variant="primary" className="w-full py-3 text-base cursor-pointer" disabled={isSubmitting}>
                  {isSubmitting ? 'در حال ارسال...' : 'ارسال لینک بازیابی'}
                </Button>
              </div>
            </form>
            <div className="mt-6 text-center">
              <Link href="/login" className="font-medium text-sm text-red-500 hover:text-red-400 transition-colors duration-300">
                بازگشت به صفحه ورود
              </Link>
            </div>
          </>
        )}
      </div>
    </main>
  );
}