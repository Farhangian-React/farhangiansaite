import React from 'react';
import Footerss from './Footer/Footerss';
import TopNav from './Navbar/TopNav';
import Aboutus from './Aboutus/Aboutus';
import Skill from './Skills/Skill';
import Portfolio from './Site/Portfolio';
import Contact from './Contact/Contact';


function Page() {
  return (
    <div>
     <TopNav/>
     <Aboutus/>
     <Skill/>
     <Portfolio/>
     <Contact/>

      <Footerss/>
    </div>
  );
}

export default Page;
