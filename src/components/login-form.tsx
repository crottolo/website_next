"use client"

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { login } from "@/lib/odooService"
import { useAuth } from "@/context/AuthContext"

export function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { setUser } = useAuth()
  const t = useTranslations('Auth.login');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const { user } = await login(username, password)
      if (user) {
        setUser(user)
        router.push("/dashboard")
      } else {
        setError(t('errors.invalid'))
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : t('errors.generic'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className='mx-auto max-w-sm'>
      <CardHeader>
        <CardTitle className='text-2xl'>{t('title')}</CardTitle>
        <CardDescription>{t('description')}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className='grid gap-4'>
          <div className='grid gap-2'>
            <Label htmlFor='username'>{t('form.username.label')}</Label>
            <Input
              id='username'
              placeholder={t('form.username.placeholder')}
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='grid gap-2'>
            <div className='flex items-center'>
              <Label htmlFor='password'>{t('form.password.label')}</Label>
            </div>
            <Input
              id='password'
              type='password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link href='#' className='ml-auto inline-block text-sm underline'>
              {t('form.forgotPassword')}
            </Link>
          </div>
          {error && <div className='text-red-500 text-sm text-center'>{error}</div>}
          <Button type='submit' className='w-full bg-green-600 hover:bg-green-700 text-white' disabled={loading}>
            {loading ? t('form.submit.loading') : t('form.submit.default')}
          </Button>
          <Button variant='outline' className='w-full border-green-600 text-green-600 hover:text-green-600 hover:bg-green-50/50 dark:border-green-400 dark:text-green-400 dark:hover:text-green-400 dark:hover:bg-green-950/50'>
            {t('form.register')}
          </Button>
          <Button variant='outline' className='w-full'>
            {t('form.googleLogin')}
          </Button>
          <div className='mt-4 text-center text-sm'>
            {t('form.noAccount')}{' '}
            <Link href='/register' className='underline'>
              {t('form.signUp')}
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
} 