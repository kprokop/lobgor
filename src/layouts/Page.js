import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage.js';
import OfferPage from '../pages/OfferPage.js';
import CertPage from '../pages/CertPage.js';
import GalleryPage from '../pages/GalleryPage.js';
import ContactPage from '../pages/ContactPage.js';
import ErrorPage from '../pages/ErrorPage.js';

const Page = () => {
    return ( 
        <>
        <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/offer" component={OfferPage}/>
        <Route path="/certificates" component={CertPage}/>
        <Route path="/gallery" component={GalleryPage}/>
        <Route path="/contact" component={ContactPage}/>
        <Route path="/" component={ErrorPage}/>
        </Switch>
        </>
     );
}
 
export default Page;