import './App.css';
import Blog1 from './Components/Blog1';
import Home from './Components/Home';
import Men from './Components/Men';
import Women from './Components/Women';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Salon from './Components/Salon';
import Skinpg from './Components/Skinpg';
import Greypg from './Components/Greypg';
import Weightpg from './Components/Weightpg';
import Boostpg from './Components/Boostpg';
import Bootspg from './Components/Boostpg';
import Exebenefitpg from './Components/Exebenefitpg';
import Hairpg from './Components/Hairpg';
import Navbarpg from './Components/Navbarpg';
import Services from './Components/Services';
import Particulars from './Components/Particulars';
import SelectedSal from './Components/SelectedSal';

// import Gallery from './Components/Gallery';

// import Greypg from './Components/Greypg';
// import Skinpg from './Components/Skinpg';



function App() {
  return (
    <>
    {/* <Home/>
    <Men/>
    <Women/>
    <Gallery/> */}
    {/* <Salon/> */}
  {/* <Blog1/> */}
  {/* <Bloglink/> */}
  <BrowserRouter>
  <Navbarpg/>
  <Routes>
    <Route path='/' element = {<Home/>}></Route>
    <Route path='/Men' element = {<Men />}></Route>
    <Route path='/Women' element = {<Women />}></Route>
    <Route path='/Blog1' element = {<Blog1 />}></Route>
    <Route path='/Salon' element = {<Salon />}></Route>
    <Route path='/Men' element = {<Men />}></Route>
    <Route path='/city' element = {<city />}></Route>
    <Route path='/Skinpg' element = {<Skinpg />}></Route>
    <Route path='/Greypg' element = {<Greypg />}></Route>
    <Route path='/Weightpg' element = {<Weightpg />}></Route>
    <Route path='/Bootspg' element = {<Bootspg />}></Route>
    <Route path='/Exebenefitpg' element = {<Exebenefitpg />}></Route>
    <Route path='/Hairpg' element = {<Hairpg />}></Route>
    <Route path='/SelectedSal' element = {<SelectedSal />}></Route>
  </Routes>
</BrowserRouter>





    </>
  );
}

export default App;
