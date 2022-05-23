import React from 'react';
import { NavLink } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Common from './Common';

import webs from '../src/tech.jpg'

const Home =(props)=>{
    return (
        <>
        <Common name='Grow Your Business With @'
                btname='Get Started'
                imgsrc={webs}
                visit='/about'/>
         </>
      ) 
  } 
  
  export default Home;