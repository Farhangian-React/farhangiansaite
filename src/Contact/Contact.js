import React,{useState} from 'react';
import {Box,Typography,Input,FormLabel} from '@mui/material';
import { Textarea } from '@mui/joy';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Style.css";
import { MdWifiCalling3 } from "react-icons/md";
import { LuMail } from "react-icons/lu";
function Contact() {
  const [firstname,setFirstname]=useState("");
   const [lastname,setLastname]=useState("");
    const [call,setCall]=useState("");
  const [comment,setComment]=useState("");
  const [error,setError]=useState({});

const isvalidate = ()=>{
    let isvalid =true;
    let errmesage={};
    if( firstname === null ||  firstname === ""){
      isvalid = false;
errmesage.firstname="لطفا نام خود را وارد کنید";
    }
       if( lastname === null ||  lastname === ""){
      isvalid = false;
errmesage.lastname="لطفا نام خانوادگی خود را وارد کنید";
    }
         if( call === null ||  call === ""){
      isvalid = false;
errmesage.call="لطفا شماره تماس خود را وارد کنید";
    }
    if(comment === null || comment === ""){ 
      isvalid = false;
errmesage.comment="لطفا نظر خود را وارد کنید";
    }
   
    if(!isvalid){
      toast.warning(errmesage);
    }
    setError(errmesage);
    return isvalid;
  }
  const handlesubmit=(e)=>{
    e.preventDefault();
    if(isvalidate()){
      //console.log(result);
  
  let result={firstname,lastname,call,comment}
  fetch("https://servers-nahall.onrender.com/Allcommentsnahall",{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method:"POST",
    body:JSON.stringify(result)
}).then((res)=>{
toast.success("ثبت دیدگاه با موفقیت صورت گرفت") ; 
}).catch((err)=>{
    toast.error("");
})
      
          }
      }

  return (
    <>
     <div>
     <ToastContainer/>  
    </div>
    <div className='flex justify-center flex-col self-center items-center mt-8 w-full '  >
        <div className='blurstyle'>
            <p  className=' text-xl md:text-3xl text-[#8229d5] text-center pt-2 pb-2 font-bold'>ارتباط با من </p>
            <p className='text-sm text-center text-[#f9f9f9] pt-1 pb-8'>  خوشحال میشوم پیشنهادات و نظرهای خود را با من در میان بگذارید</p>
           </div>
             <div className='flex flex-row justify-center z-10'>
               
              <a href='https://mail.google.com/'> 
                <p className='text-[#f9f9f9] hover:text-[#8229d5]'>elhamfarhangian6@gmail.com</p>
                </a> 
                 <LuMail className='w-5 h-5 mx-1.5 mt-1 hover:text-[#8229d5] text-[#f9f9f9]'/>
             </div>
              <div className='flex flex-row justify-center mt-0.5 z-10'>
               
              <a href='https://mail.google.com/'> 
                <p className='text-[#f9f9f9] hover:text-[#8229d5]'>09300318282</p>
                </a> 
                 <MdWifiCalling3 className='w-5 h-5 mx-1 mt-1 hover:text-[#8229d5] text-[#f9f9f9]'/>
             </div>
        
        <div className='flex items-center  justify-center w-[95%]  md:w-[90%] mx-auto  my-8'>
            
 <form dir='rtl' noValidate onSubmit={handlesubmit} className=' w-[100%] md:w-[75%] mx-auto z-10 '>
        <div className='my-3 flex flex-col justify-center items-center self-center mx-auto'>
              <Input
              sx={{fontSize:"18px",color:"#fff",borderRadius:"10px",pr:1,
              boxshadow:"rgba(32, 4, 142, 0.65) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(32, 4, 142, 0.65) 0px -2px 6px 0px inset"
           ,border:"1px solid #8229d5",width:"70%" }}
            placeholder='نام'
                autoComplete="firstname"
                name='نام '
                variant="outlined"
                required
                id="firstName"
                label='نام'
                autoFocus
               className='input'
               value={firstname}
               onChange={(e)=> setFirstname(e.target.value)}
              />
              <Typography variant='body1' sx={{color:"#fff",mt:1}}>
                {error.firstname}
              </Typography>
              </div>
              <div className='my-3 flex flex-col justify-center items-center self-center mx-auto'>
              <Input
              sx={{fontSize:"18px",color:"#fff",borderRadius:"10px",pr:1,
              boxshadow:"rgba(32, 4, 142, 0.65) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(32, 4, 142, 0.65) 0px -2px 6px 0px inset"
           ,border:"1px solid #8229d5",width:"70%" }}    
                   placeholder='نام خانوادگی'
                autoComplete="lastname"
                name='نام خانوادگی'
                variant="outlined"
                required
                id="lastName"
                label='نام خانوادگی'
                autoFocus
               className='input'
               value={lastname}
               onChange={(e)=> setLastname(e.target.value)}
              />
              <Typography variant='body1' sx={{color:"#fff",mt:1}}>
                {error.lastname}
              </Typography>
              </div>
                 <div className='my-3 flex flex-col justify-center items-center self-center mx-auto'>
              <Input
              sx={{fontSize:"18px",color:"#fff",borderRadius:"10px",pr:1,
              boxshadow:"rgba(32, 4, 142, 0.65) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(32, 4, 142, 0.65) 0px -2px 6px 0px inset"
           ,border:"1px solid #8229d5",width:"70%" }}
            placeholder='شماره تماس'
                autoComplete="call"
                name='شماره تماس'
                variant="outlined"
                required
                id="callnum"
                label='شماره تماس'
                autoFocus
               className='input'
               value={call}
               onChange={(e)=> setCall(e.target.value)}
              />
              <Typography variant='body1' sx={{color:"#fff",mt:1}}>
                {error.call}
              </Typography>
              </div>
    <div className='my-3 flex flex-col justify-center items-center self-center mx-auto'>
            <Textarea
            placeholder='نظر خود را بنویسید'
                 variant="outlined"
                 required
                 defaultValue={null}
                 value={comment}
                 onChange={(e)=> setComment(e.target.value)}
             rows="50" cols="30"
             sx={{width:"70%",height:"170px",fontSize:"18px",bgcolor:"transparent",pr:1.5,color:"gray",borderRadius:"20px",
            border:"1px solid #8229d5", boxshadow:"rgba(32, 4, 142, 0.65) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(32, 4, 142, 0.65) 0px -2px 6px 0px inset"}}
             ></Textarea>
               <Typography variant='body1' sx={{color:"#fff",mt:1}}>
               {error.comment} 
             </Typography>
           </div>
          <div  className='w-[70%] mx-auto flex flex-col justify-center my-2'>
          <button    className='button1'  type='submit' >  <span className='formbutton'> ثبت نظر  </span></button>
          </div> 
  
        </form>
    </div>
    </div>
     </>  
)}
export default Contact;














