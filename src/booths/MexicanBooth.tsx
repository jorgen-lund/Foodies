import React from 'react';
import {SafeAreaView} from 'react-native';
import FoodBooth from '../FoodBooth';

const mexicanBooth = require('../../images/mexicanBooth.png');

const MexicanBooth = () => {
  return (
    <SafeAreaView>
      <FoodBooth
        boothName={'Mexican'}
        boothImage={mexicanBooth}
        boothDescription={
          'I vår meksikanske booth kan du forvente en autentisk matopplevelse, hvor hver bit er en smaksopplevelse som transporterer deg rett til Mexico.'
        }
        category1={'Taco'}
        category2={'Burriots'}
        category3={'Enchiladas'}
        dishes={[]}
      />
    </SafeAreaView>
  );
};

export default MexicanBooth;
