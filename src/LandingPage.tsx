import React from 'react';
import {SafeAreaView} from 'react-native';
import DealCard from './LandingPageComponents/DealCard';
import FoodCourtCard from './LandingPageComponents/FoodCourtCard';
import Logo from './LandingPageComponents/Logo';

const italyBooth = require('../images/italyBooth.png');
const indianBooth = require('../images/indianBooth.png');
const mexicanBooth = require('../images/mexicanBooth.png');

const LandingPage = () => {
  return (
    <SafeAreaView>
      <Logo />
      <FoodCourtCard country={'Italian'} image={italyBooth} />
      <FoodCourtCard country={'Indian'} image={indianBooth} />
      <FoodCourtCard country={'Mexican'} image={mexicanBooth} />
    </SafeAreaView>
  );
};

export default LandingPage;
