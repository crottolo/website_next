'use client'

import { Suspense } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'

const DURATE = [48, 60, 72, 84, 96, 108, 120]

function PrestitoSoluzioneInner () {
	const router = useRouter()
	const searchParams = useSearchParams()
	const importo = Number(searchParams.get('importo') || 0)
	const categoria = searchParams.get('categoria') || ''
	const [durata, setDurata] = useState(120)

	// Mock calcolo rata: importo/durata + 2% interesse
	const rata = durata ? Math.round((importo / durata) * 1.02) : 0
	const tan = 5.9 // mock
	const taeg = 6.2 // mock

	function handleSubmit (e: React.FormEvent) {
		e.preventDefault()
		if (durata) {
			router.push(`/prestito/documenti?importo=${importo}&categoria=${categoria}&durata=${durata}`)
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
						Ecco la tua <span className='text-primary'>soluzione</span>!
					</CardTitle>
				</CardHeader>
				<CardContent className='flex flex-col gap-6 items-center'>
					<div className='text-center text-muted-foreground'>
						<p>Importo richiesto: <span className='font-semibold text-primary'>{importo.toLocaleString('it-IT')} €</span></p>
						<p>Categoria: <span className='font-semibold'>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</span></p>
					</div>
					<form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full items-center'>
						<div className='flex flex-col items-center gap-2 w-full'>
							<label htmlFor='durata' className='font-medium'>Durata (mesi)</label>
							<div className='flex gap-2 flex-wrap justify-center'>
								{DURATE.map(mesi => (
									<Button
										key={mesi}
										variant={durata === mesi ? 'default' : 'outline'}
										onClick={e => { e.preventDefault(); setDurata(mesi) }}
										className='min-w-[56px]'
									>
										{mesi}
									</Button>
								))}
							</div>
						</div>
						<div className='text-center mt-4'>
							<p>La tua rata mensile sarà</p>
							<h3 className='text-2xl font-bold text-primary'>{rata.toLocaleString('it-IT')} €</h3>
							<p className='mt-2'>TAN <b>{tan}%</b> - TAEG <b>{taeg}%</b></p>
						</div>
						<Button type='submit' className='w-full mt-2' disabled={!durata}>
							Ok, fa per me!
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}

export default function PrestitoSoluzione () {
	return (
		<Suspense>
			<PrestitoSoluzioneInner />
		</Suspense>
	)
} 