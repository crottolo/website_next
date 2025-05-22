'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function PrestitoConferma () {
	const router = useRouter()

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
						Richiesta inviata!
					</CardTitle>
				</CardHeader>
				<CardContent className='flex flex-col gap-6 items-center'>
					<p className='text-center text-muted-foreground text-lg'>
						La tua richiesta è stata presa in carico.<br />
						<span className='text-primary font-semibold'>Ti contatteremo entro 24h!</span>
					</p>
					<Button className='w-full mt-2' onClick={() => router.push('/')}>Torna alla home</Button>
				</CardContent>
			</Card>
		</div>
	)
} 