"use client"

import React, { useEffect, useState } from 'react'
import ProjectHero from "../../components/ProjectHero"
import ProjectCard from "../../components/ProjectCard"
import Image from 'next/image'
// import { projectData } from "../../../public/Data/projects"
import { useMyContext } from '../context/MyContext'

const Projects = () => {
    
    const projects = useMyContext(); // Access projects data from context
    const [projectsData, setProjectsData] = useState(null);

    useEffect(() => {

        setProjectsData(projects.data); // Update projectsData state with projects from context

    }, [projects]); // Re-run the effect whenever projects changes


    return (
        <div>
            <ProjectHero />
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 z-50 relative gap-2'>

                {projectsData && projectsData.length > 0 &&
                    projectsData.map((project, index) => (
                        <ProjectCard
                            key={index}
                            name={project.name}
                            description={project.description}
                            imgLink={project.imgLink}
                            gitLink={project.gitLink}
                            liveLink={project.liveLink}
                        />
                    ))
                }

                {/* BG image */}
                <div className='' >
                    <Image src="https://images.hdqwalls.com/download/gas-giant-planet-4k-km-2880x1580.jpg"
                        alt='kunal'
                        height={1000}
                        width={1000}
                        className='absolute top-[25%] h-[100vh] right-0 z-[-1] mix-blend-multiply rounded-l-full '
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects