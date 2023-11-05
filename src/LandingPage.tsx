import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import DealCard from './LandingPageComponents/DealCard';
import FoodCourtCard from './LandingPageComponents/FoodCourtCard';

const italyBooth = require('../images/italyBooth.png');
const indianBooth = require('../images/indianBooth.png');
const mexicanBooth = require('../images/mexicanBooth.png');

const LandingPage = () => {
  return (
    <SafeAreaView>
      <Text>Foodies</Text>
      <DealCard />
      <FoodCourtCard country={'Italian'} image={italyBooth} />
      <FoodCourtCard country={'Indian'} image={indianBooth} />
      <FoodCourtCard country={'Mexican'} image={mexicanBooth} />
    </SafeAreaView>
  );
};

export default LandingPage;
