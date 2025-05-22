'use client'

import { Suspense } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export const dynamic = 'force-dynamic'

function PrestitoImportoInner () {
	const router = useRouter()
	const searchParams = useSearchParams()
	const categoria = searchParams.get('categoria') || ''
	const [importo, setImporto] = useState('')
	const importoNum = Number(importo)
	const isValid =
		importoNum >= 3000 &&
		importoNum <= 75000 &&
		importoNum % 500 === 0

	function handleSubmit (e: React.FormEvent) {
		e.preventDefault()
		if (isValid) {
			router.push(`/prestito/soluzione?importo=${importoNum}&categoria=${categoria}`)
		}
	}

	return (
		<div className='min-h-screen flex flex-col items-center justify-center bg-background px-4'>
			<Card className='w-full max-w-md shadow-lg'>
				<CardHeader className='flex flex-col items-center gap-2'>
					<Image
						src='/magento-animazione-hd.gif'
						alt='Mascotte Magento'
						width={80}
						height={80}
						className='mb-2 rounded-full'
						priority
					/>
					<CardTitle className='text-center text-2xl font-bold'>
						Quale <span className='text-primary'>importo</span> hai in mente?
					</CardTitle>
				</CardHeader>
				<CardContent className='flex flex-col gap-6 items-center'>
					<p className='text-center text-muted-foreground'>
						Scrivi la cifra che vuoi richiedere<br />compresa tra <span className='text-primary'>3.000 €</span> e <span className='text-primary'>75.000 €</span>
					</p>
					<form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full items-center'>
						<div className='flex items-center gap-2 w-full justify-center'>
							<input
								type='number'
								min={3000}
								max={75000}
								step={500}
								value={importo}
								onChange={e => setImporto(e.target.value)}
								placeholder='Importo'
								className='border rounded-md px-4 py-2 text-lg w-32 text-center focus:outline-none focus:ring-2 focus:ring-primary'
								aria-label='Importo richiesto'
							/>
							<span className='text-lg font-semibold'>€</span>
						</div>
						<Button type='submit' disabled={!isValid} className='w-full mt-2'>
							Conferma importo
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}

export default function PrestitoImporto () {
	return (
		<Suspense>
			<PrestitoImportoInner />
		</Suspense>
	)
} 