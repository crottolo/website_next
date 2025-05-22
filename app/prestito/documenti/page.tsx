'use client'

import { Suspense } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useRouter, useSearchParams } from 'next/navigation'
import { useRef, useState } from 'react'
import Image from 'next/image'

const DOCS = [
	{ key: 'payslip', label: "L&apos;ultima busta paga" },
	{ key: 'certificato', label: 'Certificato Unico' },
	{ key: 'cartaid', label: "Carta d&apos;identità" },
	{ key: 'cedolino', label: 'Cedolino' },
]

function PrestitoDocumentiInner () {
	const router = useRouter()
	const searchParams = useSearchParams()
	const importo = Number(searchParams.get('importo') || 0)
	const categoria = searchParams.get('categoria') || ''
	const durata = Number(searchParams.get('durata') || 0)

	const [files, setFiles] = useState<{ [k: string]: File | null }>({})
	const [privacy, setPrivacy] = useState(false)
	const [marketing, setMarketing] = useState(false)
	const fileInputs = useRef<{ [k: string]: HTMLInputElement | null }>({})

	const canSubmit = privacy

	function handleFileChange (key: string, file: File | null) {
		setFiles(prev => ({ ...prev, [key]: file }))
	}

	function handleUploadClick (key: string) {
		fileInputs.current[key]?.click()
	}

	function handleSubmit (e: React.FormEvent) {
		e.preventDefault()
		if (canSubmit) {
			// Qui invieresti i dati, mock: vai a schermata finale
			router.push(`/prestito/conferma`)
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
						Carica i documenti
					</CardTitle>
				</CardHeader>
				<CardContent className='flex flex-col gap-6 items-center'>
					<div className='text-center text-muted-foreground'>
						<p>Importo: <span className='font-semibold text-primary'>{importo.toLocaleString('it-IT')} €</span></p>
						<p>Categoria: <span className='font-semibold'>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</span></p>
						<p>Durata: <span className='font-semibold'>{durata} mesi</span></p>
					</div>
					<form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full items-center'>
						{DOCS.map(doc => (
							<div key={doc.key} className='w-full flex flex-col gap-1'>
								<label className='font-medium'>{doc.label}</label>
								<div className='flex gap-2 items-center'>
									<input
										type='file'
										accept='.pdf,.jpg,.jpeg,.png'
										ref={el => { fileInputs.current[doc.key] = el }}
										onChange={e => handleFileChange(doc.key, e.target.files?.[0] || null)}
										className='hidden'
									/>
									<Button type='button' variant='outline' onClick={() => handleUploadClick(doc.key)}>
										Carica o scatta foto
									</Button>
									<span className='text-xs text-muted-foreground'>
										{files[doc.key]?.name || 'Nessun file selezionato'}
									</span>
								</div>
							</div>
						))}
						<div className='flex flex-col gap-2 w-full mt-2'>
							<label className='flex items-center gap-2'>
								<input type='checkbox' checked={privacy} onChange={e => setPrivacy(e.target.checked)} required />
								<span>Dichiaro di aver preso visione dell&apos;informativa privacy</span>
							</label>
							<label className='flex items-center gap-2'>
								<input type='checkbox' checked={marketing} onChange={e => setMarketing(e.target.checked)} />
								<span>Acconsento a comunicazioni promozionali e marketing</span>
							</label>
						</div>
						<Button type='submit' className='w-full mt-2' disabled={!canSubmit}>
							Invia richiesta
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}

export default function PrestitoDocumenti () {
	return (
		<Suspense>
			<PrestitoDocumentiInner />
		</Suspense>
	)
} 