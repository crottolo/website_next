import Link from 'next/link';
import { Frown } from 'lucide-react';

export default function NotFound() {
  return (
    <div className='min-h-screen w-full flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-4 p-4'>
        <Frown className='w-20 h-20 text-gray-400' />

        <h1 className='text-4xl font-bold text-center'>404 - Page Not Found</h1>

        <p className='text-xl text-center text-muted-foreground'>
          The page you are looking for does not exist.
        </p>

        <Link
          href='/'
          className='mt-4 inline-flex items-center justify-center rounded-md bg-green-600 hover:bg-green-700 text-white px-8 py-2 text-sm font-medium transition-colors'>
          Torna alla Home
        </Link>
      </div>
    </div>
  );
}
