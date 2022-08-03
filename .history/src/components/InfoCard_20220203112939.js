import React from 'react';
import './Cards.css';
import InfoCardItem from './InfoCardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            <InfoCardItem
              src='../hand.svg.png'
              text='At Pan Africa Chemicals, we aim for global benchmarks of excellence in manufacturing and trading in various range of products in domestic and international markets, caring for individual customer need and satisfaction.'
              label='About Us'
              path='/FactoryEast'
            />

            <InfoCardItem
              src='/public/content/photo11.jpg'
              text='    {"name":"Pan Africa Chemicals Ltd  (East Africa)", "Country":"Webuye, Kenya, East Africa", "Products":"Aluminium Sulphate, Ammonium Sulphate, Calcium Hydroxide, Caustic Soda, Copper Sulphate, Ferrous Sulphate, ", "Address":"HQQM+7CV, Webuye, Kenya", "Email":"info@africanindustries.com", "Website":"http://panchemicalsafrica.com", "url": "/public/content/photo14.jpg"},
'
              label='Our Products'
              path='/FactoryEast'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;