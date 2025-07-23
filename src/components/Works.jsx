import React, { useState, useEffect } from 'react'
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from '../style'
import { externallink } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, name, description, tags, image, source_code_link, isMobile }) => {
  // Limit animation delay for better performance with many projects
  const safeIndex = Math.min(index, 9); // Cap at 9 to avoid excessive delays
  
  const cardContent = (
    <Tilt
      options={isMobile ? { max: 0, scale: 1, speed: 0 } : { max: 45, scale: 1, speed: 450 }} // Disable tilt on mobile
      className="bg-tertiary p-4 sm:p-5 rounded-2xl w-full h-full min-h-[380px] flex flex-col" // Added responsive padding and min-height
    >
      <div className="relative w-full h-[200px] sm:h-[230px] flex-shrink-0"> {/* Responsive image height */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-2 sm:m-3 card-img_hover"> {/* Responsive margin */}
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer" // Responsive button size
          >
            <img 
              src={externallink}
              alt="external link"
              className="w-1/2 h-1/2"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 sm:mt-5 flex-grow"> {/* Responsive margin and flex-grow for equal height */}
        <h3 className="text-white font-bold text-[20px] sm:text-[24px] leading-tight">{name}</h3> {/* Responsive font size */}
        <p className="mt-2 text-secondary text-[13px] sm:text-[14px] leading-relaxed">{description}</p> {/* Responsive font size */}
      </div>

      <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2"> {/* Responsive margins and gaps */}
        {tags && tags.map((tag) => (
          <p key={tag.name} className={`text-[12px] sm:text-[14px] ${tag.color}`}> {/* Responsive tag font size */}
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  );
  
  // Return with or without motion wrapper based on mobile detection
  if (isMobile) {
    return (
      <div className="w-full max-w-[350px] mx-auto sm:mx-0">
        {cardContent}
      </div>
    );
  }
  
  return (
    <motion.div 
      variants={fadeIn("up", "spring", safeIndex * 0.2, 0.75)}
      className="w-full max-w-[350px] mx-auto sm:mx-0"
    >
      {cardContent}
    </motion.div>
  );
}

const Works = () => {
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if user is on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Ensure the projects array is valid
    if (!Array.isArray(projects)) {
      console.error("Projects is not an array:", projects);
      return;
    }

    try {
      // Safely process projects
      const validProjects = projects.filter(project => 
        project && 
        project.name && 
        project.description && 
        project.image && 
        project.source_code_link
      );
      
      console.log(`Filtering ${projects.length} projects, found ${validProjects.length} valid ones`);
      setDisplayedProjects(validProjects);
    } catch (error) {
      console.error("Error processing projects:", error);
      setDisplayedProjects([]);
    }
  }, []);

  // Create content that can be wrapped conditionally
  const headerContent = (
    <>
      <p className={styles.sectionSubText}>My Work</p>
      <h2 className={styles.sectionHeadText}>Projects</h2>
    </>
  );

  const descriptionContent = (
    <div className="w-full flex">
      <p className="mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[26px] sm:leading-[30px]">
        Explore my programming and creative projects, where I demonstrate my skills through real-world applications. 
        Each project is accompanied by a brief description, along with links, videos, 
        and other relevant resources to provide deeper insights into my work.
      </p>
    </div>
  );

  return (
    <>
      {isMobile ? (
        <div>{headerContent}</div>
      ) : (
        <motion.div variants={textVariant()}>{headerContent}</motion.div>
      )}

      {isMobile ? (
        descriptionContent
      ) : (
        <motion.div variants={fadeIn("", "", 0.1, 1)}>
          {descriptionContent}
        </motion.div>
      )}
      
      {/* Updated grid layout for better mobile experience */}
      <div className="mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-7 px-2 sm:px-0">
        {displayedProjects.length > 0 ? (
          displayedProjects.map((project, index) => (
            <ProjectCard 
              key={`project-${index}`}
              index={index}
              isMobile={isMobile}
              {...project}
            />
          ))
        ) : (
          <div className="col-span-full text-center">
            <p className="text-white text-base sm:text-lg">Loading projects...</p>
          </div>
        )}
      </div>
      
      {displayedProjects.length === 0 && (
        <div className="text-center mt-5 px-4">
          <p className="text-secondary text-sm sm:text-base">
            No projects found. Please check your projects data or browser console for errors.
          </p>
        </div>
      )}
    </>
  )
}

export default SectionWrapper(Works, "projects");