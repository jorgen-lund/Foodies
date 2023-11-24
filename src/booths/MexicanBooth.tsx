import React from 'react';
import {SafeAreaView} from 'react-native';
import FoodBooth from '../FoodBooth';
import data from '../../data/data.json';

const mexicanBooth = require('../../images/mexicanBooth.png');

const MexicanBooth = () => {
  const mexicanDishes = data.booths.mexican.dishes;
  return (
    <SafeAreaView>
      <FoodBooth
        boothName={'Mexican'}
        boothImage={mexicanBooth}
        boothDescription={
          'I vår meksikanske booth kan du forvente en autentisk matopplevelse, hvor hver bit er en smaksopplevelse som transporterer deg rett til Mexico.'
        }
        category1={'Taco'}
        category2={'Burrito'}
        category3={'Enchiladas'}
        dishes={mexicanDishes}
      />
    </SafeAreaView>
  );
};

export default MexicanBooth;
