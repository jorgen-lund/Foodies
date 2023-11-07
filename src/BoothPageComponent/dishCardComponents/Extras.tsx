import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ExtraItem from './CheckboxItem';
import DishButton from './DishButton';

interface ExtrasProps {
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const Extras = ({setIsExpanded}: ExtrasProps) => {
  const handleCloseEdit = () => {
    setIsExpanded(false);
  };

  return (
    <View style={[styles.outerContainer]}>
      <View style={[styles.innerContainer]}>
        <View style={[styles.separatorLine]}></View>
        <View style={[styles.extrasContainer]}>
          <Text style={[styles.addExtraText]}>Legg til ekstra:</Text>
          <ExtraItem itemName={'Parmegiano'} price={20} />
          <Text style={[styles.addExtraText]}>Tilpass:</Text>
          <ExtraItem itemName={'Glutenfree'} price={30} />
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
    paddingHorizontal: 10,
    flexDirection: 'row',
    flex: 1,
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
