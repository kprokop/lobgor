import React from 'react';
import '../styles/CertPage.css';
import cert1 from '../certs/komag2a.jpg';
import cert2 from '../certs/komag2b.jpg';
import cert3 from '../certs/tauron.jpg';
import cert4 from '../certs/cert_komag.gif';
import cert5 from '../certs/img209_ok.gif';
import cert6 from '../certs/img210_ok.gif';
import cert7 from '../certs/komag_sia.gif';
import cert8 from '../certs/komag2013_1.gif';
import cert9 from '../certs/komag2013_2.gif';


const CertPage = () => {
    return ( 
        <div className='certs'>
            <figure>
                <img src={cert1} alt="Certyfikat Komag1"/>
                <figcaption>Znak bezpieczeństwa B</figcaption>
            </figure>
            <figure>
                <img src={cert2} alt="Certyfikat Komag2"/>
                <figcaption>Ocena zdolności</figcaption>
            </figure>
            <figure>
                <img src={cert3} alt="Certyfikat Komag3"/>
                <figcaption>Referencja Tauron</figcaption>
            </figure>
            <figure>
                <img src={cert4} alt="Certyfikat Komag1"/>
                <figcaption>Znak bezpieczeństwa B</figcaption>
            </figure>
            <figure>
                <img src={cert5} alt="Certyfikat Komag2"/>
                <figcaption>Orzeczenie atestacyjne</figcaption>
            </figure>
            <figure>
                <img src={cert6} alt="Certyfikat Komag3"/>
                <figcaption>Orzeczenie atestacyjne</figcaption>
            </figure>
            <figure>
                <img src={cert7} alt="Certyfikat Komag4"/>
                <figcaption>Opinia techniczna</figcaption>
            </figure>
            <figure>
                <img src={cert8} alt="Certyfikat Komag5"/>
                <figcaption>Opinia techniczna</figcaption>
            </figure>
            <figure>
                <img src={cert9} alt="Certyfikat Komag6"/>
                <figcaption>Znak bezpieczeństwa B</figcaption>
            </figure>

        </div>
     );
}
 
export default CertPage;