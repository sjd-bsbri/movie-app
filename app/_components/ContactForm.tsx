'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Button from './ui/Button';
import { useState } from 'react';

const contactSchema = z.object({
  name: z.string().min(3, 'نام باید حداقل ۳ کاراکتر باشد.'),
  email: z.string().min(1, 'ایمیل الزامی است.').email('فرمت ایمیل نامعتبر است.'),
  message: z.string().min(10, 'پیام شما باید حداقل ۱۰ کاراکتر باشد.'),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

export default function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormInputs) => {
    console.log(data);
    return new Promise((resolve) => setTimeout(() => {
        setIsSubmitted(true);
        resolve(true);
    }, 1500));
  };

  if(isSubmitted) {
    return (
        <div className="text-center bg-gray-800 p-10 rounded-lg">
            <h3 className="text-2xl font-bold text-green-400 mb-4">پیام شما با موفقیت ارسال شد!</h3>
            <p className="text-gray-300">از اینکه با ما تماس گرفتید سپاسگزاریم. به زودی پاسخ شما را ارسال خواهیم کرد.</p>
        </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">نام شما</label>
        <input type="text" id="name" {...register('name')} className={`w-full p-3 bg-gray-700 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:ring-red-500'}`} />
        {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">ایمیل</label>
        <input type="email" id="email" {...register('email')} className={`w-full p-3 bg-gray-700 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:ring-red-500'}`} />
        {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">پیام شما</label>
        <textarea id="message" rows={5} {...register('message')} className={`w-full p-3 bg-gray-700 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:ring-red-500'}`}></textarea>
        {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message.message}</p>}
      </div>
      <div>
        <Button type="submit" variant="primary" className="w-full py-3 cursor-pointer" disabled={isSubmitting}>
          {isSubmitting ? 'در حال ارسال...' : 'ارسال پیام'}
        </Button>
      </div>
    </form>
  );
}