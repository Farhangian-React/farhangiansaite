import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import sohil from "../img/propi1.png"; 
import nahal from "../img/nahal2.png";
import folad from "../img/folad1.png";
import shiomo from "../img/shiomi1.png";
import propi from "../img/propi1.png";
import mysite from "../img/mysite1.png";
import note from "../img/note.png";
import mysite1 from "../img/farhangian.jpg";
import Box from '@mui/material/Box';
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
  
     
          <div className='flex flex-wrap justify-center w-[95%] h-[60vh] mx-auto gap-5 my-8 '>
        <div  onMouseOver={handleMouseOver1}
              onMouseOut={handleMouseOut1}
         className='flex flex-col justify-around bg-transparent h-auto w-[95%] md:w-[45%] md:h-[95%]
        rounded-br-2xl rounded-bl-lg rounded-tr-lg rounded-tl-2xl backdrop-blur-3xl border-[1px] border-[#8229d5] hover:scale-95 z-10 '>
      <div><img className='w-[95%] h-[95%] mx-auto hover:opacity-75' src={propi}/></div>
     { isHovering1 ? 
     <div className='flex justify-center w-[90%] h-auto md:h-[200px] fixed bottom-[15px] left-[5%] right-[5%] mx-auto rounded-br-3xl rounded-tl-3xl 
      bg-gradient-to-r from-[#8229d5] via-[#f9f9f9] to-[#8229d5]  '> gdjgfxfgzhdfDDsD</div>
     :  <div className='hidden justify-center w-[55%] h-[200px] mx-auto bg-blue-gray-300'> gdjgfxfgzhdfDDsD</div>

     }
       </div>
          <div  onMouseOver={handleMouseOver2}
              onMouseOut={handleMouseOut2}
         className='flex flex-col justify-around bg-transparent  h-auto w-[95%] md:w-[45%] md:h-[95%]
        rounded-br-2xl rounded-bl-lg rounded-tr-lg rounded-tl-2xl backdrop-blur-3xl border-[1px] border-[#8229d5] hover:scale-95 z-10 '>
      <div><img className='w-[95%] h-[95%] mx-auto hover:opacity-75' src={shiomo}/></div>
     { isHovering2? 
     <div className='flex justify-center w-[90%] h-[200px] fixed bottom-[15px] left-[5%] right-[5%] mx-auto rounded-br-3xl rounded-tl-3xl 
      bg-gradient-to-r from-[#8229d5] via-[#f9f9f9] to-[#8229d5]  '> gdjgfxfgzhdfDDsD</div>
     :  <div className='hidden justify-center w-[55%] h-[200px] mx-auto bg-blue-gray-300'> gdjgfxfgzhdfDDsD</div>

     }
       </div>
       <div  onMouseOver={handleMouseOver3}
              onMouseOut={handleMouseOut3}
         className='flex flex-col justify-around bg-transparent  h-auto w-[95%] md:w-[45%] md:h-[95%]
        rounded-br-2xl rounded-bl-lg rounded-tr-lg rounded-tl-2xl backdrop-blur-3xl border-[1px] border-[#8229d5] hover:scale-95 z-10 '>
      <div><img className='w-[95%] h-[95%] mx-auto hover:opacity-75' src={folad}/></div>
     { isHovering3 ? 
     <div className='flex justify-center w-[90%] h-[200px] fixed bottom-[15px] left-[5%] right-[5%] mx-auto rounded-br-3xl rounded-tl-3xl 
      bg-gradient-to-r from-[#8229d5] via-[#f9f9f9] to-[#8229d5]  '> gdjgfxfgzhdfDDsD</div>
     :  <div className='hidden justify-center w-[55%] h-[200px] mx-auto bg-blue-gray-300'> gdjgfxfgzhdfDDsD</div>

     }
       </div>
       <div  onMouseOver={handleMouseOver4}
              onMouseOut={handleMouseOut4}
         className='flex flex-col justify-around bg-transparent  h-auto w-[95%] md:w-[45%] md:h-[95%]
        rounded-br-2xl rounded-bl-lg rounded-tr-lg rounded-tl-2xl backdrop-blur-3xl border-[1px] border-[#8229d5] hover:scale-95 z-10 '>
      <div><img className='w-[95%] h-[95%] mx-auto hover:opacity-75' src={sohil}/></div>
     { isHovering4 ? 
     <div className='flex justify-center w-[90%] h-[200px] fixed bottom-[15px] left-[5%] right-[5%] mx-auto rounded-br-3xl rounded-tl-3xl 
      bg-gradient-to-r from-[#8229d5] via-[#f9f9f9] to-[#8229d5]  '> gdjgfxfgzhdfDDsD</div>
     :  <div className='hidden justify-center w-[55%] h-[200px] mx-auto bg-blue-gray-300'> gdjgfxfgzhdfDDsD</div>

     }
       </div>
       <div  onMouseOver={handleMouseOver5}
              onMouseOut={handleMouseOut5}
         className='flex flex-col justify-around bg-transparent  h-auto w-[95%] md:w-[45%] md:h-[95%]
        rounded-br-2xl rounded-bl-lg rounded-tr-lg rounded-tl-2xl backdrop-blur-3xl border-[1px] border-[#8229d5] hover:scale-95 z-10 '>
      <div><img className='w-[95%] h-[95%] mx-auto hover:opacity-75' src={nahal}/></div>
     { isHovering5 ? 
     <div className='flex justify-center w-[90%] h-[200px] fixed bottom-[15px] left-[5%] right-[5%] mx-auto rounded-br-3xl rounded-tl-3xl 
      bg-gradient-to-r from-[#8229d5] via-[#f9f9f9] to-[#8229d5]  '> gdjgfxfgzhdfDDsD</div>
     :  <div className='hidden justify-center w-[55%] h-[200px] mx-auto bg-blue-gray-300'> gdjgfxfgzhdfDDsD</div>

     }
       </div>
       <div  onMouseOver={handleMouseOver6}
              onMouseOut={handleMouseOut6}
         className='flex flex-col justify-around bg-transparent  h-auto w-[95%] md:w-[45%] md:h-[95%]
        rounded-br-2xl rounded-bl-lg rounded-tr-lg rounded-tl-2xl backdrop-blur-3xl border-[1px] border-[#8229d5] hover:scale-95 z-10 '>
      <div><img className='w-[95%] h-[95%] mx-auto hover:opacity-75' src={mysite}/></div>
     { isHovering6 ? 
     <div className='flex justify-center w-[90%] h-[200px] fixed bottom-[15px] left-[5%] right-[5%] mx-auto rounded-br-3xl rounded-tl-3xl 
      bg-gradient-to-r from-[#8229d5] via-[#f9f9f9] to-[#8229d5]  '> gdjgfxfgzhdfDDsD</div>
     :  <div className='hidden justify-center w-[55%] h-[200px] mx-auto bg-blue-gray-300'> gdjgfxfgzhdfDDsD</div>

     }
       </div>
       <div  onMouseOver={handleMouseOver7}
              onMouseOut={handleMouseOut7}
         className='flex flex-col justify-around bg-transparent  h-auto w-[95%] md:w-[45%] md:h-[95%]
        rounded-br-2xl rounded-bl-lg rounded-tr-lg rounded-tl-2xl backdrop-blur-3xl border-[1px] border-[#8229d5] hover:scale-95 z-10 '>
      <div><img className='w-[95%] h-[95%] mx-auto hover:opacity-75' src={note}/></div>
     { isHovering7 ? 
     <div className='flex justify-center h-auto w-[90%] md:h-[200px] fixed bottom-[15px] left-[5%] right-[5%] mx-auto rounded-br-3xl rounded-tl-3xl 
      bg-gradient-to-r from-[#8229d5] via-[#f9f9f9] to-[#8229d5]  '> gdjgfxfgzhdfDDsD</div>
     :  <div className='hidden justify-center w-[55%] h-[200px] mx-auto bg-blue-gray-300'> gdjgfxfgzhdfDDsD</div>

     }
       </div>
     
       </div>
     

    </>
  )
}
export default Portfolio