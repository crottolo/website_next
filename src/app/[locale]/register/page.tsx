import { RegisterForm } from "@/components/register-form"
import { Metadata } from "next"
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata.register');
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function RegisterPage() {
  return (
    <div className="flex h-[calc(100vh-4rem)] w-full items-center justify-center px-4 py-12">
      <RegisterForm />
    </div>
  )
} 