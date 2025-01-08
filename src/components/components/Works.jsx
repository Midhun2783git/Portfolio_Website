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
    className="relative cursor-pointer group"
    >
      <Tilt 
        options={{ max: 45, scale: 1, speed: 450}}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-75"
          style={{
            pointerEvents: "none",
          }}
        ></div>
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
          style={{
            transition: "transform 0.3s ease",
            cursor: "pointer",
          }}
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
        className="md: hidden mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        The following projects demonstrate my skills and experience through practical examples of my work.
        Each project includes source-code repositories.
        They showcase my ability to tackle challenges, work across various technologies, and deliver impactful results efficiently.
      </motion.p>
      <div className='block md:hidden text-center'>
        <div className="flex flex-col items-center mt-4">
          {projects.map((project) => (
            <div 
              key={project.name}
              style={{
                position: "relative",
                overflow: "hidden",
                backgroundColor: "rgba(247, 43, 43, 0.5)", // Fallback background
                animation: "glazeEffectReverse 3s linear infinite",
                background:
                  "linear-gradient(90deg, rgba(249, 64, 43, 0.1) 0%, rgba(245, 85, 85, 0.3) 50%, rgba(249, 64, 43, 0.1) 100%)",
                backgroundSize: "200% auto",
              }}              
              className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-md my-2">
              <div className="flex items-center space-x-2">
                <img src={project.image} alt={project.name} className="w-10 h-10" />
                <span className="text-white text-[20px]">{project.name}</span>  
              </div>
              <a 
                href={project.source_code_link} 
                target={project.source_code_link} 
                rel="noopener noreferrer" 
                className="bg-blue-500 text-white rounded px-4 py-2"  
              >
                View
              </a>
            </div>
          ))}
        </div>
        <style jsx>{`
          @keyframes glazeEffectReverse {
            0% {
              background-position: 200% center;
            }
            100% {
              background-position: 0% center;
            }
          }
        `}</style>
      </div>

    </>
  )
}

export default SectionWrapper(Works, "");
