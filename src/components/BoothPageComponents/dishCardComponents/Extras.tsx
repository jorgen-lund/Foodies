import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ExtraItem from './CheckboxItem';
import DishButton from './DishButton';
import { t } from 'i18next';
import { ExtraItemProps, ExtrasProps } from '../../../interfaces/boothComponentInterfaces';


/* ______THIS COMPONENT IS NOT YET BEING USED_____ 
 * Will later be used for displaying alternatives for 
 * what can be added to a dish, or how it can be adapted.
 * An example is being able to make a dish glutenfree, and
 * adding extra cheese. This will be achieved by pressing a 
 * checkbox for what extras a user would like. 
*/
const Extras = (props: ExtrasProps) => {
  const handleCloseEdit = () => {
    props.setIsExpanded(false);
  };

//   const extrasList = props.extraItems.filter(item => item.category === "Extras");
//   const adaptList = props.extraItems.filter(item => item.category === "Adapt");
  
  return (
    <View style={[styles.outerContainer]}>
      {/* <View style={[styles.innerContainer]}>
        <View style={[styles.separatorLine]}></View>
        <View style={[styles.extrasContainer]}>
          <Text style={[styles.addExtraText]}>{t("Add")}:</Text>
          {extrasList.map((item: ExtraItemProps, index: number) => (
            <ExtraItem key={index} itemName={item.name} price={item.price} />
          ))}

          <Text style={[styles.addExtraText]}>{t("Adapt")}:</Text>
          {adaptList.map((item: ExtraItemProps, index: number) => (
            <ExtraItem key={index}itemName={item.name} price={item.price} />
          ))}
        </View>
        <View style={[styles.outerButtonContainer]}>
          <View style={[styles.innerButtonContainer]}>
            <DishButton
              MaterialIconName={'close-fullscreen'}
              onPress={handleCloseEdit}
            />
            <DishButton MaterialIconName={'add-shopping-cart'} onPress={function (): void {
                          throw new Error('Function not implemented.');
                      } } />
          </View>
        </View>
      </View> */}
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
