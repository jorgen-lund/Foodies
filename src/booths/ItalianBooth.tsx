import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import FoodBooth from './FoodBooth';
import {useTranslation} from 'react-i18next';
import {fetchItalianDishes} from '../apiCalls/api';

const italyBooth = require('../../images/italyBooth.png');

/* Fetches and displays the italian dishes from the mockapi / json server,
   and provides the neccesary information to create the italian booth, */
const ItalianBoothPage = () => {
  const {t} = useTranslation();
  const [italianDishes, setItalianDishes] = useState([]);

  const loadItalianDishes = async () => {
    try {
      const italianDishes = await fetchItalianDishes();
      console.log("italianDishes", italianDishes);
      setItalianDishes(italianDishes);
    } catch (error) {
      console.error('Failed to get italian dishes:', error);
    }
  };

  useEffect(() => {
    loadItalianDishes();
  }, []);

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
