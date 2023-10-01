import {MdOutlineAttachEmail, MdLocationSearching, MdOutlineDriveFileRenameOutline} from "react-icons/md"
import {RiLinkedinFill} from "react-icons/ri"
import React from 'react'
import EmailCopy from "./EmailCopy"
import profilePicture from '../photos/profilePicture.jpg'

export default function Contact() {
    

  return (
    <div className="w-full text-xl lg:text-2xl">
        <div className="flex justify-center items-center">
            <div className="w-28 h-28 rounded-full overflow-hidden">
                <img src={profilePicture} alt="Profile" className="w-full h-full object-cover"/>
            </div>
        </div>
        <div className='flex justify-center items-center py-2'>
            <div className='lg:text-4xl text-2xl text-center font-semibold'>Contact Information</div>
        </div>
        <div className=' flex justify-center items-center py-3 space-x-2'>
            <p><MdOutlineDriveFileRenameOutline /></p>
            <p>Arnab Bhattacharyya</p>
        </div>
        <div className='flex justify-center items-center py-3 space-x-2'>
            <p><MdLocationSearching /></p>
            <p>Kolkata, India</p>
        </div>
        <div className='flex justify-center items-center py-3 space-x-2 '>
            <p><MdOutlineAttachEmail /></p>
            <EmailCopy email="arnab0227@gmail.com" />
            
        </div>
        <div className='flex justify-center items-center py-3 space-x-2'>
            <p><RiLinkedinFill /></p>
            <a href="https://linkedin.com/in/rogerarnab" target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
        </div>
        
    
    </div>
  )
}

