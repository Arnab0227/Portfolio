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
            <li>Responsive for large and mobile screens.</li>
            <li>single page application.</li>
            <li>All of my expertise, knowledge, training, and projects in one place.</li>
            <li>wonderfully crafted and well-structured. </li>
            <li>TailwindCss and custom CSS values are both utilized for variety.</li>
            <li>Contact information in Modal which isn't scrollable.</li>
            <li>When Timeout is enabled, the Skeleton functionality is used.</li>
            <li>Email addresses can be copied in contact information.</li>
            <li>Linked social links that can open in new tabs.</li>
            <li>View résumé option, skills proficiency bar option, and links are some significant elements.</li>
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
            <li>For large Screens</li>
            <li>single page application.</li>
            <li>A demonstration of the Tickete payment page. </li>
            <li>wonderfully crafted and well-structured. </li>
            <li>Design was done with TailwindCss.</li>
            <li>Key features include dropdown, flex-grid, and accordion.</li>
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
            <li className=''>Responsive for large and mobile screens.</li>
            <li>single page application.</li>
            <li>A demonstration of how to handle Api. </li>
            <li>wonderfully crafted and well-structured. </li>
            <li>In this Application, look for any image suggestions.</li>
            <li>Axios and the search bar are some important elements.</li>
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
            <li className=''>Responsive for large and mobile screens.</li>
            <li>single page application.</li>
            <li>A demonstration of how car applications manage stock pages. </li>
            <li>wonderfully crafted and well-structured with TailwindCss. </li>
            <li>Include the sticker prices for new autos.</li>
            <li>Total stock and pricing can be maintained.</li>
            <li>Some essential functions are sorting and searching using first letters.</li>
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
            <li className=''>Responsive for big and mobile screens.</li>
            <li>single page application.</li>
            <li>All resume information in one place. </li>
            <li>wonderfully crafted and well-structured. </li>
            <li>Visibility modes in the dark and light.</li>
            <li>The PDF download feature remains accessible..</li>
            <li>Some essential features are progress bars, dark search, and pdf download..</li>
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
