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
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Chemical Plant'
              path='/services'
            />
            
            <InfoCardItem
              src='/public/content/photo11.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Auto Manufactor'
              path='/services'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;