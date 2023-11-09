import React from 'react';
import {SafeAreaView} from 'react-native';
import FoodBooth from '../FoodBooth';
import data from "../../data/data.json"

const italyBooth = require('../../images/italyBooth.png');

const ItalianBoothPage = () => {
  const italianDishes = data.booths.italian.dishes
  return (
    <SafeAreaView>
      <FoodBooth
        boothName={'Italian'}
        boothImage={italyBooth}
        boothDescription={
          'Serverer mat fra min families autentiske italienske oppskrifter gjennom generasjoner. Hver rett lages med kjærlighet.'
        }
        category2={'Pizza'}
        category3={'Pasta'}
        category4="Dessert"
        dishes={italianDishes}
      />
    </SafeAreaView>
  );
};

export default ItalianBoothPage;
