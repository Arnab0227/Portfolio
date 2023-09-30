import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import React, { useState } from "react";
import Link from '../assets/Link'
export default function Navbar() {
  const [isAppear, setIsAppear] = useState(false);
 
    const handleToggleClick = () => {
      setIsAppear(!isAppear);
      console.log(isAppear) // Toggle the state
    };
  
    

  const commonContent = (
    <>
    <Link to='/'>Home</Link>
    <Link to='/experience'>Experience</Link>
    <Link to='/education'>Education</Link>
    <Link to='/skills'>Skills</Link>
    <Link to='/projects'>Projects</Link> 
    </>
  );

  return (
    <div>
      {/*for lg screens */}
      <div className="lg:flex lg:justify-between items-center lg:w-full lg:h-24 lg:shadow-xl hidden elevation-10 rounded-lg bg-gradient-to-r from-purple-300 via-teal-200 to-fuchsia-400">
        <div className=" mx-10 lg:w-1/2 flex justify-between items-center text-2xl">
          {commonContent}
        </div>
        
        <div>
          <p className="text-4xl font-semibold mr-10 ">Web Developer</p>
        </div>
      </div>
      {/* for non-lg screens */}
      <div className= "lg:hidden bg-gradient-to-r from-purple-300 via-teal-200 to-fuchsia-400">
  <div className="flex items-center justify-between p-4">
    
    <button
      onClick={handleToggleClick}
      className="text-white focus:outline-none lg:hidden"
    >
      {isAppear ? <RxCross1 /> : <RxHamburgerMenu />}
    </button>
    <div className="text-white text-2xl font-bold">Web Developer</div>
  </div>
  <div
    className={`lg:hidden ${isAppear ? 'block' : 'hidden'} transition-all`}
  >
    <div className="flex justify-center">
      <div className="text-white text-center py-2 space-x-4" onClick={handleToggleClick}>
        {commonContent}
      </div>
    </div>
  </div>
  
</div>
    </div>
  );
}













