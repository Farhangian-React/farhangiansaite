import React,{useEffect,useState} from 'react';
import imageaboutus from "../img/image.gif";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import urlpdf from "../Rezomeh/Farhangian-rezomeh.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Style.css";


function Aboutus() {
  const useTypewriter = (text, speed) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (index === text.length) {
        clearTimeout(timeoutId);
        return;
      }

      setDisplayText((prevText) => prevText + text.charAt(index));
      setIndex((prevIndex) => prevIndex + 1);
    }, speed);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, speed, index]);

  return displayText;
};

 useEffect(()=> {
      AOS.init({
        disable: "phone",
        duration: 700,
        easing: "ease-out-cubic",
      })
  },[]);

  const text = useTypewriter("سال 90 برنامه نویسی را با زبان های c++ , java شروع کردم و از سال 1400 مشغول توسعه ی وب سایت ها به صورت حرفه ای می باشم و به ایجاد راهکارهای دیجیتال کاربردی علاقه دارم و همیشه به دنبال بهبود و نوآوری در کارها هستم.آماده ی همکاری با تیم ها و افرادی هستم که به رشد و توسعه اهمیت می دهند."
    , 100);
  return (
    <>
<div className='flex flex-col md:flex-row-reverse h-[70vh] justify-center mx-auto my-10 '>
    <div dir='rtl' className='flex flex-col justify-start md:justify-center bg-transparent w-[95%] md:w-[50%] z-10 mx-auto px-5 h-[90%]'>
        <p className='text-lg text-[#f9f9f9] text-center '> 
Front-end developer
</p>
<p className='text-lg md:text-2xl text-[#8229d5] text-center font-bold pb-2'> الهام فرهنگیان توسعه دهنده ی وب</p>
<p className='text-sm md:text-md text-[#f9f9f9] text-justify font-extralight px-5 pt-5 '>  {text} </p>
<p className=''></p>
 <div className='flex flex-row justify-center  mt-8 mr-2 md:mr-5  h-[45px] z-10'>
  <a href={urlpdf} target='_self'><button className='button1  ' type='submit' >  <span className='formbutton1'> دانلود رزومه</span></button></a>
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