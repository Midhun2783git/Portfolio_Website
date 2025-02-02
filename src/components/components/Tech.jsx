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
      <div className='block md:hidden'>
        <p className={styles.sectionSubText}>Tools I Use</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
        <div className="flex flex-col items-center mt-4">
          {technologies.map((technology) => (
            <div
            key={technology.name}
            style={{
              position: "relative",
              overflow: "hidden",
              backgroundColor: "rgba(21, 35, 198, 0.7)", 
              animation: "glazeEffect 3s linear infinite",
              background:
                "linear-gradient(90deg, rgba(29, 43, 235, 0.1) 0%, rgba(50, 140, 250, 0.3) 50%, rgba(29, 43, 235, 0.1) 100%)",
              backgroundSize: "200% auto",
            }}
            className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-md my-2">
              <div className="flex items-center space-x-2">
                <img src={technology.icon} alt={technology.name} className="w-10 h-10" />
                <span className="text-white text-[20px]">{technology.name}</span>  
              </div>
            </div>
          ))}
        </div>
        <style jsx>{`
          @keyframes glazeEffect {
            0% {
              background-position: 0% center;
            }
            100% {
              background-position: 200% center;
            }
          }
        `}</style>
      </div>
      
      </motion.div>      
    </>
  )
}

export default SectionWrapper(Tech, "")