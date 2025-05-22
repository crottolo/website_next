'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function PrestitoStart () {
	const router = useRouter()

	function handleSelectCategoria (categoria: 'dipendente' | 'pensionato') {
		router.push(`/prestito/importo?categoria=${categoria}`)
	}

	return (
		<div className='min-h-screen flex flex-col items-center justify-center bg-background px-4'>
			<Card className='w-full max-w-md shadow-lg'>
				<CardHeader className='flex flex-col items-center gap-2'>
					<Image
						src='/logo-magenta.svg'
						alt='Logo Magenta'
						width={80}
						height={80}
						className='mb-2'
						priority
					/>
					<CardTitle className='text-center text-2xl font-bold'>
						Configura il tuo prestito in modo <span className='text-primary'>rapido</span> e <span className='text-primary'>gratuito</span>
					</CardTitle>
				</CardHeader>
				<CardContent className='flex flex-col gap-6 items-center'>
					<p className='text-center text-muted-foreground'>
						Seleziona la tua categoria
					</p>
					<div className='flex flex-col sm:flex-row gap-4 w-full'>
						<Button
							variant='outline'
							onClick={() => handleSelectCategoria('dipendente')}
							className='flex-1 flex flex-col items-center justify-center py-6 gap-2 min-h-[140px] min-w-[140px] max-w-[180px] mx-auto border-2 border-muted-foreground/20 hover:border-primary transition-all duration-200'
						>
							<div className='flex flex-col items-center justify-center gap-2 w-full'>
								<Image src='/dipendente.svg' alt='Dipendente' width={64} height={64} className='mb-1' priority />
								<span className='font-semibold text-base'>Sono dipendente</span>
							</div>
						</Button>
						<Button
							variant='outline'
							onClick={() => handleSelectCategoria('pensionato')}
							className='flex-1 flex flex-col items-center justify-center py-6 gap-2 min-h-[140px] min-w-[140px] max-w-[180px] mx-auto border-2 border-muted-foreground/20 hover:border-primary transition-all duration-200'
						>
							<div className='flex flex-col items-center justify-center gap-2 w-full'>
								<Image src='/pensionato.svg' alt='Pensionato' width={64} height={64} className='mb-1' priority />
								<span className='font-semibold text-base'>Sono in pensione</span>
							</div>
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	)
} 