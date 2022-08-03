import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../../public/content/photo10.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Chemical Plant'
              path='/services'
            />
            <CardItem
              src='../../public/content/photo11.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Auto Manufactor'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/public/content/photo7.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Tech/Electorics'
              path='/services'
            />
            <CardItem
              src='/public/content/photo16.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Biotech'
              path='/services'
            />
            <CardItem
              src='/public/content/photo15.jpg' 
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Hardware'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;