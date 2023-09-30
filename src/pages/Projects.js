import React from 'react'
import {FaReact} from "react-icons/fa6"
import {IoLogoJavascript} from "react-icons/io"
import {ImHtmlFive2} from "react-icons/im"
import {SiCss3, SiTailwindcss, SiAxios} from "react-icons/si"

export default function Projects() {
  return (
    <div className='w-full h-full'>
      {/*project 1 */}
      <div className='flex-col justify-items-start py-2 ml-10 mt-5 border-b'>  
        <div className='text-2xl lg:text-4xl flex space-x-5 font-semibold'>
          <p>Project 1</p>
          <p>Portfolio</p>
        </div>
        <div className='text-xl lg:text-2xl flex items-center pt-5 space-x-5'>
          <p className='text-xl lg:text-2xl pr-5 font-semibold'> features:</p>
          <ul className='lg:text-xl text-base italic list-disc pr-2 space-y-1'> 
            <li className=''>Responsive for large and mobile screens.</li>
            <li>single page application.</li>
            <li>One stop solution for all my experience, skills, education, and projects.</li>
            <li>beautifully designed and structured maintained. </li>
            <li>Custom css values and tailwindCss both are used, for variation.</li>
            <li>some key features are like view resume option, skills proficiency bar option, links.</li>
            <li>Contact information in Modal which isn't scrollable.</li>
            <li>In contact information Email id can be copied</li>
            <li>Social links attached and can open in new tab.</li>
          </ul>
          
        </div>
        <div className='text-xl lg:text-2xl flex items-center pt-5 space-x-5'>
          <p className='text-xl lg:text-2xl pr-5 font-semibold'>Technology:</p>
          <p className='lg:text-xl text-base font-semibold pr-2'>React, JavaScript, Html, Css, TailwindCss, React Icons</p> 
        </div>
        <div className='flex justify-start lg:pl-44 pl-36 lg:text-2xl text-xl pt-2 items-center space-x-2'>
          <FaReact /> <IoLogoJavascript /> <ImHtmlFive2 /> <SiCss3 /> <SiTailwindcss />
          </div>
        <div className='text-xl lg:text-2xl flex items-center pt-5 space-x-2'>
          <p className='text-xl lg:text-2xl pr-5 font-semibold'>Responsibity:</p>
          <p className='lg:text-xl text-base font-semibold'>Developer</p>
        </div>
        <div className='text-xl lg:text-2xl flex items-center pt-5 space-x-16 pb-5'>
          <p className='text-xl lg:text-2xl pr-5 font-semibold'>Publish:</p>
          <p className='lg:text-xl text-base  italic'>You are already in this project.</p>
        </div>
      </div>
      {/*project 2 */}
      <div className='flex-col justify-items-start py-2 ml-10 mt-5 border-b'>
        <div className='text-2xl lg:text-4xl flex space-x-5 font-semibold'>
          <p>Project 2</p>
          <p>Payment page</p>
        </div>
        <div className='text-xl lg:text-2xl flex items-center pt-5 space-x-5'>
          <p className='text-xl lg:text-2xl pr-5 font-semibold'> features:</p>
          <ul className='lg:text-xl text-base italic list-disc pr-2 space-y-1'> 
            <li className=''>For large Screens</li>
            <li>single page application.</li>
            <li>One stop demo how Tickete payment page looks like. </li>
            <li>beautifully designed and structured maintained. </li>
            <li>TailwindCss used for design.</li>
            <li>Some key features are like Accordion, dropdown, flex-grid.</li>
          </ul>
          
        </div>
        <div className='text-xl lg:text-2xl flex items-center pt-5 space-x-5'>
          <p className='text-xl lg:text-2xl pr-5 font-semibold'>Technology:</p>
          <p className='lg:text-xl text-base font-semibold pr-2'>React, JavaScript, Html, Css, TailwindCss, React Icons</p> 
        </div>
        <div className='flex justify-start lg:pl-44 pl-36 lg:text-2xl text-xl pt-2 items-center space-x-2'>
          <FaReact /> <IoLogoJavascript /> <ImHtmlFive2 /> <SiCss3 /> <SiTailwindcss />
          </div>
        <div className='text-xl lg:text-2xl flex items-center pt-5 space-x-2'>
          <p className='text-xl lg:text-2xl pr-5 font-semibold'>Responsibity:</p>
          <p className='lg:text-xl text-base font-semibold'>Developer</p>
        </div>
        <div className='text-xl lg:text-2xl flex items-center pt-5 space-x-16 pb-5'>
          <p className='text-xl lg:text-2xl pr-5 font-semibold'>Publish:</p>
          <a href='https://arnab0227.github.io/paymentpage/' target="_blank" rel="noreferrer" className='lg:text-xl text-base  italic underline'>link</a>
        </div>
      </div>

      {/*project 3 */}
      <div className='flex-col justify-items-start py-2 ml-10 mt-5 border-b'>
        <div className='text-2xl lg:text-4xl flex space-x-5 font-semibold'>
          <p>Project 3</p>
          <p>Api Application</p>
        </div>
        <div className='text-xl lg:text-2xl flex items-center pt-5 space-x-5'>
          <p className='text-xl lg:text-2xl pr-5 font-semibold'> features:</p>
          <ul className='lg:text-xl text-base italic list-disc pr-2 space-y-1'> 
            <li className=''>For large Screens</li>
            <li>single page application.</li>
            <li>One stop demo how Api can be handled. </li>
            <li>beautifully designed and structured maintained. </li>
            <li>search for any images suggestion in this Application.</li>
            <li>Some key features are like Search bar, Axios.</li>
          </ul>
          
        </div>
        <div className='text-xl lg:text-2xl flex items-center pt-5 space-x-5'>
          <p className='text-xl lg:text-2xl pr-5 font-semibold'>Technology:</p>
          <p className='lg:text-xl text-base font-semibold pr-2'>React, JavaScript, Html, Axios.</p> 
        </div>
        <div className='flex justify-start lg:pl-44 pl-36 lg:text-2xl text-xl pt-2 items-center space-x-2'>
          <FaReact /> <IoLogoJavascript /> <ImHtmlFive2 /> <SiAxios/>
          </div>
        <div className='text-xl lg:text-2xl flex items-center pt-5 space-x-2'>
          <p className='text-xl lg:text-2xl pr-5 font-semibold'>Responsibity:</p>
          <p className='lg:text-xl text-base font-semibold'>Developer</p>
        </div>
        <div className='text-xl lg:text-2xl flex items-center pt-5 space-x-16 pb-5'>
          <p className='text-xl lg:text-2xl pr-5 font-semibold'>Publish:</p>
          <a href='https://arnab0227.github.io/api-test/' target="_blank" rel="noreferrer" className='lg:text-xl text-base  italic underline'>link</a>
        </div>
      </div>
      
      {/*project 4 */}
      <div className='flex-col justify-items-start py-2 ml-10 mt-5 border-b'>
        <div className='text-2xl lg:text-4xl flex space-x-5 font-semibold'>
          <p>Project 4</p>
          <p>Car Pricelist</p>
        </div>
        <div className='text-xl lg:text-2xl flex items-center pt-5 space-x-5'>
          <p className='text-xl lg:text-2xl pr-5 font-semibold'> features:</p>
          <ul className='lg:text-xl text-base italic list-disc pr-2 space-y-1'> 
            <li className=''>For large Screens</li>
            <li>single page application.</li>
            <li>One stop demo how Car applications handle stock pages. </li>
            <li>beautifully designed with TailwindCss and structured maintained. </li>
            <li>Add new cars with their price tags.</li>
            <li>Some key features are like search with initial letters, sorting.</li>
            <li>Total stock with their price can be maintained.</li>
          </ul>
          
        </div>
        <div className='text-xl lg:text-2xl flex items-center pt-5 space-x-5'>
          <p className='text-xl lg:text-2xl pr-5 font-semibold'>Technology:</p>
          <p className='lg:text-xl text-base font-semibold pr-2'>React, JavaScript, Html, TailwindCss</p> 
        </div>
        <div className='flex justify-start lg:pl-44 pl-36 lg:text-2xl text-xl pt-2 items-center space-x-2'>
          <FaReact /> <IoLogoJavascript /> <ImHtmlFive2 /> <SiTailwindcss />
          </div>
        <div className='text-xl lg:text-2xl flex items-center pt-5 space-x-2'>
          <p className='text-xl lg:text-2xl pr-5 font-semibold'>Responsibity:</p>
          <p className='lg:text-xl text-base font-semibold'>Developer</p>
        </div>
        <div className='text-xl lg:text-2xl flex items-center pt-5 space-x-16 pb-5'>
          <p className='text-xl lg:text-2xl pr-5 font-semibold'>Publish:</p>
          <a href='https://arnab0227.github.io/carsprice/' target="_blank" rel="noreferrer" className='lg:text-xl text-base  italic underline'>link</a>
        </div>
      </div>

      {/*project 5 */}
      <div className='flex-col justify-items-start py-2 ml-10 mt-5 border-b'>
        <div className='text-2xl lg:text-4xl flex space-x-5 font-semibold'>
          <p>Project 5</p>
          <p>Responsive Resume</p>
        </div>
        <div className='text-xl lg:text-2xl flex items-center pt-5 space-x-5'>
          <p className='text-xl lg:text-2xl pr-5 font-semibold'> features:</p>
          <ul className='lg:text-xl text-base italic list-disc pr-2 space-y-1'> 
            <li className=''>For both mobile and large Screens</li>
            <li>single page application.</li>
            <li>One stop solution for all Resume details. </li>
            <li>beautifully designed and structured maintained. </li>
            <li>Dark and light modes in visibility.</li>
            <li>Pdf download feature is available.</li>
            <li>Some key features are like search dark mode, pdf Dowload, progress Bar.</li>
          </ul>
        </div>
        <div className='text-center pt-2 lg:text-start'>**Caution it's not recently updated**</div>
        <div className='text-xl lg:text-2xl flex items-center pt-5 space-x-5'>
          <p className='text-xl lg:text-2xl pr-5 font-semibold'>Technology:</p>
          <p className='lg:text-xl text-base font-semibold pr-2'>JavaScript, Html, Css</p> 
        </div>
        <div className='flex justify-start lg:pl-44 pl-36 lg:text-2xl text-xl pt-2 items-center space-x-2'>
           <IoLogoJavascript /> <ImHtmlFive2 /> <SiCss3 />
          </div>
        <div className='text-xl lg:text-2xl flex items-center pt-5 space-x-2'>
          <p className='text-xl lg:text-2xl pr-5 font-semibold'>Responsibity:</p>
          <p className='lg:text-xl text-base font-semibold'>Developer</p>
        </div>
        <div className='text-xl lg:text-2xl flex items-center pt-5 space-x-16 pb-5'>
          <p className='text-xl lg:text-2xl pr-5 font-semibold'>Publish:</p>
          <a href='https://arnab0227.github.io/Responsive-cv.github.io/' target="_blank" rel="noreferrer" className='lg:text-xl text-base  italic underline'>link</a>
        </div>
      </div>
    </div>
  )
}
