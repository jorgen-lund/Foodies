import React from 'react';
import {SafeAreaView} from 'react-native';
import FoodBooth from './FoodBooth';
import data from '../../data/data.json';
import { useTranslation } from 'react-i18next';

const italyBooth = require('../../images/italyBooth.png');

const ItalianBoothPage = () => {
  const italianDishes = data.booths.italian.dishes;
  const {t} = useTranslation();

  return (
    <SafeAreaView>
      <FoodBooth
        boothName={'Italian'}
        boothImage={italyBooth}
        boothDescription={t('Italian Booth Description')}
        category1={'Pizza'}
        category2={'Pasta'}
        category3={'Dessert'}
        dishes={italianDishes}
      />
    </SafeAreaView>
  );
};

export default ItalianBoothPage;
