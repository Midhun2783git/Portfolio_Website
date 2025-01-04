import { BallCanvas } from './canvas'
import { SectionWrapper } from '../../hoc'
import { technologies } from '../../constants'
import { motion } from 'framer-motion';
import { textVariant } from "../../utils/motion";
import { styles } from "../../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`hidden md:block ${styles.sectionSubText}`}>Tools i use</p>
        <h2 className={`hidden md:block ${styles.sectionHeadText}`}>Technologies</h2>
      

      <div className='hidden md:flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon}/>
          </div>
        ))}
      </div>

      {/* Mobile Text Display */}
      <div className='block md:hidden text-center'>
        <p className={styles.sectionSubText}>My Projects</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
        <div className="flex flex-col items-center mt-4">
          {technologies.map((technology) => (
            <div key={technology.name} className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-md my-2">
              <div className="flex items-center space-x-2">
                <img src={technology.icon} alt={technology.name} className="w-10 h-10" />
                <span className="text-white text-[20px]">{technology.name}</span>  
              </div>
            </div>
          ))}
        </div>
      </div>
      </motion.div>      
    </>
  )
}

export default SectionWrapper(Tech, "")