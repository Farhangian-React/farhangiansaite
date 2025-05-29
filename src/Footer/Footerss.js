import * as React from 'react';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { MdWifiCalling3 } from "react-icons/md";
import Avatar from '@mui/material/Avatar';
import myfotoo from "../img/farhangian.jpg";
import "./Footer.css";
export default function Footerss() {
  return (
 <>
 <div className='body'>
  
    <div class="background ">
      
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="100%"
        height="30%"
        viewBox="0 0 1600 900"
      >
        <defs>
          <path
            id="wave"
            fill="rgba(130,41,213,0.6)"
            d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
      s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
          />
        </defs>
        <g>
          <use  xlinkHref="#wave" opacity=".4">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="8s"
              calcMode="spline"
              values="270 230; -334 180; 270 230"
              keyTimes="0; .5; 1"
              keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
          <use  xlinkHref="#wave" opacity=".6">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="6s"
              calcMode="spline"
              values="-270 230;243 220;-270 230"
              keyTimes="0; .6; 1"
              keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
          <use  xlinkHref="#wave" opacty=".9">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="4s"
              calcMode="spline"
              values="0 230;-140 200;0 230"
              keyTimes="0; .4; 1"
              keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
        </g>
      </svg>
    </div>
    <footer className='bg-[#8229d5] flex flex-col justify-end h-[160px] w-full pb-6 fixed bottom-0 z-20'>
 <div className='flex justify-center my-3'>
     <Avatar
        alt="Remy Sharp"
        src={myfotoo}
        sx={{ width: 65, height: 65 ,':hover':{scale:1.3}}}
      />
   </div>
     
              <ul className='flex flex-row justify-center'>
       <a href='https://wa.me/989300318282' className='navicon1'><li><IoLogoWhatsapp className='mx-2.5 text-[#1e142c] font-bold '/></li></a>
         <a href='https://www.linkedin.com/in/elham-65-farhangianan' className='navicon1'> <li><FaLinkedin  className='mx-2.5  text-[#1e142c] font-bold '/></li></a>
      <a href='https://t.me/Farhangianeli' className='navicon1'><li><FaTelegram  className='mx-2.5 text-[#1e142c] font-bold '/></li></a>
       <a  href='https://github.com/Farhangian-React' className='navicon1'><li><FaGithubSquare  className='mx-2.5 text-[#1e142c] font-bold '/></li></a>
    </ul>
    <div className=' flex flex-row justify-center mt-12'>
  
      <p className='text-sm text-[#fff] font-serif'> Developed By Elham Farhangian </p>
</div>
    </footer>
    </div>
  </>
  )
}