"use client"

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
      setError(err instanceof Error ? err.message : "Si è verificato un errore")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="mx-auto max-w-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Crea un Account</CardTitle>
        <CardDescription>
          Inserisci i tuoi dati per creare un account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="firstname">Nome</Label>
              <Input
                id="firstname"
                type="text"
                placeholder="Mario"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastname">Cognome</Label>
              <Input
                id="lastname"
                type="text"
                placeholder="Rossi"
                required
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="mario.rossi@esempio.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="mobile">Numero di Telefono</Label>
            <Input
              id="mobile"
              type="tel"
              placeholder="+39 333 000 0000"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
            />
            <p className="text-sm text-muted-foreground">
              La password deve essere di almeno 8 caratteri
            </p>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirmPassword">Conferma Password</Label>
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
            {loading ? "Registrazione in corso..." : "Registrati"}
          </Button>
          <Button 
            type="button"
            variant="outline" 
            className="w-full border-green-600 text-green-600 hover:text-green-600 hover:bg-green-50/50 dark:border-green-400 dark:text-green-400 dark:hover:text-green-400 dark:hover:bg-green-950/50"
            onClick={() => router.push("/login")}
          >
            Hai già un account? Accedi
          </Button>
        </form>
      </CardContent>
    </Card>
  )
} 