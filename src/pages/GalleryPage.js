import React from 'react';
import '../styles/GalleryPage.css';
import gallery1 from '../gallery/001.jpg';
import gallery2 from '../gallery/002.jpg';
import gallery3 from '../gallery/003.jpg';
import gallery4 from '../gallery/004.jpg';
import gallery5 from '../gallery/005.jpg';
import gallery6 from '../gallery/006.jpg';
import gallery7 from '../gallery/007.jpg';
import gallery8 from '../gallery/008.jpg';
const GalleryPage = () => {
    return ( 
        <div className="gallery">
            <figure>
                <img src={gallery1} alt=""/>
                <figcaption>Zgrzebła górnicze</figcaption>
            </figure>
            <figure>
                <img src={gallery2} alt=""/>
                <figcaption>Nakrętki kołnierzowe</figcaption>
            </figure>
            <figure>
                <img src={gallery3} alt=""/>
                <figcaption>Śruby młotkowe</figcaption>
            </figure>
            <figure>
                <img src={gallery4} alt=""/>
                <figcaption>Regeneracja nozy do kosiarek</figcaption>
            </figure>
            <figure>
                <img src={gallery5} alt=""/>
                <figcaption>Toczenie</figcaption>
            </figure>
            <figure>
                <img src={gallery6} alt=""/>
                <figcaption>Frezowanie</figcaption>
            </figure>
            <figure>
                <img src={gallery7} alt=""/>
                <figcaption>Wiercenie</figcaption>
            </figure>
            <figure>
                <img src={gallery8} alt=""/>
                <figcaption>Gięcie</figcaption>
            </figure>

        </div>
     );
}
 
export default GalleryPage;