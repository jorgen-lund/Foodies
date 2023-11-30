import React, { useEffect, useState } from 'react';
import {SafeAreaView} from 'react-native';
import FoodBooth from './FoodBooth';
import {useTranslation} from 'react-i18next';
import { fetchMexicanDishes } from '../apiCalls/api';

const mexicanBooth = require('../../images/mexicanBooth.png');

/* Fetches and displays the mexican dishes from the mockapi / json server,
   and provides the neccesary information to create the mexican booth, */
const MexicanBooth = () => {
  const {t} = useTranslation();
  const [mexicanDishes, setMexicanDishes] = useState([]);


  const loadMexicanDishes = async () => {
    try {
      const mexicanDishes = await fetchMexicanDishes();
      console.log("mexicanDishes", mexicanDishes);
      setMexicanDishes(mexicanDishes);
    } catch (error) {
      console.error('Failed to get mexican dishes:', error);
    }
  };

  useEffect(() => {
    loadMexicanDishes();
  }, []);
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
