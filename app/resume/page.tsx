import { PERSONAL_DETAILS } from '@/data'
import { Globe, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Salman's Resume",
    description: `Experienced and versatile Software Engineer with a strong foundation in full-stack web development and expertise in technologies such as React, Next.js, Python Flask, Node.js>, and Express. Skilled in designing responsive front-end user interfaces, developing robust back-end APIs, and managing databases to create scalable and efficient web applications. Currently expanding my skill set by learning mobile development with React Native and continuously exploring emerging technologies. Known for delivering clean, maintainable code and solving complex problems with innovative solutions.`,
  };

export default function Resume() {
    return (
        <main className='max-w-screen-lg mx-auto min-h-screen py-1 px-3'>
            <div className='flex flex-col gap-2 border-b border-secondary-400 py-2'>
                <h1 className='flex items-center gap-5 text-xl text-center text-secondary-1000'>
                    <span className='uppercase font-bold'>{PERSONAL_DETAILS.resume.name}</span>
                    <span className='font-normal text-sm'>Full Stack Developer | React, Next.js Developer | Backend Engineer</span>
                </h1>

                <div className='flex flex-wrap gap-y-2 gap-x-7 items-center text-sm text-secondary-900'>
                    <div className="flex gap-1 items-center">
                        <Mail size={14} />
                        <Link target='_blank' href={`mailto:${PERSONAL_DETAILS.resume.email.gmail_msalmankhokhar13}`}>{PERSONAL_DETAILS.resume.email.gmail_msalmankhokhar13}</Link>
                    </div>
                    <div className="flex gap-1 items-center">
                        <Phone size={14} />
                        <span>{PERSONAL_DETAILS.resume.Phone}</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <MapPin size={14} />
                        <span>{PERSONAL_DETAILS.resume.address.short}</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <Globe size={14} />
                        <Link target='_blank' href={`https://${PERSONAL_DETAILS.resume.website}`}>{PERSONAL_DETAILS.resume.website}</Link>
                    </div>
                </div>

            </div>

            <div className='flex flex-col py-2 gap-1 border-b border-secondary-400'>
                <h2 className='uppercase font-semibold text-lg'>Summary</h2>
                <p className='pl-5'>
                    Experienced and versatile <strong>Software Engineer</strong> with a strong foundation in <strong>full-stack web development</strong> and expertise in technologies such as <strong>React</strong>, <strong>Next.js</strong>, <strong>Python Flask</strong>, <strong>Node.js</strong>, and <strong>Express</strong>. Skilled in designing <strong>responsive front-end user interfaces</strong>, developing <strong>robust back-end APIs</strong>, and managing <strong>databases</strong> to create <strong>scalable</strong> and <strong>efficient web applications</strong>. Currently expanding my skill set by learning <strong>mobile development</strong> with <strong>React Native</strong> and continuously exploring emerging technologies. Known for delivering <strong>clean, maintainable code</strong> and solving <strong>complex problems</strong> with innovative solutions.
                </p>
            </div>

            <div className='flex flex-col py-2 gap-1 border-b border-secondary-400'>
                <h2 className='uppercase font-semibold text-lg'>Experience</h2>
                <div className='pl-5 flex gap-7'>
                    <div className='flex flex-col text-sm'>
                        <h3 className='font-semibold text-base'>Web Development Team Lead</h3>
                        <p className='font text-secondary-800'>Cortex AI Tech, Islamabad, Pakistan</p>
                        <p className='text-secondary-800'>2024 - Present</p>
                        <p className='text-secondary-800 text-sm max-w-md'>Developed and maintained official website, and a web based attendance management system for employees.</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col py-2 gap-1 border-b border-secondary-400'>
                <h2 className='uppercase font-semibold text-lg'>Skills</h2>
                <div className="pl-5 flex gap-x-20 gap-y-8 flex-wrap">
                    <div className='max-w-sm text-wrap'>
                        <h3 className='font-semibold mb-1'>Technical</h3>
                        <ul className='text-sm'>
                            <li>React and Next.js</li>
                            <li>Responsive Design</li>
                            <li>Figma to Code</li>
                            <li>TypeScript</li>
                            <li>MERN Stack</li>
                            <li>API development and Integration</li>
                            <li>Database management</li>
                            <li>Node, Express and Python Flask</li>
                            <li>UI Prototyping using Figma</li>
                        </ul>
                    </div>
                    <div className='max-w-sm text-wrap'>
                        <h3 className='font-semibold mb-1'>Tools</h3>
                        <ul className='text-sm'>
                            <li>Figma</li>
                            <li>Adobe Illustrator</li>
                            <li>MS Word, Excel and Powerpoint</li>
                            <li>Android Studio</li>
                            <li>Visual Studio Code</li>
                        </ul>
                    </div>
                    <div className='max-w-sm text-wrap'>
                        <h3 className='font-semibold mb-1'>Tech Stack</h3>
                        <ul className='text-sm'>
                            <li>React</li>
                            <li>Next.js</li>
                            <li>MERN Stack</li>
                            <li>TypeScript</li>
                            <li>Tailwind CSS</li>
                            <li>Appwrite</li>
                            <li>React Native</li>
                            <li>Python</li>
                        </ul>
                    </div>
                    <div className='max-w-sm text-wrap'>
                        <h3 className='font-semibold mb-1'>Management</h3>
                        <ul className='text-sm'>
                            <li>Team work</li>
                            <li>Proven leadership skills</li>
                            <li>Project Management</li>
                            <li>Collaboration</li>
                            <li>Software Development Standards and Best Practices</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='flex flex-col py-2 border-b border-secondary-400 gap-1'>
                <h2 className='uppercase font-semibold text-lg'>Projects</h2>
                <div className='pl-5 flex flex-wrap flex-col min-[954px]:flex-row gap-3'>
                    <div className='flex flex-col text-sm min-[954px]:max-w-lg rounded-lg p-3 border-secondary-400'>
                        <h3 className='font-semibold text-base'>Al Habib Travels UK</h3>
                        <p className='font text-secondary-800'>Website for a travel company in UK built with Next.js 14 and mongodb</p>
                        <p className='text-secondary-800'><strong>Live site: </strong> <Link target='_blank' className='text-blue-600' href='https://www.alhabibtravel.co.uk'>https://www.alhabibtravel.co.uk</Link></p>
                    </div>
                    <div className='flex flex-col text-sm min-[954px]:max-w-lg rounded-lg p-3 border-secondary-400'>
                        <h3 className='font-semibold text-base'>Neuros</h3>
                        <p className='font text-secondary-800'>Saas website landing page</p>
                        <p className='text-secondary-800'><strong>Source Code: </strong> <Link target='_blank' className='text-blue-600' href='https://github.com/msalmankhokhar/neuros-saas-landing-page-nextjs'>https://github.com/msalmankhokhar/neuros-saas-landing-page-nextjs</Link></p>
                        <p className='text-secondary-800'><strong>Live Site: </strong> <Link target='_blank' className='text-blue-600' href='https://neuros-saas-landing-page-nextjs.vercel.app/'>https://neuros-saas-landing-page-nextjs.vercel.app/</Link></p>
                    </div>
                    <div className='flex flex-col text-sm min-[954px]:max-w-lg rounded-lg p-3 border-secondary-400'>
                        <h3 className='font-semibold text-base'>Sports Data API in Python</h3>
                        <p className='font text-secondary-800'>Backend API for a Sports App</p>
                        <p className='text-secondary-800'><strong>Source Code: </strong> <Link target='_blank' className='text-blue-600' href='https://github.com/msalmankhokhar/InforebornNew_API'>https://github.com/msalmankhokhar/InforebornNew_API</Link></p>
                    </div>
                    <div className='flex flex-col text-sm min-[954px]:max-w-lg rounded-lg p-3 border-secondary-400'>
                        <h3 className='font-semibold text-base'>Web Based Attendance Portal</h3>
                        <p className='font text-secondary-800'>Online Attendance Portal Web App using Next.js 14 and Mongodb</p>
                        <p className='text-secondary-800'><strong>Source Code: </strong> <Link target='_blank' className='text-blue-600' href='https://github.com/msalmankhokhar/attendance-portal-cortexaitech'>https://github.com/msalmankhokhar/attendance-portal-cortexaitech</Link></p>
                        <p className='text-secondary-800'><strong>Live Site: </strong> <Link target='_blank' className='text-blue-600' href='https://attendance-portal-cortexaitech.vercel.app/login'>https://attendance-portal-cortexaitech.vercel.app/login</Link></p>
                    </div>
                    <div className='flex flex-col text-sm min-[954px]:max-w-lg rounded-lg p-3 border-secondary-400'>
                        <h3 className='font-semibold text-base'>News Application</h3>
                        <p className='font text-secondary-800'>News App using React and News API</p>
                        <p className='text-secondary-800'><strong>Source Code: </strong> <Link target='_blank' className='text-blue-600' href='https://github.com/msalmankhokhar/news-app-react'>https://github.com/msalmankhokhar/news-app-react</Link></p>
                    </div>
                </div>
                <div className='mt-2'>
                    <h3 className='font-semibold text-sm'>Visit my Portofoli Website</h3>
                    <Link className='text-sm text-blue-600' target='_blank' href={`https://${PERSONAL_DETAILS.resume.website}`}>{PERSONAL_DETAILS.resume.website}</Link>
                </div>
                <div className='mt-2'>
                    <h3 className='font-semibold text-sm'>Visit my Github</h3>
                    <Link className='text-sm text-blue-600' target='_blank' href={`https://github.com/msalmankhokhar`}>{'https://github.com/msalmankhokhar'}</Link>
                </div>
            </div>

            <div className='flex flex-col py-2 border-b border-secondary-400 gap-1'>
                <h2 className='uppercase font-semibold text-lg'>Education</h2>
                <div className='pl-5 flex gap-7'>
                    <div className='flex flex-col text-sm'>
                        <h3 className='font-semibold text-base'>FSc. Pre medical</h3>
                        <p className='font text-secondary-800'>Divisional Public School & College Sahiwal</p>
                        <p className='text-secondary-800'>2020 - 2022</p>
                    </div>
                    <div className='flex flex-col text-sm'>
                        <h3 className='font-semibold text-base'>BS Computer Science</h3>
                        <p className='font text-secondary-800'>Comsats University Islamabad, Sahiwal Campus</p>
                        <p className='text-secondary-800'>2024 - Present</p>
                    </div>
                </div>
            </div>

        </main>
    )
}
