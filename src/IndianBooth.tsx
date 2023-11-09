import React from 'react';
import {SafeAreaView} from 'react-native';
import FoodBoothPage from './FoodBoothPage';

const indianBooth = require('../images/indianBooth.png');

const IndianBooth = () => {
  return (
    <SafeAreaView>
      <FoodBoothPage
        boothName={'Indian'}
        boothImage={indianBooth}
        boothDescription={
          'Din port til den fantastiske verden av autentisk indisk smak og krydder! Fra det øyeblikket du kommer innom vår bod vil du føle at du har trådt inn i en smakfull oase.'
        }
        category2={'Forretter'}
        category3={'Hovedretter'}
        dishes={[]}
      />
    </SafeAreaView>
  );
};

export default IndianBooth;
