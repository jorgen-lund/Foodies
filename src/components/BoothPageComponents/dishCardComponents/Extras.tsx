import React, { useEffect } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ExtraItem from './CheckboxItem';
import DishButton from './DishButton';
import {ExtraItemProps} from '../../../interfaces/interfaces';

interface ExtrasProps {
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  extraItems: ExtraItemProps[];
}

const Extras = (props: ExtrasProps) => {
  const handleCloseEdit = () => {
    props.setIsExpanded(false);
  };

  const extrasList = props.extraItems.filter(item => item.category === "Extras");
  const adaptList = props.extraItems.filter(item => item.category === "Adapt");
  
  return (
    <View style={[styles.outerContainer]}>
      <View style={[styles.innerContainer]}>
        <View style={[styles.separatorLine]}></View>
        <View style={[styles.extrasContainer]}>
          <Text style={[styles.addExtraText]}>Legg til ekstra:</Text>
          {extrasList.map((item: ExtraItemProps, index: number) => (
            <ExtraItem key={index} itemName={item.name} price={item.price} />
          ))}

          <Text style={[styles.addExtraText]}>Tilpass:</Text>
          {adaptList.map((item: ExtraItemProps, index: number) => (
            <ExtraItem key={index}itemName={item.name} price={item.price} />
          ))}
        </View>
        <View style={[styles.outerButtonContainer]}>
          <View style={[styles.innerButtonContainer]}>
            <DishButton
              MaterialIconName={'close-fullscreen'}
              handleCloseEdit={handleCloseEdit}
            />
            <DishButton MaterialIconName={'add-shopping-cart'} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    marginHorizontal: 20,
    backgroundColor: '#F1F0F0',
    paddingBottom: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  innerContainer: {
    marginHorizontal: 10,
    flexDirection: 'row',
    flex: 1,
    borderTopWidth: 1,
    borderColor: '#32BDED',
  },
  separatorLine: {
    borderTopWidth: 2,
    borderTopColor: '#32BDED',
  },
  addExtraText: {
    fontSize: 16,
    paddingVertical: 10,
  },
  outerButtonContainer: {
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  innerButtonContainer: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-around',
  },
  extrasContainer: {
    flex: 3,
  },
});
export default Extras;
