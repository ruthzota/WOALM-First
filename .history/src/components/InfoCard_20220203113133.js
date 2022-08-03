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
              text='Aluminium Sulphate Aluminium Sulphate, Ammonium Sulphate, Calcium Hydroxide, Caustic Soda, Copper Sulphate, Ferrous Sulphate, Sulphuric Acid, Sodium Chloride (Salt), Sodium Carbonate (Soda Ash), Magnesium Oxide'
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