import  ReactDOM  from "react-dom";
import { useEffect } from "react";

function Modal({onClose, children, actionBar}){
   useEffect(() =>{
    document.body.classList.add('overflow-hidden');
    return ()=>{

        document.body.classList.remove('overflow-hidden');
    }
   },[])
   
   
   return ReactDOM.createPortal(
   <div>
        <div  className="fixed inset-0 bg-gray-300 opacity-80"></div>
        <div className="fixed inset-12 top-24 p-10 bg-white w-3/4 lg:w-2/4 h-3/4 lg:inset-x-96 lg:bottom-30 rounded-lg shadow-2xl elevation-10 "> 
        
        <div className="flex flex-col justify-between h-5/6">
            {children}</div>
        <div className="flex justify-center mt-5">
            {actionBar}</div> 

        </div>
        
    </div>,
    document.querySelector('.modal-container')
)}
export default Modal;