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
    title: 'Produkcja śrub i sworzni specjalnych wg rysunku',
    text: 'Zajmujemy się również produkcją nietypowych śrub, sworzni, nakrętek oraz części zamienych w krótkich seriach, zgodnie z wymaganiami zamawiającego, na podstawie jego dokumentacji technicznej, lub  norm PN, EN, ISO, DIN.'
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
    {
    id: 5,
    title: 'Produkcja segmentów chodnika górniczego',
    text: 'W naszej ofercie znajdują się również różnego rodzaju segmenty chodnika górniczego stosowane jako elementy ciągów komunikacyjnych w wyrobiskach górniczych. Wszystkie nasze segmenty posiadają wszystkie niezbędne  atesty i dopuszczenia.'
    },
    {
        id: 6,
        title: 'Walcowanie gwintu w zakresie od M14 do M27 ',
        text: 'Specjalizujemy się w usługach walcowania gwintów na elementach złącznych w zakresie od M14 do M27'
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