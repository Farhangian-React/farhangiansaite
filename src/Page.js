import React from 'react';
import Footerss from './Footer/Footerss';
import TopNav from './Navbar/TopNav';
import Aboutus from './Aboutus/Aboutus';
import Skill from './Skills/Skill';
import Portfolio from './Site/Portfolio';


function Page() {
  return (
    <div>
     <TopNav/>
     <Aboutus/>
     <Skill/>
     <Portfolio/>

      <Footerss/>
    </div>
  );
}

export default Page;
