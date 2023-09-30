import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Carousel from '../assets/Carousel'

import '../GradientText.css'
import backgroundImage from '../photos/backgroundImage.jpg'

import mobileView1 from '../photos/mobileView1.jpg'

export default function Home() {

    const[animate, setAnimate] = useState(false)
    const [show, setShow] = useState(false)
    const [ref1, inLgView] = useInView({
        triggerOnce: true, 
      });
      const [ref2, inSmallView] = useInView({
        triggerOnce: true, 
      });

    useEffect(() =>{
        if(inLgView){
            setAnimate(true)
        } 
        
    },[inLgView])

    useEffect(() =>{
        if(inSmallView){
            setShow(true)
        } 
        
    },[inSmallView])

  return (
    <div>
        <div className='grid justify-items-center '>
            <p className='pt-12 font-medium hover:font-semibold text-center md:text-4xl justify-items-center text-decor'>Dreams, not just destinations.</p>
            <p className='pt-6 pb-4 font-bold font-sans lg:text-6xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-sky-600'>A glimpse of my passion.</p>
            <Carousel />
        </div>
        <div className='lg:relative h-screen bg-black lg:flex items-center lg:justify-center mt-10 hidden' style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover',}}>
            <div ref={ref1} className={`absolute bottom-0 left-0 text-center right-0 py-10 ${animate ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className= 'text-white text-4xl font-bold pb-5' >The Story</div>
                <div className= 'text-white text-4xl font-bold text-center mx-10'> I won't tone away my dreams to match my reality. I'm going to strengthen the determination to conquer my ambitions.</div>
            </div>    
        </div>
        <div className='lg:hidden'>
        <div className='relative h-screen bg-black flex items-center justify-center mt-10' style={{backgroundImage: `url(${mobileView1})`, backgroundSize: 'cover',}}>
            <div ref={ref2} className={`absolute bottom-0 left-0 text-center right-0 py-10 ${show ? 'translation-y-0' : 'translation-y-full'}`}>
                <div className= 'text-white text-2xl font-bold pb-2' >The Story</div>
                <div className= 'text-white text-xl font-bold text-center mx-10'> I won't tone away my dreams to match my reality. I'm going to strengthen the determination to conquer my ambitions.</div>
            </div>
            
        </div>
        </div>
        <div>
        <div className='pb-20'>
            <p className='text-center text-2xl lg:text-4xl font-semibold pt-20'>About Myself</p>
            <p className='text-center text-xl lg:text-2xl font-light px-10  pt-5'>I am a passionate and proficient frontend web developer with 2 years of experience in creating and
            maintaining user-friendly and responsive websites and applications. I have expertise in HTML, CSS, and
            JavaScript, as well as experience with frontend frameworks such as ReactJS, Redux. I also have
            knowledge of CSS Libraries and testing and debugging tools such as Chrome DevTools and Jest &
            Enzyme.
        </p>
    </div>
        </div>
    </div>
    
    
    
  )
}
