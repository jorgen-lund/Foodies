import React from 'react';
import {SafeAreaView} from 'react-native';
import FoodBoothPage from './FoodBoothPage';

const mexicanBooth = require('../images/mexicanBooth.png');

const MexicanBooth = () => {
  return (
    <SafeAreaView>
      <FoodBoothPage
        boothName={'Mexican'}
        boothImage={mexicanBooth}
        boothDescription={
          'I vår meksikanske booth kan du forvente en autentisk matopplevelse, hvor hver bit er en smaksopplevelse som transporterer deg rett til Mexico.'
        }
        category2={'Taco'}
        category3={'Burriots'}
        category4={'Enchiladas'}
        dishes={[]}
      />
    </SafeAreaView>
  );
};

export default MexicanBooth;
