import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import sohil from "../img/sohil1.png"; 
import nahal from "../img/nahal2.png";
import folad from "../img/folad1.png";
import shiomo from "../img/shiomi1.png";
import propi from "../img/propi1.png";
import mysite from "../img/mysite1.png";
import note from "../img/note.png";

import { LuSquareArrowOutDownLeft } from "react-icons/lu";
import "../Style.css";


function Portfolio(){
const [isHovering1, setIsHovering1] = useState(false);

  const handleMouseOver1 = () => {
    setIsHovering1(true);
  };

  const handleMouseOut1 = () => {
    setIsHovering1(false);
  };
const [isHovering2, setIsHovering2] = useState(false);

  const handleMouseOver2 = () => {
    setIsHovering2(true);
  };

  const handleMouseOut2 = () => {
    setIsHovering2(false);
  };
  const [isHovering3, setIsHovering3] = useState(false);

  const handleMouseOver3 = () => {
    setIsHovering3(true);
  };

  const handleMouseOut3 = () => {
    setIsHovering3(false);
  };
  const [isHovering4, setIsHovering4] = useState(false);

  const handleMouseOver4 = () => {
    setIsHovering4(true);
  };

  const handleMouseOut4 = () => {
    setIsHovering4(false);
  };
  const [isHovering5, setIsHovering5] = useState(false);

  const handleMouseOver5 = () => {
    setIsHovering5(true);
  };

  const handleMouseOut5 = () => {
    setIsHovering5(false);
  };
  const [isHovering6, setIsHovering6] = useState(false);

  const handleMouseOver6 = () => {
    setIsHovering6(true);
  };

  const handleMouseOut6 = () => {
    setIsHovering6(false);
  };
  const [isHovering7, setIsHovering7] = useState(false);

  const handleMouseOver7 = () => {
    setIsHovering7(true);
  };

  const handleMouseOut7 = () => {
    setIsHovering7(false);
  };
  return (
    <>
  
           <div className='flex justify-center flex-col self-center items-center mt-12  ' >
        <div className='blurstyle'>
            <p  className=' text-xl md:text-3xl text-[#8229d5] text-center pt-2 pb-2 font-bold'>نمونه کارها  </p>
            <p className='text-sm text-center text-[#f9f9f9] pt-1 mb-8'>...و پروژه های مینی مال مختلف </p>
        </div>
          <div className='flex flex-wrap justify-center w-[95%] h-auto mx-auto gap-5 my-8 '>
       
        <div  onMouseOver={handleMouseOver1}
              onMouseOut={handleMouseOut1}
         className='flex flex-col justify-around bg-transparent h-auto w-[95%] md:w-[45%] md:h-[95%]
       hover:scale-95 z-10 '>
      <div><img className='w-[99%] h-[99%] mx-auto
         rounded-br-2xl rounded-bl-lg rounded-tr-lg rounded-tl-2xl backdrop-blur-3xl border-[2px]
          border-[#8229d5] hover:opacity-45' src={propi}/></div>
     { isHovering1 ? 
     <div className='flex flex-col justify-start w-[90%] h-auto p-5 
     md:h-[200px] fixed bottom-[15px] left-[5%] right-[5%] mx-auto rounded-br-3xl rounded-tl-3xl 
      bg-gradient-to-t from-[#8229d5] to-[#f9f9f9]   '>
        <div  className='flex flex-row justify-between my-1 md:my-5  w-full h-auto'> 
         
         <a href='https://propiy.com/fa'> <LuSquareArrowOutDownLeft className='w-6 h-6 ml-5 text-[#1e142c] font-bold'/></a>
       <p className='text-md md:text-2xl text-center font-bold text-[#1e142c] mr-5'>سایت پراپی</p>  </div>
       
        <p dir='rtl' className='text-sm md:text-md text-justify font-medium text-[#1e142c] mr-5 my-1'>
فرانت اند این پروژه با استفاده از react-js توسعه داده شده است و برای استایل دهی از tailwind css استفاده شده است, برای مشاهده ی بیشتر 
 وارد  <a className='text-[#f9f9f9] px-1 ' href='https://propiy.com/fa'  >  سایت</a> شوید 
        </p>
         </div>
     :  <div className='hidden justify-center w-[55%] h-[200px] mx-auto bg-blue-gray-300'> </div>

     }
       </div>
          <div  onMouseOver={handleMouseOver2}
              onMouseOut={handleMouseOut2}
         className='flex flex-col justify-around bg-transparent h-auto w-[95%] md:w-[45%] md:h-[95%]
       hover:scale-95 z-10 '>
      <div><img className='w-[99%] h-[99%] mx-auto
         rounded-br-2xl rounded-bl-lg rounded-tr-lg rounded-tl-2xl backdrop-blur-3xl border-[2px]
          border-[#8229d5] hover:opacity-45' src={shiomo}/></div>
     { isHovering2 ? 
     <div className='flex flex-col justify-start w-[90%] h-auto p-5 
     md:h-[200px] fixed bottom-[15px] left-[5%] right-[5%] mx-auto rounded-br-3xl rounded-tl-3xl 
      bg-gradient-to-t from-[#8229d5] to-[#f9f9f9]   '>
        <div  className='flex flex-row justify-between my-1 md:my-5  w-full h-auto'> 
         
         <a href='https://xiaomixiaomi.ir/'> <LuSquareArrowOutDownLeft className='w-6 h-6 ml-5 text-[#1e142c] font-bold'/></a>
       <p className='text-md md:text-2xl text-center font-bold text-[#1e142c] mr-5'>سایت فروشگاهی شیائومی</p>  </div>
       
        <p dir='rtl'className='text-sm md:text-md text-justify font-medium text-[#1e142c] mr-5 my-1'>پروژه بصورت تیمی توسعه داده شده است و در فرانت اند آن از react-js استفاده شده است. برای مشاهده ی بیشتر وارد 
   <a className='text-[#f9f9f9] px-1 ' href='https://xiaomixiaomi.ir/'  >  سایت</a> شوید 
        </p>
         </div>
     :  <div className='hidden justify-center w-[55%] h-[200px] mx-auto bg-blue-gray-300'> </div>

     }
       </div>
       <div  onMouseOver={handleMouseOver3}
              onMouseOut={handleMouseOut3}
            className='flex flex-col justify-around bg-transparent h-auto w-[95%] md:w-[45%] md:h-[95%]
       hover:scale-95 z-10 '>
      <div><img className='w-[99%] h-[99%] mx-auto
         rounded-br-2xl rounded-bl-lg rounded-tr-lg rounded-tl-2xl backdrop-blur-3xl border-[2px]
          border-[#8229d5] hover:opacity-45' src={folad}/></div>
     { isHovering3 ? 
     <div className='flex flex-col justify-start w-[90%] h-auto p-5 
     md:h-[200px] fixed bottom-[15px] left-[5%] right-[5%] mx-auto rounded-br-3xl rounded-tl-3xl 
      bg-gradient-to-t from-[#8229d5] to-[#f9f9f9]   '>
        <div  className='flex flex-row justify-between my-1 md:my-5  w-full h-auto'> 
         
         <a href='https://wpdico.com/'>
          <LuSquareArrowOutDownLeft className='w-6 h-6 ml-5 text-[#1e142c] font-bold'/></a>
       <p className='text-md md:text-2xl text-center font-bold text-[#1e142c] mr-5'>سایت شرکتی پتروفولاد غرب</p>  </div>
       
        <p dir='rtl'className='text-sm md:text-md text-justify font-medium text-[#1e142c] mr-5 my-1'>ایجاد و پشتیبانی از سایت را انجام داده ام و در حال تغییر و توسعه میباشد. برای مشاهده ی بیشتر وارد  
          <a className='text-[#f9f9f9] px-1 ' href='https://wpdico.com/'  >  سایت</a> شوید 
        </p>
         </div>
     :  <div className='hidden justify-center w-[55%] h-[200px] mx-auto bg-blue-gray-300'> </div>

     }
       </div>
       <div  onMouseOver={handleMouseOver4}
              onMouseOut={handleMouseOut4}
               className='flex flex-col justify-around bg-transparent h-auto w-[95%] md:w-[45%] md:h-[95%]
       hover:scale-95 z-10 '>
      <div><img className='w-[99%] h-[99%] mx-auto
         rounded-br-2xl rounded-bl-lg rounded-tr-lg rounded-tl-2xl backdrop-blur-3xl border-[2px]
          border-[#8229d5] hover:opacity-45' src={nahal}/></div>
     { isHovering4 ? 
     <div className='flex flex-col justify-start w-[90%] h-auto p-5 
     md:h-[200px] fixed bottom-[15px] left-[5%] right-[5%] mx-auto rounded-br-3xl rounded-tl-3xl 
      bg-gradient-to-t from-[#8229d5] to-[#f9f9f9]   '>
        <div  className='flex flex-row justify-between my-1 md:my-5  w-full h-auto'> 
         
         <a href='https://reactstor-nahall.onrender.com'>
          <LuSquareArrowOutDownLeft className='w-6 h-6 ml-5 text-[#1e142c] font-bold'/></a>
       <p className='text-md md:text-2xl text-center font-bold text-[#1e142c] mr-5'>سایت نهال شاپ </p>  </div>
       
        <p dir='rtl' className='text-sm md:text-md text-justify font-medium text-[#1e142c] mr-5 my-1'>پروژه ی تمرینی و نمونه کار که با استفاده از react-js , taillwind-css , توسعه داده شده است . برای مشاهده ی بیشتر وارد 
          <a className='text-[#f9f9f9] px-1 ' href='https://reactstor-nahall.onrender.com'  >  سایت</a> شوید 
        </p>
         </div>
     :  <div className='hidden justify-center w-[55%] h-[200px] mx-auto bg-blue-gray-300'> </div>

     }
       </div>
       <div  onMouseOver={handleMouseOver5}
              onMouseOut={handleMouseOut5}
         className='flex flex-col justify-around bg-transparent h-auto w-[95%] md:w-[45%] md:h-[95%]
       hover:scale-95 z-10 '>
      <div><img className='w-[99%] h-[99%] mx-auto
         rounded-br-2xl rounded-bl-lg rounded-tr-lg rounded-tl-2xl backdrop-blur-3xl border-[2px]
          border-[#8229d5] hover:opacity-45' src={sohil}/></div>
     { isHovering5 ? 
     <div className='flex flex-col justify-start w-[90%] h-auto p-5 
     md:h-[200px] fixed bottom-[15px] left-[5%] right-[5%] mx-auto rounded-br-3xl rounded-tl-3xl 
      bg-gradient-to-t from-[#8229d5] to-[#f9f9f9]   '>
        <div  className='flex flex-row justify-between my-1 md:my-5  w-full h-auto'> 
         
         <a href='https://project-sohil.onrender.com'>
          <LuSquareArrowOutDownLeft className='w-6 h-6 ml-5 text-[#1e142c] font-bold'/></a>
       <p className='text-md md:text-2xl text-center font-bold text-[#1e142c] mr-5'>سایت فروشگاهی سهیل </p>  </div>
       
        <p dir='rtl' className='text-sm md:text-md text-justify font-medium text-[#1e142c] mr-5 my-1'>پروژه ی تمرینی و نمونه کار که با استفاده از react-js , taillwind-css ,material-ui توسعه داده شده است . برای مشاهده ی بیشتر وارد 
          <a className='text-[#f9f9f9] px-1 ' href='https://project-sohil.onrender.com'  >  سایت</a> شوید 
        </p>
         </div>
     :  <div className='hidden justify-center w-[55%] h-[200px] mx-auto bg-blue-gray-300'> </div>

     }
       </div>
       <div  onMouseOver={handleMouseOver6}
              onMouseOut={handleMouseOut6}
             className='flex flex-col justify-around bg-transparent h-auto w-[95%] md:w-[45%] md:h-[95%]
       hover:scale-95 z-10 '>
      <div><img className='w-[99%] h-[99%] mx-auto
         rounded-br-2xl rounded-bl-lg rounded-tr-lg rounded-tl-2xl backdrop-blur-3xl border-[2px]
          border-[#8229d5] hover:opacity-45' src={mysite}/></div>
     { isHovering6 ? 
     <div className='flex flex-col justify-start w-[90%] h-auto p-5 
     md:h-[200px] fixed bottom-[15px] left-[5%] right-[5%] mx-auto rounded-br-3xl rounded-tl-3xl 
      bg-gradient-to-t from-[#8229d5] to-[#f9f9f9]   '>
        <div  className='flex flex-row justify-between my-1 md:my-5  w-full h-auto'> 
         
         <a href='https://farhangian-saite.onrender.com'>
          <LuSquareArrowOutDownLeft className='w-6 h-6 ml-5 text-[#1e142c] font-bold'/></a>
       <p className='text-md md:text-2xl text-center font-bold text-[#1e142c] mr-5'>سایت شخصی فرهنگیان </p>  </div>
       
        <p dir='rtl' className='text-sm md:text-md text-justify font-medium text-[#1e142c] mr-5 my-1'>سایت شخصی فرهنکیان توسعه دهنده ی وب , توسعه داده شده با next-js , taillwind-css 
        </p>
         </div>
     :  <div className='hidden justify-center w-[55%] h-[200px] mx-auto bg-blue-gray-300'> </div>

     }
       </div>
     </div>
       </div>
     

    </>
  )
}
export default Portfolio