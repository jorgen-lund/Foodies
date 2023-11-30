import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import CategoryButton from './CategoryButton';
import { useTranslation } from 'react-i18next';
import { CategoriesProps } from '../../interfaces/boothComponentInterfaces';

/* Displays the dishes that fit under the chosen category */
const Categories = (props: CategoriesProps) => {
  const {t} = useTranslation();
  const [activeCategory, setActiveCategory] = useState('All');

  /* Sets the state of all categories to be false. Is used at
     the start of chosenCategory function to ensure it works
     properly, and only one category's state is active at a time */
  const resetCategoryStates = () => {
    props.setShowCategory1(false);
    props.setShowCategory2(false);
    props.setShowAll(false);
    if (props.setShowCategory3) {
      props.setShowCategory3(false);
    }
  };

  /* Takes in the name of a category as parameter, and displays the
     category that fits the name, by updating its state to true */
  const chosenCategory = (name: string) => {
    resetCategoryStates();
    setActiveCategory(name);
    if (name === props.category1) {
      props.setShowCategory1(true);
    } else if (name === props.category2) {
      props.setShowCategory2(true);
    } else if (props.setShowCategory3 && name === props.category3) {
      props.setShowCategory3(true);
    } else {
      props.setShowAll(true);
    }
  };

  return (
    <View style={[styles.categoryContainer]}>
      <CategoryButton
        onPress={() => chosenCategory('All')}
        isActive={activeCategory === 'All'}
        categoryName={t('All')}
      />
      <CategoryButton
        onPress={() => chosenCategory(props.category1)}
        isActive={activeCategory === props.category1}
        categoryName={props.category1}
      />
      <CategoryButton
        onPress={() => chosenCategory(props.category2)}
        isActive={activeCategory === props.category2}
        categoryName={props.category2}
      />
      {props.category3 && (
        <CategoryButton
          onPress={() => chosenCategory(props.category3!)}
          isActive={activeCategory === props.category3}
          categoryName={props.category3}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#32BDED',
  },
});

export default Categories;
