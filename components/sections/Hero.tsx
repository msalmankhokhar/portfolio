import { MoveDownRight } from 'lucide-react'
import React from 'react'
import Button from '../Button'
import { TECH_STACK } from '@/data'
import TechstackCard from '../TechstackCard'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="heroSection relative flex flex-col items-center justify-center py-20 gap-3">
          <div className="heroSectionBg"></div>
          <Image
            alt='bg'
            src={'/img/grid.jpg'}
            fill
            className='-z-10 opacity-80 sm:opacity-35'
          />

        {/* AVATAR */}

        {/* <div className="rounded-full w-[110px] h-[110px] overflow-hidden relative">
          <Image 
            alt="avatar"
            src={'/avatars/A1.jpg'}
            fill
          />
        </div> */}
        
        <h1 className="font-black text-[1.7rem] md:text-4xl md:max-w-xl xl:text-5xl xl:max-w-2xl text-center dark:text-white">
          Transforming Concepts into Seemless <span className="text-primary-600">User Experiences</span>
        </h1>
        <p className="text-center dark:text-white max-w-lg md:max-w-xl xl:max-w-2xl text-wrap">Hi, I am Salman, A versatile software developer based in Pakistan</p>

        <div className="mt-5">
          <h1 className="text-center text-lg mb-3 font-semibold text-secondary-900 dark:text-white">My Tech Stack</h1>
          <div className="flex flex-wrap justify-center gap-3 mb-1 dark:text-white">
            <TechstackCard icon={TECH_STACK.react.icon} />
            <TechstackCard icon={TECH_STACK.nextJs.icon} className='bg-white rounded-full' />
            <TechstackCard icon={TECH_STACK.typeScript.icon} />
            <TechstackCard icon={TECH_STACK.tailwindCss.icon} />
            <TechstackCard icon={TECH_STACK.javaScript.icon} />
            <TechstackCard icon={TECH_STACK.python.icon} />
            <TechstackCard icon={TECH_STACK.figma.icon} />
          </div>
        </div>
        <Button variant="btn-primary" className="" icon={<MoveDownRight size={16} />}>See my Work</Button>

      </section>
    )
}
