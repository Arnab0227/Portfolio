import {useState, useEffect} from 'react'
import '../GradientText.css'

export default function Experience() {

  const[isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() =>{
      setIsVisible(true);
    }, 1000)
  }, [])

  return (
    <div className=' text-center text-2xl'>
        <div className='w-full h-20 rounded-lg shadow-xl md:px-10 flex justify-center items-center lg:h-32 bg-black'>
          <p className='text-center pt-6 pb-4 font-bold font-sans text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600'> Experience:</p>       
        </div>
        <div className={`border-b p-5 text-container ${isVisible ? 'slide-in' : ''}`}>
          <p className='text-4xl'>Position</p>
          <p className='pt-5 text-gray-700'>Web Developer</p>
        </div>
        <div className={`border-b p-5 text-container ${isVisible ? 'slide-in' : ''}`}>
          <p className='text-4xl'>Company</p>
          <p className='pt-5 text-gray-700'>Mphasis Ltd.</p>
        </div>
        <div className={`border-b p-5 text-container ${isVisible ? 'slide-in' : ''}`}>
          <p className='text-4xl'>Experience</p>
          <p className='pt-5 text-gray-700'>2 Years</p>
        </div>
        <div className={`border-b p-5 text-container ${isVisible ? 'slide-in' : ''}`}>
          <p className='text-4xl'>Experience in Relevent Field</p>
          <p className='pt-5 text-gray-700'>2 Years</p>
        </div>
        <div className={`border-b p-5 mx-auto text-container ${isVisible ? 'slide-in' : ''}`}>
          <p className='text-4xl pb-5'>Projects</p>
          <ol className=' text-center text-gray-700 '>
            <li className='mb-2'>
            Built and publish responsive frontend of a multi-lingual
            website for an insurance company as a team member in 6
            months.
            </li>
            <li className='mb-2 '>
            Created JSON for multiple languages.
            </li>
            <li className='mb-2'>
            Build some component section for that website.
            </li>
            <li className='mb-2'>
            Used unit testing and manual testing for that website.
            </li>
          </ol>
        </div>
        <div className={`border-b p-5 mx-auto text-container ${isVisible ? 'slide-in' : ''}`}>
          <p className='text-4xl pb-5'>Roles and Responsibilities</p>
          <ol className=' text-center text-gray-700'>
            <li className='mb-2'>Developing the frontend section of the project.</li>
            <li className='mb-10'> Testing the functionalities of the project.</li>
          </ol>
        </div>
    </div>
  )
}
