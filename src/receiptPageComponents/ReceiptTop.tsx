import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';

interface ReceiptTopProps {
  id: number;
  waitingTime: number;
  isActive: boolean;
}

const ReceiptTop = (props: ReceiptTopProps) => {
  let textColor = 'black';

  if (props.isActive) {
    textColor = 'white';
  }

  return (
    <View style={[styles.receiptTopContainer]}>
      <Text style={[styles.receiptText, {fontSize: 18, color: textColor}]}>
        Order ID: #{props.id}
      </Text>
      {props.isActive ? (
        <View style={[styles.rightHalfContainer]}>
          <View>
            <Text
              style={[styles.receiptText, {fontSize: 14, color: textColor}]}>
              Food ready in:
            </Text>
            <View style={[styles.durationContainer]}>
              <View style={[styles.numberContainer]}>
                <Text
                  style={[
                    styles.receiptText,
                    {fontSize: 19, color: textColor},
                  ]}>
                  {props.waitingTime}
                </Text>
              </View>
              <Text
                style={[
                  styles.receiptText,
                  {fontSize: 16, paddingLeft: 3, color: textColor},
                ]}>
                min
              </Text>
            </View>
          </View>
          <View>
            <MaterialIcons name={'timer-sand'} color={'white'} size={42} />
          </View>
        </View>
      ) : (
        <View style={[styles.receiptIconContainer]}>
          <IonIcons name={'receipt-outline'} color={'black'} size={30} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  receiptText: {
    fontFamily: 'Suwannaphum-Bold',
  },
  rightHalfContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  receiptIconContainer: {
    width: '20%',
    height: 40,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  receiptTopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingLeft: 15,
    paddingRight: 10,
  },
  numberContainer: {
    backgroundColor: '#006385',
    height: 30,
    width: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  durationContainer: {
    flexDirection: 'row',
  },
});
export default ReceiptTop;
