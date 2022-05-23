import React from 'react';
import { NavLink } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Common from './Common';
import web from '../src/about.jpg'

const About =(props)=>{
    return (
      <>
      <Common name='Welcome to About Page' 
           btname='Contact Now'
           imgsrc={web}
           visit='/service'/>
       </>
    ) 
  } 
  
  export default About;