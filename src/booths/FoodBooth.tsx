import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import BoothNavbar from '../components/BoothPageComponents/BoothNavbar';
import BoothDescription from '../components/BoothPageComponents/BoothDescription';
import Categories from '../components/BoothPageComponents/Categories';
import DishCard from '../components/BoothPageComponents/DishCard';
import {DishCardProps, FoodBoothProps} from '../interfaces/interfaces';
import { useTranslation } from 'react-i18next';

/* The component that creates all of the booths. Handles the changing 
   of categories and which dishes are displayed */
const FoodBooth = (props: FoodBoothProps) => {
  const {t} = useTranslation();
  const {dishes = [], category1, category2, category3} = props;
  const [showAll, setShowAll] = useState(true);
  const [showCategory1, setShowCategory1] = useState(false);
  const [showCategory2, setShowCategory2] = useState(false);
  const [showCategory3, setShowCategory3] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<string | undefined>(
    '',
  );

  const filteredDishes = currentCategory
    ? dishes.filter(dish => dish.category === currentCategory)
    : dishes;

  useEffect(() => {
    if (showCategory1) setCurrentCategory(category1);
    else if (showCategory2) setCurrentCategory(category2);
    else if (showCategory3) setCurrentCategory(category3);
    else if (showAll) setCurrentCategory(undefined);
  }, [showCategory1, showCategory2, showCategory3, showAll]);

  return (
    <View style={{backgroundColor: 'white'}}>
      <ScrollView>
        <BoothNavbar activeBoothName={t(props.boothName)} />
        <BoothDescription
          boothName={t(props.boothName)}
          boothImage={props.boothImage}
          boothDescription={props.boothDescription}
        />
        <Categories
          showAll={true}
          showCategory1={false}
          showCategory2={false}
          showCategory3={false}
          setShowAll={setShowAll}
          setShowCategory1={setShowCategory1}
          setShowCategory2={setShowCategory2}
          category1={props.category1}
          category2={props.category2}
          {...(props.category3
            ? {setShowCategory3, category3: props.category3}
            : {})}
        />
        {filteredDishes.map((dish: DishCardProps) => (
          <DishCard
            key={dish.id}
            imageUrl={dish.imageUrl}
            name={dish.name}
            description={dish.description}
            allergies={dish.allergies}
            price={dish.price}
            id={dish.id}
            category={dish.category}
            extraItems={dish.extraItems}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FoodBooth;
