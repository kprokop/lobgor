import React from 'react';
import {Route, Switch} from 'react-router-dom';
import '../styles/Header.css';
import header1 from '../images/header1.jpg';
import header2 from '../images/header2.jpg';
import header3 from '../images/header3.jpg';
import header5 from '../images/header5.jpg';
const Header = () => {
    return ( 
        <>
        <Switch>
           <Route path="/" exact render={()=> (
               <img src={header1} alt="zdjecie1"/>
           )}/>
             <Route path="/offer" render={()=> (
               <img src={header2} alt="zdjecie2"/>
           )}/>
              <Route path="/certificates" render={()=> (
               <img src={header3} alt="zdjecie3"/>
           )}/>
             <Route path="/gallery" render={()=> (
               <img src={header1} alt="zdjecie1"/>
           )}/>
             <Route path="/contact" render={()=> (
               <img src={header5} alt="zdjecie5"/>
           )}/>
                 <Route render={()=> (
               <img src={header1} alt="zdjecie1"/>
           )}/>
            </Switch>
        </>
       
     );
}
 
export default Header;