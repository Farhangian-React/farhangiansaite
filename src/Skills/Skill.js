import React from 'react';
import Slider from '@mui/material/Slider';
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import "../Style.css";
function Skill() {



  return (
    <>
    <div className='flex justify-center flex-col self-center items-center mt-8' >
        <div className='blurstyle'>
            <p  className='textblurb text-lg md:text-3xl text-[#8229d5] text-center pb-2 font-bold'>مهارت های من </p>
            <p className='text-sm text-center text-[#f9f9f9] pt-2'>...وهمچنان علاقمند به فراگیری دانش های جدید در دنیای تکنولوژی</p>
        </div>
        <div className='flex flex-wrap justify-center w-[95%]  md:w-[90%] mx-auto gap-5 my-8'>
        <div className='flex flex-col justify-around bg-purple-200 w-[200px] h-[150px]
        rounded-br-2xl rounded-bl-lg rounded-tr-lg rounded-tl-2xl hover:border-[5px] hover:border-purple-500 hover:scale-95 z-10 '>
        <div className='flex flex-row justify-around w-full' >
            <div className='flex flex-col justify-start'>
                <p className=' text-xl font-bold text-[#1e142c]'>Html</p>
                <FaHtml5 className='w-[100px] h-[60px] text-purple-600 mx-2'/>
                </div>
            <div className=' self-center mr-2 bg-blue-gray-200 mt-3 px-1 rounded-br-xl rounded-tl-xl'><p className='text-2xl text-[#f9f9f9] font-bold text-center'>90%</p></div>
        </div>
        <div className='w-[170px] mx-auto'>
         <Slider defaultValue={90} aria-label="Default" valueLabelDisplay="auto" sx={{color:"white"}} />
       </div>
        </div>
          <div className='flex flex-col justify-around bg-purple-200 w-[200px] h-[150px]
        rounded-br-2xl rounded-bl-lg rounded-tr-lg rounded-tl-2xl hover:border-[5px] hover:border-purple-500 hover:scale-95 z-10 '>
        <div className='flex flex-row justify-around w-full' >
            <div className='flex flex-col justify-start'>
                <p className=' text-xl font-bold text-[#1e142c]'>Css</p>
                <FaCss3Alt className='w-[100px] h-[60px] text-purple-600 mx-2'/>
                </div>
            <div  className=' self-center mr-2 bg-blue-gray-200 mt-3 px-1 rounded-br-xl rounded-tl-xl'><p className='text-2xl text-[#f9f9f9] font-bold text-center'>90%</p></div>
        </div>
        <div className='w-[170px] mx-auto'>
         <Slider defaultValue={90} aria-label="Default" valueLabelDisplay="auto" sx={{color:"white"}} />
       </div>
        </div>
          <div className='flex flex-col justify-around bg-purple-200 w-[200px] h-[150px]
        rounded-br-2xl rounded-bl-lg rounded-tr-lg rounded-tl-2xl hover:border-[5px] hover:border-purple-500 hover:scale-95 z-10 '>
        <div className='flex flex-row justify-around w-full' >
            <div className='flex flex-col justify-start'>
                <p className=' text-xl font-bold text-[#1e142c]'>Bootstrap</p>
                <FaBootstrap className='w-[100px] h-[60px] text-purple-600 mx-2'/>
                </div>
            <div  className=' self-center mr-2 bg-blue-gray-200 mt-3 px-1 rounded-br-xl rounded-tl-xl'><p className='text-2xl text-[#f9f9f9] font-bold text-center'>80%</p></div>
        </div>
        <div className='w-[170px] mx-auto'>
         <Slider defaultValue={80} aria-label="Default" valueLabelDisplay="auto" sx={{color:"white"}} />
       </div>
        </div>
          <div className='flex flex-col justify-around bg-purple-200 w-[200px] h-[150px]
        rounded-br-2xl rounded-bl-lg rounded-tr-lg rounded-tl-2xl hover:border-[5px] hover:border-purple-500 hover:scale-95 z-10 '>
        <div className='flex flex-row justify-around w-full' >
            <div className='flex flex-col justify-start'>
                <p className=' text-xl font-bold text-[#1e142c]'>Tailwind Css</p>
                <RiTailwindCssFill className='w-[100px] h-[60px] text-purple-600 mx-2'/>
                </div>
            <div  className=' self-center mr-2 bg-blue-gray-200 mt-3 px-1 rounded-br-xl rounded-tl-xl'><p className='text-2xl text-[#f9f9f9] font-bold text-center'>90%</p></div>
        </div>
        <div className='w-[170px] mx-auto'>
         <Slider defaultValue={90} aria-label="Default" valueLabelDisplay="auto" sx={{color:"white"}} />
       </div>
        </div>
             <div className='flex flex-col justify-around bg-purple-200 w-[200px] h-[150px]
        rounded-br-2xl rounded-bl-lg rounded-tr-lg rounded-tl-2xl hover:border-[5px] hover:border-purple-500 hover:scale-95 z-10 '>
        <div className='flex flex-row justify-around w-full' >
            <div className='flex flex-col justify-start'>
                <p className=' text-xl font-bold text-[#1e142c]'>Material UI</p>
                <SiMui className='w-[100px] h-[60px] text-purple-600 m-2'/>
                </div>
            <div  className=' self-center mr-2 bg-blue-gray-200 mt-3 px-1 rounded-br-xl rounded-tl-xl'><p className='text-2xl text-[#f9f9f9] font-bold text-center'>80%</p></div>
        </div>
        <div className='w-[170px] mx-auto'>
         <Slider defaultValue={80} aria-label="Default" valueLabelDisplay="auto" sx={{color:"white"}} />
       </div>
        </div>
             <div className='flex flex-col justify-around bg-purple-200 w-[200px] h-[150px]
        rounded-br-2xl rounded-bl-lg rounded-tr-lg rounded-tl-2xl hover:border-[5px] hover:border-purple-500 hover:scale-95 z-10 '>
        <div className='flex flex-row justify-around w-full' >
            <div className='flex flex-col justify-start'>
                <p className=' text-xl font-bold text-[#1e142c]'>Java Script</p>
                <RiJavascriptFill className='w-[100px] h-[60px] text-purple-600 m-2'/>
                </div>
            <div  className=' self-center mr-2 bg-blue-gray-200 mt-3 px-1 rounded-br-xl rounded-tl-xl'><p className='text-2xl text-[#f9f9f9] font-bold text-center'>80%</p></div>
        </div>
        <div className='w-[170px] mx-auto'>
         <Slider defaultValue={80} aria-label="Default" valueLabelDisplay="auto" sx={{color:"white"}} />
       </div>
        </div>
          <div className='flex flex-col justify-around bg-purple-200 w-[200px] h-[150px]
        rounded-br-2xl rounded-bl-lg rounded-tr-lg rounded-tl-2xl hover:border-[5px] hover:border-purple-500 hover:scale-95 z-10 '>
        <div className='flex flex-row justify-around w-full' >
            <div className='flex flex-col justify-start'>
                <p className=' text-xl font-bold text-[#1e142c]'>SType Script</p>
                <SiTypescript className='w-[100px] h-[60px] text-purple-600 m-2'/>
                </div>
            <div  className=' self-center mr-2 bg-blue-gray-200 mt-3 px-1 rounded-br-xl rounded-tl-xl'><p className='text-2xl text-[#f9f9f9] font-bold text-center'>75%</p></div>
        </div>
        <div className='w-[170px] mx-auto'>
         <Slider defaultValue={75} aria-label="Default" valueLabelDisplay="auto" sx={{color:"white"}} />
       </div>
        </div>
          <div className='flex flex-col justify-around bg-purple-200 w-[200px] h-[150px]
        rounded-br-2xl rounded-bl-lg rounded-tr-lg rounded-tl-2xl hover:border-[5px] hover:border-purple-500 hover:scale-95 z-10 '>
        <div className='flex flex-row justify-around w-full' >
            <div className='flex flex-col justify-start'>
                <p className=' text-xl font-bold text-[#1e142c]'>React JS</p>
                <RiReactjsLine className='w-[100px] h-[60px] text-purple-600 m-2'/>
                </div>
            <div  className=' self-center mr-2 bg-blue-gray-200 mt-3 px-1 rounded-br-xl rounded-tl-xl'><p className='text-2xl text-[#f9f9f9] font-bold text-center'>95%</p></div>
        </div>
        <div className='w-[170px] mx-auto'>
         <Slider defaultValue={95} aria-label="Default" valueLabelDisplay="auto" sx={{color:"white"}} />
       </div>
        </div>
          <div className='flex flex-col justify-around bg-purple-200 w-[200px] h-[150px]
        rounded-br-2xl rounded-bl-lg rounded-tr-lg rounded-tl-2xl hover:border-[5px] hover:border-purple-500 hover:scale-95 z-10 '>
        <div className='flex flex-row justify-around w-full' >
            <div className='flex flex-col justify-start'>
                <p className=' text-xl font-bold text-[#1e142c]'>Next JS</p>
                <RiNextjsFill className='w-[100px] h-[60px] text-purple-600 m-2'/>
                </div>
            <div  className=' self-center mr-2 bg-blue-gray-200 mt-3 px-1 rounded-br-xl rounded-tl-xl'><p className='text-2xl text-[#f9f9f9] font-bold text-center'>70%</p></div>
        </div>
        <div className='w-[170px] mx-auto'>
         <Slider defaultValue={70} aria-label="Default" valueLabelDisplay="auto" sx={{color:"white"}} />
       </div>
        </div>
          <div className='flex flex-col justify-around bg-purple-200 w-[200px] h-[150px]
        rounded-br-2xl rounded-bl-lg rounded-tr-lg rounded-tl-2xl hover:border-[5px] hover:border-purple-500 hover:scale-95 z-10 '>
        <div className='flex flex-row justify-around w-full' >
            <div className='flex flex-col justify-start'>
                <p className=' text-xl font-bold text-[#1e142c]'>Mongo DB</p>
                <SiMongodb className='w-[100px] h-[60px] text-purple-600 m-2'/>
                </div>
            <div  className=' self-center mr-2 bg-blue-gray-200 mt-3 px-1 rounded-br-xl rounded-tl-xl'><p className='text-2xl text-[#f9f9f9] font-bold text-center'>50%</p></div>
        </div>
        <div className='w-[170px] mx-auto'>
         <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" sx={{color:"white"}} />
       </div>
        </div>
          <div className='flex flex-col justify-around bg-purple-200 w-[200px] h-[150px]
        rounded-br-2xl rounded-bl-lg rounded-tr-lg rounded-tl-2xl hover:border-[5px] hover:border-purple-500 hover:scale-95 z-10 '>
        <div className='flex flex-row justify-around w-full' >
            <div className='flex flex-col justify-start'>
                <p className=' text-xl font-bold text-[#1e142c]'>Git</p>
                <FaGitAlt className='w-[100px] h-[60px] text-purple-600 m-2'/>
                </div>
            <div  className=' self-center mr-2 bg-blue-gray-200 mt-3 px-1 rounded-br-xl rounded-tl-xl'><p className='text-2xl text-[#f9f9f9] font-bold text-center'>90%</p></div>
        </div>
        <div className='w-[170px] mx-auto'>
         <Slider defaultValue={90} aria-label="Default" valueLabelDisplay="auto" sx={{color:"white"}} />
       </div>
        </div>
          <div className='flex flex-col justify-around bg-purple-200 w-[200px] h-[150px]
        rounded-br-2xl rounded-bl-lg rounded-tr-lg rounded-tl-2xl hover:border-[5px] hover:border-purple-500 hover:scale-95 z-10 '>
        <div className='flex flex-row justify-around w-full' >
            <div className='flex flex-col justify-start'>
                <p className=' text-xl font-bold text-[#1e142c]'>Github</p>
                <FaGithubSquare className='w-[100px] h-[60px] text-purple-600 m-2'/>
                </div>
            <div  className=' self-center mr-2 bg-blue-gray-200 mt-3 px-1 rounded-br-xl rounded-tl-xl'><p className='text-2xl text-[#f9f9f9] font-bold text-center'>80%</p></div>
        </div>
        <div className='w-[170px] mx-auto'>
         <Slider defaultValue={80} aria-label="Default" valueLabelDisplay="auto" sx={{color:"white"}} />
       </div>
        </div>
          <div className='flex flex-col justify-around bg-purple-200 md:w-[200px] md:h-[150px]
        rounded-br-2xl rounded-bl-lg rounded-tr-lg rounded-tl-2xl hover:border-[5px] hover:border-purple-500 hover:scale-95 z-10 '>
        <div className='flex flex-row justify-around w-full' >
            <div className='flex flex-col justify-start'>
                <p className=' text-xl font-bold text-[#1e142c]'>Java</p>
                <FaJava className='w-[100px] h-[60px] text-purple-600 m-2'/>
                </div>
            <div  className=' self-center mr-2 bg-blue-gray-200 mt-3 px-1 rounded-br-xl rounded-tl-xl'><p className='text-2xl text-[#f9f9f9] font-bold text-center'>60%</p></div>
        </div>
        <div className='w-[170px] mx-auto '>
         <Slider defaultValue={60} aria-label="Default" valueLabelDisplay="auto" sx={{color:"white"}} />
       </div>
        </div>
    </div>
    </div>
    </>
  )
}
export default Skill;
