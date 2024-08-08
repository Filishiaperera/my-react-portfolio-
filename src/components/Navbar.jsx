import logo from '../assets/filishiaLogo.jpeg';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { motion } from 'framer-motion';

const linkVariants = {
  initial: {
    scale: 1,
    rotate: 0,
  },
  tapped: {
    scale: 1.2,
    rotate: 360,
    transition: {
      duration: 1.8, // Adjust the duration for a slower animation
      ease: 'easeInOut',
    },
    
  },
};

const Navbar = () => {
  return (
  <nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <motion.img  className=" mx-2 w-20 rounded-full" src={logo} alt="logo"
        initial={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.2 }} // Make the logo bigger on hover
        transition={{ duration: 0.5, ease: 'easeInOut' }} // Animation settings
        />

    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
   
      <motion.a
        href="https://www.linkedin.com/in/filishia-perera-60a0b8264"
        target="_blank"
        rel="noopener noreferrer"
        variants={linkVariants}
        initial="initial"
        whileHover="tapped"
        className="cursor-pointer"
      >
        <FaLinkedin />
      </motion.a>
      
        
        <motion.a href="https://github.com/Filishiaperera"
        target="_blank"
        rel="noopener noreferrer"
        variants={linkVariants}
        initial="initial"
        whileHover="tapped"
        className="cursor-pointer"
        ><FaGithub/></motion.a>

        <motion.a href="mailto:felishiaperera15@gmail.com"
         target="_blank"
         rel="noopener noreferrer"
         variants={linkVariants}
         initial="initial"
         whileHover="tapped"
         className="cursor-pointer"
        ><SiGmail/></motion.a>
        

    </div>
  </nav>  
  );
}

export default Navbar;