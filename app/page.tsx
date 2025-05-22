'use client'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function Home() {
	const router = useRouter()

	return (
		<div className='min-h-screen flex flex-col items-center justify-center bg-background px-4'>
			<Image
				src='/logo-magenta.svg'
				alt='Logo Magenta'
				width={120}
				height={120}
				className='mb-8'
				priority
			/>
			<h1 className='text-3xl font-bold text-center mb-8'>
				Benvenuto in Magenta Prestiti
			</h1>
			<Button size='lg' className='text-lg px-8 py-6' onClick={() => router.push('/prestito')}>
				Inizia la richiesta di prestito
			</Button>
		</div>
	)
}
