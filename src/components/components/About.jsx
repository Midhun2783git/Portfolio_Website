import React from 'react'
import  {Tilt } from 'react-tilt'
import { motion } from 'framer-motion';
import { styles } from '../../styles';
import { services } from '../../constants';
import { fadeIn, textVariant } from '../../utils/motion';

// const ServiceCard = ({ index, title, icon }) => {
//   return {
//     <p>{title}</p>
//   }
// }
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am an aspiring technologist with a strong passion for AI, robotics, and innovative solutions.
        My academic and project experiences have allowed me to work on a variety of challenges,
        from developing simulations to creating interactive applications and exploring machine learning concepts.
        I am skilled in tools such as Python, Blender, and Unreal Engine, which I use to bring my ideas to life.
        Driven by curiosity and a desire to make a meaningful impact, I am always seeking opportunities to learn and contribute to advancements in the tech field.
      </motion.p>

      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div> */}
    </>
  )
}

export default About
