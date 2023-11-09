import React from 'react';
import {SafeAreaView} from 'react-native';
import FoodBoothPage from './FoodBoothPage';

const italyBooth = require('../images/italyBooth.png');

const ItalianBoothPage = () => {
  return (
    <SafeAreaView>
      <FoodBoothPage
        boothName={'Italian'}
        boothImage={italyBooth}
        boothDescription={
          'Serverer mat fra min families autentiske italienske oppskrifter gjennom generasjoner. Hver rett lages med kjærlighet.'
        }
        category2={'Pizza'}
        category3={'Pasta'}
        category4="Dessert"
        dishes={[]}
      />
    </SafeAreaView>
  );
};

export default ItalianBoothPage;
