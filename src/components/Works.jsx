import React, { useState, useEffect } from 'react'
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from '../style'
import { externallink } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  const safeIndex = Math.min(index, 9);
  
  return (
    <motion.div 
      variants={fadeIn("up", "spring", safeIndex * 0.2, 0.75)}
      className="w-full sm:w-[350px]"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl w-full h-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = 'https://via.placeholder.com/350x230?text=Project+Image'
            }}
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img 
                src={externallink}
                alt="external link"
                className="w-1/2 h-1/2"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags && tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [displayedProjects, setDisplayedProjects] = useState([]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        // Add a small delay to ensure all assets are loaded
        await new Promise(resolve => setTimeout(resolve, 100));
        
        if (Array.isArray(projects)) {
          const validProjects = projects.filter(project => 
            project && 
            project.name && 
            project.description && 
            project.image && 
            project.source_code_link
          );
          setDisplayedProjects(validProjects);
        }
      } catch (error) {
        console.error("Error loading projects:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProjects();
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Explore my programming and creative projects, where I demonstrate my skills through real-world applications. 
          Each project is accompanied by a brief description, along with links, videos, 
          and other relevant resources to provide deeper insights into my work.
        </motion.p>
      </div>
      
      {isLoading ? (
        <div className="mt-20 flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary" />
        </div>
      ) : (
        <>
          <div className="mt-20 flex flex-wrap gap-7 justify-center sm:justify-start">
            {displayedProjects.length > 0 ? (
              displayedProjects.map((project, index) => (
                <ProjectCard 
                  key={`project-${index}`}
                  index={index}
                  {...project}
                />
              ))
            ) : (
              <p className="text-white">No projects found.</p>
            )}
          </div>
        </>
      )}
    </>
  )
}

export default SectionWrapper(Works, "projects");