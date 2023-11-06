import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import DealCard from './LandingPageComponents/DealCard';
import FoodCourtCard from './LandingPageComponents/FoodCourtCard';
import Logo from './LandingPageComponents/Logo';

const italyBooth = require('../images/italyBooth.png');
const indianBooth = require('../images/indianBooth.png');
const mexicanBooth = require('../images/mexicanBooth.png');

const pastaCarbonara = require('../images/pastaCarbonara.png');
const tikkaMasala = require('../images/tikkaMasala.jpeg');
const enchiladas = require('../images/enchiladas.jpeg');

const LandingPage = () => {
  return (
    <SafeAreaView>
      <Logo />
      <ScrollView horizontal={true}>
        <DealCard
          image={pastaCarbonara}
          country={'Italian'}
          dishName={'Pasta Carbonara'}
        />
        <DealCard
          image={tikkaMasala}
          country={'Indian'}
          dishName={'Tikka Masala'}
        />
        <DealCard
          image={enchiladas}
          country={'Mexican'}
          dishName={'Enchiladas'}
        />
      </ScrollView>
      <FoodCourtCard country={'Italian'} image={italyBooth} />
      <FoodCourtCard country={'Indian'} image={indianBooth} />
      <FoodCourtCard country={'Mexican'} image={mexicanBooth} />
    </SafeAreaView>
  );
};

export default LandingPage;
