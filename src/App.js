import React from 'react';
import { Routes ,Route} from "react-router";
import "./App.css";
import Footerss from './Footer/Footerss';
import TopNav from './Navbar/TopNav';
import Aboutus from './Aboutus/Aboutus';
import Skill from './Skills/Skill';
import Portfolio from './Site/Portfolio';
import Page from './Page';


function App() {
  return (
    <>
     <div className="content">
            <Routes>
            <Route path="/"  element={<Page/>} />
             <Route path="/aboutus"  element={<Aboutus/>} />
              <Route path="/skill"  element={<Skill/>} />
              <Route path="/portfolio"  element={<Portfolio/>} />

      </Routes>
      </div>
    </>
  );
}

export default App;

