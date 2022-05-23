import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle";

import './App.css';
import Menu from './Menu';
import { Redirect, Route,Switch} from 'react-router-dom';
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';

const App =()=>{
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact='true' path='/' component ={Home} />
        <Route exact='true' path='/Service' component ={Service} />
        <Route exact='true' path='/About' component ={About} />
        <Route exact='true' path='/Contact' component ={Contact} />
        <Redirect to ='/' />
      </Switch>
      <Footer />
   </>
  )
} 

export default App;
