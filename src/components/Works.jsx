import React, { useState, useEffect } from 'react'
import { Tilt } from "react-tilt"
import { styles } from '../style'
import { externallink } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'

const ProjectCard = ({ index, name, description, tags, image, source_code_link, isMobile, isPrimary }) => {
  return (
    <div className={`w-full max-w-[350px] mx-auto sm:mx-0 ${!isPrimary ? 'opacity-80' : ''}`}>
      <Tilt
        options={isMobile ? { max: 0, scale: 1, speed: 0 } : { max: 45, scale: 1, speed: 450 }} // Disable tilt on mobile
        className="bg-tertiary p-4 sm:p-5 rounded-2xl w-full h-full min-h-[380px] flex flex-col" // Added responsive padding and min-height
      >
        {/* Category indicator */}
        {!isPrimary && (
          <div className="absolute top-2 left-2 bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs z-10">
            Secondary
          </div>
        )}
        
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
    </div>
  );
}

const Works = () => {
  const [validProjects, setValidProjects] = useState([]); // Store all valid projects
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

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
      // Safely process projects and store ALL valid projects
      const allValidProjects = projects.filter(project => 
        project && 
        project.name && 
        project.description && 
        project.image && 
        project.source_code_link &&
        project.primaryCategory // Ensure primary category exists
      );
      
      console.log(`Total projects: ${projects.length}, Valid projects: ${allValidProjects.length}`);
      console.log('All project primary categories:', allValidProjects.map(p => p.primaryCategory));
      console.log('All project secondary categories:', allValidProjects.map(p => p.secondaryCategory));
      setValidProjects(allValidProjects); // Store all valid projects
    } catch (error) {
      console.error("Error processing projects:", error);
      setValidProjects([]);
    }
  }, []);

  // Enhanced filtering logic for primary/secondary categories
  const getFilteredProjects = () => {
    if (selectedCategory === "all") {
      return validProjects.map(project => ({ ...project, isPrimary: true }));
    }

    const primaryMatches = validProjects.filter(p => p.primaryCategory === selectedCategory);
    const secondaryMatches = validProjects.filter(p => 
      p.secondaryCategory === selectedCategory && p.primaryCategory !== selectedCategory
    );

    // Combine with primary first, then secondary
    const combined = [
      ...primaryMatches.map(project => ({ ...project, isPrimary: true })),
      ...secondaryMatches.map(project => ({ ...project, isPrimary: false }))
    ];

    return combined;
  };

  const filteredProjects = getFilteredProjects();

  // Debug logging
  console.log('Selected category:', selectedCategory);
  console.log('Valid projects count:', validProjects.length);
  console.log('Filtered projects count:', filteredProjects.length);
  console.log('Primary matches:', filteredProjects.filter(p => p.isPrimary).length);
  console.log('Secondary matches:', filteredProjects.filter(p => !p.isPrimary).length);

  return (
    <div key={selectedCategory}> {/* Force complete re-render when category changes */}
      <div>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[26px] sm:leading-[30px]">
          Explore my programming and creative projects, where I demonstrate my skills through real-world applications. 
          Each project is accompanied by a brief description, along with links, videos, 
          and other relevant resources to provide deeper insights into my work.
          {selectedCategory !== "all" && (
            <span className="block mt-2 text-sm text-gray-400">
              Showing primary matches first, followed by related secondary projects.
            </span>
          )}
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mt-8">
        {["all", "Graphics", "Software Development", "Data Science"].map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-10 py-4 rounded-full text-m font-medium transition-all duration-200
              ${selectedCategory === cat ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1).replace('-', ' ')}
          </button>
        ))}
      </div>



      {/* Updated grid layout for better mobile experience */}
      <div className="mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-7 px-2 sm:px-0">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => {
            // Debug each project being rendered
            console.log(`Rendering project ${index + 1}:`, project.name, project.isPrimary ? '(Primary)' : '(Secondary)');
            return (
              <ProjectCard 
                key={`project-${project.name}-${selectedCategory}-${project.isPrimary ? 'primary' : 'secondary'}`} // Better key that includes category and type
                index={index}
                isMobile={isMobile}
                isPrimary={project.isPrimary}
                {...project}
              />
            );
          })
        ) : (
          <div className="col-span-full text-center">
            <p className="text-white text-base sm:text-lg">No projects in this category.</p>
          </div>
        )}
      </div>

      {validProjects.length === 0 && (
        <div className="text-center mt-5 px-4">
          <p className="text-secondary text-sm sm:text-base">
            No projects found. Please check your projects data or browser console for errors.
          </p>
        </div>
      )}
    </div>
  )
}

export default SectionWrapper(Works, "projects");