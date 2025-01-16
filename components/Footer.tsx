import { SOCIAL_ACCOUNTS } from '@/data'
import { Facebook, Github, Heart, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='border-t maxContainer paddingContainer py-4'>
        <div className='flex flex-col items-center justify-between gap-5 sm:flex-row text-sm'>
            <p className='text-secondary-700 dark:text-secondary-300 text-sm'>
                Made with <Heart size={14} className='inline mb-0.5' fill='red' stroke='red' /> by Salman
            </p>
            <div className='flex gap-2 items-center'>
                <Link target='_blank' href={SOCIAL_ACCOUNTS.facebook.url} className='aspect-square flex items-center justify-center border p-2 rounded'>
                    <Facebook size={16} />
                </Link>
                <Link target='_blank' href={SOCIAL_ACCOUNTS.linkedin.url} className='aspect-square flex items-center justify-center border p-2 rounded'>
                    <Linkedin size={16} />
                </Link>
                <Link target='_blank' href={SOCIAL_ACCOUNTS.github.url} className='aspect-square flex items-center justify-center border p-2 rounded'>
                    <Github size={16} />
                </Link>
            </div>
        </div>
    </footer>
  )
}
