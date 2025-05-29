import React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import myfotoo from "../img/farhangian.jpg";
import { MdMenu } from "react-icons/md";
import { Drawer } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { IoClose } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import urlpdf from "../Rezomeh/Farhangian-rezomeh.pdf";
import "../Style.css";


function TopNav() {
const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <>
<nav dir='rtl' className=' sticky top-0 flex justify-between w-[100%] bg-transparent h-[70px]  drop-shadow-lg  py-3  mx-auto z-20 backdrop-blur-md  '>
  <div className='flex flex-row justify-center mr-6'>
      <Avatar
        alt="Remy Sharp"
        src={myfotoo}
        sx={{ width:{xs:30,md:45}, height:{xs:30,md:45} ,':hover':{scale:1.3}}}
      />
    <p className='text-lg md:text-2xl text-[#8229d5] font-bold mt-0 md:mt-1 pr-2 hover:text-[#f9f9f9] hover:scale-110 '>FARHANGIAN</p>
  </div>
  <div className='hidden md:flex mt-1' >
<ul className='flex flex-row justify-center'>
 <NavLink to={"/aboutus"}><li className='px-3'><p className='text-md font-bold text-white hover:text-[#8229d5] hover:scale-110'>درباره</p></li></NavLink>
  <NavLink  to={"/portfolio"}><li className='px-3'><p className='text-md font-bold text-white hover:text-[#8229d5] hover:scale-110'>نمونه کار</p></li></NavLink>
  <NavLink to={"/skill"}><li className='px-3'><p className='text-md font-bold text-white hover:text-[#8229d5] hover:scale-110'>مهارت</p></li></NavLink>
  <NavLink to={"contact"}><li className='px-3'><p className='text-md font-bold text-white hover:text-[#8229d5] hover:scale-110'>تماس با ما</p></li></NavLink>
</ul>
   </div>
   <div className='hidden md:flex ml-4'>
    
    <a href={urlpdf} download><button className='button1 ' type='submit' >  <span className='formbutton1'>   دانلود رزومه</span>   </button>
  </a>
    </div> 
    <div className='flex md:hidden'>
       <div className='ml-4 ' >
 <button

onClick={handleDrawerOpen}

    >
      <MdMenu className='h-8 w-8 text-[#f9f9f9]' />
    </button>
   <Drawer open={open} onClose={handleDrawerClose}
   className='backdrop-blur-lg'
   sx={{
flexShrink: 0, '& .MuiDrawer-paper': {bgcolor:"#1e142c",width:"300px" ,direction:"rtl",height:"96vh",borderTopRightRadius:"30px", borderBottomRightRadius:"30px",}
   
   }}
     
        anchor="left"
     
   >
<div className='flex flex-col justify-start'>
       
         
<div className='flex justify-between w-full self-end border-b-2 border-gray-500 my-5 pb-2 '>
    <div className='flex flex-row justify-center mr-2 pt-2'>
      <Avatar
        alt="Remy Sharp"
        src={myfotoo}
        sx={{ width:30, height:30 ,':hover':{scale:1.3}}}
      />
    <p className='text-md text-[#8229d5] font-bold mt-0 md:mt-1 pr-2 hover:text-[#f9f9f9] hover:scale-110 '>FARHANGIAN</p>
  </div>
            <IconButton 
             title='Title'
            onClick={handleDrawerClose}>
        <IoClose className='h-5 w-5 text-[#f9f9f9] ml-2  hover:text-[#8229d5]'/> 
          </IconButton>
         </div>   
     
<ul className='flex flex-col justify-center bg-transparent pr-5 '>
  <li><p className='text-sm py-5 text-gray-500'>منو</p></li>
   <NavLink to={"/aboutus"}><li className='py-2.5'><p className='text-md font-bold text-white hover:text-[#8229d5] hover:scale-110'>درباره</p></li></NavLink>
  <NavLink to={"/portfolio"}><li className='py-2.5'><p className='text-md font-bold text-white hover:text-[#8229d5] hover:scale-110'>نمونه کار</p></li></NavLink>
  <NavLink to={"/skill"}><li className='py-2.5'><p className='text-md font-bold text-white hover:text-[#8229d5] hover:scale-110'>مهارت</p></li></NavLink>
  <NavLink to={"contact"}><li className='py-2.5'><p className='text-md font-bold text-white hover:text-[#8229d5] hover:scale-110'>تماس با ما</p></li></NavLink>
 <li><p className='text-sm py-5 text-gray-500'>شبکه های اجتمایی</p></li>
 <a href='https://wa.me/989300318282'><li className='flex flex-row'><IoLogoWhatsapp className='my-2.5 w-6 h-6 text-[#f9f9f9] font-bold hover:text-[#8229d5] hover:scale-150'/>
 <p className='text-md font-bold text-[#f9f9f9] mr-2 mt-1.5  hover:text-[#8229d5]'> واتساپ</p></li></a>
<a href='https://www.linkedin.com/in/elham-65-farhangianan'><li className='flex flex-row'><FaLinkedin  className='my-2.5 w-5 h-5 text-[#f9f9f9] font-bold  hover:text-[#8229d5] hover:scale-150'/>
 <p className='text-md font-bold text-[#f9f9f9] mr-2 mt-1.5  hover:text-[#8229d5]'>لینکدین </p></li></a>
 <a href='https://t.me/Farhangianeli'> <li className='flex flex-row'><FaTelegram  className='my-2.5 w-5 h-5 text-[#f9f9f9] font-bold  hover:text-[#8229d5] hover:scale-150'/>
   <p className='text-md font-bold text-[#f9f9f9] mr-2 mt-1.5  hover:text-[#8229d5]'> تلگرام</p></li></a>
 <a href='https://github.com/Farhangian-React'><li className='flex flex-row'><FaGithubSquare  className='my-2.5 w-5 h-5 text-[#f9f9f9] font-bold hover:text-[#8229d5] hover:scale-150 '/>
  <p className='text-md font-bold text-[#f9f9f9] mr-2 mt-1.5  hover:text-[#8229d5]'> گیت هاب</p></li></a>
</ul>
  
</div>   </Drawer>
 </div>
      </div>    
        </nav>



    
    </>
  );
}
export default TopNav;       


