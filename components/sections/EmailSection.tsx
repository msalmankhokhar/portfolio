import React, { useState } from 'react'
import { Copy, Mail, Send } from "lucide-react";
import Button from '../Button';
import { PERSONAL_DETAILS } from '@/data';

export default function EmailSection() {

    const email = PERSONAL_DETAILS.resume.email.domain_salman;
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true)
    }

    return (
        <section className="bg-secondary-1000 py-10 paddingContainer maxContainer">
            <h1 className="text-[1.9rem] max-w-[350px] text-white font-black mb-4">Ready to take your digital presence to the next level?</h1>
            <div className="mb-5 flex gap-2 items-center justify-between max-w-xl bg-secondary-900 border border-secondary-800 py-2.5 px-3 rounded-lg text-white">
                <div className="flex gap-2 items-center">
                    <Mail size={16} color="white" />
                    <p>{email}</p>
                </div>

                {/* Copy Button */}
                <Button onClick={handleCopy} className={copied ? 'text-green-600' : undefined} variant="btn-primary-white">
                    {
                        copied ? 'Copied' : <Copy size={16} />
                    }
                </Button>
                
            </div>
            <Button href={`mailto:${email}`} icon={<Send size={16} />} variant="btn-primary">Contact Me Now</Button>
        </section>
    )
}
