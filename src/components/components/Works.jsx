import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../../styles"
import { github } from "../../assets/assets"
import { SectionWrapper } from "../../hoc"
import { projects } from "../../constants"
import { fadeIn, textVariant } from "../../utils/motion"

const ProjectCard = ({ index, name, description, tags, image, source_code_link, project_link }) => {
  const handleCardClick = () => {
    window.open(project_link, "_blank")
  };
  return (
    <motion.div 
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    onClick={handleCardClick}
    style = {{cursor: "pointer"}}
    >
      <Tilt 
        options={{ max: 45, scale: 1, speed: 450}}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link, "_blank");
              }}  
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
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
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Projects</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="hidden md:flex mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects demonstrate my skills and experience through practical examples of my work.
          Each project includes a brief description along with links to code repositories and live demos.
          They showcase my ability to tackle challenges, work across various technologies, and deliver impactful results efficiently.
        </motion.p>
      </div>
      <div className="hidden md:flex mt-20 flex flex-wrap gap-7 ">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            name={project.name}
            description={project.description}
            tags={project.tags}
            image={project.image}
            source_code_link={project.source_code_link}
            project_link={project.project_link}
            {...project}
          />
        ))}
      </div>

      {/* Mobile Text Display */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        The following projects demonstrate my skills and experience through practical examples of my work.
        Each project includes code repositories and live demos.
        They showcase my ability to tackle challenges, work across various technologies, and deliver impactful results efficiently.
      </motion.p>
      <div className='block md:hidden text-center'>
        <div className="flex flex-col items-center mt-4">
          {projects.map((project) => (
            <div key={project.name} className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-md my-2">
              <div className="flex items-center space-x-2">
                <img src={project.image} alt={project.name} className="w-10 h-10" />
                <span className="text-white text-[20px]">{project.name}</span>  
              </div>
              <a 
                href={project.project_link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-500 text-white rounded px-4 py-2"  
              >
                View
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");

// import React from "react"

// const Works = () => {
//   return (
//     <div>Works</div>
//   )
// }

// export default Works