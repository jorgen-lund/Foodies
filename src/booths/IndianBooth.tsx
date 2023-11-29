import React from 'react';
import {SafeAreaView} from 'react-native';
import FoodBooth from './FoodBooth';
import data from '../../data/data.json';
import { useTranslation } from 'react-i18next';

const indianBooth = require('../../images/indianBooth.png');
const indianDishes = data.booths.indian.dishes;

const IndianBooth = () => {
  const {t} = useTranslation();

  return (
    <SafeAreaView>
      <FoodBooth
        boothName={'Indian'}
        boothImage={indianBooth}
        boothDescription={t('Indian Booth Description')}
        category1={'Curry'}
        category2={'Tandoori'}
        category3={'Naan'}
        dishes={indianDishes}
      />
    </SafeAreaView>
  );
};

export default IndianBooth;
