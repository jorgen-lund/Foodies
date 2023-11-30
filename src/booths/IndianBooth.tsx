import React, { useEffect, useState } from 'react';
import {SafeAreaView} from 'react-native';
import FoodBooth from './FoodBooth';
import { useTranslation } from 'react-i18next';
import { fetchIndianDishes } from '../apiCalls/api';

const indianBooth = require('../../images/indianBooth.png');

/* Fetches and displays the indian dishes from the mockapi / json server,
   and provides the neccesary information to create the indian booth, */
const IndianBooth = () => {
  const {t} = useTranslation();
  const [indianDishes, setIndianDishes] = useState([]);


  const loadIndianDishes = async () => {
    try {
      const indianDishes = await fetchIndianDishes();
      console.log("indianDishes", indianDishes);
      setIndianDishes(indianDishes);
    } catch (error) {
      console.error('Failed to get indian dishes:', error);
    }
  };

  useEffect(() => {
    loadIndianDishes();
  }, []);

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
