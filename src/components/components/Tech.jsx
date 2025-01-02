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
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon}/>
          </div>
        ))}
      </div>

      {/* Mobile Text Display */}
      <div className='block md:hidden text-center'>
        <p className={styles.sectionSubText}>Tools I use</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </div>      
    </>
  )
}

export default SectionWrapper(Tech, "")