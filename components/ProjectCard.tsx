import Image from "next/image"
import Link from "next/link"
import { TechstackInterface, ProjectInterface } from "@/data"

export default function ProjectCard( {project}: {project: ProjectInterface} ) {
    return (
        <div className='w-[350px] flex flex-col rounded-xl overflow-hidden border border-secondary-300 dark:border-secondary-700 p-2'>
            <Image
                alt='screenshot'
                src={`/img/projects/ss/${project.thumbnail}`}
                width={350}
                height={120}
                className='rounded-md'
            />
            <div className="flex flex-1 justify-between flex-col pt-4 pb-1.5 px-1">
                <div>
                    <h2 className='text-base lg:text-lg font-semibold dark:text-white'>{project.title}</h2>
                    <p className='text-sm dark:text-white text-secondary-800 text-wrap'>{project.desc}</p>
                </div>
                <div className="flex mt-3 gap-5 justify-between items-center">
                    <div className="flex items-center gap-1.5">
                        {
                            project.techstack.map((item: TechstackInterface) => (
                                <Image
                                    className={item.icon === 'next.png' ? 'bg-white rounded-full' : undefined}
                                    key={item.key}
                                    alt='icon'
                                    src={`/img/techstack/${item.icon}`}
                                    width={20}
                                    height={20}
                                />
                            ))
                        }
                    </div>
                    <Link className='text-xs font-semibold text-primary-600' target="_blank" href={project.url}>Check Live Site</Link>
                </div>
            </div>
        </div>
    )
}
