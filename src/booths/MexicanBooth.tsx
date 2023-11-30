import React from 'react';
import {SafeAreaView} from 'react-native';
import FoodBooth from './FoodBooth';
import data from '../../data/data.json';
import {useTranslation} from 'react-i18next';

const mexicanBooth = require('../../images/mexicanBooth.png');

const MexicanBooth = () => {
  const {t} = useTranslation();
  const mexicanDishes = data.booths.mexican.dishes;
  return (
    <SafeAreaView>
      <FoodBooth
        boothName={'Mexican'}
        boothImage={mexicanBooth}
        boothDescription={t('Mexican Booth Description')}
        category1={'Taco'}
        category2={'Burrito'}
        category3={'Enchiladas'}
        dishes={mexicanDishes}
      />
    </SafeAreaView>
  );
};

export default MexicanBooth;
