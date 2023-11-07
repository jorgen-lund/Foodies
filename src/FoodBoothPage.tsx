import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import BoothNavbar from './BoothPageComponent/BoothNavbar';
import BoothDescription from './BoothPageComponent/BoothDescription';
import Categories from './BoothPageComponent/Categories';
import DishCard from './BoothPageComponent/DishCard';

const pizzaDiavola = require('../images/pizzaDiavola.jpeg');

const FoodBoothPage = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <ScrollView>
        <BoothNavbar />
        <BoothDescription />
        <Categories />
        <DishCard
          image={pizzaDiavola}
          name={'Diavola'}
          description={
            'Den kjente spicy italienske pizzaen med salami, nduja og løk'
          }
          allergies={'Allergener: Gluten & Laktose'}
          price={160}
        />
        <DishCard
          image={pizzaDiavola}
          name={'Diavola'}
          description={
            'Den kjente spicy italienske pizzaen med salami, nduja og løk'
          }
          allergies={'Allergener: Gluten & Laktose'}
          price={160}
        />
        <DishCard
          image={pizzaDiavola}
          name={'Diavola'}
          description={
            'Den kjente spicy italienske pizzaen med salami, nduja og løk'
          }
          allergies={'Allergener: Gluten & Laktose'}
          price={160}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default FoodBoothPage;
