import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Take a look at the best food available here!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://images.pexels.com/photos/949069/pexels-photo-949069.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
              text='Granola is usually considered a healthy breakfast cereal.'
              label='Granola'
              path='/order'
            />
            <CardItem
              src='https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
              text='Pasta is the perfect foundation for a healthy, nutritious and satisfying meal.'
              label='Penne'
              path='/order'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://images.pexels.com/photos/824635/pexels-photo-824635.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
              text='Hard-boiled eggs are a low-calorie, nutrient-dense food.'
              label='Boiled Egg'
              path='/order'
            />
            <CardItem
              src='https://images.pexels.com/photos/2732663/pexels-photo-2732663.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
              text='Although plain pancakes are a good source of vitamins and minerals, whole-wheat pancakes have higher levels of calcium, iron, phosphorus and riboflavin'
              label='Pancakes'
              path='/order'
            />
            <CardItem
              src='https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
              text=' Wheat pizza is good for diabetics, heart and weight loss.'
              label='Wheat'
              path='/order'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;