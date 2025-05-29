import React,{useEffect} from 'react';
import imageaboutus from "../img/image.gif";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Style.css";
function Aboutus() {
   const urlpdf="../Rezomeh/Farhangian-rezomeh.pdf";
 useEffect(()=> {
      AOS.init({
        disable: "phone",
        duration: 700,
        easing: "ease-out-cubic",
      })
  },[]);


  return (
    <>
<div className='flex flex-col md:flex-row-reverse h-[70vh] justify-center mx-auto my-10'>
    <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" dir='rtl' className='flex flex-col justify-start md:justify-center bg-transparent w-[95%] md:w-[50%] mx-auto px-5 h-[90%]'>
        <p className='text-lg text-[#f9f9f9] text-center'> 
Front-end developer
</p>
<p className='text-lg md:text-2xl text-[#8229d5] text-center font-bold pb-2'> الهام فرهنگیان توسعه دهنده ی وب</p>
<p className='text-sm md:text-md text-[#f9f9f9] text-justify font-extralight px-5 pt-5 '>  سال 90 برنامه نویسی را با زبان های c++ , java  شروع کردم و از سال 1400 مشغول توسعه ی وب سایت ها به صورت حرفه ای میباشم
  و به ایجاد  
  راهکارهای دیجیتال کاربردی علاقه دارم و همیشه به دنبال بهبود
   و نوآوری در کارها هستم. آماده‌ی همکاری با تیم‌ها و افرادی هستم که به رشد و توسعه اهمیت می‌دهند. </p>
<p className=''></p>
 <div className='flex flex-row justify-center z-10 mt-8 mr-2 md:mr-5  h-[45px]'>
   <a href={urlpdf}> <button className='button1 ' type='submit' >  <span className='formbutton1'> دانلود رزومه</span></button></a>
      <ul className='flex flex-row justify-center mr-5 md:mr-8 mt-3'>
           <a href='https://wa.me/989300318282'  ><li><IoLogoWhatsapp className='mx-1.5 w-6 h-6 text-[#f9f9f9] font-bold hover:text-[#8229d5] hover:scale-150'/></li></a>
           <a href='https://www.linkedin.com/in/elham-65-farhangianan'> <li><FaLinkedin  className='mx-1.5 w-5 h-5 text-[#f9f9f9] font-bold  hover:text-[#8229d5] hover:scale-150'/></li></a>
           <a href='https://t.me/Farhangianeli' ><li><FaTelegram  className='mx-1.5 w-5 h-5 text-[#f9f9f9] font-bold  hover:text-[#8229d5] hover:scale-150'/></li></a>
           <a href='https://github.com/Farhangian-React' ><li><FaGithubSquare  className='mx-1.5 w-5 h-5 text-[#f9f9f9] font-bold hover:text-[#8229d5] hover:scale-150 '/></li></a>
      </ul>
    </div> 
    </div>
    <div data-aos="fade-up"
     data-aos-anchor-placement="top-center"  data-aos-duration="2000" className='flex justify-center bg-transparent w-[95%]  md:w-[50%]'>
       <img  className='hover:scale-125 w-[70%] h-[90%] mx-auto'  alt='' 
       src={imageaboutus}/>
       
    </div>
</div>
    
    </>
  );
}
export default Aboutus;  