import React, { useState } from 'react'
import { BiLogoLinkedin} from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import {PiUniteSquareFill} from "react-icons/pi"
import Modal from '../assets/modal';
import Contact from '../assets/Contact';
import Link from '../assets/Link';

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenClick = () =>{
    setIsOpen(true)
  }
  const handleCloseClick = () =>{
    setIsOpen(false)
  }
  
  const actionBar = <button className='bg-sky-500 hover:bg-sky-400 w-24 h-12 rounded-md elevation-10 shadow-lg' onClick={handleCloseClick}>Got It!</button>
  const modal = <Modal actionBar={actionBar}>
      <Contact />
    </Modal>
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  
  return (
    <div>
    <div className='flex justify-between items-center w-full h-24 lg:h-28 text-white bg-black'>
      <div className='ml-4 lg:ml-10 text-2xl lg:text-6xl  font-bold flex items-center'>portFolio <span><PiUniteSquareFill /></span></div>
      <div className='flex-row lg:flex lg:space-x-4 items-center  '>
        <button className='text-2xl py-1 hover:text-sky-400 cursor-pointer' onClick={handleOpenClick}>Contact</button>
        {isOpen && modal}
        <div className='text-2xl py-1 hover:text-sky-400 cursor-pointer' onClick={scrollToTop}>
        <Link to='/projects'>Links</Link>
        </div>
        
      </div>
      <div className='flex-row lg:flex lg:space-x-4 items-center mr-4 lg:mr-10'>
        <a href='https://linkedin.com/in/rogerarnab' target="_blank" rel="noreferrer" ><BiLogoLinkedin className='text-2xl hover:text-sky-400 cursor-pointer'/></a>
        <a href="https://github.com/Arnab0227" target="_blank" rel="noreferrer" ><FiGithub className='text-2xl mt-4 lg:mt-0 hover:text-sky-400 cursor-pointer'/></a>
      </div>
    </div>
    </div>
  )
}
