import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {CategoriesProps} from '../interfaces/interfaces';
import CategoryButton from './CategoryButton';

const Categories = (props: CategoriesProps) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const resetCategoryStates = () => {
    props.setShowCategory1(false);
    props.setShowCategory2(false);
    props.setShowAll(false);
    if (props.setShowCategory3) {
      props.setShowCategory3(false);
    }
  };

  const choosenCategory = (name: string) => {
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
        onPress={() => choosenCategory('All')}
        isActive={activeCategory === 'All'}
        categoryName={'All'}
      />
      <CategoryButton
        onPress={() => choosenCategory(props.category1)}
        isActive={activeCategory === props.category1}
        categoryName={props.category1}
      />
      <CategoryButton
        onPress={() => choosenCategory(props.category2)}
        isActive={activeCategory === props.category2}
        categoryName={props.category2}
      />
      {props.category3 && (
        <CategoryButton
          onPress={() => choosenCategory(props.category3!)}
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
  }
});

export default Categories;
