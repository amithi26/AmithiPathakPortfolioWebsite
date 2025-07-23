import React from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { styles } from '../style'
import { textVariant } from '../utils/motion'

const Tech = () => {
  // Categorize your specific technologies
  const categorizedTech = {
    programming: technologies.filter(tech => 
      ['Python', 'Java', 'JavaScript', 'HTML 5', 'C', 'C#', 'R', 'SQL', 'TypeScript', 'git'].includes(tech.name)
    ),
    frameworks: technologies.filter(tech => 
      ['React', 'Three.js', 'Tailwind CSS', 'PyTorch'].includes(tech.name)
    ),
    dcc: technologies.filter(tech => 
      ['Blender', 'Maya', 'After Effects', 'Figma', 'Unity', "Houdini"].includes(tech.name)
    )
  };

  const TechCategory = ({ title, techs, gradientFrom, gradientTo, borderColor }) => (
    <div className="mb-12">
      {/* Container Box with gradient border */}
      <div className="orange-pink-gradient p-[1px] rounded-2xl">
        <div className="bg-[#100c24] from-gray-900/100 to-black/100 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
          {/* Category Header */}
          <div className="text-center mb-8">
            <h3 className={`text-2xl font-semibold bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent mb-3`}>
              {title}
            </h3>
            <div className={`w-32 h-0.5 mx-auto rounded-full bg-gradient-to-r ${gradientFrom} ${gradientTo} opacity-60`}></div>
          </div>

          {/* Tech Grid */}
          <div className="flex flex-wrap justify-center gap-10 max-w-4xl mx-auto">
            {techs.map((technology) => (
              <div 
                key={technology.name}
                className="group relative flex flex-col items-center"
              >
                {/* Simple bubble container */}
                <div className="relative w-20 h-20 mb-2">
                  {/* Main bubble */}
                  <div className={`w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 ${borderColor} group-hover:${borderColor.replace('border-', 'border-').replace('/30', '/60')} transition-all duration-300 flex items-center justify-center backdrop-blur-sm group-hover:scale-105 shadow-lg`}>
                    
                    {/* Tech icon */}
                    <img 
                      src={technology.icon} 
                      alt={technology.name}
                      className="w-12 h-12 object-contain filter group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                </div>
                
                {/* Tech name */}
                <span className="text-s text-center font-medium text-gray-400 group-hover:text-white transition-all duration-300 max-w-[70px] leading-tight">
                  {technology.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I work with</p>
          <h2 className={styles.sectionHeadText}>Technologies.</h2>
        </motion.div>
      </div>

      <div className="mt-20 w-full">
        <TechCategory 
          title="Programming" 
          techs={categorizedTech.programming}
          gradientFrom="from-purple-500" 
          gradientTo="to-purple-400" 
          borderColor="border-purple-500/30"
        />
        
        <TechCategory 
          title="Frameworks & Libraries" 
          techs={categorizedTech.frameworks}
          gradientFrom="from-pink-500" 
          gradientTo="to-red-500" 
          borderColor="border-pink-500/30"
        />
        
        <TechCategory 
          title="Digital Content Creation" 
          techs={categorizedTech.dcc}
          gradientFrom="from-orange-500" 
          gradientTo="to-red-400" 
          borderColor="border-orange-500/30"
        />
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech")