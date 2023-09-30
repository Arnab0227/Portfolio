import React, {useReducer} from 'react'
import PdfViewer from '../assets/PdfViewer'
import Button from '../assets/button'
import {BsLightningChargeFill} from "react-icons/bs"

const SET_DIV_STATE = 'SET_DIV_STATE'
const reducer = (state, action) =>{
  switch(action.type){
    case SET_DIV_STATE:
      return {...state, [action.divName]: !state[action.divName]};
    default:
      return state
  }
}
const initialState = {
  isDiv1: false,
  isDiv2: false
}
export default function Skills() {
  
  const [state, dispatch] = useReducer(reducer, initialState)
  const handleDivClick = (divName) =>{
    dispatch({type: SET_DIV_STATE, divName})
  } 

  return (
    <div className=' text-center text-2xl'>
        <div className='w-full h-20 rounded-lg shadow-xl md:px-10 flex justify-center items-center lg:h-32 mr-10 bg-black'>
          <p className='text-center pt-6 pb-4 font-bold font-sans text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600'> Skills</p>       
        </div>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-10 mx-4'>
            <div>
              <Button onClick={() => handleDivClick('isDiv1')}>HTML5</Button>
              
              {state.isDiv1 &&
              <div className='mt-5 flex w-auto h-4 justify-center items-center' >
              <div className=' w-full h-4 rounded-lg border border-black'>
                <div className='w-4/5 h-full rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  '></div>
              </div>
              <BsLightningChargeFill />
            </div>}
            </div>
            <div>
              <Button onClick={() => handleDivClick('isDiv2')}>CSS3</Button>
              {state.isDiv2 &&
              <div className='mt-5 flex w-auto h-4 justify-center items-center' >
              <div className=' w-full h-4 rounded-lg border border-black'>
                <div className='w-3/4 h-full rounded-lg bg-gradient-to-r from-indigo-500 via-lime-500 to-yellow-500  '></div>
              </div>
              <BsLightningChargeFill />
            </div>}
            </div>
            <div>
              <Button onClick={() => handleDivClick('isDiv3')}>JavaScript</Button>
              {state.isDiv3 &&
              <div className='mt-5 flex w-auto h-4 justify-center items-center' >
              <div className=' w-full h-4 rounded-lg border border-black'>
                <div className='w-4/5 h-full rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  '></div>
              </div>
              <BsLightningChargeFill />
            </div>}
            </div>
            <div>
              <Button onClick={() => handleDivClick('isDiv4')}>React</Button>
              {state.isDiv4 &&
              <div className='mt-5 flex w-auto h-4 justify-center items-center' >
              <div className=' w-full h-4 rounded-lg border border-black'>
                <div className='w-4/5 h-full rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  '></div>
              </div>
              <BsLightningChargeFill />
            </div>}
            </div>
            <div>
              <Button onClick={() => handleDivClick('isDiv5')}>Redux</Button>
              {state.isDiv5 &&
              <div className='mt-5 flex w-auto h-4 justify-center items-center' >
              <div className=' w-full h-4 rounded-lg border border-black'>
                <div className='w-3/4 h-full rounded-lg bg-gradient-to-r from-indigo-500 via-lime-500 to-yellow-500  '></div>
              </div>
              <BsLightningChargeFill />
            </div>}
            </div>
            <div>
              <Button onClick={() => handleDivClick('isDiv6')}>BootStrap</Button>
              {state.isDiv6 &&
              <div className='mt-5 flex w-auto h-4 justify-center items-center' >
              <div className=' w-full h-4 rounded-lg border border-black'>
                <div className='w-5/6 h-full rounded-lg bg-gradient-to-r from-neutral-500 via-red-500 to-orange-500 '></div>
              </div>
              <BsLightningChargeFill />
            </div>}
            </div>
            <div>
              <Button onClick={() => handleDivClick('isDiv7')}>Tailwind</Button>
              {state.isDiv7 &&
              <div className='mt-5 flex w-auto h-4 justify-center items-center' >
              <div className=' w-full h-4 rounded-lg border border-black'>
                <div className='w-5/6 h-full rounded-lg bg-gradient-to-r from-neutral-500 via-red-500 to-orange-500  '></div>
              </div>
              <BsLightningChargeFill />
            </div>}
            </div>
            <div>
             <Button onClick={() => handleDivClick('isDiv8')}>Bulma</Button>
             {state.isDiv8 &&
              <div className='mt-5 flex w-auto h-4 justify-center items-center' >
              <div className=' w-full h-4 rounded-lg border border-black'>
                <div className='w-4/5 h-full rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  '></div>
              </div>
              <BsLightningChargeFill />
            </div>}
            </div>
            <div>
              <Button onClick={() => handleDivClick('isDiv9')}>Git</Button>
              {state.isDiv9 &&
              <div className='mt-5 flex w-auto h-4 justify-center items-center' >
              <div className=' w-full h-4 rounded-lg border border-black'>
                <div className='w-3/4 h-full rounded-lg bg-gradient-to-r from-indigo-500 via-lime-500 to-yellow-500  '></div>
              </div>
              <BsLightningChargeFill />
            </div>}
            </div>
            <div>
              <Button onClick={() => handleDivClick('isDiv10')}>Unit Testing</Button>
              {state.isDiv10 &&
              <div className='mt-5 flex w-auto h-4 justify-center items-center' >
              <div className=' w-full h-4 rounded-lg border border-black'>
                <div className='w-3/4 h-full rounded-lg bg-gradient-to-r from-indigo-500 via-lime-500 to-yellow-500  '></div>
              </div>
              <BsLightningChargeFill />
            </div>}
            </div>
            <div>
              <Button onClick={() => handleDivClick('isDiv11')}>API</Button>
              {state.isDiv11 &&
              <div className='mt-5 flex w-auto h-4 justify-center items-center' >
              <div className=' w-full h-4 rounded-lg border border-black'>
                <div className='w-2/3 h-full rounded-lg bg-gradient-to-r from-neutral-500 via-sky-500 to-emerald-500  '></div>
              </div>
              <BsLightningChargeFill />
            </div>}
            </div>
            <div>
              <Button onClick={() => handleDivClick('isDiv12')}>CI/CD</Button>
              {state.isDiv12 &&
              <div className='mt-5 flex w-auto h-4 justify-center items-center' >
              <div className=' w-full h-4 rounded-lg border border-black'>
                <div className='w-3/4 h-full rounded-lg bg-gradient-to-r from-indigo-500 via-lime-500 to-yellow-500  '></div>
              </div>
              <BsLightningChargeFill />
            </div>}
            </div> 
        </div>

        
        
        <div className='flex justify-center items-start pt-20'>
          <p className='text-2xl '>If you are here, I kindly invite you to review my resume.</p>
        </div>
        <div className='flex justify-center items-center pt-10 pb-10'>
          <PdfViewer />
          </div>
    
    </div>
  )
}
