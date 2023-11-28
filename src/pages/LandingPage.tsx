import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import DealCard from '../components/LandingPageComponents/DealCard';
import FoodCourtCard from '../components/LandingPageComponents/FoodCourtCard';
import Logo from '../components/LandingPageComponents/Logo';
import SectionText from '../components/LandingPageComponents/SectionText';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationProp} from '../navigationFiles/navigationTypes';

const italyBooth = require('../../images/italyBooth.png');
const indianBooth = require('../../images/indianBooth.png');
const mexicanBooth = require('../../images/mexicanBooth.png');
const pastaCarbonara = require('../../images/pastaCarbonara.png');
const tikkaMasala = require('../../images/tikkaMasala.jpeg');
const enchiladas = require('../../images/enchiladas.jpeg');

const LandingPage = () => {
  const navigation = useNavigation<RootNavigationProp>();

  const goToItalianBooth = () =>
    navigation.navigate('BoothNavigator', {screen: 'ItalianBooth'});
  const goToIndianBooth = () =>
    navigation.navigate('BoothNavigator', {screen: 'IndianBooth'});
  const goToMexicanBooth = () =>
    navigation.navigate('BoothNavigator', {screen: 'MexicanBooth'});

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView>
        <Logo />
        <SectionText text={'DEALS'} backgroundColor={'#ED6232'} />
        <View>
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
        </View>
        <SectionText text={'FOOD BOOTHS'} backgroundColor={'#32BDED'} />
        <FoodCourtCard
          country={'Italian'}
          image={italyBooth}
          onPress={goToItalianBooth}
        />
        <FoodCourtCard
          country={'Indian'}
          image={indianBooth}
          onPress={goToIndianBooth}
        />
        <FoodCourtCard
          country={'Mexican'}
          image={mexicanBooth}
          onPress={goToMexicanBooth}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LandingPage;
