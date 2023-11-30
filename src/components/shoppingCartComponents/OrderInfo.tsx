import CheckBox from '@react-native-community/checkbox';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {useTranslation} from 'react-i18next';
import { OrderInfoProps } from '../../interfaces/shoppingCartInterfaces';

/** Contains the takeaway checkbox, display of total price of the shoppingCart
 * and the pay button. 
*/
const OrderInfo = (props: OrderInfoProps) => {
  const {t} = useTranslation();
  const [isChecked, setIsChecked] = useState(false);

  /* This function runs when the checkbox for takeaway is 
     pressed. Sets its isChecked value to true */
  const handleCheckboxChange = (newValue: boolean) => {
    setIsChecked(newValue);
  };

  /* useEffect for catching if the checkbox has been checked, and 
     tells the parent component (shoppingCartPage) that the 
     isTakeaway = true. Runs every time the checkbox is clicked */
  useEffect(() => {
    props.setIsTakeaway(isChecked);
  }, [isChecked]);

  return (
    <View style={[styles.outerContainer]}>
      <View style={[styles.takeAwayContainer]}>
        <CheckBox
          boxType="square"
          onAnimationType="one-stroke"
          animationDuration={0.1}
          onCheckColor={'black'}
          onTintColor="black"
          tintColor={'black'}
          lineWidth={2}
          value={isChecked}
          onValueChange={handleCheckboxChange}
        />
        <Text style={[styles.takeAwayText]}>Takeaway</Text>
      </View>
      <View style={[styles.totalPriceContainer]}>
        <Text style={[styles.totalPriceText]}>
          {t('Total price')}: {props.totalPrice} kr
        </Text>
      </View>
      <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.buttonContainer]}>
          <FeatherIcons name={'credit-card'} size={28} color={'white'} />
          <Text style={[styles.buttonText]}>{t('Pay')}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    marginVertical: 20,
  },
  takeAwayContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  takeAwayText: {
    fontSize: 22,
    paddingLeft: 15,
  },
  totalPriceContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderBlockColor: '#32BDED',
  },
  totalPriceText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 5,
  },
  buttonContainer: {
    backgroundColor: '#ED6232',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 10,
    height: 70,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  buttonText: {
    fontFamily: 'Suwannaphum-Black',
    color: 'white',
    fontSize: 20,
    paddingLeft: 10,
  },
});

export default OrderInfo;
