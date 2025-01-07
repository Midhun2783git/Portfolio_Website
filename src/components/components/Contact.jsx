// import { useState, useRef } from "react";
// import { motion } from "framer-motion";
// import emailjs from '@emailjs/browser';

// import { styles } from "../../styles";
// import { EarthCanvas } from "./canvas";
// import { SectionWrapper } from "../../hoc";
// import { slideIn } from "../../utils/motion";

// const Contact = () => {
//   const formRef = useRef();
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {}

//   const handleSubmit = (e) => {}

//   return (
//     <div className="xl:mt-12 xl:flex-row flx-col-reverse flex gap-10 overflow-hidden">
//       <motion.div
//         variants={slideIn('left', "tween", 0.2, 1)}
//         className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
//       >
//         <p className={styles.sectionSubText}>Get In Touch</p>
//         <h3 className={styles.sectionHeadText}>Contact</h3>

//         <form
//           ref={formRef}
//           onSubmit={handleSubmit}
//           className="mt-12 flex flex-col gap-8"
//         >
//           <label className="flex flex-col">
//             <span className="text-white font-medium mb-4">Your Name</span>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="What's your name?"
//               className="bg-tertiary py-4 px-6 placeholder: text-secondary text-white rounded-lg outlined-none border-none font-medium"
//             />
//           </label>
//           <label className="flex flex-col">
//             <span className="text-white font-medium mb-4">Your Email</span>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="What's your email?"
//               className="bg-tertiary py-4 px-6 placeholder: text-secondary text-white rounded-lg outlined-none border-none font-medium"
//             />
//           </label>
//           <label className="flex flex-col">
//             <span className="text-white font-medium mb-4">Your Message</span>
//             <textarea
//               rows="7"
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               placeholder="What do you want to say?"
//               className="bg-tertiary py-4 px-6 placeholder: text-secondary text-white rounded-lg outlined-none border-none font-medium"
//             />
//           </label>

//           <button
//             type="submit"
//             className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
//           >
//             {loading ? 'Sending...' : 'Send'}
//           </button>
//         </form>
//       </motion.div>
//       <motion.div
//         variants={slideIn('right', "tween", 0.2, 1)}
//         className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
//       >
//         <EarthCanvas />
//       </motion.div>
//     </div>
//   )
// }

// export default SectionWrapper(Contact, "contact")

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { resume, CV } from '../../assets/assets';

import { styles } from "../../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_r0oq53f',
      'template_eik0414',
      {
        from_name: form.name,
        to_name: 'Midhun',
        from_email: form.email,
        to_email: 'contact@midhun-saminathan',
        message: form.message,
      },
      'ftZDVAwWAl-90ys2d'
    )
    .then(
      () => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        setLoading(false);
        console.error(error);

        alert("Something went wrong. Please try again.");
      }
    );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">

      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <div className="flex items-center">
          <h3 className={styles.sectionHeadText}>Contact</h3>
          <button className="ml-4">
            <a href={CV} target="_blank" >
              <img src={resume} alt="Resume" className="ml-7 w-50 h-50" />
            </a>
          </button>
        </div>
        {/* <h3 className={styles.sectionHeadText}>Contact</h3> */}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

    <motion.div
      variants={slideIn('right', "tween", 0.2, 1)}
      className="ml-20 flex-1 h-[100px] md:h-[450px]">
        <EarthCanvas />
    </motion.div>     
    </div>
  );
};

const EarthContainer = styled.div`
  @media (max-width: 865px) {
    order: -1; /* Move the Earth scene above the form */
  }
`;

export default SectionWrapper(Contact, "contact");