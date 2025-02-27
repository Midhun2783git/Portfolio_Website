import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';
import { styles } from '../../styles';
import { services } from '../../constants';
import { fadeIn, textVariant } from '../../utils/motion';
import { SectionWrapper } from '../../hoc';
import { hello } from '../../assets/assets';

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
    <div className='flex flex-col md:flex-row items-center justify-between h-[100vh]'>
      {/* Text Container */}
      <div className='w-full md:w-1/2 p-6'>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>About me</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          <p>
          Hi! I'm Midhun Saminathan, a passionate learner and innovator with a strong
          interest in AI, robotics, and technology-driven solutions.
          My academic and project experiences have enabled me to explore diverse areas.
          I like tackling complex challenges and transforming ideas into impactful
          outcomes, whether by designing intelligent systems or creating user-focused
          applications.
          <br />
          <br />
          With careful attention to detail and a focus on solving problems,
          I aim to create solutions that meet real-world needs while pushing the
          limits of innovation.
          </p>
        </motion.p>
      </div>

      {/* Image Container */}
      
      <div className='w-full h-full'>
        <img
          src={hello} 
          alt='About Me'
          className='block hidden md:flex w-full h-full object-cover rounded-lg border-[5px] border-solid border-white'
          style={{
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>
    </div>  
    <br />       
    {/* Services Section */}
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")
