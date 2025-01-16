import React from 'react'
import ProjectCard from '../ProjectCard'
import { ProjectInterface, PROJECTS } from '@/data'
import Heading from '../Heading'

export default function Projects() {
  return (
    <section className='py-16'>
        <Heading center>Recent Projects</Heading>
        <div className='flex flex-wrap justify-center gap-5'>
            {
                PROJECTS.map((project: ProjectInterface)=> (
                    <ProjectCard key={project.key} project={project} />
                ))
            }
        </div>
    </section>
  )
}
