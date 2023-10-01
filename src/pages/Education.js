import React, { useEffect, useState } from 'react'
import '../GradientText.css'
import school from '../photos/ashram.jpg'
import vidyapith from '../photos/vidyapith.jpg'
import makaut from '../photos/makaut.jpg'
import corona from '../photos/corona.jpg'
import webDev from '../photos/web.jpg'
import { useInView } from 'react-intersection-observer'

export default function Education() {
   const [animate, setAnimate] = useState(false)
   const [isVisible, setIsVisible] = useState(false)
   const [isAppear, setIsAppear] = useState(false)
   const [isTransform, setIsTransform] = useState(false)
   const [isInView, setIsInView] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
      const element1 = document.getElementById('ElementId1'); 
      if (element1) {
        const elementRect = element1.getBoundingClientRect();
        const elementInView = elementRect.top < window.innerHeight && elementRect.bottom >= 0;
        setIsVisible(elementInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  useEffect(() => {
    const handleScroll = () => {
      const element2 = document.getElementById('ElementId2'); 
      if (element2) {
        const elementRect = element2.getBoundingClientRect();
        const elementInView = elementRect.top < window.innerHeight && elementRect.bottom >= 0;
        setIsInView(elementInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const element3 = document.getElementById('ElementId3'); 
      if (element3) {
        const elementRect = element3.getBoundingClientRect();
        const elementInView = elementRect.top < window.innerHeight && elementRect.bottom >= 0;
        setIsAppear(elementInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [ref4, storyInView] = useInView({
    triggerOnce: true,
    threshold: 0.9
  })
  const [ref5, webInView] = useInView({
    triggerOnce: true,
    threshold: 0.9
  })

  useEffect(() => { 
    setIsVisible(true)
  },[])

  useEffect(() => {
    if(storyInView){
      setAnimate(true)
    }
  },[storyInView])

  useEffect(() => {
    if(webInView){
      setIsTransform(true)
    }
  }, [webInView])

  const BackgroundSchoolImage = {
    backgroundImage: `url(${school})`,
    backgroundPosition: 'center',
    backgroundSize:'cover',
   
  }
  const BackgroundHighImage = {
    backgroundImage: `url(${vidyapith})`,
    backgroundPosition: 'right-center',
    backgroundSize:'cover',
    backgroundRepeat: 'no-repeat'
  }

  const BackgroundUniImage = {
    backgroundImage: `url(${makaut})`,
    backgroundPosition: 'right-center',
    backgroundSize:'cover',
    backgroundRepeat: 'no-repeat'
  }
  const coronaImage = {
    backgroundImage: `url(${corona})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
  const webDevImage ={
    backgroundImage: `url(${webDev})`,
    backgroundSize: 'cover',
    backgroundRepeat:'no-repeat'
  } 

  return (
    <div className='overflow-hidden'>
         <div className='w-full h-20 rounded-lg shadow-xl md:px-10 flex justify-center items-center lg:h-32 mr-10 bg-black'>
           <p className='text-center pt-6 pb-4 font-bold font-sans text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600'> Education</p>       
         </div>
         <div className=''>  
         <div id='ElementId1' className='h-96 rounded-lg relative w-full mt-10 elevation-10'>
             <div className='absolute w-2/3 h-full right-0' style={BackgroundSchoolImage}></div>
             <div className='absolute h-full w-2/3 top-0 left-0 bg-gradient-to-r from-black via-sky-700'></div>
             <div className='absolute h-full w-1/3 top-0 left-0 flex items-center justify-center text-white font-semibold'>
             <div  className={`text-left text-2xl lg:text-4xl space-y-5 pl-5 lg:pl-20 text-container ${isVisible ? 'slide-in' : ''}`}>
                <p>Secondary</p>
                <p>Mahesh Sri RamaKrisna Ashram Vidyalaya</p>
                <p>2009-2014</p>
             </div>
             </div>
         </div>
         <div id='ElementId2' className='h-96 rounded-lg relative w-full mt-10 elevation-10 '>
             <div className='absolute w-2/3 h-full left-0' style={BackgroundHighImage}></div>
            <div className='absolute h-full w-2/3 top-0 right-0 bg-gradient-to-l from-black via-sky-700'></div>
             <div className='absolute h-full w-1/3 top-0 right-0 flex items-center justify-center text-white font-semibold'>
             <div  className={`text-right text-2xl lg:text-4xl space-y-5 pr-5 lg:pl-20 text-containerRight ${isInView ? 'slide-in' : ''}`}>
                <p>Higher Secondary</p>
                <p>Science</p>
                <p>Nabagram vidyapith</p>
                <p>2014-2016</p>
             </div>
             </div>
         </div>
         <div id='ElementId3' className='h-96 rounded-lg relative w-full mt-10 elevation-10'>
             <div className='absolute w-2/3 h-full right-0' style={BackgroundUniImage}></div>
             <div className='absolute h-full w-2/3 top-0 left-0 bg-gradient-to-r from-black via-sky-700'></div>
             <div className='absolute h-full w-1/3 top-0 left-0 flex items-center justify-center text-white font-semibold'>
             <div  className={`text-left text-2xl lg:text-4xl space-y-5 pl-5 lg:pl-10 text-container ${isAppear ? 'slide-in' : ''}`}>
                <p>B.tech</p>
                <p>Electrical Engineering</p>
                <p>Meghnad Saha Institute of Technology</p>
                <p>2016-2020</p>
             </div> 
             </div>
         </div>
         <div className='relative h-screen w-full bg-black lg:flex items-center justify-center elevation-10 mt-10' style={coronaImage}>
           <div ref={ref4} className={`absolute top-0 left-0 right-0 py-10 ${animate ? 'translateMiddle' : 'translateTop'}`}>
             <div className='text-white text-center text-2xl lg:text-4xl font-bold pb-4'>The Pandemic Story</div>
             <div className='text-white text-center text-xl lg:text-4xl font-bold px-10'>During the Pandemic, as the world grappled with despiar, I too felt its grip. Isolation and uncertainty took their toll. yet, in unity, we found strength, reminding use that even in darkness, humanity shines through.</div>
           </div>
         </div>
         <div ref={ref5} className='relative h-screen w-full bg-black lg:flex items-center justify-center elevation-10 mt-10 mb-10' style={webDevImage}>
             <div  className={`absolute bottom-0 left-0 text-center right-0 py-10 ${isTransform ? 'opacity-100 transform -translate-y-96 transition-transform-opacity duration-500 ease-in-out' : 'opacity-0'}`}>
                 <p className= 'text-white text-4xl font-bold' >Bootcamp</p>
             </div>
             <div  className={`absolute bottom-0 left-0 text-center right-0 py-10 ${isTransform ? 'opacity-100 transform -translate-y-80 transition-transform-opacity duration-1000 ease-in-out' : 'opacity-0'}`}>
                 <p className= 'text-white text-4xl font-bold'>Newton School</p>
             </div>
             <div  className={`absolute bottom-0 left-0 text-center right-0 py-10 ${isTransform ? 'opacity-100 transform -translate-y-56 transition-transform-opacity duration-1500 ease-in-out' : 'opacity-0'}`}>
                 <p className= 'text-white text-4xl font-bold'>Full Stack Web Development</p>
             </div>
             <div  className={`absolute bottom-0 left-0 text-center right-0 py-10 ${isTransform ? 'opacity-100 transform -translate-y-40 transition-transform-opacity duration-2000 ease-in-out' : 'opacity-0'}`}>
                 <p className= 'text-white text-4xl font-bold'>Mar 2021 to Oct 2021</p>
             </div>
            
         </div>
        
        
      </div>  
     </div>
  )
}

