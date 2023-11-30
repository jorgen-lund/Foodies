import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTranslation} from 'react-i18next';
import { ReceiptTopProps } from '../../interfaces/receiptInterfaces';

/* Top part of the receipt. Shows the ID of the order, and displays
   whether the order was for takeaway or not. Styling changes based
   on if the receipt is active or not */
const ReceiptTop = (props: ReceiptTopProps) => {
  const {t} = useTranslation();

  let textColor = 'black';

  if (props.isActive) {
    textColor = 'white';
  }

  return (
    <View>
      <View style={[styles.receiptTopContainer]}>
        <Text style={[styles.receiptText, {fontSize: 18, color: textColor}]}>
          {t('Order ID')}: #{props.id}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={[styles.receiptText, {fontSize: 17, color: textColor}]}>
            Takeaway
          </Text>
          {props.isTakeaway ? (
            <MaterialIcons
              style={{marginLeft: 5}}
              name={'checkbox-marked-circle-outline'}
              color={textColor}
              size={25}
            />
          ) : (
            <MaterialIcons
              style={{marginLeft: 5}}
              name={'close'}
              color={textColor}
              size={25}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  receiptText: {
    fontFamily: 'Suwannaphum-Bold',
  },
  receiptTopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 10,
  },
});
export default ReceiptTop;
