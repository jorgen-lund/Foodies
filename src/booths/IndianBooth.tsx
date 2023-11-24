import React from 'react';
import {SafeAreaView} from 'react-native';
import FoodBooth from './FoodBooth';
import data from '../../data/data.json';

const indianBooth = require('../../images/indianBooth.png');
const indianDishes = data.booths.indian.dishes

const IndianBooth = () => {
  return (
    <SafeAreaView>
      <FoodBooth
        boothName={'Indian'}
        boothImage={indianBooth}
        boothDescription={
          'Din port til den fantastiske verden av autentisk indisk smak og krydder! Fra det øyeblikket du kommer innom vår bod vil du føle at du har trådt inn i en smakfull oase.'
        }
        category1={'Curry'}
        category2={'Tandoori'}
        category3={'Naan'}
        dishes={indianDishes}
      />
    </SafeAreaView>
  );
};

export default IndianBooth;
