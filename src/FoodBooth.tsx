import React from 'react';
import {ImageSourcePropType, ScrollView, StyleSheet, View} from 'react-native';
import BoothNavbar from './BoothPageComponent/BoothNavbar';
import BoothDescription from './BoothPageComponent/BoothDescription';
import Categories from './BoothPageComponent/Categories';
import DishCard from './BoothPageComponent/DishCard';

interface FoodBoothProps {
  boothName: string;
  boothImage: ImageSourcePropType;
  boothDescription: string;
  category2: string;
  category3: string;
  category4?: string;
  dishes: DishCardProps[];
}

interface DishCardProps {
  image: ImageSourcePropType;
  name: string;
  description: string;
  allergies: string;
  price: number;
}

const FoodBooth = (props: FoodBoothProps) => {
  const {dishes = []} = props;

  return (
    <View style={{backgroundColor: 'white'}}>
      <ScrollView>
        <BoothNavbar />
        <BoothDescription
          boothName={props.boothName}
          boothImage={props.boothImage}
          boothDescription={props.boothDescription}
        />
        <Categories
          category2={props.category2}
          category3={props.category3}
          {...(props.category4 ? {category4: props.category4} : {})}
        />
        {dishes.map((dish: DishCardProps, index: number) => (
          <DishCard
            key={index}
            image={dish.image}
            name={dish.name}
            description={dish.description}
            allergies={dish.allergies}
            price={dish.price}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default FoodBooth;
