import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';
import { styles } from '../../styles';
import { services } from '../../constants';
import { fadeIn, textVariant } from '../../utils/motion';
import { SectionWrapper } from '../../hoc';
import { gif } from '../../assets/assets';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full blue-red-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me</h2>
      </motion.div>

      <div className="flex items-start mt-4">
        <motion.img 
          src= {gif} 
          className="w-30 h-80 mt-4 mr-4" 
        />
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
          Hi! I'm Midhun Saminathan, a passionate learner and innovator with a
          strong interest in AI, robotics, and technology-driven solutions.
          My academic and project experiences have allowed me to explore diverse areas,
          including simulations, behavior-based robotics, and interactive designs.
          <br/>
          <br/>
          I enjoy tackling complex challenges and transforming ideas into impactful
          outcomes, whether it’s through designing intelligent systems or developing
          user-focused applications. With a keen eye for detail and a problem-solving
          mindset, I strive to create solutions that not only address real-world needs
          but also push the boundaries of innovation.
          <br/>
          <br/>
          I am driven by curiosity and a commitment to continuous growth, eager to
          contribute to projects that shape the future of technology and make a
          meaningful difference.
      </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
