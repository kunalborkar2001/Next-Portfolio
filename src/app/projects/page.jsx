
import React from 'react'
import ProjectHero from "../../components/ProjectHero"
import ProjectCard from "../../components/ProjectCard"

const Projects = () => {

    return (
        <div>
            <ProjectHero />
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    )
}

export default Projects