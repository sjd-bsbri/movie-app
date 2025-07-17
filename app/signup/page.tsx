'use client';

import { useState } from 'react'; 
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import Button from '../_components/ui/Button';

const EyeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.432 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);
const EyeSlashIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.575M9.88 9.88l.393-.393A3 3 0 1112 15a3 3 0 01-2.43-1.071l-.393-.393M15.363 15.363l-4.242-4.242" /></svg>
);

const signupSchema = z
  .object({
    name: z.string().min(3, 'نام باید حداقل ۳ کاراکتر باشد.'),
    email: z.string().min(1, 'ایمیل نمی‌تواند خالی باشد.').email('فرمت ایمیل نامعتبر است.'),
    password: z.string().min(8, 'رمز عبور باید حداقل ۸ کاراکتر باشد.'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'رمزهای عبور با یکدیگر مطابقت ندارند.',
    path: ['confirmPassword'],
  });

type SignupFormInputs = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormInputs>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupFormInputs) => {
    console.log('اطلاعات ثبت نام:', data);
    return new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="w-full max-w-md mx-auto bg-gray-800/50 border border-gray-700 rounded-2xl shadow-2xl p-8 backdrop-blur-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">ایجاد حساب کاربری</h1>
          <p className="text-gray-400 mt-2">به خانواده بزرگ فیلم‌نت بپیوندید.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">نام کامل</label>
            <input id="name" type="text" {...register('name')} className={`w-full p-3 bg-gray-700 border rounded-lg text-white placeholder-gray-500 transition-colors focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:ring-red-500'}`} placeholder="نام خود را وارد کنید"/>
            {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">آدرس ایمیل</label>
            <input id="email" type="email" {...register('email')} className={`w-full p-3 bg-gray-700 border rounded-lg text-white placeholder-gray-500 transition-colors focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:ring-red-500'}`} placeholder="you@example.com"/>
            {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">رمز عبور</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                {...register('password')}
                className={`w-full p-3 pl-12 bg-gray-700 border rounded-lg text-white placeholder-gray-500 transition-colors focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:ring-red-500'}`}
                placeholder=" ******** "
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 left-0 flex items-center p-3 text-gray-400 hover:text-white">
                {showPassword ? <EyeIcon className="h-6 w-6" /> : <EyeSlashIcon className="h-6 w-6" />}
              </button>
            </div>
            {errors.password && <p className="mt-2 text-sm text-red-400">{errors.password.message}</p>}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">تکرار رمز عبور</label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                {...register('confirmPassword')}
                className={`w-full p-3 pl-12 bg-gray-700 border rounded-lg text-white placeholder-gray-500 transition-colors focus:outline-none focus:ring-2 ${errors.confirmPassword ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:ring-red-500'}`}
                placeholder="رمز عبور را دوباره وارد کنید"
              />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute inset-y-0 left-0 flex items-center p-3 text-gray-400 hover:text-white">
                {showConfirmPassword ? <EyeIcon className="h-6 w-6" /> : <EyeSlashIcon className="h-6 w-6" />}
              </button>
            </div>
            {errors.confirmPassword && <p className="mt-2 text-sm text-red-400">{errors.confirmPassword.message}</p>}
          </div>

          <div>
            <Button type="submit" variant="primary" className="w-full py-3 text-base mt-2 cursor-pointer" disabled={isSubmitting}>
              {isSubmitting ? 'در حال ایجاد حساب...' : 'ثبت نام'}
            </Button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            قبلاً حساب کاربری ساخته‌اید؟{' '}
            <Link href="/login" className="font-medium text-red-500 hover:text-red-400 transition-colors duration-300">
              وارد شوید
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}