import { motion } from 'framer-motion';
import { hero } from '../../assets/assets';
import { styles } from '../../styles';
import { ComputersCanvas } from './canvas';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const words = ['Midhun', 'a Developer', 'a Tech Geek'];
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[index];
      if (!isDeleting) {
        setText((prev) => currentWord.substring(0, prev.length + 1));
        if (text === currentWord) {
          setIsDeleting(true);
          setTypingSpeed(150); 
        }
      } else {
        setText((prev) => currentWord.substring(0, prev.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length); 
          setTypingSpeed(150);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, index]);

  return (
    <section
      className="relative w-full h-screen mx-auto"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className={`${styles.paddingX}
        absolute inset-0 top-[120px] max-w-7xl
        mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#4f03f3]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white hidden sm:block`}>
            Hi, I am <span className="text-[#4f03f3]">{text}</span>
          </h1>
          <h1 className={`${styles.heroHeadText} text-white block md:hidden`}>
            Hi, I am <span className="text-[#4f03f3]">Midhun</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am passionate about AI, robotics, web development and creating
            impactful tech solutions for the future.
          </p>
        </div>
      </div>
      
      <ComputersCanvas />

      <div
        className="absolute xs:bottom-10
        bottom-32 w-full flex justify-center
        items-center"
      >
        <a href="#about">
          <div
            className="w-[35px] h-[64px] 
            rounded-3xl border-4 border-secondary
            flex justify-center items-start p-2"
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
