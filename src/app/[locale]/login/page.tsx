import { LoginForm } from "@/components/login-form"
import { Metadata } from "next"
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata.login');
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function SignInPage() {
  return (
    <div className="flex h-[calc(100vh-4rem)] w-full items-center justify-center px-4 py-12">
      <LoginForm />
    </div>
  )
} 