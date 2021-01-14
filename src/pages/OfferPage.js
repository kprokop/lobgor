import React from 'react';
import Offer from '../components/Offer.js'

const offers=[
    {
    id: 1,
    title: 'Regeneracja zgrzebeł',
    text: 'Od początku naszej działalności zajmujemy się regeneracją zgrzebeł do przenośników zgrzebłowych ścianowych i podścianowych używanych w Kopalniach Węgla Kamiennego do transportu węgla.'
    },
    {
    id: 2,
    title: 'Produkcja śrub',
    text: 'Zajmujemy się również produkcją nietypowych śrub, nakrętek oraz części zamienych w krótkich seriach, zgodnie z wymaganiami zamawiającego, na podstawie jego dokumentacji technicznej, lub  norm PN, EN, ISO, DIN.'
    },
    {
    id: 3,
    title: 'Nakrętki',
    text: 'Produkujemy nakrętki kołnierzowe z wkładką poliamidową, nakrętki koronowe, śruby młotkowe o podwyższonej klasie wytrzymałości i rozmiarach od M24 do M52.'
    },
    {
    id: 4,
    title: 'Obróbka mechaniczna',
    text: 'Świadczymy usługi w zakresie obróbki skrawaniem (toczenie, frezowanie, wiercenie) oraz spawania konstrukcji stalowych.'
    },
]

const OfferPage = () => {

    // za pomocą propsów {...offer} przekazujemy ofertę
const offerList = offers.map(offer =>(
    <Offer key={offer.id} {...offer}/>
))
    return ( 
        <div className="offer">
            {offerList}
        </div>
     );
}
 
export default OfferPage;