"use client"

import { useTranslations } from 'next-intl';
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

export function RegisterForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()
  const t = useTranslations('Auth.register');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      // Qui andrà la logica di registrazione
      // Per ora simuliamo un delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      router.push("/login")
    } catch (err) {
      setError(err instanceof Error ? err.message : t('errors.generic'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="mx-auto max-w-lg">
      <CardHeader>
        <CardTitle className="text-2xl">{t('title')}</CardTitle>
        <CardDescription>
          {t('description')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="firstname">{t('form.firstName.label')}</Label>
              <Input
                id="firstname"
                type="text"
                placeholder={t('form.firstName.placeholder')}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastname">{t('form.lastName.label')}</Label>
              <Input
                id="lastname"
                type="text"
                placeholder={t('form.lastName.placeholder')}
                required
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">{t('form.email.label')}</Label>
            <Input
              id="email"
              type="email"
              placeholder={t('form.email.placeholder')}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="mobile">{t('form.phone.label')}</Label>
            <Input
              id="mobile"
              type="tel"
              placeholder={t('form.phone.placeholder')}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">{t('form.password.label')}</Label>
            <Input
              id="password"
              type="password"
              required
            />
            <p className="text-sm text-muted-foreground">
              {t('form.password.hint')}
            </p>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirmPassword">{t('form.confirmPassword.label')}</Label>
            <Input
              id="confirmPassword"
              type="password"
              required
            />
          </div>
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          <Button 
            type="submit" 
            className="w-full bg-green-600 hover:bg-green-700 text-white"
            disabled={loading}
          >
            {loading ? t('form.submit.loading') : t('form.submit.default')}
          </Button>
          <Button 
            type="button"
            variant="outline" 
            className="w-full border-green-600 text-green-600 hover:text-green-600 hover:bg-green-50/50 dark:border-green-400 dark:text-green-400 dark:hover:text-green-400 dark:hover:bg-green-950/50"
            onClick={() => router.push("/login")}
          >
            {t('form.hasAccount')}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
} 